import { HTMLAttributes, PropsWithChildren, useEffect, useState } from "react";
import { VStack } from "./Stack";
import cn from "../../utils/cn";
import Modal from "./modals/Modal";

interface IPhoneFrameProps extends HTMLAttributes<HTMLDivElement> {}
function IPhoneFrame({
  className,
  children,
  ...props
}: PropsWithChildren<IPhoneFrameProps>) {
  const [showKeyboard, setShowKeyboard] = useState(false);
  useEffect(() => {
    const handleFocus = (event: FocusEvent) => {
      const target = event.target as HTMLElement;

      // 모든 input, textarea 요소에 반응
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
        setShowKeyboard(true);
      }
    };

    const handleBlur = () => {
      setShowKeyboard(false); // 포커스가 해제되면 키보드 숨김
    };

    // 전역적으로 focus와 blur 이벤트를 감지
    document.addEventListener("focusin", handleFocus);
    document.addEventListener("focusout", handleBlur);

    return () => {
      document.removeEventListener("focusin", handleFocus);
      document.removeEventListener("focusout", handleBlur);
    };
  }, []);

  const containerClassName = "w-full flex flex-col justify-center items-center";
  const baseClassName = `
    relative w-iPhone h-iPhone shadowed iPhone:mt-2 iPhone:rounded-[2rem]
    iPhone:border-2 border-black items-center !gap-0 box-content overflow-hidden
    bg-black`;
  const processedClassName = cn(baseClassName, className);
  return (
    <div className={containerClassName}>
      <VStack className={processedClassName} {...props}>
        {children}
        <Modal
          show={showKeyboard}
          onClose={() => {}}
          hideBackDrop
          backDrop={false}
          xButton={false}
          className="!m-0 !p-0 !bottom-0 !pb-2 !bg-slate-300 !delay-0"
        >
          <img src="/images/main/keyboard.jpg" />
        </Modal>
      </VStack>
    </div>
  );
}

export default IPhoneFrame;
