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
  IoHome,
  IoHomeOutline,
} from "react-icons/io5";
import { MqttDemo, MqttDemoNavigationBar } from "./main/MqttDemo";
import { BallieChat, BallieChatNavigationBar } from "./ballie/BallieChat";
import {
  BallieMapView,
  BallieMapViewNavigationBar,
} from "./ballie/BallieMapView";
import { AiFillAliwangwang } from "react-icons/ai";
import { AiOutlineAliwangwang } from "react-icons/ai";
import { RiEyeCloseFill, RiEye2Line } from "react-icons/ri";
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
    title: "볼리 렌즈",
    iconSelected: RiEyeCloseFill,
    icon: RiEye2Line,
    page: MqttDemo,
    navigationBar: MqttDemoNavigationBar,
  },
  {
    id: 6,
    title: "볼리 루틴",
    iconSelected: AiFillAliwangwang,
    icon: AiOutlineAliwangwang,
    page: Routine,
    navigationBar: RoutineNavigationBar,
  },
  {
    id: 7,
    title: "맵 뷰",
    iconSelected: IoHome,
    icon: IoHomeOutline,
    page: BallieMapView,
    navigationBar: BallieMapViewNavigationBar,
    backgroundColor: "bg-gray-100",
    secondaryColor: "black",
  },
  {
    id: 8,
    title: "맵 뷰",
    iconSelected: IoHome,
    icon: IoHomeOutline,
    page: BallieMapView,
    navigationBar: BallieMapViewNavigationBar,
    backgroundColor: "bg-gray-100",
    secondaryColor: "black",
    hideTitle: true,
  },
];
export default IPhoneDemo;
