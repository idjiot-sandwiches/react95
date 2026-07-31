import { createContext, useEffect, useRef, useState } from "react";
import Screen from "./Screen";

interface Props extends React.PropsWithChildren {}

const Context = createContext({
  boot: true,
});

const sleep = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

function Provider({ children }: Props) {
  const [boot, setBoot] = useState<boolean>(true);
  const [splash, setSplash] = useState<boolean>(false);
  const audioRef = useRef(new Audio("./audio/startup.ogg"));

  const applyWallpaper = () => {
    const match = document.cookie.match(
      new RegExp("(^| )" + "wallpaper" + "=([^;]+)"),
    );

    const wallpaper = match ? decodeURIComponent(match[2]) : "";
    const root = document.getElementById("root");

    if (root) {
      root.style.backgroundImage = wallpaper ? `url("${wallpaper}")` : "";
    }
  };

  const playAudio = () => {
    audioRef.current.volume = 0.2;
    audioRef.current.play();
  };

  const onChange = (id: string) => {
    if (id === "Continue Startup") {
      setBoot(false);
      setSplash(true);
      applyWallpaper();
      playAudio();
    }
  };

  useEffect(() => {
    (async () => {
      await sleep(3000);
      setSplash(false);
    })();
  }, [boot]);

  return (
    <Context.Provider
      value={{
        boot: boot,
      }}
    >
      {boot ? (
        <div className="absolute w-full h-full flex z-50 bg-black">
          <Screen onChange={onChange} />
        </div>
      ) : null}

      {splash ? (
        <div className="absolute w-full h-full flex justify-center items-center z-50 bg-black">
          <span className="text-center text-4xl text-white">
            This is a splash screen
          </span>
        </div>
      ) : null}

      {children}
    </Context.Provider>
  );
}

export default Provider;
