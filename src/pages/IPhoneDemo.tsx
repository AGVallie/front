import IPhoneFrame from "../components/common/IPhoneFrame";
import StatusBar from "../components/common/StatusBar";
import NavigationStack from "../components/NavigationStack";
import { NavigationProvider } from "../contexts/NavigationProvider";
function IPhoneDemo() {
  return (
    <IPhoneFrame className="bg-smartthings">
      <StatusBar white />
      <NavigationProvider>
        <NavigationStack />
      </NavigationProvider>
    </IPhoneFrame>
  );
}

export default IPhoneDemo;
