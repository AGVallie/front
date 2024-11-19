import { createContext, useContext } from "react";

type CommunicationBlockContextProp = {
  blocked: boolean;
};

export const CommunicationBlockContext =
  createContext<CommunicationBlockContextProp>({
    blocked: false,
  });

const useCommunicationBlock = () => useContext(CommunicationBlockContext);
export default useCommunicationBlock;
