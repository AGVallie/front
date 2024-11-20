import IPhoneFrame from "../components/common/IPhoneFrame";
import Modal from "../components/common/modals/Modal";
import StatusBar from "../components/common/StatusBar";
import NavigationStack from "../components/NavigationStack";
import { NavigationProvider } from "../contexts/NavigationProvider";
import useSheet from "../hooks/useSheet";
function IPhoneDemo() {
  const { showSheet, sheetContent, closeSheet } = useSheet();
  return (
    <IPhoneFrame>
      <StatusBar white />
      <NavigationProvider>
        <div
          className={`w-full h-full overflow-hidden rounded-[2rem] bg-smartthings transition-transform duration-300 ${showSheet ? "scale-95" : ""}`}
        >
          <NavigationStack />
        </div>
      </NavigationProvider>
      {/* 시트(전역) */}
      <Modal
        modalType="sheet"
        show={showSheet}
        onClose={closeSheet}
        className="h-[95%]"
      >
        {sheetContent}
      </Modal>
    </IPhoneFrame>
  );
}

export default IPhoneDemo;
