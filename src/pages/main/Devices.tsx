import {
  IoQrCodeOutline,
  IoHome,
  IoAddSharp,
  IoEllipsisVertical,
} from "react-icons/io5";
import Grid from "../../components/common/Grid";
import IconButton from "../../components/common/IconButton";
import { VStack, HStack, Spacer } from "../../components/common/Stack";
import Tile from "../../components/common/Tile";

export function Devices() {
  return (
    <VStack className="gap-8">
      <Grid cols={2} gap={2}>
        <Tile className="!p-2">
          <VStack>
            <HStack>
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
        <Tile className="!p-2">
          <VStack>
            <HStack>
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
        <Tile className="!p-2 bg-white/70">
          <VStack>
            <HStack>
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
      </Grid>
    </VStack>
  );
}

export function DevicesNavigationBar() {
  return (
    <HStack className="items-center py-2 pl-4 pr-6 w-full border-none gap-4">
      <IoQrCodeOutline color="white" />
      <span className="text-white"> 집(1)</span>
      <Spacer />
      <IoHome color="white" />
      <IoAddSharp size="1.5rem" color="white" />
      <IoEllipsisVertical color="white" />
    </HStack>
  );
}
