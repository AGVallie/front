import { BsStarFill, BsGrid1X2, BsStar, BsGrid1X2Fill } from "react-icons/bs";
import { IoNewspaper, IoNewspaperOutline } from "react-icons/io5";
import { PiPlayCircle, PiPlayCircleFill } from "react-icons/pi";
import { HiMenu } from "react-icons/hi";
import { HTMLAttributes } from "react";
import { HStack, VStack } from "./Stack";
import cn from "../../utils/cn";
import { IconType } from "react-icons";

interface TabBarProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  curTab?: number;
  onTabSelect?: (tabNo: number) => void;
  white?: boolean;
  size?: string;
}

type TabType = {
  id: number;
  name: string;
  selectedIcon: IconType;
  nonSelectedIcon: IconType;
};

const TabBar = ({
  className,
  curTab,
  onTabSelect = () => {},
  white = false,
  size = "1.5rem",
  ...props
}: TabBarProps) => {
  const baseClassName = `px-4 pb-6 w-full justify-between`;
  const colorClassName = white ? "text-white" : "text-black";
  const processedClassName = cn(baseClassName, colorClassName, className);

  return (
    <HStack className={processedClassName} {...props}>
      {tabs.map((tab) => (
        <button key={tab.id} onClick={() => onTabSelect(tab.id)}>
          <VStack className="items-center text-[0.6rem]">
            {curTab === tab.id ? (
              <tab.selectedIcon size={size} />
            ) : (
              <tab.nonSelectedIcon size={size} />
            )}
            <span>{tab.name}</span>
          </VStack>
        </button>
      ))}
    </HStack>
  );
};

const tabs: TabType[] = [
  {
    id: 0,
    name: "즐겨찾기",
    selectedIcon: BsStarFill,
    nonSelectedIcon: BsStar,
  },
  {
    id: 1,
    name: "기기",
    selectedIcon: BsGrid1X2Fill,
    nonSelectedIcon: BsGrid1X2,
  },
  {
    id: 2,
    name: "라이프",
    selectedIcon: IoNewspaper,
    nonSelectedIcon: IoNewspaperOutline,
  },
  {
    id: 3,
    name: "자동화",
    selectedIcon: PiPlayCircleFill,
    nonSelectedIcon: PiPlayCircle,
  },
  {
    id: 4,
    name: "메뉴",
    selectedIcon: HiMenu,
    nonSelectedIcon: HiMenu,
  },
];

export default TabBar;
