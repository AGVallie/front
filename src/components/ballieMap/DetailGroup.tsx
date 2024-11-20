import { useReducer } from "react";
import PortType from "../../types/PortType";
import Tile from "../common/Tile";
import DetailItem from "./DetailItem";
import OptionType from "../../types/OptionType";

interface DetailGroupProps {
  port: PortType;
  onChange: (newPort: PortType) => void;
  isOutletOff?: boolean;
}

type Action =
  | { type: "SET_RISK_LEVEL"; payload: "상" | "중" | "하" }
  | { type: "SET_LIMIT_MIN"; payload: number }
  | { type: "SET_NAME"; payload: string };

const portReducer = (state: PortType, action: Action): PortType => {
  switch (action.type) {
    case "SET_RISK_LEVEL":
      return { ...state, riskLevel: action.payload };
    case "SET_LIMIT_MIN":
      return { ...state, limitMin: action.payload };
    case "SET_NAME":
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

function DetailGroup({
  port,
  onChange,
  isOutletOff = false,
}: DetailGroupProps) {
  const [portState, dispatch] = useReducer(portReducer, port);
  const setRiskLevel = (newRiskLevel: "상" | "중" | "하") => {
    dispatch({ type: "SET_RISK_LEVEL", payload: newRiskLevel });
    onChange(portState);
  };
  const setLimitMin = (newLimitMin: number) => {
    dispatch({ type: "SET_LIMIT_MIN", payload: newLimitMin });
    onChange(portState);
  };
  const setName = (newName: string) => {
    dispatch({ type: "SET_NAME", payload: newName });
    onChange(portState);
  };
  return (
    <Tile className="bg-white pl-2 pr-0 py-1 rounded-md">
      {/* 이름 */}
      <DetailItem<string>
        title={"이름"}
        state={port.name ?? `포트 #${port.id}`}
      />
      {/* 구분선 */}
      <div className="w-full border border-gray-300 border-t-0" />
      {/* 상태 */}
      <DetailItem<string>
        title="상태"
        state={!isOutletOff && portState.isOn ? "켜짐" : "꺼짐"}
      />
      {/* 구분선 */}
      <div className="w-full border border-gray-300 border-t-0" />
      {/* 사용 시작 시간 (READONLY)*/}
      <DetailItem<string>
        title="사용 시작 시간"
        state={portState.startedAt?.toLocaleString() ?? "-"}
      />
      {/* 구분선 */}
      <div className="w-full border border-gray-300 border-t-0" />
      {/* 위험도 */}
      <DetailItem<"상" | "중" | "하">
        title="위험도"
        onSetState={setRiskLevel}
        state={portState.riskLevel}
        options={riskOptions}
      />
      {/* 구분선 */}
      <div className="w-full border border-gray-300 border-t-0" />
      {/* 최대 사용 시간 */}
      <DetailItem<number>
        title="최대 사용 시간"
        onSetState={setLimitMin}
        state={portState.limitMin ?? 0}
        options={limitMinOptions}
      />
    </Tile>
  );
}

const riskOptions: OptionType<"상" | "중" | "하">[] = [
  {
    value: "상",
    color: "text-red-500",
  },
  {
    value: "중",
    color: "text-orange-500",
  },
  {
    value: "하",
  },
];

const limitMinOptions: OptionType<number>[] = [
  {
    label: "12시간",
    value: 720,
  },
  {
    label: "6시간",
    value: 720,
  },
  {
    label: "2시간",
    value: 120,
  },
  {
    label: "1시간",
    value: 60,
  },
  {
    label: "30분",
    value: 30,
  },
  {
    label: "설정하지 않음",
    color: "text-red-500",
    value: 0,
  },
];

export default DetailGroup;
