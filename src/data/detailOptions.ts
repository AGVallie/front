import OptionType from "../types/OptionType";

export const riskOptions: OptionType<"상" | "중" | "하">[] = [
  {
    value: "하",
  },
  {
    value: "중",
  },
  {
    value: "상",
    color: "text-red-500",
  },
];

export const limitMinOptions: OptionType<number>[] = [
  {
    label: "12시간",
    value: 720,
  },
  {
    label: "6시간",
    value: 720,
  },
  {
    label: "2시간",
    value: 120,
  },
  {
    label: "1시간",
    value: 60,
  },
  {
    label: "30분",
    value: 30,
  },
  {
    label: "설정하지 않음",
    color: "text-red-500",
    value: 0,
  },
];
