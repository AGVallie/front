/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import OutletType from "../../types/OutletType";
import PortType from "../../types/PortType";
import Outlet from "../common/Outlet";
import { VStack } from "../common/Stack";
import Tile from "../common/Tile";
import DetailGroup from "./DetailGroup";
import uuid from "../../utils/uuid";
import useAlert from "../../hooks/useAlert";

interface OutletDetailProps {
  outlet: OutletType;
  onSave: (newOutlet: OutletType) => void;
}

function OutletDetail({ outlet, onSave }: OutletDetailProps) {
  console.log(outlet);
  const [name, setName] = useState<string | undefined>(outlet.name);
  const [ports, setPorts] = useState<PortType[]>([]);
  const changePort = (newPort: PortType) => {
    const newPorts = ports.map((port) =>
      port.position == newPort.position ? newPort : port
    );
    console.log(newPorts);
    setPorts([...newPorts]);
  };
  const { triggerAlert } = useAlert();
  // 처음에는 부모로부터 받은 정보 띄우기 (빈칸 안보여주기)
  useEffect(() => setPorts(outlet.ports), []);

  const onSaveClick = () => {
    triggerAlert({
      content: "변경사항을 저장할까요?",
      cancelLabel: "취소",
      confirmLabel: "확인",
      onConfirm() {
        onSave({ ...outlet, name, ports });
      },
    });
  };

  const onNameClick = () => {
    triggerAlert({
      cancelLabel: "취소",
      confirmLabel: "수정",
      title: `이름 변경:`,
      placeholder: name,
      onConfirmWithInput(input: string) {
        setName(input);
      },
    });
  };

  return (
    <VStack className="h-full pb-12 items-center gap-4 overflow-y-auto">
      {/* 변경사항 있을 시 저장버튼 표시 */}
      {(name != outlet.name || outlet.ports != ports) && (
        <button
          className="absolute top-6 right-6 text-blue-500"
          onClick={onSaveClick}
        >
          저장
        </button>
      )}
      {/* 보는 영역 */}
      <VStack className="w-full pt-6 items-center sticky top-0 gap-4 bg-gray-50 shadow-lg shadow-gray-50">
        <Outlet outlet={outlet} showIndex className="scale-110 sticky" />
        <button onClick={onNameClick}>
          <Tile className="bg-white">
            <span className="font-bold text-center">
              {name ?? `멀티탭 #${outlet.id}`}
            </span>
          </Tile>
        </button>
      </VStack>

      {/* 인터렉션 영역 (스크롤) */}
      <span className="text-xs text-gray-500">
        최근 점검 일시: {outlet.checkedAt?.toLocaleString() ?? "점검 이력 없음"}
      </span>
      {ports.map((port) => (
        <VStack key={uuid()} className="w-full">
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
