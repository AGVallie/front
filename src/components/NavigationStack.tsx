import { useState, useLayoutEffect, useEffect } from "react";
import useNavigation from "../hooks/useNavigation";
import cn from "../utils/cn";
import CommunicationBlockProvider from "../contexts/CommunicationBlockProvider";

function NavigationStack() {
  const { path, prevRoute } = useNavigation();
  const [pageCount, setPageCount] = useState<number>(path.length);

  // path 스택이 바뀔 때마다 이전 스택 깊이와 비교하고 늘어났으면 푸시, 줄었으면 팝 애니메이션 실행
  // 두 개 이상 차이나면 애니메이션 안 함
  // useLayoutEffect 으로 화면 렌더링 되기 전 작동시킴
  useLayoutEffect(() => {
    if (path.length > pageCount) startPushAnimation();
    setPageCount(path.length);
  }, [pageCount, path]);

  useLayoutEffect(() => {
    if (prevRoute) startPopAnimation();
  }, [prevRoute]);

  // 애니메이션 시작 여부 false로 만드는 순간 useEffect를 통해 true로 바뀌며 바로 애니메이션 진행될 수 있도록 함
  const [isPushAnimationStarted, setIsPushAnimationStarted] =
    useState<boolean>(false);
  useEffect(() => setIsPushAnimationStarted(true), [isPushAnimationStarted]);
  const startPushAnimation = () => {
    setIsPushAnimationStarted(false);
  };
  const [isPopAnimationStarted, setIsPopAnimationStarted] =
    useState<boolean>(false);
  useEffect(() => setIsPopAnimationStarted(true), [isPopAnimationStarted]);
  const startPopAnimation = () => {
    setIsPopAnimationStarted(false);
  };

  return (
    <div
      className={cn(
        "relative w-full h-full",
        path[path.length - 1]?.backgroundColor
      )}
    >
      {path.map((route, index) => (
        <div
          key={`navigationStack#${index}`}
          className={cn(
            "absolute w-full h-full transition-all ease-in",
            index < path.length - 2 ? "hidden" : "",
            index == path.length - 1 ? "z-10 opacity-100" : "z-0 opacity-80",
            path.length > 1 &&
              index == path.length - 1 &&
              !isPushAnimationStarted
              ? "translate-x-iPhone"
              : ""
          )}
        >
          <div className={cn("w-full h-full", route.backgroundColor)}>
            {route.page}
          </div>
        </div>
      ))}
      <CommunicationBlockProvider>
        {prevRoute && (
          <div
            key={`navigationStack#${path.length}`}
            className={cn(
              "absolute w-full h-full transition-all ease-in",
              isPopAnimationStarted ? "translate-x-iPhone" : ""
            )}
          >
            <div className={cn("w-full h-full", prevRoute.backgroundColor)}>
              {prevRoute.page}
            </div>
          </div>
        )}
      </CommunicationBlockProvider>
    </div>
  );
}

export default NavigationStack;
