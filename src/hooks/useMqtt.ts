/* eslint-disable react-hooks/exhaustive-deps */
import mqtt from "mqtt";
import { useEffect, useState } from "react";

const mqttBrokerURL: string = import.meta.env.VITE_MQTT_BROKER_URL;

const useMqtt = (handlers: {
  [topic: string]: (message: Buffer | string) => void;
}) => {
  const [client, setClient] = useState<mqtt.MqttClient | null>(null); // MQTT 클라이언트 상태
  // MQTT 클라이언트 초기화
  useEffect(() => {
    const mqttClient = mqtt.connect(mqttBrokerURL);
    //토픽들 구독
    mqttClient.on("connect", () => {
      for (const topic of Object.keys(handlers)) {
        mqttClient.subscribe(topic, (err) => {
          if (err) {
            // console.error("Subscription failed", err);
          }
        });
      }
    });
    // 토픽별 핸들러 연결
    mqttClient.on("message", function (topic, message) {
      handlers[topic](message);
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

  // 메시지 송신
  const sendMessage = (topic: string, message: string | Buffer) => {
    if (client) {
      client.publish(topic, message, { qos: 1 }, (err) => {
        if (err) {
          console.error("Message sending failed", err);
        }
      });
    }
  };
  return { sendMessage };
};

export default useMqtt;
