import { forwardRef, HTMLAttributes, PropsWithChildren } from "react";
import cn from "../../utils/cn";
interface GridProps extends HTMLAttributes<HTMLDivElement> {
  rows?: number;
  cols?: number;
  gap?: number;
}

const Grid = forwardRef<HTMLDivElement, PropsWithChildren<GridProps>>(
  (props, ref) => {
    const { children, rows, cols, gap, className = "", ...attributes } = props;
    const baseClassName = "grid";
    const sizeClassName = `gap-${gap ?? 1} grid-rows-${rows ?? 0} grid-cols-${cols ?? 0}`;
    const processedClassName = cn(baseClassName, sizeClassName, className);

    return (
      <div {...attributes} ref={ref} className={processedClassName}>
        {children}
      </div>
    );
  }
);

export default Grid;

// tailwindcss 컴파일용
// grid-rows-0 grid-rows-1 grid-rows-2 grid-rows-3
// grid-cols-0 grid-cols-1 grid-cols-2 grid-cols-3
