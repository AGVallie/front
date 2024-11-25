import { createContext, useContext } from "react";

type BallieMetaDataContextProp = {
  curArea: number;
  curState: string;
};

export const BallieMetaDataContext = createContext<BallieMetaDataContextProp>({
  curArea: -1,
  curState: "",
});

const useBallieMetaData = () => useContext(BallieMetaDataContext);
export default useBallieMetaData;
