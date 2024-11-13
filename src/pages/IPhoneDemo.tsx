import { BsStarFill, BsStar, BsGrid1X2Fill, BsGrid1X2 } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { PiPlayCircleFill, PiPlayCircle } from "react-icons/pi";
import { Bookmarks, BookmarksNavigationBar } from "./main/Bookmarks";
import { Devices, DevicesNavigationBar } from "./main/Devices";
import { Menu, MenuNavigationBar } from "./main/Menu";
import { Routine, RoutineNavigationBar } from "./main/Routine";
import TabType from "../types/TabType";
import IPhoneFrame from "../components/common/IPhoneFrame";
import StatusBar from "../components/common/StatusBar";
import TabView from "../components/common/TabView";
import {
  IoChatbubbleEllipses,
  IoChatbubbleEllipsesOutline,
} from "react-icons/io5";
import { MdOutlineSettingsRemote, MdSettingsRemote } from "react-icons/md";
import { MqttDemo, MqttDemoNavigationBar } from "./main/MqttDemo";
import { BallieChat, BallieChatNavigationBar } from "./ballie/BallieChat";

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
    title: "자동화",
    iconSelected: PiPlayCircleFill,
    icon: PiPlayCircle,
    page: Routine,
    navigationBar: RoutineNavigationBar,
  },
  {
    id: 3,
    title: "메뉴",
    iconSelected: HiMenu,
    icon: HiMenu,
    page: Menu,
    navigationBar: MenuNavigationBar,
    backgroundColor: "bg-gray-100",
    secondaryColor: "black",
  },
  {
    id: 4,
    title: "볼리 챗",
    iconSelected: IoChatbubbleEllipses,
    icon: IoChatbubbleEllipsesOutline,
    page: BallieChat,
    navigationBar: BallieChatNavigationBar,
    hideTitle: true,
    backgroundColor: "transparent",
  },
  {
    id: 5,
    title: "제어기",
    iconSelected: MdSettingsRemote,
    icon: MdOutlineSettingsRemote,
    page: MqttDemo,
    navigationBar: MqttDemoNavigationBar,
  },
  {
    id: 6,
    title: "자동화",
    iconSelected: PiPlayCircleFill,
    icon: PiPlayCircle,
    page: Routine,
    navigationBar: RoutineNavigationBar,
  },
  {
    id: 7,
    title: "메뉴",
    iconSelected: HiMenu,
    icon: HiMenu,
    page: Menu,
    navigationBar: MenuNavigationBar,
    backgroundColor: "bg-gray-100",
    secondaryColor: "black",
  },
  {
    id: 8,
    title: "메뉴2",
    iconSelected: HiMenu,
    icon: HiMenu,
    page: Menu,
    navigationBar: MenuNavigationBar,
    backgroundColor: "bg-gray-100",
    secondaryColor: "black",
  },
];
export default IPhoneDemo;
