import OutletType from "./OutletType";

type AreaType = {
  id: number;
  width: number;
  height: number;
  color: string;
  y: number;
  x: number;
  outlets: OutletType[];
  name?: string;
};

export default AreaType;
