import { useState } from "react";
import PortType from "../../types/PortType";
import Tile from "../common/Tile";
import DetailItem from "./DetailItem";

interface DetailGroupProps {
  port: PortType;
  onChange: (newPort: PortType) => void;
}

function DetailGroup({ port, onChange }: DetailGroupProps) {
  // 나중에 useReducer하기
  const [riskLevel, setLiskLevel] = useState<string>("하");
  return (
    <Tile className="bg-white">
      <DetailItem<string>
        title="위험도"
        onSetState={setLiskLevel}
        state={riskLevel}
        options={[
          {
            value: "상",
            color: "text-red-500",
          },
          {
            value: "중",
          },
          {
            value: "하",
          },
        ]}
      />
    </Tile>
  );
}

export default DetailGroup;
