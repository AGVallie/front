import { IconType } from "react-icons";

type PortType = {
  id: number;
  outletId: number;
  position: number;
  createdAt: Date;
  riskLevel: string;
  startedAt?: Date;
  endedAt?: Date;
  limitMin?: number;
  name?: string;
  color: string;
  shape: string;
  isOn: boolean;
};

export default PortType;
