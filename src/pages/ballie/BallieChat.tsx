/* eslint-disable react-hooks/exhaustive-deps */
import { IoSearch } from "react-icons/io5";
import { VStack, HStack, Spacer } from "../../components/common/Stack";
import { MessageDTO } from "../../types/MessageType";
import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
import useScroll from "../../hooks/useScroll";
import ChatBubble from "../../components/ballieChat/ChatBubble";
import { convertMessageDTOToMessageType } from "../../utils/typeConverter";
import useNavigation from "../../hooks/useNavigation";
import { BsChevronLeft, BsMicFill } from "react-icons/bs";
import Tile from "../../components/common/Tile";
import BallieIcon from "../../components/icons/BallieIcon";
import useBallieMetaData from "../../hooks/useBallieMetaData";
import SpeechRecognizer from "../../components/ballieChat/SpeechRecognizer";
import demoMessages from "../../data/demoMessages";

const chatServerURL: string = import.meta.env.VITE_CHAT_SERVER_URL;

export function BallieChat() {
  // const [messages, setMessages] = useState<MessageType[]>([]);
  const messages = demoMessages;
  const [socket, setSocket] = useState<Socket>();
  const [draft, setDraft] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { scrollRef, scrollTo } = useScroll();
  const [isFocused, setIsFocused] = useState<boolean>(false); // focus 상태 관리
  const [isWaiting, setIsWaiting] = useState(false);
  const [first, setFirst] = useState(false);
  const [showMic, setShowMic] = useState(false);
  const [idleTimer, setIdleTimer] = useState<NodeJS.Timeout>();
  const submit = (draft: string) => {
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
    socketInstance.on("chat history", (_messages: MessageDTO[]) => {
      // setMessages((prevMessages) => [
      //   ...prevMessages,
      //   ...messages.map(convertMessageDTOToMessageType),
      // ]);
      socketInstance.off("chat history");
    });
    socketInstance.on("chat message", (msg: MessageDTO) => {
      console.log(msg);
      const newMessage = convertMessageDTOToMessageType(msg);
      if (!newMessage.isUser) {
        setIsWaiting(false);
      }

      // setMessages((prevMessages) => [...prevMessages, newMessage]); // 상태 업데이트하여 메시지 표시
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

  useEffect(() => {
    clearTimeout(idleTimer);
    const timer = setTimeout(() => {
      if (draft && showMic) {
        submit(draft);
        setShowMic(false);
      }
    }, 3000);
    setIdleTimer(timer);
  }, [draft]);

  return (
    <VStack className="pt-12 h-full">
      <BallieChatNavigationBar />
      <VStack
        className="flex-grow 
        gap-3 overflow-y-scroll px-3 pb-2"
        ref={scrollRef}
      >
        {messages.map((message) => {
          return (
            <ChatBubble
              key={`message-${message.id}`}
              message={message}
            ></ChatBubble>
          );
        })}
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
            onFocus={() => {
              setIsFocused(true);
              setShowMic(false);
            }}
            onBlur={() => setIsFocused(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter") submit(draft);
            }}
          />
          <button
            className="bg-gray-200 rounded-full p-2"
            onClick={() => {
              setDraft("");
              setShowMic((state) => !state);
            }}
          >
            <BsMicFill />
          </button>
        </HStack>
        <div
          className={`transition-all ${isFocused || showMic ? "h-60" : "h-0"}`}
        >
          {showMic ? <SpeechRecognizer onDone={setDraft} /> : <></>}
        </div>
      </VStack>
    </VStack>
  );
}

export function BallieChatNavigationBar() {
  const { curArea, curState } = useBallieMetaData();

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
          <span className="text-yellow-500"> {curState}</span>
          <span className="text-gray-800"> {curArea}</span>
        </HStack>
      </HStack>
      <Spacer />
      <IoSearch size="1.25rem" />
    </HStack>
  );
}
