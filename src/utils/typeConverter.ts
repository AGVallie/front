import AreaType from "../types/AreaType";
import {
  AreaDtoType,
  OutletDtoType,
  OutletRequestDtoType,
  PortsRequestDtoType,
} from "../types/DTOs";
import MessageType, { MessageDTO } from "../types/MessageType";
import OutletType from "../types/OutletType";
import PortType from "../types/PortType";

export const convertMessageDTOToMessageType = (
  dto: MessageDTO
): MessageType => {
  return {
    id: dto.message_id,
    createdAt: new Date(dto.message_created_at ?? new Date()),
    isUser: dto.message_is_user,
    text: dto.message_text,
    image: dto.message_image,
    itemId: dto.message_item_id,
    itemType: dto.message_item_type,
  };
};

export const areaDtoToAreaType = (areaDto: AreaDtoType): AreaType => ({
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
    hasIndividualSwitch: outletDto.outlet_has_main_switch == 1 ? true : false,
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
      name: portDto.port_name,
    })),
  })),
});

export const outletDtoToOutletType = (
  outletDto: OutletDtoType
): OutletType => ({
  id: outletDto.outlet_id,
  createdAt: outletDto.outlet_created_at,
  angle: outletDto.outlet_angle,
  hasMainSwitch: outletDto.outlet_has_main_switch == 1 ? true : false,
  hasIndividualSwitch: outletDto.outlet_has_main_switch == 1 ? true : false,
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
    name: portDto.port_name,
  })),
});

export const outletTypeToOutletRequestDto = (
  outletDto: OutletType
): OutletRequestDtoType => ({
  outlet_id: outletDto.id,
  outlet_name: outletDto.name,
});

export const portTypesToPortsRequestDto = (
  ports: PortType[]
): PortsRequestDtoType =>
  ports.map((port: PortType) => ({
    port_id: port.id,
    port_name: port.name,
    port_risk_level: port.riskLevel,
    port_limit_min: port.limitMin,
  }));
