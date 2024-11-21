/* eslint-disable react-hooks/exhaustive-deps */
import { IoSearch } from "react-icons/io5";
import { VStack, HStack, Spacer } from "../../components/common/Stack";
import MessageType, { MessageDTO } from "../../types/MessageType";
import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
import useScroll from "../../hooks/useScroll";
import ChatBubble from "../../components/ballieChat/ChatBubble";
import uuid from "../../utils/uuid";
import { convertMessageDTOToMessageType } from "../../utils/typeConverter";
import useNavigation from "../../hooks/useNavigation";
import { BsChevronLeft } from "react-icons/bs";
import Tile from "../../components/common/Tile";
import BallieIcon from "../../components/icons/BallieIcon";

const chatServerURL: string = import.meta.env.VITE_CHAT_SERVER_URL;

export function BallieChat() {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [socket, setSocket] = useState<Socket>();
  const [draft, setDraft] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { scrollRef, scrollTo } = useScroll();
  const [isFocused, setIsFocused] = useState<boolean>(false); // focus 상태 관리
  const [isWaiting, setIsWaiting] = useState(false);
  const [first, setFirst] = useState(false);

  const submit = () => {
    if (!socket) return;
    const message: MessageDTO = {
      message_id: 0,
      message_is_user: true,
      message_text: draft,
    };
    setDraft("");
    setIsWaiting(true);
    socket.emit("chat message", message);
  };

  useEffect(() => {
    const socketInstance = io(chatServerURL);
    socketInstance.on("chat history", (messages: MessageDTO[]) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        ...messages.map(convertMessageDTOToMessageType),
      ]);
      socketInstance.off("chat history");
    });
    socketInstance.on("chat message", (msg: MessageDTO) => {
      console.log(msg);
      const newMessage = convertMessageDTOToMessageType(msg);
      if (!newMessage.isUser) {
        setIsWaiting(false);
      }

      setMessages((prevMessages) => [...prevMessages, newMessage]); // 상태 업데이트하여 메시지 표시
    });
    setSocket(socketInstance);
    return () => {
      socketInstance.off("chat message");
      socketInstance.off("chat history");
      socketInstance.close();
    };
  }, []);

  useEffect(() => {
    if (!first) {
      setFirst(true);
      return;
    }
    if (!isWaiting && inputRef.current) inputRef.current.focus();
  }, [isWaiting]);

  useEffect(() => {
    const timer = setTimeout(() => {
      scrollTo(2147483647, "smooth");
    }, 200);
    return () => clearTimeout(timer);
  }, [messages, isFocused]);

  return (
    <VStack className="pt-12 h-full">
      <BallieChatNavigationBar />
      <VStack
        className="flex-grow 
        gap-3 overflow-y-scroll px-3 pb-2"
        ref={scrollRef}
      >
        {messages.map((message) => (
          <ChatBubble key={`message-${uuid()}`} message={message}></ChatBubble>
        ))}
        {isWaiting && (
          <HStack className="gap-2">
            <BallieIcon className="w-8 h-8" />
            <Tile className="!w-16 items-center bg-yellow-300">
              <HStack>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-[bounce2_1s_infinite_000ms]" />
                <div className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-[bounce2_1s_infinite_100ms]" />
                <div className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-[bounce2_1s_infinite_200ms]" />
              </HStack>
            </Tile>
          </HStack>
        )}
      </VStack>
      <VStack className={`!gap-0 bg-gray-50`}>
        <HStack className="w-full justify-center items-center p-1">
          <input
            className="bg-gray-200 rounded-full p-2 w-72"
            onChange={(e) => setDraft(e.currentTarget.value)}
            placeholder="메시지 입력"
            value={draft}
            disabled={isWaiting}
            ref={inputRef}
            onFocus={() => setIsFocused(true)} // input이 focus되면 isFocused를 true로 설정
            onBlur={() => setIsFocused(false)} // input이 blur되면 isFocused를 false로 설정
            onKeyDown={(e) => {
              if (e.key === "Enter") submit();
            }}
          />
        </HStack>
        <div className={`transition-all ${isFocused ? "h-56" : "h-0"}`}>
          <img className="object-fill" src="/images/main/keyboard.jpg" />
        </div>
      </VStack>
    </VStack>
  );
}

export function BallieChatNavigationBar() {
  const { back } = useNavigation();
  return (
    <HStack className="items-center py-2 pl-4 pr-6 w-full border-none gap-4">
      <button onClick={back}>
        <BsChevronLeft />
      </button>
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
