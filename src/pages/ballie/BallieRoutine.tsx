import {
  IoAddSharp,
  IoEllipsisVertical,
  IoHome,
  IoQrCodeOutline,
} from "react-icons/io5";
import IconButton from "../../components/common/IconButton";
import { VStack, HStack, Spacer } from "../../components/common/Stack";
import Tile from "../../components/common/Tile";
import { PiHairDryerFill } from "react-icons/pi";
import Grid from "../../components/common/Grid";
import { GrAction } from "react-icons/gr";
import { BiSolidHomeHeart } from "react-icons/bi";

export function BallieRoutine() {
  return (
    <VStack className="gap-8">
      <VStack>
        <span className="text-white text-xs"> 수동 루틴 </span>
        <Grid cols={2} gap={2}>
          <Tile>
            <VStack className="items-center gap-4">
              <HStack className="w-full">
                <GrAction color="FFD122" size={"1.5rem"} />
                <Spacer />
                <IconButton iconType={"play"} />
              </HStack>
              <span className="w-full text-xs font-bold">
                컴퓨터 멀티탭 끄기
              </span>
            </VStack>
          </Tile>
          <Tile>
            <VStack className="items-center gap-4">
              <HStack className="w-full">
                <PiHairDryerFill color="pink" size={"1.5rem"} />
                <Spacer />
                <IconButton iconType={"play"} />
              </HStack>
              <span className="w-full text-xs font-bold">
                화장대 콘센트 점검
              </span>
            </VStack>
          </Tile>
        </Grid>
      </VStack>

      <VStack>
        <span className="text-white text-xs"> 자동 루틴 </span>
        <Grid cols={2} gap={2}>
          <Tile>
            <VStack className="gap-2">
              <BiSolidHomeHeart color="tomato" size={"1.5rem"} />
              <VStack className="!gap-0">
                <span className="w-full text-xs font-bold">집 전체 점검</span>
                <span className="text-xs text-gray-500">매일 12:00</span>
              </VStack>
            </VStack>
          </Tile>
        </Grid>
      </VStack>
    </VStack>
  );
}

export function BallieRoutineNavigationBar() {
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
