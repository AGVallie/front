import { HTMLAttributes, PropsWithChildren, useEffect, useState } from "react";
import cn from "../../../utils/cn";
import StatusBar from "../StatusBar";
import BallieIcon from "../icons/BallieIcon";
import { VStack } from "../Stack";
import TabType from "../../../types/TabType";
import NavigationLink from "../navigations/NavigationLink";
import { BallieChat } from "../../../pages/ballie/BallieChat";
import useMqtt from "../../../hooks/useMqtt";
import useNavigation from "../../../hooks/useNavigation";

interface BallieMenuModalProps extends HTMLAttributes<HTMLDivElement> {
  show: boolean;
  dark?: boolean;
  hideBackDrop?: boolean;
  curTab?: number;
  backDrop?: boolean;
  onClose: () => void;
  onTabSelect: (tab: TabType) => void;
  tabs: TabType[];
}
function BallieMenuModal(modalProps: BallieMenuModalProps) {
  const {
    show,
    hideBackDrop = false,
    curTab,
    backDrop = true,
    onClose,
    onTabSelect,
    className = "",
    tabs,
    ...props
  } = modalProps;
  const [hasNewMessage, setHasNewMessage] = useState<boolean>(false);
  const { path } = useNavigation();
  useMqtt({ "test/new-message": () => setHasNewMessage(true) });
  useEffect(() => setHasNewMessage(false), [path]);
  // 백드롭 클래스네임
  const backdropBaseClassName =
    "absolute top-0 h-full sm:h-iPhone flex flex-col justify-center items-center left-0 w-iPhone z-40 sm:rounded-3xl transition-opacity overflow-hidden";
  const backdropShowClassName = show
    ? "opacity-100"
    : "delay-100 opacity-0 pointer-events-none";
  const backdropHideClassName = hideBackDrop ? "" : "bg-black/50";
  const backdropClassName = cn(
    backdropBaseClassName,
    backdropShowClassName,
    backdropHideClassName
  );
  // 백드롭 온클릭
  const onBackdropClick = () => {
    if (show && backDrop) onClose();
  };

  // 모달 클래스네임
  const modalBaseClassName =
    "absolute -bottom-14 flex items-center justify-center w-60 h-60 p-6 transition-all shadow bg-white rounded-full m-4";
  const modalShowClassName = show
    ? "opacity-100 ease-bounce duration-200"
    : "scale-0 translate-y-12 opacity-0 translate-y-50";

  const modalClassName = cn(modalBaseClassName, modalShowClassName, className);
  const statusBarClassName =
    "absolute top-0 pointer-events-none bg-transparent";

  return (
    <>
      {/* 백드롭(어두운 오버레이) */}
      <div className={backdropClassName}>
        {/* 백드롭 눌러서 끄기 */}
        <button className="w-full h-full" onClick={onBackdropClick} />
        {/* 스테이터스바 */}
        {!hideBackDrop && <StatusBar className={statusBarClassName} white />}
        {/* 모달 */}
        <div className={modalClassName} {...props}>
          <button onClick={onClose} className="z-10">
            <BallieIcon />
          </button>
          {tabs.map((tab, i) => {
            const Icon = curTab == tab.id ? tab.iconSelected : tab.icon;
            return (
              <RotationalMenuHolder
                key={tab.id}
                degree={show ? i * 72 : i * 72 - 45}
              >
                {tab.id == 4 ? (
                  <div onClick={onClose}>
                    {hasNewMessage && (
                      <div className="absolute w-2 h-2 bg-red-500 rounded-full -translate-x-2" />
                    )}
                    <NavigationLink
                      to={{
                        backgroundColor: "bg-smartthings",
                        page: <BallieChat />,
                      }}
                    >
                      <VStack className="items-center">
                        <Icon size="1.7rem" />
                        <span className="text-[0.6rem]">{tab.title}</span>
                      </VStack>
                    </NavigationLink>
                  </div>
                ) : (
                  <button onClick={() => onTabSelect(tab)}>
                    <VStack className="items-center">
                      <Icon size="1.7rem" />
                      <span className="text-[0.6rem]">{tab.title}</span>
                    </VStack>
                  </button>
                )}
              </RotationalMenuHolder>
            );
          })}
        </div>
      </div>
    </>
  );
}

interface RotationalMenuHolderProps {
  degree: number;
}

function RotationalMenuHolder({
  degree,
  children,
}: PropsWithChildren<RotationalMenuHolderProps>) {
  return (
    <div
      className={`absolute transition-transform ease-bounce delay-100 h-48 rotate-[${degree}deg]`}
    >
      <div
        className={`transition-transform rounded-full rotate-[-${degree}deg]`}
      >
        {children}
      </div>
    </div>
  );
}

export default BallieMenuModal;

//tailwindcss 컴파일용
//rotate-[72deg] rotate-[144deg] rotate-[216deg] rotate-[288deg] rotate-[360deg]
//rotate-[-72deg] rotate-[-144deg] rotate-[-216deg] rotate-[-288deg] rotate-[-360deg] rotate-[-45deg]
//rotate-[27deg] rotate-[99deg] rotate-[171deg] rotate-[243deg] rotate-[315deg]
//rotate-[-27deg] rotate-[-99deg] rotate-[-171deg] rotate-[-243deg] rotate-[-315deg] -rotate-[0deg]
