import cn from "../../../utils/cn";
interface BallieIconProps {
  className?: string;
}

function BallieIcon({ className }: BallieIconProps) {
  const baseClassName =
    "flex items-center justify-center w-16 h-16 rounded-full bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-slate-300 to-slate-100";
  const processedClassName = cn(baseClassName, className);
  return (
    <div className={processedClassName}>
      <div className="w-1/2 h-1/2 rounded-full bg-white shadow-inner shadow-slate-400" />
    </div>
  );
}
export default BallieIcon;
