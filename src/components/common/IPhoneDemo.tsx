import { BsStarFill, BsStar, BsGrid1X2Fill, BsGrid1X2 } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { IoNewspaper, IoNewspaperOutline } from "react-icons/io5";
import { PiPlayCircleFill, PiPlayCircle } from "react-icons/pi";
import { Bookmarks, BookmarksNavigationBar } from "../../pages/main/Bookmarks";
import { Devices, DevicesNavigationBar } from "../../pages/main/Devices";
import { Menu, MenuNavigationBar } from "../../pages/main/Menu";
import { Routine, RoutineNavigationBar } from "../../pages/main/Routine";
import TabType from "../../types/TabType";
import IPhoneFrame from "./IPhoneFrame";
import StatusBar from "./StatusBar";
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
    navigationBar: BookmarksNavigationBar,
  },
  {
    id: 1,
    title: "기기",
    iconSelected: BsGrid1X2Fill,
    icon: BsGrid1X2,
    page: Devices,
    navigationBar: DevicesNavigationBar,
  },
  {
    id: 2,
    title: "라이프",
    iconSelected: IoNewspaper,
    icon: IoNewspaperOutline,
    page: Bookmarks,
    navigationBar: BookmarksNavigationBar,
  },
  {
    id: 3,
    title: "자동화",
    iconSelected: PiPlayCircleFill,
    icon: PiPlayCircle,
    page: Routine,
    navigationBar: RoutineNavigationBar,
  },
  {
    id: 4,
    title: "메뉴",
    iconSelected: HiMenu,
    icon: HiMenu,
    page: Menu,
    navigationBar: MenuNavigationBar,
    backgroundColor: "bg-gray-100",
    secondaryColor: "black",
  },
];
export default IPhoneDemo;
