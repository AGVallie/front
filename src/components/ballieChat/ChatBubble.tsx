/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useLayoutEffect, useState } from "react";
import { useFetchTrigger } from "../../hooks/useFetchTrigger";
import {
  OutletDtoType,
  OutletRequestDtoType,
  PortsRequestDtoType,
} from "../../types/DTOs";
import MessageType from "../../types/MessageType";
import cn from "../../utils/cn";
import to12HourFormat from "../../utils/to12HourFormat";
import {
  getOutletWithPortsURL,
  patchOutletURL,
  patchPortsURL,
} from "../../utils/urlFactory";
import Outlet from "../common/Outlet";
import { HStack, VStack } from "../common/Stack";
import Tile from "../common/Tile";
import BallieIcon from "../common/icons/BallieIcon";
import OutletType from "../../types/OutletType";
import {
  outletDtoToOutletType,
  outletTypeToOutletRequestDto,
  portTypesToPortsRequestDto,
} from "../../utils/typeConverter";
import Button from "../common/Button";
import useSheet from "../../hooks/useSheet";
import uuid from "../../utils/uuid";
import OutletDetail from "../ballieMap/OutletDetail";

interface ChatBubbleProps {
  message: MessageType;
  className?: string;
}

function ChatBubble({ message, className }: ChatBubbleProps) {
  const [outlet, setOutlet] = useState<OutletType>();
  const [saved, setSaved] = useState<boolean>(false);
  const { data, trigger } = useFetchTrigger<null, OutletDtoType>(
    getOutletWithPortsURL(message.itemId ?? -1),
    "GET"
  );
  useLayoutEffect(() => {
    if (message.itemType == "outlet" && message.itemId != undefined) {
      trigger();
      // return abort;
    }
  }, []);
  useEffect(() => {
    if (data) {
      setOutlet(outletDtoToOutletType(data));
    }
  }, [data]);

  //변경사항 저장용 트리거들
  const { triggerSheet, closeSheet } = useSheet();
  const { trigger: patchOutletTrigger } = useFetchTrigger<
    OutletRequestDtoType,
    null
  >(patchOutletURL(message.itemId ?? -1), "PATCH");
  const { trigger: patchPortsTrigger } = useFetchTrigger<
    PortsRequestDtoType,
    null
  >(patchPortsURL(), "PATCH");

  // 변경사항 서버에 보내기
  const saveOutletData = (outlet: OutletType) => {
    patchOutletTrigger(outletTypeToOutletRequestDto(outlet));
    console.log(portTypesToPortsRequestDto(outlet.ports));
    patchPortsTrigger(portTypesToPortsRequestDto(outlet.ports));
    closeSheet();

    setSaved(true);
  };

  const showOutletDetail = () => {
    if (!outlet) return;
    triggerSheet(
      <OutletDetail
        key={uuid()}
        outlet={message.outlet ?? outlet}
        onSave={saveOutletData}
      />
    );
  };

  const minDiff = new Date() - message.createdAt;

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
            {(message.outlet ?? outlet) && (
              <>
                <Outlet
                  outlet={message.outlet ?? outlet!}
                  className="self-center"
                />
                {!saved && minDiff <= 180000 && (
                  <Button
                    className="mt-2 bg-yellow-500 self-center"
                    onClick={showOutletDetail}
                  >
                    정보 입력하기
                  </Button>
                )}
              </>
            )}
          </Tile>
        )}
        {message.image && (
          <Tile className="!p-0 overflow-hidden max-w-64">
            <img src={message.image} />
          </Tile>
        )}
      </VStack>
      <span className="text-xs font-bold self-end text-nowrap">
        {to12HourFormat(message.createdAt)}
      </span>
    </HStack>
  );
}
export default ChatBubble;
