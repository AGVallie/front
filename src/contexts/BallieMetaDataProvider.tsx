import { PropsWithChildren } from "react";
import { useState } from "react";
import { BallieMetaDataContext } from "../hooks/useBallieMetaData";
import useMqtt from "../hooks/useMqtt";

const BallieMetaDataProvider = ({ children }: PropsWithChildren) => {
  const [curArea, setCurArea] = useState<number>(-1);
  const [curState, setCurState] = useState<string>("");
  useMqtt({
    "test/state": (message: Buffer | string) => setCurState(`${message}`),
    "test/area": (message: Buffer | string) => setCurArea(+message),
  });

  return (
    <BallieMetaDataContext.Provider value={{ curArea, curState }}>
      {children}
    </BallieMetaDataContext.Provider>
  );
};

export default BallieMetaDataProvider;
