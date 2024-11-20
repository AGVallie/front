import PortType from "./PortType.ts";

type OutletType = {
  id: number;
  createdAt: Date;
  x: number;
  y: number;
  angle: number;
  hasMainSwitch: boolean;
  hasIndividualSwitch: boolean;
  color: string;
  portCount: number;
  ports: PortType[];
  name?: string;
  isOn?: boolean;
  checkedAt?: Date;
};

export default OutletType;
