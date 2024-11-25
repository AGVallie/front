const baseURL: string = import.meta.env.VITE_API_SERVER_URL;

export const getAllAreasWithOutletsURL = () => `${baseURL}/areawithoutlets`;
export const getAllAreasURL = () => `${baseURL}/areas`;
export const getOutletWithPortsURL = (id: number) =>
  `${baseURL}/outletwithports?outlet_id=${id}`;
export const patchOutletURL = (id: number) =>
  `${baseURL}/outlets?outlet_id=${id}`;
export const patchPortsURL = () => `${baseURL}/ports`;
