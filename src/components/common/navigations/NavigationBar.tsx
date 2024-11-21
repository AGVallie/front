import { HTMLAttributes, PropsWithChildren } from "react";
import cn from "../../../utils/cn";
import { VStack } from "../Stack";
interface NavigationBarProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  white?: boolean;
  title: string;
  showTitle?: boolean;
}

function NavigationBar({
  className,
  title,
  showTitle = false,
  children,
  ...props
}: PropsWithChildren<NavigationBarProps>) {
  const titleBaseClassName = "absolute font-bold transition-opacity";
  const titleShowClassName = showTitle ? "" : "opacity-0";
  const titleClassName = cn(titleBaseClassName, titleShowClassName);
  const containerBaseClassName =
    "w-full h-12 items-center justify-center top-0 z-10";
  const containerClassName = cn(containerBaseClassName, className);

  return (
    <VStack className={containerClassName} {...props}>
      <span className={titleClassName}> {title}</span>
      {children}
    </VStack>
  );
}
export default NavigationBar;
