/* eslint-disable react-hooks/exhaustive-deps */
import { PropsWithChildren, useCallback } from "react";
import { useReducer } from "react";
import { useEffect, useState } from "react";
import Route from "../types/Route";
import TabView from "../components/common/TabView";
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
  BallieChat,
  BallieChatNavigationBar,
} from "../pages/ballie/BallieChat";
import {
  BallieMapView,
  BallieMapViewNavigationBar,
} from "../pages/ballie/BallieMapView";
import { Bookmarks, BookmarksNavigationBar } from "../pages/main/Bookmarks";
import { Devices, DevicesNavigationBar } from "../pages/main/Devices";
import { Menu, MenuNavigationBar } from "../pages/main/Menu";
import { MqttDemo, MqttDemoNavigationBar } from "../pages/main/MqttDemo";
import { Routine, RoutineNavigationBar } from "../pages/main/Routine";
import TabType from "../types/TabType";
import { NavigationContext } from "../hooks/useNavigation";

type PathAction =
  | { type: "push"; payload: Route }
  | { type: "pop"; payload: null }
  | { type: "clear"; payload: null }
  | { type: "set"; payload: Route[] };

const reducer = (path: Route[], { type, payload }: PathAction): Route[] => {
  let newPath: Route[];
  switch (type) {
    case "push":
      newPath = [...path, payload];
      break;
    case "pop":
      newPath = [...path.slice(0, path.length - 1)];
      break;
    case "clear":
      newPath = [];
      break;
    case "set":
      newPath = [...payload];
  }
  return newPath;
};

export const NavigationProvider = ({ children }: PropsWithChildren) => {
  const [prevRoute, setPrevPage] = useState<Route | null>(null);
  const [path, dispatch] = useReducer(reducer, [
    //여기에 페이지 넣으면 초깃값 이걸로 적용됨
    // { page: <ExchangeRateMainPage /> },
  ]);
  // 홈 버튼 누르면 네비게이션 스택 비워진 후 아래로 채워짐 => 메인페이지로 이동됨
  useEffect(() => {
    if (path.length == 0) {
      setPath([{ page: <TabView tabs={tabs} /> }]);
    }
  }, [path]);

  const navigateTo = useCallback((newPath: Route) => {
    dispatch({ type: "push", payload: newPath });
  }, []);
  const back = useCallback(() => {
    setPrevPage(path[path.length - 1]);
    dispatch({ type: "pop", payload: null });
  }, [path]);
  const home = useCallback(() => {
    dispatch({ type: "clear", payload: null });
  }, []);
  const setPath = useCallback((path: Route[]) => {
    dispatch({ type: "set", payload: path });
  }, []);

  return (
    <NavigationContext.Provider
      value={{
        path,
        prevRoute,
        navigateTo,
        back,
        home,
        setPath,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

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
    hideTitle: true,
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
    hideTitle: true,
  },
];
