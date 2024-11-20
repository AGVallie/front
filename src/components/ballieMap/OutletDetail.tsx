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
    <VStack className="h-full pt-6 pb-12 items-center gap-4 overflow-y-auto">
      <VStack className="w-full items-center sticky top-0 gap-4 bg-gray-50">
        <Outlet outlet={outlet} showIndex className="scale-110 sticky" />
        <Tile className="bg-white">
          <span className="font-bold text-center">
            {outlet.name ?? `멀티탭 #${outlet.id}`}
          </span>
        </Tile>
      </VStack>
      {Array.from({ length: outlet.portCount }).map((_, idx) => (
        <VStack className="w-full">
          <span className="text-lg font-bold">{`${idx + 1}번 포트`}</span>
          <DetailGroup port={outlet.ports[idx]} onChange={changePort} />
        </VStack>
      ))}
    </VStack>
  );
}

export default OutletDetail;
