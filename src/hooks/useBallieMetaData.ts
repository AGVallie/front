import { createContext, useContext } from "react";

type BallieMetaDataContextProp = {
  curArea: string;
  curAreaId: number;
  curState: string;
};

export const BallieMetaDataContext = createContext<BallieMetaDataContextProp>({
  curArea: "",
  curAreaId: -1,
  curState: "",
});

const useBallieMetaData = () => useContext(BallieMetaDataContext);
export default useBallieMetaData;
