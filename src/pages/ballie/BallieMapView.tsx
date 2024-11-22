import { IoAddSharp, IoEllipsisVertical } from "react-icons/io5";
import { VStack, HStack, Spacer } from "../../components/common/Stack";
import Tile from "../../components/common/Tile";
import { useEffect, useState } from "react";
import AreaOutletGroupTile from "../../components/ballieMap/AreaOutletGroupTile";
import SSAFYMap from "../../components/ballieMap/SAFFYMap";
import Grid from "../../components/common/Grid";
import { useFetch } from "../../hooks/useFetch";
import AreaType from "../../types/AreaType";
import { getAllAreasURL } from "../../utils/urlFactory";
import { AreaDtoType } from "../../types/DTOs";

const MAP_SCALE_FACTOR = 1.5;

export function BallieMapView() {
  const { data: areaDtos } = useFetch<null, AreaDtoType[]>(
    getAllAreasURL(),
    "GET"
  );
  const [areas, setAreas] = useState<AreaType[]>([]);
  const [selectedArea, setSelectedArea] = useState(-1);
  const mapSize = selectedArea == -1 ? 300 : 150;

  const onMapClick = () => {
    setSelectedArea(-1);
  };
  const onAreaSelect = (idx: number) => {
    if (selectedArea != idx) setSelectedArea(idx);
    else setSelectedArea(-1);
  };

  useEffect(() => {
    if (!areaDtos) return;
    const newAreas: AreaType[] = areaDtos.map((areaDto: AreaDtoType) => {
      const newArea: AreaType = {
        id: areaDto.area_id,
        width: areaDto.area_width,
        height: areaDto.area_height,
        color: areaDto.area_color,
        y: areaDto.area_top,
        x: areaDto.area_left,
        name: areaDto.area_name,
        outlets: areaDto.outlets.map((outletDto) => ({
          id: outletDto.outlet_id,
          createdAt: outletDto.outlet_created_at,
          angle: outletDto.outlet_angle,
          hasMainSwitch: outletDto.outlet_has_main_switch == 1 ? true : false,
          hasIndividualSwitch:
            outletDto.outlet_has_main_switch == 1 ? true : false,
          color: outletDto.outlet_color,
          portCount: outletDto.outlet_port_count,
          name: outletDto.outlet_name,
          isOn: outletDto.outlet_is_on == 1 ? true : false,
          checkedAt: outletDto.outlet_checked_at,
          ports: outletDto.ports.map((portDto) => ({
            id: portDto.port_id,
            outletId: portDto.outlet_id,
            position: portDto.port_position,
            createdAt: portDto.port_created_at,
            riskLevel: portDto.port_risk_level,
            limitMin: portDto.port_limit_min,
            color: portDto.port_color,
            shape: portDto.port_shape,
            isOn: portDto.port_is_on == 1 ? true : false,
          })),
        })),
      };
      return newArea;
    });
    setAreas(newAreas);
  }, [areaDtos]);

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
