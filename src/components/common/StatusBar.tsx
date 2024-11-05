import { HTMLAttributes, useEffect, useState } from "react";
import { HStack, Spacer } from "./Stack";
import { IoIosBatteryFull, IoIosWifi } from "react-icons/io";
import currentTime from "../../utils/currentTime";
import cn from "../../utils/cn";

interface StatusBarProps extends HTMLAttributes<HTMLDivElement> {
  white?: boolean;
  className?: string;
}

function StatusBar({
  className = "",
  white = false,
  ...props
}: StatusBarProps) {
  const [time, setTime] = useState<string>(currentTime());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(currentTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const baseClassName = "items-center py-2 px-8 font-bold text-lg w-full";
  const colorClassName = white ? "text-white" : "text-black";
  const processedClassName = cn(baseClassName, colorClassName, className);
  return (
    <HStack className={processedClassName} {...props}>
      {time}
      <Spacer />
      <IoIosWifi size={"1.5rem"} />
      <IoIosBatteryFull size={"2rem"} />
    </HStack>
  );
}
export default StatusBar;
