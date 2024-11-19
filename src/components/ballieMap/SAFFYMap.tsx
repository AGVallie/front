import { HTMLAttributes } from "react";
import AreaType from "../../types/AreaType";
import { VStack } from "../common/Stack";

interface SSAFYMapProps extends HTMLAttributes<HTMLDivElement> {
  areas: AreaType[];
  onAreaSelect: (idx: number) => void;
}

function SSAFYMap({ areas, onAreaSelect, ...props }: SSAFYMapProps) {
  return (
    <div {...props}>
      {areas.map((area, idx) => {
        return (
          <VStack
            className="absolute items-center !gap-[0.05rem]"
            style={{ top: area.y, left: area.x }}
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
    </div>
  );
}

export default SSAFYMap;
