import { createContext, useContext } from "react";
import { AlertProps } from "../contexts/AlertProvider";

type AlertContextProp = {
  showAlert: boolean;
  alertProps: AlertProps;
  triggerAlert: (props: AlertProps) => void;
  closeAlert: () => void;
};

export const AlertContext = createContext<AlertContextProp>({
  showAlert: false,
  alertProps: {
    confirmLabel: "",
  },
  triggerAlert: function (): void {
    throw new Error("Function not implemented.");
  },
  closeAlert: function (): void {
    throw new Error("Function not implemented.");
  },
});

const useAlert = () => useContext(AlertContext);
export default useAlert;
