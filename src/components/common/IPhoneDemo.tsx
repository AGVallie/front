import { useRef, useState } from "react";
import SmartThingsIcon from "../icons/SmartThingsIcon";
import IconButton from "./IconButton";
import IPhoneFrame from "./IPhoneFrame";
import NavigationBar from "./NavigationBar";
import { HStack, Spacer, VStack } from "./Stack";
import StatusBar from "./StatusBar";
import Tile from "./Tile";
import { IoIosLock } from "react-icons/io";
import {
  IoNewspaperOutline,
  IoQrCodeOutline,
  IoStarOutline,
} from "react-icons/io5";
import cn from "../../utils/cn";
import { BsStar, BsStarFill } from "react-icons/bs";
import { BsGrid1X2Fill, BsGrid1X2 } from "react-icons/bs";
import { HiMenu, HiOutlinePlay } from "react-icons/hi";
function IPhoneDemo() {
  const [scrollTop, setScrollTop] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const scrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = (event: React.UIEvent<HTMLElement>) => {
    setScrollTop(event.currentTarget.scrollTop);
  };
  const scrollBackgroundClassName = cn(
    "absolute transition-colors w-full",
    scrollTop ? "bg-black/30 backdrop-blur" : ""
  );
  const titleBaseClassName = "transition-opacity font-bold text-2xl text-white";
  const titleShowClassName = scrollTop ? "opacity-0" : "";
  const titleClassName = cn(titleBaseClassName, titleShowClassName);
  return (
    <IPhoneFrame className="bg-smartthings">
      <div className={scrollBackgroundClassName}>
        <StatusBar white onClick={scrollToTop} />
        <NavigationBar title={"즐겨찾기"} showTitle={scrollTop > 0} />
      </div>
      <VStack
        className="w-full p-4 gap-4 overflow-auto pt-24"
        onScroll={handleScroll}
        ref={scrollRef}
      >
        <span className={titleClassName}> 즐겨찾기 </span>
        <Tile className="!w-fit !p-2 !pr-6">
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
            <img src="/images/main/favorite.png" className="w-24" />
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
        <HStack className="min-h-[256rem]" />
      </VStack>
      <HStack className="text-white px-4 pb-6 w-full justify-between">
        <VStack className="items-center text-[0.6rem]">
          <BsStarFill color="white" size="1.5rem" />
          {/* <BsStar color="white" size="1.5rem" /> */}
          <span>즐겨찾기</span>
        </VStack>
        <VStack className="items-center text-[0.6rem]">
          <BsGrid1X2 color="white" size="1.5rem" className="rotate-90" />
          <span>기기</span>
        </VStack>
        <VStack className="items-center text-[0.6rem]">
          <IoNewspaperOutline color="white" size="1.5rem" />
          <span>라이프</span>
        </VStack>
        <VStack className="items-center text-[0.6rem]">
          <HiOutlinePlay color="white" size="1.5rem" />
          <span>자동화</span>
        </VStack>
        <VStack className="items-center text-[0.6rem]">
          <HiMenu color="white" size="1.5rem" />
          <span>메뉴</span>
        </VStack>
      </HStack>
      <div className="bg-black w-32 h-8 rounded-full mb-2" />
    </IPhoneFrame>
  );
}

export default IPhoneDemo;
