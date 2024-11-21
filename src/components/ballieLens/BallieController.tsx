import { VStack, HStack } from "../common/Stack";
import Tile from "../common/Tile";

interface BallieControllerProps {
  sendCommand: (command: string) => void;
}
function BallieController({ sendCommand }: BallieControllerProps) {
  return (
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
  );
}
export default BallieController;
