import { TaskBar } from "@react95/core";
import { Mmsys113, Settings } from "@react95/icons";
import DesktopIcon from "./components/DesktopIcon";
import ModalContent from "./components/ModalContent";
import { useState } from "react";
import Desktop from "./components/Desktop";

type WindowItem = {
  id: string;
  text: string;
  icon: React.ReactElement;
  show: boolean;
};

type Windows = Record<string, WindowItem>;

function App() {
  const [windows, setWindows] = useState<Windows>({
    settings: {
      id: "settings",
      text: "Settings",
      icon: <Settings variant="32x32_4" />,
      show: false,
    },
    anime: {
      id: "anime",
      text: "Anime List",
      icon: <Mmsys113 variant="32x32_4" />,
      show: false,
    },
  });

  const handleOpen = (id: string) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        show: true,
      },
    }));
  };

  return (
    <>
      <TaskBar />

      <Desktop windows={windows} handleOpen={handleOpen} />

      {windows.settings.show && <ModalContent id={windows.settings.id} text={windows.settings.text} icon={windows.settings.icon}></ModalContent>}
      {windows.anime.show && <ModalContent id={windows.anime.id} text={windows.anime.text} icon={windows.anime.icon}></ModalContent>}
    </>
  );
}

export default App;
