import { HTMLAttributes } from "react";
import { HStack, VStack } from "./Stack";
import cn from "../../utils/cn";
import TabType from "../../types/TabType";

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
  const baseClassName = `px-4 pb-6 w-full justify-between`;
  const colorClassName = white ? "text-white" : "text-black";
  const processedClassName = cn(baseClassName, colorClassName, className);

  return (
    <HStack className={processedClassName} {...props}>
      {tabs.map((tab) => {
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
  );
};

export default TabBar;
