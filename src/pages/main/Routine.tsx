import { IoPeopleCircleSharp, IoRestaurant, IoSunny } from "react-icons/io5";
import { IoBulb, IoMoonSharp } from "react-icons/io5";
import IconButton from "../../components/common/IconButton";
import { VStack, HStack, Spacer } from "../../components/common/Stack";
import Tile from "../../components/common/Tile";
import { PiFanFill } from "react-icons/pi";
import Grid from "../../components/common/Grid";

function Routine() {
  return (
    <VStack className="gap-8">
      <VStack>
        <span className="text-white text-xs"> 수동 루틴 </span>
        <Grid cols={2} gap={2}>
          <Tile>
            <VStack className="items-center gap-4">
              <HStack className="w-full">
                <IoSunny color="FFD122" size={"1.5rem"} />
                <Spacer />
                <IconButton iconType={"play"} />
              </HStack>
              <span className="w-full text-xs font-bold">기상하기</span>
            </VStack>
          </Tile>
          <Tile>
            <VStack className="items-center gap-4">
              <HStack className="w-full">
                <IoMoonSharp color="A599FF" size={"1.5rem"} />
                <Spacer />
                <IconButton iconType={"play"} />
              </HStack>
              <span className="w-full text-xs font-bold">취침하기</span>
            </VStack>
          </Tile>
          <Tile>
            <VStack className="items-center gap-4">
              <HStack className="w-full">
                <IoRestaurant color="pink" size={"1.5rem"} />
                <Spacer />
                <IconButton iconType={"play"} />
              </HStack>
              <span className="w-full text-xs font-bold">식사시간</span>
            </VStack>
          </Tile>
        </Grid>
      </VStack>

      <VStack>
        <span className="text-white text-xs"> 자동 루틴 </span>
        <Grid cols={2} gap={2}>
          <Tile>
            <VStack className="gap-4">
              <IoPeopleCircleSharp color="skyblue" size={"1.5rem"} />
              <span className="w-full text-xs font-bold">손님 맞이하기</span>
            </VStack>
          </Tile>
          <Tile>
            <VStack className="gap-4">
              <IoBulb color="orange" size={"1.5rem"} />
              <span className="w-full text-xs font-bold">
                해질녘 은은한 조명
              </span>
            </VStack>
          </Tile>
          <Tile>
            <VStack className="gap-4">
              <PiFanFill color="lightblue" size={"1.5rem"} />
              <span className="w-full text-xs font-bold">아침 환기</span>
            </VStack>
          </Tile>
        </Grid>
      </VStack>
    </VStack>
  );
}

export default Routine;
