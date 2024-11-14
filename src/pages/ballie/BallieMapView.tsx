import { IoAddSharp, IoEllipsisVertical } from "react-icons/io5";
import { VStack, HStack, Spacer } from "../../components/common/Stack";
import Tile from "../../components/common/Tile";
import StatusBar from "../../components/common/StatusBar";

export function BallieMapView() {
  return (
    <HStack className="w-full h-full">
      <VStack className="w-full gap-3">
        <Tile className="items-center p-10">
          <div className="relative">
            <div className="relative flex items-center justify-center w-64 h-64 border-[0.4rem] border-black rounded-3xl z-10 overflow-hidden">
              <span className="text-center font-bold text-slate-300">
                SSAFY
              </span>
              <div className="absolute border-[0.4rem] border-black w-12 h-24 top-16 -left-8 rounded-[50%]" />
              <div className="absolute border-[0.4rem] border-black w-20 h-32 top-0 left-56 rounded-[50%]" />
            </div>
            <div className="absolute w-12 h-12 bg-orange-500 -top-6 left-16" />
            <div className="absolute w-12 h-12 bg-yellow-300 top-24 left-56" />
            <div className="absolute border-[0.4rem] border-black w-20 h-32 top-28 left-48 rounded-[50%]" />
            <div className="absolute w-16 h-48 bg-gray-50 top-24 left-48" />
            <div className="absolute w-8 h-12 bg-yellow-300 top-24 left-56" />
            <div className="absolute w-12 h-12 bg-red-500 top-56 left-48" />
            <div className="absolute w-12 h-12 bg-blue-500 top-56 left-8" />
            <div className="absolute w-12 h-12 bg-purple-500 top-40 -left-6" />
            <div className="absolute w-12 h-12 bg-green-500 top-6 -left-6" />
          </div>
        </Tile>
      </VStack>
    </HStack>
  );
}

export function BallieMapViewNavigationBar() {
  return (
    <>
      <StatusBar className="absolute -translate-y-[2.4rem] z-50" />
      <HStack className="items-center justify-center py-2 pl-4 pr-6 w-full border-none gap-4">
        <span className="absolute font-bold"> SSAFY 맵 </span>
        <Spacer />
        <IoAddSharp size="1.5rem" />
        <IoEllipsisVertical />
      </HStack>
    </>
  );
}
