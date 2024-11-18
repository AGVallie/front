import OutletType from "../../types/OutletType";
import PortType from "../../types/PortType";
import cn from "../../utils/cn";
import { HStack, VStack } from "./Stack";

interface OutletProps {
  outlet: OutletType;
}

function Outlet({ outlet }: OutletProps) {
  const baseClassName =
    "border-4 border-gray-300 rounded-full items-center p-2 !w-fit";
  const sizeClassName = outlet.hasIndividualSwitch ? "h-16 !pt-0" : "h-12";
  const processedClassName = cn(baseClassName, sizeClassName, outlet.color);
  return (
    <HStack className={processedClassName}>
      {outlet.hasMainSwitch && (
        <div
          className={`w-3.5 h-4 border-2 border-gray-300 bg-red-500 ${outlet.isOn ? "bg-red-500" : "bg-red-900"}`}
        />
      )}
      {Array.from({ length: outlet.portCount }).map((_, idx) => {
        const port: PortType | undefined = outlet.ports.filter(
          (port) => port.position == idx
        )[0];
        if (!port)
          return (
            <HStack
              className={`flex border-4 border-gray-300 w-8 h-8 rounded-full items-center justify-center -rotate-${outlet.angle}`}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
            </HStack>
          );

        const baseClassName = `absolute border-4 border-slate-400 rotate-${outlet.angle}`;
        const processedClassName = cn(baseClassName, port.color, port.shape);
        return (
          <VStack className="relative flex border-4 border-gray-300 w-8 h-8 rounded-full items-center justify-center">
            <div className={processedClassName} />
            {outlet.hasIndividualSwitch && (
              <div
                className={`absolute top-8 w-3 h-2.5 border-2 border-gray-300 bg-red-500 ${outlet.isOn && port.isOn ? "bg-red-500" : "bg-red-900"}`}
              />
            )}
          </VStack>
        );
      })}
    </HStack>
  );
}

export default Outlet;
// rotate-45 -rotate-45
