import { IoSearch } from "react-icons/io5";
import { VStack, HStack, Spacer } from "../../components/common/Stack";
import MessageType from "../../types/MessageType";
import Tile from "../../components/common/Tile";
import to12HourFormat from "../../utils/to12HourFormat";
import cn from "../../utils/cn";
import BallieIcon from "../../components/icons/BallieIcon";
import Outlet from "../../components/common/Outlet";
import { useEffect, useLayoutEffect, useState } from "react";
import { io } from "socket.io-client";
import useScroll from "../../hooks/useScroll";
import { flushSync } from "react-dom";

export function BallieChat() {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const { scrollRef, scrollTo } = useScroll();
  const socket = io("http://70.12.107.165:3000"); // 서버 주소
  useEffect(() => {
    // 서버로부터 'chat message' 이벤트를 수신하고 메시지를 상태에 추가
    socket.on("chat message", (msg) => {
      console.log("Received message:", msg); // 콘솔에 메시지 출력
      const newMessage: MessageType = {
        id: new Date().getMilliseconds(),
        createdAt: new Date(),
        isUser: msg.isUser,
        text: msg.text,
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]); // 상태 업데이트하여 메시지 표시
    });

    // 컴포넌트가 unmount 될 때 연결 해제
    return () => {
      socket.off("chat message"); // 이벤트 리스너 제거
    };
  }, []);

  useEffect(() => {
    scrollTo(2147483647);
  }, [messages]);
  return (
    <VStack className="gap-3 h-[40rem] overflow-y-auto pb-40" ref={scrollRef}>
      {messages.map((message) => (
        <ChatBubble
          key={`message-${message.id}`}
          message={message}
        ></ChatBubble>
      ))}
    </VStack>
  );
}

interface ChatBubbleProps {
  message: MessageType;
  className?: string;
}

function ChatBubble({ message, className }: ChatBubbleProps) {
  const baseClassName = "gap-2";
  const isUserClassName = message.isUser ? "flex-row-reverse" : "";
  const processedClassName = cn(baseClassName, isUserClassName, className);
  return (
    <HStack className={processedClassName}>
      {!message.isUser && <BallieIcon className="w-8 h-8" />}
      <VStack>
        {message.text && (
          <Tile
            className={`!w-fit max-w-64 ${message.isUser ? "!bg-blue-500 text-white" : "bg-yellow-300"}`}
          >
            <span className="whitespace-pre-wrap">{message.text}</span>
          </Tile>
        )}
        {message.image && (
          <Tile className="!p-0 overflow-hidden max-w-64">
            <img src={message.image} />
          </Tile>
        )}
        {message.outlet && <Outlet outlet={message.outlet} />}
      </VStack>
      <span className="text-xs font-bold self-end text-nowrap">
        {to12HourFormat(message.createdAt)}
      </span>
    </HStack>
  );
}

const messages: MessageType[] = [
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

export function BallieChatNavigationBar() {
  return (
    <HStack className="items-center py-2 pl-4 pr-6 w-full border-none gap-4">
      <span className="font-bold">Ballie</span>
      <HStack className="text-xs font-bold gap-4">
        <HStack className="items-center">
          <div className="w-2 h-2 bg-yellow-500 rounded-full" />
          <span className="text-yellow-500"> 충전 중 </span>
          <span> </span>
          <span className="text-gray-800"> 거실</span>
        </HStack>
      </HStack>
      <Spacer />
      <IoSearch size="1.25rem" />
    </HStack>
  );
}
