import { IconType } from "react-icons";

type TabType = {
  id: number;
  title: string;
  page: () => JSX.Element;
  navigationBar: () => JSX.Element;
  icon: IconType;
  iconSelected: IconType;
  backgroundColor?: string;
  secondaryColor?: string;
  hideTitle?: boolean;
};

export default TabType;
