import { AiFillAliwangwang, AiOutlineAliwangwang } from "react-icons/ai";
import { BsStarFill, BsStar, BsGrid1X2Fill, BsGrid1X2 } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import {
  IoChatbubbleEllipses,
  IoChatbubbleEllipsesOutline,
  IoHome,
  IoHomeOutline,
} from "react-icons/io5";
import { PiPlayCircleFill, PiPlayCircle } from "react-icons/pi";
import { RiEyeCloseFill, RiEye2Line } from "react-icons/ri";
import {
  BallieMapView,
  BallieMapViewNavigationBar,
} from "../pages/ballie/BallieMapView";
import { Bookmarks, BookmarksNavigationBar } from "../pages/main/Bookmarks";
import { Devices, DevicesNavigationBar } from "../pages/main/Devices";
import { Menu, MenuNavigationBar } from "../pages/main/Menu";
import { Routine, RoutineNavigationBar } from "../pages/main/Routine";
import TabType from "../types/TabType";
import {
  BallieLens,
  BallieLensNavigationBar,
} from "../pages/ballie/BallieLens";
import {
  BallieRoutine,
  BallieRoutineNavigationBar,
} from "../pages/ballie/BallieRoutine";
import { HiMagnifyingGlass } from "react-icons/hi2";

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
    page: () => null as unknown as JSX.Element,
    navigationBar: () => null as unknown as JSX.Element,
    hideTitle: true,
    backgroundColor: "transparent",
  },
  {
    id: 5,
    title: "볼리 렌즈",
    iconSelected: RiEyeCloseFill,
    icon: RiEye2Line,
    page: BallieLens,
    navigationBar: BallieLensNavigationBar,
  },
  {
    id: 6,
    title: "볼리 루틴",
    iconSelected: AiFillAliwangwang,
    icon: AiOutlineAliwangwang,
    page: BallieRoutine,
    navigationBar: BallieRoutineNavigationBar,
  },
  {
    id: 7,
    title: "진단",
    iconSelected: HiMagnifyingGlass,
    icon: HiMagnifyingGlass,
    page: () => null as unknown as JSX.Element,
    navigationBar: () => null as unknown as JSX.Element,
  },
  {
    id: 8,
    title: "맵 뷰",
    iconSelected: IoHome,
    icon: IoHomeOutline,
    page: BallieMapView,
    navigationBar: BallieMapViewNavigationBar,
    hideTitle: true,
  },
];

export default tabs;
