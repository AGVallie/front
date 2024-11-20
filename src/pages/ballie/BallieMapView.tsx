import { IoAddSharp, IoEllipsisVertical } from "react-icons/io5";
import { VStack, HStack, Spacer } from "../../components/common/Stack";
import Tile from "../../components/common/Tile";
import { useState } from "react";
import AreaOutletGroupTile from "../../components/ballieMap/AreaOutletGroupTile";
import SSAFYMap from "../../components/ballieMap/SAFFYMap";
import areas from "../../data/areas";
import Grid from "../../components/common/Grid";

const MAP_SCALE_FACTOR = 1.5;

export function BallieMapView() {
  const [selectedArea, setSelectedArea] = useState(-1);
  const mapSize = selectedArea == -1 ? 300 : 150;

  const onMapClick = () => {
    setSelectedArea(-1);
  };
  const onAreaSelect = (idx: number) => {
    if (selectedArea != idx) setSelectedArea(idx);
    else setSelectedArea(-1);
  };

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
        className="items-center justify-center p-12 overflow-hidden shrink-0"
        style={{
          height: `${mapSize}px`,
          transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
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
