import { useState } from "react";
import OutletType from "../../types/OutletType";
import PortType from "../../types/PortType";
import Outlet from "../common/Outlet";
import { VStack } from "../common/Stack";
import Tile from "../common/Tile";
import DetailGroup from "./DetailGroup";

interface OutletDetailProps {
  outlet: OutletType;
}

function OutletDetail({ outlet }: OutletDetailProps) {
  const [ports, setPorts] = useState<PortType[]>(outlet.ports);
  const changePort = (newPort: PortType) => {
    const newPorts = ports.map((port) =>
      port.position == newPort.position ? newPort : port
    );
    setPorts(newPorts);
  };
  return (
    <VStack className="h-full pb-12 items-center gap-4 overflow-y-auto">
      {/* 보는 영역 */}
      <VStack className="w-full pt-6 items-center sticky top-0 gap-4 bg-gray-50 shadow-lg shadow-gray-50">
        <Outlet outlet={outlet} showIndex className="scale-110 sticky" />
        <Tile className="bg-white">
          <span className="font-bold text-center">
            {outlet.name ?? `멀티탭 #${outlet.id}`}
          </span>
        </Tile>
      </VStack>

      {/* 인터렉션 영역 (스크롤) */}
      <span className="text-xs text-gray-500">
        최근 점검 일시: {outlet.checkedAt?.toLocaleString() ?? "점검 이력 없음"}
      </span>
      {outlet.ports.map((port) => (
        <VStack className="w-full">
          <span className="text-lg font-bold">{`${port.position + 1}번 포트`}</span>
          <DetailGroup
            port={port}
            onChange={changePort}
            isOutletOff={!outlet.isOn}
          />
        </VStack>
      ))}
    </VStack>
  );
}

export default OutletDetail;
