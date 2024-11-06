import { HTMLAttributes } from "react";
import { VStack } from "./Stack";
import cn from "../../utils/cn";

interface TileProps extends HTMLAttributes<HTMLDivElement> {
  fit?: boolean;
}
function Tile({ className = "", fit = false, children, ...props }: TileProps) {
  const baseClassName = "bg-gray-50 rounded-2xl";
  const sizeClassName = fit ? "w-fit p-2 pr-6" : "w-full p-4";
  const processedClassName = cn(baseClassName, sizeClassName, className);

  return (
    <VStack className={processedClassName} {...props}>
      {children}
    </VStack>
  );
}
export default Tile;
