import IPhoneFrame from "./IPhoneFrame";
import StatusBar from "./StatusBar";
import Bookmarks from "../../pages/main/Bookmarks";
import { BsStarFill, BsStar, BsGrid1X2Fill, BsGrid1X2 } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { IoNewspaper, IoNewspaperOutline } from "react-icons/io5";
import { PiPlayCircleFill, PiPlayCircle } from "react-icons/pi";
import TabType from "../../types/TabType";
import TabView from "./TabView";

function IPhoneDemo() {
  return (
    <IPhoneFrame className="bg-smartthings">
      <StatusBar white />
      <TabView tabs={tabs} />
    </IPhoneFrame>
  );
}

const tabs: TabType[] = [
  {
    id: 0,
    title: "즐겨찾기",
    iconSelected: BsStarFill,
    icon: BsStar,
    page: Bookmarks,
  },
  {
    id: 1,
    title: "기기",
    iconSelected: BsGrid1X2Fill,
    icon: BsGrid1X2,
    page: Bookmarks,
  },
  {
    id: 2,
    title: "라이프",
    iconSelected: IoNewspaper,
    icon: IoNewspaperOutline,
    page: Bookmarks,
  },
  {
    id: 3,
    title: "자동화",
    iconSelected: PiPlayCircleFill,
    icon: PiPlayCircle,
    page: Bookmarks,
  },
  {
    id: 4,
    title: "메뉴",
    iconSelected: HiMenu,
    icon: HiMenu,
    page: Bookmarks,
  },
];
export default IPhoneDemo;
