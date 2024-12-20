import AreaType from "../types/AreaType";

const areas: AreaType[] = [
  {
    id: 0,
    width: 48,
    height: 48,
    color: "orange-500",
    y: -24,
    x: 64,
    name: "주황색 방",
    outlets: [
      {
        id: 0,
        createdAt: new Date(),

        angle: 45,
        hasMainSwitch: true,
        hasIndividualSwitch: false,
        isOn: true,
        color: "bg-white",
        portCount: 4,
        ports: [
          {
            id: 0,
            outletId: 0,
            position: 0,
            createdAt: new Date(),
            riskLevel: "하",
            color: "bg-white",
            shape: "rounded-full w-8 h-6",
            isOn: true,
          },
          {
            id: 1,
            outletId: 0,
            position: 2,
            createdAt: new Date(),
            riskLevel: "하",
            color: "bg-pink-300",
            shape: "rounded-md w-8 h-6",
            isOn: true,
          },
          {
            id: 2,
            outletId: 0,
            position: 3,
            createdAt: new Date(),
            riskLevel: "하",
            color: "bg-gray-600",
            shape: "rounded-full w-8 h-4",
            isOn: true,
          },
        ],
      },
      {
        id: 1,
        name: "침대 옆 멀티탭",
        createdAt: new Date(),
        isOn: true,

        angle: 0,
        hasMainSwitch: true,
        hasIndividualSwitch: true,
        color: "bg-white",
        portCount: 6,
        ports: [
          {
            id: 0,
            outletId: 0,
            position: 0,
            createdAt: new Date(),
            riskLevel: "하",
            color: "bg-white",
            shape: "rounded-full w-8 h-6",
            isOn: false,
          },
          {
            id: 1,
            outletId: 0,
            position: 2,
            createdAt: new Date(),
            riskLevel: "하",
            color: "bg-blue-300",
            shape: "rounded-md w-8 h-6",
            isOn: true,
          },
          {
            id: 2,
            outletId: 0,
            position: 5,
            createdAt: new Date(),
            riskLevel: "하",
            color: "bg-gray-600",
            shape: "rounded-full w-8 h-6",
            isOn: true,
          },
        ],
      },
    ],
  },
  {
    id: 1,
    width: 48,
    height: 48,
    color: "yellow-300",
    y: 96,
    x: 224,
    outlets: [
      {
        id: 0,
        createdAt: new Date(),

        angle: 45,
        hasMainSwitch: true,
        hasIndividualSwitch: false,
        isOn: true,
        color: "bg-white",
        portCount: 4,
        ports: [
          {
            id: 0,
            outletId: 0,
            position: 0,
            createdAt: new Date(),
            riskLevel: "하",
            color: "bg-white",
            shape: "rounded-full w-8 h-6",
            isOn: true,
          },
          {
            id: 1,
            outletId: 0,
            position: 2,
            createdAt: new Date(),
            riskLevel: "하",
            color: "bg-pink-300",
            shape: "rounded-md w-8 h-6",
            isOn: true,
          },
          {
            id: 2,
            outletId: 0,
            position: 3,
            createdAt: new Date(),
            riskLevel: "하",
            color: "bg-gray-600",
            shape: "rounded-full w-8 h-4",
            isOn: true,
          },
        ],
      },
      {
        id: 1,
        name: "침대 옆 멀티탭",
        createdAt: new Date(),

        angle: 0,
        hasMainSwitch: true,
        hasIndividualSwitch: true,
        color: "bg-white",
        portCount: 6,
        ports: [
          {
            id: 0,
            outletId: 0,
            position: 0,
            createdAt: new Date(),
            riskLevel: "하",
            color: "bg-white",
            shape: "rounded-full w-8 h-6",
            isOn: true,
          },
          {
            id: 1,
            outletId: 0,
            position: 2,
            createdAt: new Date(),
            riskLevel: "하",
            color: "bg-blue-300",
            shape: "rounded-md w-8 h-6",
            isOn: true,
          },
          {
            id: 2,
            outletId: 0,
            position: 5,
            createdAt: new Date(),
            riskLevel: "하",
            color: "bg-gray-600",
            shape: "rounded-full w-8 h-6",
            isOn: true,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    width: 48,
    height: 48,
    color: "red-500",
    y: 224,
    x: 192,
    outlets: [],
  },
  {
    id: 3,
    width: 48,
    height: 48,
    color: "blue-500",
    y: 224,
    x: 32,
    outlets: [],
  },
  {
    id: 4,
    width: 48,
    height: 48,
    color: "purple-500",
    y: 160,
    x: -24,
    outlets: [],
  },
  {
    id: 5,
    width: 48,
    height: 48,
    color: "green-500",
    y: 24,
    x: -24,
    outlets: [],
  },
];

export default areas;

//bg-orange-500 border-orange-500
//bg-yellow-300 border-yellow-300
//bg-red-500 border-red-500
//bg-blue-500 border-blue-500
//bg-purple-500 border-purple-500
//bg-green-500 border-green-500
