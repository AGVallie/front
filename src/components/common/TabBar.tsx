import { HTMLAttributes } from "react";
import { HStack, VStack } from "./Stack";
import cn from "../../utils/cn";
import TabType from "../../types/TabType";
import useToggle from "../../hooks/useToggle";
import BallieMenuModal from "./modals/BallieMenuModal";
import BallieIcon from "../icons/BallieIcon";

interface TabBarProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  curTab?: number;
  onTabSelect?: (tabNo: number) => void;
  white?: boolean;
  size?: string;
  tabs: TabType[];
}

const TabBar = ({
  className,
  curTab,
  onTabSelect = () => {},
  white = false,
  size = "1.5rem",
  tabs,
  ...props
}: TabBarProps) => {
  const [showBallieMenuModal, toggleShowBallieMenuModal] = useToggle();

  const baseClassName = `transition-colors px-4 pb-6 w-full justify-between`;
  const colorClassName = white ? "text-white" : "text-black";
  const processedClassName = cn(baseClassName, colorClassName, className);
  const mainTabs = tabs.filter((_, idx) => idx < 4);

  const selectTab = (tabId: number) => {
    toggleShowBallieMenuModal();
    onTabSelect(tabId);
  };

  return (
    <>
      <HStack className={processedClassName} {...props}>
        {/* 메뉴 절반 */}
        {mainTabs
          .filter((_, idx) => idx < mainTabs.length / 2)
          .map((tab) => {
            const isSelected = curTab === tab.id;
            const Icon = isSelected ? tab.iconSelected : tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => onTabSelect(tab.id)}
                className="w-12 h-12"
              >
                <VStack className="items-center text-[0.6rem]">
                  <Icon size={size} />
                  <span>{tab.title}</span>
                </VStack>
              </button>
            );
          })}
        {/* 볼리 메뉴 */}
        <button onClick={toggleShowBallieMenuModal}>
          <VStack>
            <BallieIcon
              className={`w-8 h-8 ${white ? "" : "shadow-slate-400 shadow"}`}
            />
            <span className="text-[0.6rem]">볼리</span>
          </VStack>
        </button>
        {/* 메뉴 나머지 */}
        {mainTabs
          .filter((_, idx) => idx >= mainTabs.length / 2)
          .map((tab) => {
            const isSelected = curTab === tab.id;
            const Icon = isSelected ? tab.iconSelected : tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => onTabSelect(tab.id)}
                className="w-12 h-12"
              >
                <VStack className="items-center text-[0.6rem]">
                  <Icon size={size} />
                  <span>{tab.title}</span>
                </VStack>
              </button>
            );
          })}
      </HStack>
      {/* 볼리 메뉴 모달 */}
      <BallieMenuModal
        show={showBallieMenuModal}
        onClose={toggleShowBallieMenuModal}
        onTabSelect={(tab: TabType) => selectTab(tab.id)}
        tabs={tabs.filter((_, idx) => idx >= 4)}
        curTab={curTab}
      />
    </>
  );
};

export default TabBar;
