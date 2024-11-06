import IconButton from "../../components/common/IconButton";
import { VStack, HStack, Spacer } from "../../components/common/Stack";
import Tile from "../../components/common/Tile";

function Devices() {
  return (
    <VStack className="gap-8">
      <HStack className="flex-wrap justify-between gap-y-2">
        <Tile className="w-[49%] !p-2">
          <VStack>
            <HStack className="w-full">
              <img src="/images/devices/washer.webp" className="w-10" />
              <Spacer />
              <IconButton iconType={"power"} />
            </HStack>
            <VStack className="pl-2">
              <span className="w-full text-xs font-bold">세탁실</span>
              <span className="w-full text-xs font-bold">세탁기</span>
              <span className="w-full text-xs font-bold text-gray-500">
                1:30 남음
              </span>
            </VStack>
          </VStack>
        </Tile>
        <Tile className="w-[49%] !p-2">
          <VStack>
            <HStack className="w-full">
              <img src="/images/devices/tv.webp" className="w-10" />
              <Spacer />
              <IconButton iconType={"power"} />
            </HStack>
            <VStack className="pl-2">
              <span className="w-full text-xs font-bold">거실</span>
              <span className="w-full text-xs font-bold">TV</span>
              <span className="w-full text-xs font-bold text-gray-500">
                켜짐
              </span>
            </VStack>
          </VStack>
        </Tile>
        <Tile className="w-[49%] !p-2 bg-white/70">
          <VStack>
            <HStack className="w-full">
              <img src="/images/sensors/vent.webp" className="w-10" />
              <Spacer />
              <IconButton iconType={"power"} className="!bg-gray-50" />
            </HStack>
            <VStack className="pl-2">
              <span className="w-full text-xs font-bold">거실</span>
              <span className="w-full text-xs font-bold">환풍기</span>
              <span className="w-full text-xs font-bold text-gray-500">
                꺼짐
              </span>
            </VStack>
          </VStack>
        </Tile>
      </HStack>
    </VStack>
  );
}

export default Devices;
