import { limitMinOptions, riskOptions } from "../../data/detailOptions";
import PortType from "../../types/PortType";
import Tile from "../common/Tile";
import DetailItem from "./DetailItem";

interface DetailGroupProps {
  port: PortType;
  onChange: (newPort: PortType) => void;
  isOutletOff?: boolean;
}

function DetailGroup({
  port,
  onChange,
  isOutletOff = false,
}: DetailGroupProps) {
  const setRiskLevel = (newRiskLevel: "상" | "중" | "하") => {
    onChange({ ...port, riskLevel: newRiskLevel });
  };
  const setLimitMin = (newLimitMin: number) => {
    onChange({ ...port, limitMin: newLimitMin });
  };
  const setName = (newName: string) => {
    if (newName == "") return;
    onChange({ ...port, name: newName });
  };

  return (
    <Tile className="bg-white pl-2 pr-0 py-1 rounded-md">
      {/* 이름 */}
      <DetailItem<string>
        title={"이름"}
        onSetState={setName}
        state={port.name ?? `포트 #${port.id}`}
        editableString
      />
      {/* 구분선 */}
      <div className="w-full border border-gray-300 border-t-0" />
      {/* 상태 */}
      <DetailItem<string>
        title="상태"
        state={!isOutletOff && port.isOn ? "켜짐" : "꺼짐"}
      />
      {/* 구분선 */}
      <div className="w-full border border-gray-300 border-t-0" />
      {/* 사용 시작 시간 (READONLY)*/}
      <DetailItem<string>
        title="사용 시작 시간"
        state={port.startedAt?.toLocaleString() ?? "-"}
      />
      {/* 구분선 */}
      <div className="w-full border border-gray-300 border-t-0" />
      {/* 위험도 */}
      <DetailItem<"상" | "중" | "하">
        title="위험도"
        onSetState={setRiskLevel}
        state={port.riskLevel}
        options={riskOptions}
      />
      {/* 구분선 */}
      <div className="w-full border border-gray-300 border-t-0" />
      {/* 최대 사용 시간 */}
      <DetailItem<number>
        title="최대 사용 시간"
        onSetState={setLimitMin}
        state={port.limitMin ?? 0}
        options={limitMinOptions}
      />
    </Tile>
  );
}

export default DetailGroup;
