import { HTMLAttributes, PropsWithChildren } from "react";
import { VStack } from "./Stack";
import cn from "../../utils/cn";

interface IPhoneFrameProps extends HTMLAttributes<HTMLDivElement> {}
function IPhoneFrame({
  className,
  children,
  ...props
}: PropsWithChildren<IPhoneFrameProps>) {
  const containerClassName = "w-full flex flex-col justify-center items-center";
  const baseClassName = `
    relative w-iPhone h-iPhone shadowed iPhone:mt-2 iPhone:rounded-[2rem]
    iPhone:border-2 border-black items-center !gap-0 box-content overflow-hidden`;
  const processedClassName = cn(baseClassName, className);

  return (
    <div className={containerClassName}>
      <VStack className={processedClassName} {...props}>
        {children}
        <HomeIndicator />
      </VStack>
    </div>
  );
}

function HomeIndicator() {
  return <div className="bg-black w-32 h-[0.3rem] rounded-full mb-2" />;
}

export default IPhoneFrame;
