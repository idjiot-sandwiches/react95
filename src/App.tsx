import { Frame, Modal, TaskBar } from "@react95/core";
import { Mmsys113, Settings } from "@react95/icons";
import DesktopIcon from "./components/DesktopIcon";

function App() {
  return (
    <>
      <TaskBar />

      <div>
        <DesktopIcon text="Settings">
          <Settings variant="32x32_4" />
        </DesktopIcon>
      </div>

      <Modal
        id="first-modal"
        icon={<Mmsys113 variant="32x32_4" />}
        title="First Modal"
        dragOptions={{
          defaultPosition: {
            x: 50,
            y: 100,
          },
        }}
        titleBarOptions={<Modal.Minimize />}
        
      >
        <Modal.Content width="350px" boxShadow="$in" bgColor="white" p="16px">
          <Frame as="div" display="flex" flexDirection="column" gap="8px">

          </Frame>
        </Modal.Content>
      </Modal>
    </>
  );
}

export default App;
