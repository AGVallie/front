import { HTMLAttributes, useState } from "react";
import AreaType from "../../types/AreaType";
import { VStack } from "../common/Stack";
import uuid from "../../utils/uuid";
import useMqtt from "../../hooks/useMqtt";
import BallieIcon from "../icons/BallieIcon";

interface SSAFYMapProps extends HTMLAttributes<HTMLDivElement> {
  areas: AreaType[];
  onAreaSelect: (idx: number) => void;
}
const MQTT_POS_TOPIC = "test/pos";
function SSAFYMap({ areas, onAreaSelect, ...props }: SSAFYMapProps) {
  useMqtt({
    [MQTT_POS_TOPIC]: (message) => setCurArea(+message.toString()),
  });
  const [curArea, setCurArea] = useState(0);

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
        className="relative scale-50 z-10 transition-all pointer-events-none"
        style={{
          top:
            -248 + (areas.filter((area) => area.id === curArea)[0]?.y ?? -1000),
          left:
            -56 + (areas.filter((area) => area.id === curArea)[0]?.x ?? -1000),
        }}
      >
        <BallieIcon className="absolute scale-50 animate-ping" />
        <BallieIcon className="absolute" />
      </div>
    </div>
  );
}

export default SSAFYMap;
