import { useState } from "react";
import { TaskBar } from "@react95/core";
import { Gcdef100, Mplayer10, Settings } from "@react95/icons";
import type { Windows } from "./type/type";
import Desktop from "./components/Desktop";
import ModalList from "./components/ModalList";

function App() {
  const [windows, setWindows] = useState<Windows>([
    {
      id: "settings",
      text: "Settings",
      icon: <Settings variant="32x32_4" />,
      show: false,
    },
    {
      id: "anime",
      text: "Anime List",
      icon: <Mplayer10 variant="32x32_4" />,
      show: false,
    },
    {
      id: "games",
      text: "Games",
      icon: <Gcdef100 variant="32x32_4" />,
      show: false,
    },
  ]);

  const handleModal = (id: string, show: boolean) => {
    setWindows((prev) =>
      prev.map((window) =>
        window.id === id
          ? {
              ...window,
              show,
            }
          : window,
      ),
    );
  };

  const handleOpen = (id: string) => handleModal(id, true);

  return (
    <>
      <TaskBar />
      <Desktop windows={windows} handleOpen={handleOpen} />
      <ModalList windows={windows} />
    </>
  );
}

export default App;
