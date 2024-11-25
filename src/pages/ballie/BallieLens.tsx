import { useState } from "react";
import { IoAddSharp, IoEllipsisVertical, IoHome } from "react-icons/io5";
import { IoQrCodeOutline } from "react-icons/io5";
import { VStack, HStack, Spacer } from "../../components/common/Stack";
import Tile from "../../components/common/Tile";
import useMqtt from "../../hooks/useMqtt";
import BallieController from "../../components/ballieLens/BallieController";
import useBallieMetaData from "../../hooks/useBallieMetaData";

const MQTT_CMD_TOPIC = "test/command";
const MQTT_CAM_TOPIC = "test/cam";

export function BallieLens() {
  const [imageURL, setImageURL] = useState<string>("");
  const { curState } = useBallieMetaData();
  const { sendMessage } = useMqtt({
    [MQTT_CAM_TOPIC]: (message) => setImageURL(message.toString()),
  });
  const sendCommand = (command: string) => sendMessage(MQTT_CMD_TOPIC, command);

  return (
    <VStack className="w-full h-full">
      <HStack className="absolute p-2 items-center">
        <span className="text-sm font-bold text-yellow-500"> {curState}</span>
      </HStack>
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
