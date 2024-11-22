import PortType from "./PortType.ts";

type OutletType = {
  id: number;
  createdAt: Date;

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
