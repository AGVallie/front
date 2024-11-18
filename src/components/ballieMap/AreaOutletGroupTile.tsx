import AreaType from "../../types/AreaType";
import cn from "../../utils/cn";
import Outlet from "../common/Outlet";
import { HStack, Spacer, VStack } from "../common/Stack";
import Tile from "../common/Tile";
import IconButton from "../common/IconButton";
import { RxChevronDown, RxChevronRight } from "react-icons/rx";

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
  const baseClassName = "transition-all shrink-0 border-2 !p-0";
  const borderClassName = isSelected
    ? `border-${area.color}`
    : "border-transparent";
  const processedClassName = cn(baseClassName, borderClassName);
  const onCount: number = area.outlets.reduce((prev, cur) => {
    if (!cur.hasMainSwitch || cur.isOn) return prev + 1;
    else return prev;
  }, 0);
  const offCount = area.outlets.length - onCount;

  return (
    <Tile className={processedClassName}>
      <HStack className="items-center gap-2 p-2" onClick={onClick}>
        <div className={`w-2 h-2 rounded-full bg-${area.color}`} />
        <span className="font-bold">방 #{area.id + 1}</span>
        <Spacer />
        <span className="text-sm font-bold text-nowrap">
          {onCount > 0 && (
            <>
              <span className="text-red-500">■</span>
              <span> {onCount} </span>
            </>
          )}
          {offCount > 0 && (
            <>
              <span className="text-red-900">■</span>
              <span> {offCount}</span>
            </>
          )}
        </span>
        {isSelected ? <RxChevronDown /> : <RxChevronRight />}
      </HStack>
      {isSelected &&
        (area.outlets.length ? (
          <VStack className="px-4 pb-4 items-start gap-4">
            {area.outlets.map((outlet) => (
              <VStack className="w-full">
                <HStack className="items-center">
                  <span className="text-sm font-bold">
                    {outlet.name ?? `멀티탭 #${outlet.id}`}
                  </span>
                  {/* <IoPencil
                  size="0.75rem"
                  color="gray"
                  className="border-b border-gray-400"
                /> */}
                </HStack>
                <HStack className="w-full items-center">
                  <Outlet
                    key={`outlet-${area.id}-${outlet.id}`}
                    outlet={outlet}
                  />
                  <Spacer />
                  <IconButton iconType={"rchevron"} />
                </HStack>
              </VStack>
            ))}
          </VStack>
        ) : (
          <span
            className="text-sm text-gray-500 text-center pb-4"
            onClick={onClick}
          >
            등록된 플러그가 없습니다.
          </span>
        ))}
    </Tile>
  );
}

export default AreaOutletGroupTile;
