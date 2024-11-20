import SheetProvider from "./contexts/SheetProvider";
import IPhoneDemo from "./pages/IPhoneDemo";

function App() {
  return (
    <SheetProvider>
      <IPhoneDemo />
    </SheetProvider>
  );
}

export default App;
