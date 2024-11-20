import { createContext, useContext } from "react";

type SheetContextProp = {
  showSheet: boolean;
  sheetContent: React.ReactNode;
  triggerSheet: (element: JSX.Element) => void;
  closeSheet: () => void;
};

export const SheetContext = createContext<SheetContextProp>({
  showSheet: false,
  triggerSheet: () => {
    throw new Error("Function not implemented.");
  },
  closeSheet: () => {
    throw new Error("Function not implemented.");
  },
  sheetContent: undefined,
});

const useSheet = () => useContext(SheetContext);
export default useSheet;
