import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import cn from "../../utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  gray?: boolean;
  roundedFull?: boolean;
}

function Button({
  gray = false,
  disabled = false,
  roundedFull = false,
  className,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) {
  const baseClassName =
    "text-white text-nowrap transition-all p-2 px-8 w-fit h-fit";
  const bgClassName = disabled || gray ? "bg-gray-500" : "bg-blue-500";
  const cursorClassName = disabled ? "cursor-default" : "";
  const roundedClassName = roundedFull ? "rounded-full" : "rounded-md";
  const processedClassName = cn(
    baseClassName,
    bgClassName,
    cursorClassName,
    roundedClassName,
    className
  );

  return (
    <button className={processedClassName} {...props} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
