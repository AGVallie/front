import { IoIosLock } from "react-icons/io";
import {
  IoAddSharp,
  IoEllipsisVertical,
  IoHome,
  IoQrCodeOutline,
  IoStarOutline,
} from "react-icons/io5";
import IconButton from "../../components/common/IconButton";
import { VStack, HStack, Spacer } from "../../components/common/Stack";
import Tile from "../../components/common/Tile";
import SmartThingsIcon from "../../components/common/icons/SmartThingsIcon";

export function Bookmarks() {
  return (
    <VStack className="gap-3">
      <Tile fit>
        <HStack className="items-center gap-2">
          <IoIosLock color="6CD458" size={"1.5rem"} />
          <span className="text-xs font-bold"> 안심(외출)</span>
        </HStack>
      </Tile>
      <Tile className="font-bold">
        <HStack className="items-center justify-between mb-1">
          <span className="text-gray-500 text-sm">
            자주 사용하는 기기, 루틴, 서비스를
            <br />
            한곳에 모아볼 수 있습니다.
          </span>
          <img src="/images/main/favorite.png" className="w-20" />
        </HStack>
        <VStack className="gap-3">
          <HStack className="gap-3 items-center">
            <SmartThingsIcon className="w-4" />
            <span> SmartThings 알아보기 </span>
            <Spacer />
            <IconButton iconType="rchevron" />
          </HStack>
          <HStack className="gap-3 items-center">
            <IoQrCodeOutline />
            <span> QR 코드 사용해보기 </span>
            <Spacer />
            <IconButton iconType="rchevron" />
          </HStack>
          <HStack className="gap-3 items-center">
            <IoStarOutline />
            <span> 즐겨찾기 추가 </span>
            <Spacer />
            <IconButton iconType="plus" />
          </HStack>
        </VStack>
      </Tile>
    </VStack>
  );
}

export function BookmarksNavigationBar() {
  return (
    <HStack className="items-center py-2 pl-4 pr-6 w-full border-none gap-4">
      <IoQrCodeOutline color="white" />
      <span className=" text-white"> 집(1)</span>
      <Spacer />
      <IoHome color="white" />
      <IoAddSharp size="1.5rem" color="white" />
      <IoEllipsisVertical color="white" />
    </HStack>
  );
}
