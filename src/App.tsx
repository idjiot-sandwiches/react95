import { useState } from "react";
import { FilePencil, Gcdef100, Mplayer10, Settings } from "@react95/icons";
import type { Windows } from "./type/type";
import Desktop from "./components/Desktop";
import Taskbar from "./components/Taskbar";
import ModalList from "./components/ModalList";

function App() {
  const [windows, setWindows] = useState<Windows>([
    {
      id: "about",
      text: "About Me",
      icon: <FilePencil variant="32x32_4" />,
      desc: "Lorem ipsum dolor sit, ",
      show: true,
      taskbar: true,
    },
    {
      id: "settings",
      text: "Settings",
      icon: <Settings variant="32x32_4" />,
      desc: "Lorem ipsum dolor sit, ",
      show: false,
      taskbar: true,
    },
    {
      id: "anime",
      text: "Anime List",
      icon: <Mplayer10 variant="32x32_4" />,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse hic quia, porro deserunt, molestiae nisi consequuntur natus obcaecati quo, est cum nostrum doloribus. Repudiandae fugiat sequi ratione aperiam laborum est?",
      show: false,
      taskbar: false,
    },
    {
      id: "games",
      text: "Games",
      icon: <Gcdef100 variant="32x32_4" />,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse hic quia, porro deserunt, molestiae nisi consequuntur natus obcaecati quo, est cum nostrum doloribus. Repudiandae fugiat sequi ratione aperiam laborum est?",
      show: false,
      taskbar: false,
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
      <Taskbar windows={windows} handleOpen={handleOpen} />
      <Desktop windows={windows} handleOpen={handleOpen} />
      <ModalList windows={windows} />
    </>
  );
}

export default App;
