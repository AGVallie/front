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
  const [curTab, setTab] = useState(8);
  const baseClassName = "transition-colors w-full h-full";
  const backgroundColorClassName = tabs[curTab].backgroundColor;
  const processedClassName = cn(
    baseClassName,
    backgroundColorClassName,
    className
  );

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
              white={!tab.backgroundColor}
              transparent={tab.backgroundColor as boolean | undefined}
              hideTitle={tab.hideTitle}
              className={tabClassName}
              navigationBar={tab.navigationBar}
            >
              <tab.page />
            </Page>
          );
        })}
      </div>
      <TabBar
        white={!tabs[curTab].secondaryColor}
        curTab={curTab}
        onTabSelect={setTab}
        tabs={tabs}
      />
    </VStack>
  );
}

export default TabView;
