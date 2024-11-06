import { IconType } from "react-icons";

type TabType = {
  id: number;
  title: string;
  page: () => JSX.Element;
  icon: IconType;
  iconSelected: IconType;
};

export default TabType;
