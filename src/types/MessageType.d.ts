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

export type MessageDTO = {
  message_id: number;
  message_created_at?: string;
  message_is_user: boolean;
  message_text: string;
  message_image?: string;
  message_item_id?: number;
  message_item_type?: string;
};

export default MessageType;
