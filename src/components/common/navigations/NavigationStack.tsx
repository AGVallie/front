import { useState, useLayoutEffect } from "react";
import useNavigation from "../../../hooks/useNavigation";
import cn from "../../../utils/cn";

function NavigationStack() {
  const { path, backTrigger, setBackTrigger, popPath } = useNavigation();
  const [pageCount, setPageCount] = useState<number>(path.length);
  const [showAnimation, setShowAnimation] = useState(false);
  const [showFirstPage, setShowFirstPage] = useState(false);

  // useLayoutEffect 으로 화면 렌더링 되기 전 작동시킴
  useLayoutEffect(() => {
    if (path.length < pageCount) return;
    setPageCount(path.length);
    setShowAnimation(false);
    setShowFirstPage(false);
    const timer = setTimeout(() => {
      setShowAnimation(true);
      setShowFirstPage(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [pageCount, path, popPath, setBackTrigger]);

  useLayoutEffect(() => {
    if (!backTrigger) return;
    setShowFirstPage(false);
    const timer = setTimeout(() => {
      setBackTrigger(false);
      popPath();
    }, 100);
    return () => clearTimeout(timer);
  }, [backTrigger, popPath, setBackTrigger]);

  return (
    <div
      className={cn(
        "relative w-full h-full",
        path[path.length - 1]?.backgroundColor
      )}
    >
      {path.map((route, index) => (
        <div
          key={`navigation-stack-#${index}`}
          className={cn(
            "absolute w-full h-full",
            showAnimation ? "transition-transform duration-75 ease-in" : "",
            index == 0 || (index == path.length - 1 && showFirstPage)
              ? "translate-x-0"
              : "translate-x-iPhone"
          )}
        >
          <div className={cn("w-full h-full", route.backgroundColor)}>
            {route.page}
          </div>
        </div>
      ))}
    </div>
  );
}

export default NavigationStack;
