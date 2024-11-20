import { PropsWithChildren, useCallback } from "react";
import { useState } from "react";
import { SheetContext } from "../hooks/useSheet";

const SheetProvider = ({ children }: PropsWithChildren) => {
  const [showSheet, setShowSheet] = useState<boolean>(false);

  const [sheetContent, setSheetContet] = useState<React.ReactNode>();
  const closeSheet = useCallback(() => setShowSheet(false), []);
  const triggerSheet = (element: JSX.Element) => {
    setSheetContet(element);
    setShowSheet(true);
  };
  return (
    <SheetContext.Provider
      value={{ showSheet, sheetContent, closeSheet, triggerSheet }}
    >
      {children}
    </SheetContext.Provider>
  );
};

export default SheetProvider;
