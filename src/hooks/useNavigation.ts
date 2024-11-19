import { createContext, useContext } from "react";
import Route from "../types/Route";

type NavigationContextProp = {
  path: Route[];
  prevRoute: Route | null;
  navigateTo: (newPath: Route) => void;
  back: () => void;
  home: () => void;
  setPath: (path: Route[]) => void;
};

const BLANK_FUNC = () => {};

export const NavigationContext = createContext<NavigationContextProp>({
  path: [],
  prevRoute: null,
  navigateTo: BLANK_FUNC,
  back: BLANK_FUNC,
  home: BLANK_FUNC,
  setPath: BLANK_FUNC,
});

const useNavigation = () => useContext(NavigationContext);

export default useNavigation;
