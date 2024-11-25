import { useFetchTrigger } from "../../hooks/useFetchTrigger";
import useSheet from "../../hooks/useSheet";
import { OutletRequestDtoType, PortsRequestDtoType } from "../../types/DTOs";
import OutletType from "../../types/OutletType";
import {
  outletTypeToOutletRequestDto,
  portTypesToPortsRequestDto,
} from "../../utils/typeConverter";
import { patchOutletURL, patchPortsURL } from "../../utils/urlFactory";
import uuid from "../../utils/uuid";
import IconButton from "../common/IconButton";
import Outlet from "../common/Outlet";
import { VStack, HStack, Spacer } from "../common/Stack";
import OutletDetail from "./OutletDetail";

interface OutletItemProps {
  outlet: OutletType;
  refetch?: () => void;
}

function OutletItem({ outlet, refetch }: OutletItemProps) {
  const { triggerSheet, closeSheet } = useSheet();
  const { trigger: patchOutletTrigger } = useFetchTrigger<
    OutletRequestDtoType,
    null
  >(patchOutletURL(outlet.id), "PATCH");
  const { trigger: patchPortsTrigger } = useFetchTrigger<
    PortsRequestDtoType,
    null
  >(patchPortsURL(), "PATCH");
  // 변경사항 서버에 보내기
  const saveOutletData = (outlet: OutletType) => {
    patchOutletTrigger(outletTypeToOutletRequestDto(outlet));
    console.log(portTypesToPortsRequestDto(outlet.ports));
    patchPortsTrigger(portTypesToPortsRequestDto(outlet.ports));
    closeSheet();
    if (refetch) refetch();
  };

  const showOutletDetail = () =>
    triggerSheet(
      <OutletDetail key={uuid()} outlet={outlet} onSave={saveOutletData} />
    );
  return (
    <VStack className="w-full">
      <HStack className="items-center">
        <span className="text-sm font-bold">
          {outlet.name ?? `멀티탭 #${outlet.id}`}
        </span>
      </HStack>
      <HStack className="w-full items-center">
        <Outlet outlet={outlet} />
        <Spacer />
        <IconButton iconType={"rchevron"} onClick={showOutletDetail} />
      </HStack>
    </VStack>
  );
}

export default OutletItem;
