import AreaType from "../../types/AreaType";
import cn from "../../utils/cn";
import { HStack, Spacer, VStack } from "../common/Stack";
import Tile from "../common/Tile";
import { RxChevronDown, RxChevronRight } from "react-icons/rx";
import OutletItem from "./OutletItem";

interface AreaOutletGroupTileProps {
  isSelected: boolean;
  area: AreaType;
  onClick: () => void;
}
function AreaOutletGroupTile({
  isSelected,
  area,
  onClick,
}: AreaOutletGroupTileProps) {
  const baseClassName = "transition-all shrink-0 border-2 !p-0 overflow-hidden";
  const borderClassName = isSelected
    ? `border-${area.color}`
    : "border-transparent";
  const sizeClassName = isSelected ? "!pt-2 !w-89.5 z-10" : "h-16";
  const oddClassName =
    isSelected && area.id & 1 ? "-translate-x-[11.6rem]" : "";
  const processedClassName = cn(
    baseClassName,
    sizeClassName,
    oddClassName,
    borderClassName
  );
  const onCount: number = area.outlets.reduce((prev, cur) => {
    if (!cur.hasMainSwitch || cur.isOn) return prev + 1;
    else return prev;
  }, 0);

  return (
    <Tile
      className={processedClassName}
      onClick={() => {
        if (!isSelected) onClick();
      }}
    >
      <VStack className="h-full justify-center !gap-0">
        {/* 제목 */}
        <HStack className="items-center px-2" onClick={onClick}>
          <VStack>
            <HStack className="items-center">
              <div className={`w-2 h-2 rounded-full bg-${area.color}`} />
              <span className="text-xs font-bold">
                {area.name ?? `방 #${area.id + 1}`}
              </span>
            </HStack>
            {area.outlets.length > 0 && (
              <span className="text-xs font-bold text-gray-500">
                {onCount} 켜짐
              </span>
            )}
          </VStack>
          <Spacer />
          {isSelected ? <RxChevronDown /> : <RxChevronRight />}
        </HStack>
        {/* 내용 */}
        <div
          className={`transition-all overflow-hidden self-center ${isSelected ? "" : "w-0 h-0"}`}
        >
          {area.outlets.length ? (
            <VStack className="px-4 pt-4 pb-8 items-start gap-8">
              {area.outlets.map((outlet) => (
                <OutletItem key={`outlet-${outlet.id}`} outlet={outlet} />
              ))}
            </VStack>
          ) : (
            <span
              className="text-sm text-gray-500 text-nowrap"
              onClick={onClick}
            >
              등록된 플러그가 없습니다.
            </span>
          )}
        </div>
      </VStack>
    </Tile>
  );
}

export default AreaOutletGroupTile;
