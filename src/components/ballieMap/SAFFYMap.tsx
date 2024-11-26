import { HTMLAttributes } from "react";
import AreaType from "../../types/AreaType";
import { VStack } from "../common/Stack";
import uuid from "../../utils/uuid";
import BallieIcon from "../icons/BallieIcon";
import useBallieMetaData from "../../hooks/useBallieMetaData";

interface SSAFYMapProps extends HTMLAttributes<HTMLDivElement> {
  areas: AreaType[];
  onAreaSelect: (idx: number) => void;
}
function SSAFYMap({ areas, onAreaSelect, ...props }: SSAFYMapProps) {
  const { curAreaId } = useBallieMetaData();
  return (
    <div {...props}>
      {areas.map((area, idx) => {
        return (
          <VStack
            className="absolute items-center !gap-[0.05rem]"
            style={{ top: area.y, left: area.x }}
            key={`area-${uuid()}`}
          >
            <button
              className={`bg-${area.color}`}
              style={{ width: area.width, height: area.height }}
              onClick={(e) => {
                onAreaSelect(idx);
                e.stopPropagation();
              }}
            />
          </VStack>
        );
      })}
      <div className="relative flex items-center justify-center w-64 h-64 border-[0.4rem] border-black rounded-3xl z-10 overflow-hidden pointer-events-none">
        <span className="text-center font-bold text-slate-300 pointer-events-none">
          SSAFY
        </span>
        <div className="absolute border-[0.4rem] border-black w-12 h-24 top-16 -left-8 rounded-[50%] pointer-events-none" />
        <div className="absolute border-[0.4rem] border-black w-20 h-32 top-0 left-56 rounded-[50%] pointer-events-none" />
      </div>
      <div className="absolute w-20 h-48 top-28 left-64 overflow-hidden pointer-events-none">
        <div className="absolute border-[0.4rem] border-black w-20 h-32 -left-[3.75rem] rounded-[50%] pointer-events-none" />
      </div>
      {/* 볼리 현재 위치 표시 */}
      <div
        className="relative scale-50 z-10 transition-all duration-700 pointer-events-none"
        style={{
          top:
            -248 +
            (areas.filter((area) => area.id === curAreaId)[0]?.y ?? -1000),
          left:
            -56 +
            (areas.filter((area) => area.id === curAreaId)[0]?.x ?? -1000),
        }}
      >
        <BallieIcon className="absolute scale-50 animate-ping" />
        <BallieIcon className="absolute" />
      </div>
    </div>
  );
}

export default SSAFYMap;
