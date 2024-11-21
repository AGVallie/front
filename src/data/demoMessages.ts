import MessageType from "../types/MessageType";

const demoMessages: MessageType[] = [
  {
    id: 0,
    createdAt: new Date(),
    isUser: false,
    text: "Now I'm checking up on Copper.",
  },
  {
    id: 1,
    createdAt: new Date(),
    isUser: false,
    image: "images/etc/dog.png",
    text: "'Hi daddy.' Copper says. ",
  },
  {
    id: 2,
    createdAt: new Date(),
    isUser: true,
    text: "오냐",
  },
  {
    id: 3,
    createdAt: new Date(),
    isUser: false,
    text: "거실의 멀티탭 #1 현황입니다.",
    outlet: {
      id: 0,
      createdAt: new Date(),
      x: 0,
      y: 0,
      angle: 45,
      hasMainSwitch: true,
      hasIndividualSwitch: false,
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
          riskLevel: "상",
          color: "bg-gray-600",
          shape: "rounded-full w-8 h-4",
          isOn: true,
        },
      ],
    },
  },
];
export default demoMessages;
