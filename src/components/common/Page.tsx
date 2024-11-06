import { HTMLAttributes, PropsWithChildren } from "react";
import NavigationBar from "./NavigationBar";
import { HStack, VStack } from "./Stack";
import cn from "../../utils/cn";
import useScroll from "../../hooks/useScroll";

interface PageProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
}
function Page({
  title = "",
  className,
  children,
  ...props
}: PropsWithChildren<PageProps>) {
  const { scrollRef, scrollToTop, scroll } = useScroll();

  const containerBaseClassName = "h-0 flex-grow w-full";
  const containerClassName = cn(containerBaseClassName, className);

  const navbarBaseClassName = "absolute transition-colors w-full";
  const navbarScrollClassName = scroll ? "bg-black/30 backdrop-blur" : "";
  const navbarClassName = cn(navbarBaseClassName, navbarScrollClassName);

  const titleBaseClassName = "transition-opacity font-bold text-2xl text-white";
  const titleShowClassName = scroll ? "opacity-0" : "";
  const titleClassName = cn(titleBaseClassName, titleShowClassName);

  return (
    <VStack className={containerClassName} {...props}>
      <div className={navbarClassName}>
        <button className="w-full h-8" onClick={scrollToTop} />
        <NavigationBar title={title} showTitle={scroll > 0} />
      </div>
      <VStack className="w-full p-4 gap-4 overflow-auto pt-24" ref={scrollRef}>
        {title && <span className={titleClassName}> {title} </span>}
        {children}
        {/* 스크롤 테스트용 */}
        <HStack className="min-h-[128rem]" />
      </VStack>
    </VStack>
  );
}

export default Page;
