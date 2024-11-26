import { useState } from "react";
import { VStack, HStack, Spacer } from "../../components/common/Stack";
import Tile from "../../components/common/Tile";
import useMqtt from "../../hooks/useMqtt";
import BallieController from "../../components/ballieLens/BallieController";
import useBallieMetaData from "../../hooks/useBallieMetaData";

const MQTT_CMD_TOPIC = "test/command";
const MQTT_CAM_TOPIC = "test/cam";

export function BallieLens() {
  const [imageURL, setImageURL] = useState<string>("");
  const { sendMessage } = useMqtt({
    [MQTT_CAM_TOPIC]: (message) => setImageURL(message.toString()),
  });
  const sendCommand = (command: string) => sendMessage(MQTT_CMD_TOPIC, command);

  return (
    <VStack className="w-full h-full">
      <VStack className="w-full gap-3">
        {/* 스트리밍 부분 */}
        <Tile className="font-bold !bg-gray-100 !p-0 overflow-hidden flex items-center justify-center h-72">
          <img src={imageURL} className="w-96 h-96" />
        </Tile>
        {/* 조작 부분 */}
        <BallieController sendCommand={sendCommand} />
      </VStack>
    </VStack>
  );
}

export function BallieLensNavigationBar() {
  const { curArea, curState } = useBallieMetaData();
  return (
    <HStack className="items-center py-2 pl-4 pr-6 w-full border-none gap-4">
      <span className="text-2xl font-bold">볼리 렌즈</span>
      <Spacer />
      <HStack className="text-xs font-bold gap-4">
        <HStack className="items-center">
          <div className="w-2 h-2 bg-yellow-500 rounded-full" />
          <span className="text-yellow-500"> {curState}</span>
          <span className="text-gray-800"> {curArea}</span>
        </HStack>
      </HStack>
    </HStack>
  );
}
