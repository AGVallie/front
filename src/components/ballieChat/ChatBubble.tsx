import MessageType from "../../types/MessageType";
import cn from "../../utils/cn";
import to12HourFormat from "../../utils/to12HourFormat";
import Outlet from "../common/Outlet";
import { HStack, VStack } from "../common/Stack";
import Tile from "../common/Tile";
import BallieIcon from "../common/icons/BallieIcon";

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
export default ChatBubble;
