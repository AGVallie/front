import AlertProvider from "./contexts/AlertProvider";
import BallieMetaDataProvider from "./contexts/BallieMetaDataProvider";
import SheetProvider from "./contexts/SheetProvider";
import IPhoneDemo from "./pages/IPhoneDemo";

function App() {
  return (
    <BallieMetaDataProvider>
      <AlertProvider>
        <SheetProvider>
          <IPhoneDemo />
        </SheetProvider>
      </AlertProvider>
    </BallieMetaDataProvider>
  );
}

export default App;
