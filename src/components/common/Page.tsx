import { HTMLAttributes, PropsWithChildren } from "react";
import NavigationBar from "./NavigationBar";
import { HStack, VStack } from "./Stack";
import cn from "../../utils/cn";
import useScroll from "../../hooks/useScroll";

interface PageProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  hideNavigationBar?: boolean;
}
function Page({
  title = "",
  className,
  children,
  hideNavigationBar = false,
  ...props
}: PropsWithChildren<PageProps>) {
  const { scrollRef, scrollToTop, scroll } = useScroll();

  const containerBaseClassName = "h-0 flex-grow w-full";
  const containerClassName = cn(containerBaseClassName, className);

  const navbarBaseClassName = "absolute transition-colors w-full";
  const navbarScrollClassName = scroll ? "bg-black/30 backdrop-blur" : "";
  const navbarClassName = cn(navbarBaseClassName, navbarScrollClassName);

  const titleBaseClassName =
    "transition-opacity font-bold text-2xl text-white pointer-events-none";
  const titleShowClassName = scroll ? "opacity-0" : "";
  const titleClassName = cn(titleBaseClassName, titleShowClassName);

  //네비게이션 바 있음
  if (!hideNavigationBar)
    return (
      <VStack className={containerClassName} {...props}>
        <div className={navbarClassName}>
          <button className="w-full h-8" onClick={scrollToTop} />
          <NavigationBar title={title} showTitle={scroll > 0} />
        </div>
        <VStack
          className="w-full p-4 gap-4 overflow-auto pt-24"
          ref={scrollRef}
        >
          {title && <span className={titleClassName}> {title} </span>}
          {children}
          {/* 스크롤 테스트용 */}
          <HStack className="min-h-[32rem]" />
        </VStack>
      </VStack>
    );

  //네비게이션 바 없음
  return (
    <VStack className={containerClassName} {...props}>
      <VStack className="w-full p-4 gap-4 overflow-auto" ref={scrollRef}>
        {children}
      </VStack>
    </VStack>
  );
}

export default Page;
