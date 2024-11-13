import {
  IoFlaskOutline,
  IoGitNetworkOutline,
  IoHeadsetOutline,
  IoHelpCircleOutline,
  IoMegaphoneOutline,
  IoMicOutline,
  IoNotificationsOutline,
  IoPersonCircle,
  IoSettingsSharp,
  IoTimeOutline,
} from "react-icons/io5";
import { VStack, HStack, Spacer } from "../../components/common/Stack";
import Tile from "../../components/common/Tile";
import StatusBar from "../../components/common/StatusBar";
import { IconType } from "react-icons";

export function Menu() {
  return (
    <>
      <StatusBar className="absolute -translate-x-4 -translate-y-24 z-10" />
      <VStack className="w-full h-full">
        <VStack className="gap-4">
          {menuItems.map((menuSet, menuSetIdx) => (
            <Tile key={`menuSet-${menuSetIdx}`} className="font-bold">
              <VStack className="gap-2">
                {menuSet.map((menu, menuIdx) => (
                  <div key={`menu-${menuSet}-${menuIdx}`}>
                    <MenuItem {...menu} />
                    {menuIdx < menuSet.length - 1 && (
                      <div className="w-full border border-gray-200 border-t-0 mt-3" />
                    )}
                  </div>
                ))}
              </VStack>
            </Tile>
          ))}
        </VStack>
      </VStack>
    </>
  );
}

interface MenuItemProps {
  icon: IconType;
  title: string;
}

function MenuItem({ icon, title }: MenuItemProps) {
  const Icon = icon;
  return (
    <HStack className="items-center w-full gap-4">
      <Icon size={"1.25rem"} />
      <span>{title}</span>
    </HStack>
  );
}

const menuItems: MenuItemProps[][] = [
  [
    {
      icon: IoMicOutline,
      title: "보이스 어시스턴트",
    },
    {
      icon: IoFlaskOutline,
      title: "실험실",
    },
  ],
  [
    {
      icon: IoTimeOutline,
      title: "기록",
    },
    {
      icon: IoNotificationsOutline,
      title: "알림",
    },
  ],
  [
    {
      icon: IoHelpCircleOutline,
      title: "사용 방법",
    },
    {
      icon: IoMegaphoneOutline,
      title: "공지사항",
    },
    {
      icon: IoHeadsetOutline,
      title: "문의하기",
    },
    {
      icon: IoGitNetworkOutline,
      title: "오프라인 기기 진단",
    },
  ],
];

export function MenuNavigationBar() {
  return (
    <HStack className="items-center py-2 pl-4 pr-6 w-full border-none gap-4">
      <span className="font-samsungSharpSans font-bold">SmartThings</span>
      <Spacer />
      <IoPersonCircle size="1.5rem" color="skyblue" />
      <IoSettingsSharp size="1.25rem" />
    </HStack>
  );
}
