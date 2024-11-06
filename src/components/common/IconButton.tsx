import { ButtonHTMLAttributes } from "react";
import cn from "../../utils/cn";
import { IoAdd, IoChevronForward, IoPlaySharp, IoPower } from "react-icons/io5";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconType: "plus" | "rchevron" | "play" | "power";
  bigger?: boolean;
}

function IconButton({
  iconType,
  disabled = false,
  bigger = false,
  className,
  ...props
}: IconButtonProps) {
  const baseClassName = "rounded-full flex items-center justify-center";
  const sizeClassName = bigger ? "w-10 h-10 text-xl" : "w-8 h-8 text-xl";
  const bgClassName = disabled ? "bg-gray-100 text-gray-500" : "bg-gray-200";
  const cursorClassName = disabled ? "cursor-default" : "";
  const processedClassName = cn(
    baseClassName,
    sizeClassName,
    bgClassName,
    cursorClassName,
    className
  );
  const icon = {
    plus: <IoAdd />,
    rchevron: <IoChevronForward />,
    play: <IoPlaySharp />,
    power: <IoPower />,
  }[iconType];

  return (
    <button className={processedClassName} {...props} disabled={disabled}>
      {icon}
    </button>
  );
}

export default IconButton;
