/* eslint-disable react-hooks/exhaustive-deps */
import { IoAddSharp, IoEllipsisVertical } from "react-icons/io5";
import { VStack, HStack, Spacer } from "../../components/common/Stack";
import Tile from "../../components/common/Tile";
import { useState } from "react";
import AreaOutletGroupTile from "../../components/ballieMap/AreaOutletGroupTile";
import SSAFYMap from "../../components/ballieMap/SAFFYMap";
import Grid from "../../components/common/Grid";
import areas from "../../data/areas";

const MAP_SCALE_FACTOR = 1.5;

export function BallieMapView() {
  // const { path } = useNavigation();
  // const { data: areaDtos, refetch } = useFetch<null, AreaDtoType[]>(
  //   getAllAreasWithOutletsURL(),
  //   "GET"
  // );
  // const [areas, setAreas] = useState<AreaType[]>([]);
  const [selectedArea, setSelectedArea] = useState(-1);
  const mapSize = selectedArea == -1 ? 300 : 150;

  // const refetchMap = () => setTimeout(refetch, 500);

  const onMapClick = () => {
    setSelectedArea(-1);
  };
  const onAreaSelect = (idx: number) => {
    if (selectedArea != idx) setSelectedArea(idx);
    else setSelectedArea(-1);
  };

  // useEffect(() => {
  //   if (!areaDtos) return;
  //   const newAreas: AreaType[] = areaDtos.map(areaDtoToAreaType);
  //   setAreas(newAreas);
  // }, [areaDtos]);
  // 경로 바뀌면 리페치 (채팅창에서 업데이트될수도있음)
  // useEffect(() => {
  //   if (path.length == 1) refetch();
  // }, [path]);

  if (!areas) return <></>;

  // 구역 선택 시 지도 확대 및 이동
  const ssafyMapStyle: React.CSSProperties = {
    scale: selectedArea === -1 ? `${mapSize / 350}` : `${MAP_SCALE_FACTOR}`,
    translate:
      selectedArea === -1
        ? ""
        : `${(-areas[selectedArea].x + 104) * MAP_SCALE_FACTOR}px ${(-areas[selectedArea].y + 104) * MAP_SCALE_FACTOR}px`,
    transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
  };

  return (
    <VStack className="w-full h-full gap-3">
      {/* 보는 영역 */}
      <Tile
        className="items-center justify-center p-12 overflow-hidden shrink-0 transition-all"
        style={{ height: `${mapSize}px` }}
        onClick={onMapClick}
      >
        <SSAFYMap
          style={ssafyMapStyle}
          onAreaSelect={setSelectedArea}
          areas={areas}
        />
      </Tile>
      {/* 인터랙션 영역 */}
      <Grid className="w-full gap-3 overflow-y-auto" cols={2}>
        {areas.map((area, idx) => (
          <AreaOutletGroupTile
            key={idx}
            area={area}
            isSelected={selectedArea === idx}
            onClick={() => onAreaSelect(idx)}
            // refetch={refetchMap}
          />
        ))}
      </Grid>
    </VStack>
  );
}

export function BallieMapViewNavigationBar() {
  return (
    <>
      <HStack className="items-center justify-center py-2 pl-4 pr-6 w-full border-none gap-4">
        <span className="absolute font-bold"> SSAFY 맵 </span>
        <Spacer />
        <IoAddSharp size="1.5rem" />
        <IoEllipsisVertical />
      </HStack>
    </>
  );
}
