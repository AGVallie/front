import { HTMLAttributes, PropsWithChildren } from "react";
import NavigationBar from "./NavigationBar";
import { HStack, VStack } from "./Stack";
import cn from "../../utils/cn";
import useScroll from "../../hooks/useScroll";

interface PageProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  white?: boolean;
  transparent?: boolean;
  hideTitle?: boolean;
  navigationBar: () => JSX.Element;
}
function Page({
  title = "",
  className,
  white = false,
  transparent = false,
  hideTitle = false,
  children,
  navigationBar,
  ...props
}: PropsWithChildren<PageProps>) {
  const { scrollRef, scrollToTop, scroll } = useScroll();

  const containerBaseClassName = "h-0 flex-grow w-full";
  const containerClassName = cn(containerBaseClassName, className);

  const navbarBaseClassName = "absolute transition-colors w-full";
  const navbarScrollClassName = scroll ? "backdrop-blur" : "";
  const navBarScrollBgColorClassName =
    !transparent && scroll ? "bg-black/30" : "";
  const navbarClassName = cn(
    navbarBaseClassName,
    navBarScrollBgColorClassName,
    navbarScrollClassName
  );

  const titleBaseClassName =
    "transition-opacity font-bold text-2xl pointer-events-none";
  const titleColorClassName = white ? "text-white" : "text-black";
  const titleShowClassName = scroll ? "opacity-0" : "";
  const titleHideClassName = !title || hideTitle ? "hidden" : "";
  const titleClassName = cn(
    titleBaseClassName,
    titleColorClassName,
    titleHideClassName,
    titleShowClassName
  );

  const Content = navigationBar;
  return (
    <VStack className={containerClassName} {...props}>
      <div className={navbarClassName}>
        <button className="w-full h-8" onClick={scrollToTop} />
        <NavigationBar
          title={title}
          showTitle={!hideTitle && scroll > 0}
          className={titleColorClassName}
        >
          <Content />
        </NavigationBar>
      </div>
      <VStack className="w-full p-4 gap-4 overflow-auto pt-24" ref={scrollRef}>
        {<span className={titleClassName}> {title} </span>}
        {children}
        {/* 스크롤 테스트용 */}
        <HStack className="min-h-[32rem]" />
      </VStack>
    </VStack>
  );
}

export default Page;
