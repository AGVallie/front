import { useEffect, useState } from "react";
import mqtt from "mqtt";
import { IoAddSharp, IoEllipsisVertical, IoHome } from "react-icons/io5";
import { IoQrCodeOutline } from "react-icons/io5";
import { VStack, HStack, Spacer } from "../../components/common/Stack";
import Tile from "../../components/common/Tile";

// MQTT 브로커 연결 URL
const MQTT_BROKER_URL = "mqtt://70.12.227.10:9001";
const MQTT_PUB_TOPIC = "test/command";
const MQTT_SUB_TOPIC = "test/data";
const MQTT_CAM_TOPIC = "test/cam";
export function MqttDemo() {
  const [client, setClient] = useState<mqtt.MqttClient | null>(null); // MQTT 클라이언트 상태
  const [imageURL, setImageURL] = useState<string>("");
  // const [receivedMessage, setReceivedMessage] = useState<string>(""); // 받은 메시지 상태

  // MQTT 클라이언트 초기화
  useEffect(() => {
    const mqttClient = mqtt.connect(MQTT_BROKER_URL);

    mqttClient.on("connect", () => {
      console.log("Connected to MQTT broker");

      // 연결이 성공하면 'MQTT_SUB_TOPIC'을 구독
      mqttClient.subscribe(MQTT_SUB_TOPIC, (err) => {
        if (err) {
          console.error("Subscription failed", err);
        } else {
          console.log(`Subscribed to topic: ${MQTT_SUB_TOPIC}`);
        }
      });
      // 연결이 성공하면 'MQTT_CAM_TOPIC'을 구독
      mqttClient.subscribe(MQTT_CAM_TOPIC, (err) => {
        if (err) {
          console.error("Subscription failed", err);
        } else {
          console.log(`Subscribed to topic: ${MQTT_CAM_TOPIC}`);
        }
      });
    });

    mqttClient.on("error", (error) => {
      console.error("MQTT connection errooiuouoiuor:", error);
    });

    // 메시지가 수신되면 받은 메시지를 상태에 저장
    mqttClient.on("message", function (topic, message) {
      console.log("Received message:", topic, message.toString());
      // 받은 메시지 상태 업데이트
      // setReceivedMessage(message.toString());
      if (topic == MQTT_CAM_TOPIC) setImageURL(message.toString());
    });

    // 클라이언트 상태 설정
    setClient(mqttClient);

    // 컴포넌트 언마운트 시 클라이언트 종료
    return () => {
      if (mqttClient) {
        mqttClient.end();
      }
    };
  }, []);

  // 버튼 클릭 시 발행할 메시지
  const sendCommand = (direction: string) => {
    if (client) {
      client.publish(MQTT_PUB_TOPIC, direction, { qos: 1 }, (err) => {
        if (err) {
          console.error("Message sending failed", err);
        } else {
          console.log(`Sent: ${direction}`);
        }
      });
    }
  };

  return (
    <HStack className="w-full h-full">
      <VStack className="w-full gap-3">
        {/* 이미지 출력 부분 */}
        <Tile className="font-bold !bg-gray-100 !p-0 overflow-hidden flex items-center justify-center h-72">
          <img src={imageURL} className="w-96 h-96" />
        </Tile>
        {/* 메시지 출력 부분 */}
        {/* <Tile className="font-bold !bg-gray-100 p-4">
          <div>
            <strong>Received Message:</strong>
            <p>{receivedMessage}</p>
          </div>
        </Tile> */}

        <Tile className="font-bold !bg-gray-100 w-full items-center">
          <VStack className="w-48 h-48 rounded-full bg-white shadow items-center p-2 justify-between font-extrabold">
            <button
              className="shadow w-12 h-12 rounded-full"
              onClick={() => sendCommand("up")}
            >
              ↑
            </button>
            <HStack className="w-full justify-between">
              <button
                className="shadow w-12 h-12 rounded-full"
                onClick={() => sendCommand("left")}
              >
                ←
              </button>
              <button
                className="shadow w-12 h-12 rounded-full"
                onClick={() => sendCommand("right")}
              >
                →
              </button>
            </HStack>
            <button
              className="shadow w-12 h-12 rounded-full"
              onClick={() => sendCommand("down")}
            >
              ↓
            </button>
          </VStack>
          <HStack className="self-end">
            <button
              className="bg-white rounded-xl shadow p-1"
              onClick={() => sendCommand("manual")}
            >
              수동
            </button>
            <button
              className="bg-white rounded-xl shadow p-1"
              onClick={() => sendCommand("auto")}
            >
              자동
            </button>
            <button
              className="bg-white rounded-xl shadow p-1"
              onClick={() => sendCommand("stop")}
            >
              정지
            </button>
          </HStack>
        </Tile>
      </VStack>
    </HStack>
  );
}

export function MqttDemoNavigationBar() {
  return (
    <HStack className="items-center py-2 pl-4 pr-6 w-full border-none gap-4">
      <IoQrCodeOutline />
      <span className=""> 집(1)</span>
      <Spacer />
      <IoHome />
      <IoAddSharp size="1.5rem" />
      <IoEllipsisVertical />
    </HStack>
  );
}
