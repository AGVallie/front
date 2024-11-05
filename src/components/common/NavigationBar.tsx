import cn from "../../utils/cn";
import { HStack, Spacer, VStack } from "./Stack";
import { IoQrCodeOutline } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { IoAddSharp } from "react-icons/io5";
import { IoEllipsisVertical } from "react-icons/io5";
interface NavigationBarProps {
  className?: string;
  white?: boolean;
  title: string;
  showTitle?: boolean;
}

function NavigationBar({
  className,
  white = false,
  title,
  showTitle = false,
}: NavigationBarProps) {
  const titleBaseClassName = "absolute font-bold text-white transition-opacity";
  const titleShowClassName = showTitle ? "" : "opacity-0";
  const titleProcessedClassName = cn(titleBaseClassName, titleShowClassName);

  return (
    <VStack
      className={cn(
        className,
        "w-full h-12 items-center justify-center top-0 z-10",
        white ? "bg-secondary" : ""
      )}
    >
      <span className={titleProcessedClassName}> {title}</span>
      <HStack className="items-center py-2 pl-4 pr-6 w-full border-none gap-4">
        <IoQrCodeOutline color="white" />
        <span className=" text-white"> 집(1)</span>
        <Spacer />
        <IoHome color="white" />
        <IoAddSharp size="1.5rem" color="white" />
        <IoEllipsisVertical color="white" />
      </HStack>
    </VStack>
  );
}
export default NavigationBar;
