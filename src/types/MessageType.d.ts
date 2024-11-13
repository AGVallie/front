import OutletType from "./OutletType";

type MessageType = {
  id: number;
  createdAt: Date;
  isUser: boolean;
  text: string;
  image?: string;
  itemId?: number;
  itemType?: string;
  outlet?: OutletType;
};

export default MessageType;
