import IPhoneFrame from "../components/common/IPhoneFrame";
import AlertModal from "../components/common/modals/AlertModal";
import Modal from "../components/common/modals/Modal";
import NavigationStack from "../components/common/navigations/NavigationStack";
import StatusBar from "../components/common/StatusBar";
import { NavigationProvider } from "../contexts/NavigationProvider";
import useAlert from "../hooks/useAlert";
import useSheet from "../hooks/useSheet";
function IPhoneDemo() {
  const { showSheet, sheetContent, closeSheet } = useSheet();
  const { showAlert, alertProps, closeAlert } = useAlert();
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
        className="!h-[95%]"
      >
        {sheetContent}
      </Modal>
      {/* 알림(전역) */}
      <AlertModal
        show={showAlert}
        closeAlert={closeAlert}
        alertProps={alertProps}
      />
    </IPhoneFrame>
  );
}

export default IPhoneDemo;
