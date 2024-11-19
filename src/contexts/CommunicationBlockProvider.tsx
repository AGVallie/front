/* eslint-disable react-refresh/only-export-components */
import { PropsWithChildren } from "react";
import { useState } from "react";
import { CommunicationBlockContext } from "../hooks/useCommunicationBlock";

const CommunicationBlockProvider = ({ children }: PropsWithChildren) => {
  const [blocked] = useState<boolean>(true);

  return (
    <CommunicationBlockContext.Provider value={{ blocked }}>
      {children}
    </CommunicationBlockContext.Provider>
  );
};

export default CommunicationBlockProvider;
