import { HTMLAttributes, useState } from "react";
import TabBar from "./TabBar";
import Page from "./Page";
import { VStack } from "./Stack";
import TabType from "../../types/TabType";
import cn from "../../utils/cn";

interface TabViewProps extends HTMLAttributes<HTMLDivElement> {
  tabs: TabType[];
}
function TabView({ tabs, className, ...props }: TabViewProps) {
  const [curTab, setTab] = useState(0);
  const baseClassName = "w-full h-full";
  const processedClassName = cn(baseClassName, className);

  const tabBaseClassName = "absolute min-h-full transition-opacity";

  return (
    <VStack className={processedClassName} {...props}>
      <div className="relative flex-grow">
        {tabs.map((tab) => {
          const tabShowClassName =
            curTab == tab.id
              ? "ease-out"
              : "ease-in opacity-0 pointer-events-none";
          const tabClassName = cn(tabShowClassName, tabBaseClassName);
          return (
            <Page
              key={tab.id}
              title={tab.title}
              className={tabClassName}
              hideNavigationBar={tab.id == 4}
            >
              <tab.page />
            </Page>
          );
        })}
      </div>
      <TabBar white curTab={curTab} onTabSelect={setTab} tabs={tabs} />
    </VStack>
  );
}

export default TabView;
