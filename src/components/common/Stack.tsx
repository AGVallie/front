import { forwardRef, HTMLAttributes, PropsWithChildren } from "react";
import cn from "../../utils/cn";
interface StackProps extends HTMLAttributes<HTMLDivElement> {
  rotated?: boolean;
}

export const VStack = forwardRef<HTMLDivElement, PropsWithChildren<StackProps>>(
  (props, ref) => {
    const { children, className = "", rotated, ...attributes } = props;
    const baseClassName = "flex gap-1";
    const rotatedClassName = rotated ? "flex-row" : "flex-col";
    const processedClassName = cn(baseClassName, rotatedClassName, className);

    return (
      <div {...attributes} ref={ref} className={processedClassName}>
        {children}
      </div>
    );
  }
);
export const HStack = forwardRef<HTMLDivElement, PropsWithChildren<StackProps>>(
  (props, ref) => {
    return <VStack {...props} ref={ref} rotated={!props.rotated} />;
  }
);

export function Spacer() {
  return <div className="flex-grow" />;
}
