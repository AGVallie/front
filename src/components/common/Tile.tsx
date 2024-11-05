import { HTMLAttributes } from "react";
import { VStack } from "./Stack";
import cn from "../../utils/cn";

interface TileProps extends HTMLAttributes<HTMLDivElement> {}
function Tile({ className = "", children, ...props }: TileProps) {
  const baseClassName = "w-full bg-gray-50 rounded-2xl p-4";
  const processedClassName = cn(baseClassName, className);

  return (
    <VStack className={processedClassName} {...props}>
      {children}
    </VStack>
  );
}
export default Tile;
