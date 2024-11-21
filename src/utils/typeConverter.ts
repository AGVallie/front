import { MessageDTO } from "../types/MessageType";

export const convertMessageDTOToMessageType = (dto: MessageDTO) => {
  return {
    id: dto.message_id,
    createdAt: new Date(dto.message_created_at ?? new Date()),
    isUser: dto.message_is_user,
    text: dto.message_text,
    image: dto.message_image,
    itemId: dto.message_item_id,
    itemType: dto.message_item_type,
  };
};
