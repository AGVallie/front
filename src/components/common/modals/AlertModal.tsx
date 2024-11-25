import { useCallback, useEffect, useRef } from "react";
import { AlertProps } from "../../../contexts/AlertProvider";
import cn from "../../../utils/cn";
import { HStack, VStack } from "../Stack";
import Modal from "./Modal";
import uuid from "../../../utils/uuid";

interface AlertModalProps {
  show: boolean;
  closeAlert: () => void;
  alertProps: AlertProps;
}

function AlertModal({ show, closeAlert, alertProps }: AlertModalProps) {
  const {
    title,
    content,
    cancelLabel,
    cancelClassName,
    onCancel,
    confirmLabel,
    confirmClassName,
    onConfirm,
    placeholder,
    onConfirmWithInput,
  } = alertProps;

  const inputRef = useRef<HTMLInputElement>(null);
  const inputEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Escape") {
      inputRef.current?.blur();
      closeAlert();
    }
    if (e.key == "Enter") {
      inputRef.current?.blur();
      if (inputRef.current && onConfirmWithInput)
        onConfirmWithInput(inputRef.current.value);
      if (onConfirm) onConfirm();
      closeAlert();
    }
  };

  // 확인: 인풋 있을 때 확인 + 일반 확인
  const confirm = useCallback(() => {
    if (onConfirmWithInput && inputRef.current)
      onConfirmWithInput(inputRef.current.value);
    if (onConfirm) onConfirm();
  }, [onConfirm, onConfirmWithInput]);

  const InputClassName =
    "rounded border-gray-400 border-[0.5px] p-1 self-center mx-2 mb-2";

  const baseCancelClassName = "p-2 font-bold w-full";
  const processedCancelClassName = cn(baseCancelClassName, cancelClassName);

  const baseConfirmClassName = "p-2 w-full";
  const processedConfirmClassName = cn(baseConfirmClassName, confirmClassName);

  // 자동 포커스
  useEffect(() => {
    if (!show) return;
    if (inputRef.current) inputRef.current.focus();
  }, [show]);

  return (
    <Modal show={show} onClose={() => {}} xButton={false} modalType="alert">
      {/* 보이는 영역 */}
      <VStack className="items-center text-center px-6 py-4">
        {/* 제목 */}
        {title && <span className="font-bold">{title}</span>}
        {/* 내용 */}
        <span className="text-sm">{content}</span>
      </VStack>

      {/* 인터랙션 영역 */}
      {/* 인풋 */}
      {onConfirmWithInput && (
        <input
          key={uuid()}
          className={InputClassName}
          placeholder={placeholder}
          ref={inputRef}
          onKeyDown={inputEvent}
        />
      )}
      {/* 버튼 */}
      <HStack
        onClick={closeAlert}
        className="!p-0 min-w-44 text-blue-500 border-t-[0.5px] border-gray-400 !gap-0"
      >
        {/* 취소 */}
        {cancelLabel && (
          <>
            <button className={processedCancelClassName} onClick={onCancel}>
              {cancelLabel}
            </button>
            <div className="border-r-[0.5px] border-gray-400" />
          </>
        )}
        {/* 확인 */}
        <button className={processedConfirmClassName} onClick={confirm}>
          {confirmLabel}
        </button>
      </HStack>
    </Modal>
  );
}

export default AlertModal;
