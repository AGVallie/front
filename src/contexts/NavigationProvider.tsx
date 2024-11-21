/* eslint-disable react-hooks/exhaustive-deps */
import { PropsWithChildren, useCallback } from "react";
import { useReducer } from "react";
import { useEffect, useState } from "react";
import Route from "../types/Route";
import TabView from "../components/common/TabView";
import { NavigationContext } from "../hooks/useNavigation";
import tabs from "../data/tabs";

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
  const [backTrigger, setBackTrigger] = useState(false);
  const [path, dispatch] = useReducer(reducer, [
    //여기에 페이지 넣으면 초깃값 이걸로 적용됨
    // { page: <ExchangeRateMainPage /> },
  ]);
  // 홈 버튼 누르면 네비게이션 스택 비워진 후 아래로 채워짐 => 메인페이지로 이동됨
  useEffect(() => {
    if (path.length == 0) {
      setPath([
        {
          backgroundColor: "bg-smartthings",
          page: <TabView tabs={tabs} />,
        },
      ]);
    }
  }, [path]);

  const navigateTo = useCallback((newPath: Route) => {
    dispatch({ type: "push", payload: newPath });
  }, []);
  const back = useCallback(() => {
    setBackTrigger(true);
  }, [path]);
  const popPath = useCallback(() => {
    dispatch({ type: "pop", payload: null });
  }, []);
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
        backTrigger,
        setBackTrigger,
        navigateTo,
        back,
        home,
        setPath,
        popPath,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};
