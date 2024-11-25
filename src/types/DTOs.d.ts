export type AreaDtoType = {
  area_id: number;
  area_width: number;
  area_height: number;
  area_color: string;
  area_top: number;
  area_left: number;
  area_name: string;
  outlets: OutletDtoType[];
};

export type OutletDtoType = {
  outlet_id: number;
  outlet_created_at: Date;
  outlet_angle: number;
  outlet_has_main_switch: number;
  outlet_has_individual_switch: number;
  outlet_color: string;
  outlet_port_count: number;
  outlet_area_id: number;
  outlet_name: string;
  outlet_is_on: 1 | 0;
  outlet_checked_at: Date;
  ports: PortDtoType[];
};

export type PortDtoType = {
  port_id: number;
  outlet_id: number;
  port_position: number;
  port_created_at: Date;
  port_risk_level: "상" | "중" | "하";
  port_started_at: Date;
  port_ended_at: Date;
  port_limit_min: number;
  port_name: string;
  port_color: string;
  port_shape: string;
  port_is_on: 1 | 0;
};

export type OutletRequestDtoType = {
  outlet_id: number;
  outlet_name?: string;
};

export type PortsRequestDtoType = {
  port_id: number;
  port_name?: string;
  port_risk_level?: "상" | "중" | "하";
  port_limit_min?: number;
}[];
