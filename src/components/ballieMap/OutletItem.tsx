import useSheet from "../../hooks/useSheet";
import OutletType from "../../types/OutletType";
import IconButton from "../common/IconButton";
import Outlet from "../common/Outlet";
import { VStack, HStack, Spacer } from "../common/Stack";
import OutletDetail from "./OutletDetail";

interface OutletItemProps {
  outlet: OutletType;
}

function OutletItem({ outlet }: OutletItemProps) {
  const { triggerSheet } = useSheet();
  const showOutletDetail = () => triggerSheet(<OutletDetail outlet={outlet} />);
  return (
    <>
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
    </>
  );
}

export default OutletItem;
