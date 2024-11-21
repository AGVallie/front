import { createContext, useContext } from "react";
import Route from "../types/Route";

type NavigationContextProp = {
  path: Route[];
  backTrigger: boolean;
  navigateTo: (newPath: Route) => void;
  setBackTrigger: (state: boolean) => void;
  back: () => void;
  home: () => void;
  popPath: () => void;
  setPath: (path: Route[]) => void;
};

const BLANK_FUNC = () => {};

export const NavigationContext = createContext<NavigationContextProp>({
  path: [],
  backTrigger: false,
  navigateTo: BLANK_FUNC,
  setBackTrigger: BLANK_FUNC,
  back: BLANK_FUNC,
  home: BLANK_FUNC,
  popPath: BLANK_FUNC,
  setPath: BLANK_FUNC,
});

const useNavigation = () => useContext(NavigationContext);

export default useNavigation;
