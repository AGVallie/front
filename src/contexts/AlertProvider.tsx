import { PropsWithChildren, useCallback } from "react";
import { useState } from "react";
import { AlertContext } from "../hooks/useAlert";

export interface AlertProps {
  title?: string;
  content?: string;
  cancelLabel?: string;
  cancelClassName?: string;
  onCancel?: () => void;
  confirmLabel: string;
  confirmClassName?: string;
  onConfirm?: () => void;
  placeholder?: string;
  onConfirmWithInput?: (input: string) => void;
}

const AlertProvider = ({ children }: PropsWithChildren) => {
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertProps, setAlertProps] = useState<AlertProps>({
    confirmLabel: "",
  });

  const triggerAlert = useCallback((props: AlertProps) => {
    setAlertProps(props);
    setShowAlert(true);
  }, []);

  const closeAlert = useCallback(() => setShowAlert(false), []);

  return (
    <AlertContext.Provider
      value={{
        showAlert,
        alertProps,
        triggerAlert,
        closeAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
