type PortType = {
  id: number;
  outletId: number;
  position: number;
  createdAt: Date;
  riskLevel: "상" | "중" | "하";
  startedAt?: Date;
  endedAt?: Date;
  limitMin?: number;
  name?: string;
  color: string;
  shape: string;
  isOn: boolean;
};

export default PortType;
