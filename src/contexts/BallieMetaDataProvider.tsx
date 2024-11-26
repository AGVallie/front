import { PropsWithChildren, useEffect } from "react";
import { useState } from "react";
import { BallieMetaDataContext } from "../hooks/useBallieMetaData";
import useMqtt from "../hooks/useMqtt";
import { useFetch } from "../hooks/useFetch";
import { AreaDtoType } from "../types/DTOs";
import { getAllAreasURL } from "../utils/urlFactory";

const BallieMetaDataProvider = ({ children }: PropsWithChildren) => {
  const [curAreaId, setCurAreaId] = useState<number>(-1);
  const [curState, setCurState] = useState<string>("");
  useMqtt({
    "test/state": (message: Buffer | string) => setCurState(`${message}`),
    "test/area": (message: Buffer | string) => {
      console.log(message);
      setCurAreaId(+message);
    },
  });
  const { data } = useFetch<null, AreaDtoType[]>(getAllAreasURL(), "GET");

  const curArea =
    !data || curAreaId == -1
      ? ""
      : (data.filter((area) => area.area_id == curAreaId)[0]?.area_name ??
        `방 #${curAreaId + 1}`);

  return (
    <BallieMetaDataContext.Provider value={{ curArea, curAreaId, curState }}>
      {children}
    </BallieMetaDataContext.Provider>
  );
};

export default BallieMetaDataProvider;
