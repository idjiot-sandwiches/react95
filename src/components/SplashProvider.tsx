import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

const SplashContext = createContext({
  showSplash: () => {},
  hideSplash: () => {},
  isShown: true,
});

interface Props extends React.PropsWithChildren {}

export const SplashProvider = ({ children }: Props) => {
  const [isShown, setIsShown] = useState(true);
  const audioRef = useRef(new Audio('./audio/startup.ogg'));

  const applyRootBackground = useCallback(() => {
    const match = document.cookie.match(
      new RegExp("(^| )" + "wallpaper" + "=([^;]+)")
    );

    const wallpaper = match ? decodeURIComponent(match[2]) : "";
    const root = document.getElementById("root");

    if (root) {
      root.style.backgroundImage = wallpaper ? `url("${wallpaper}")` : "";
    }
  }, []);

  useEffect(() => {
    if (isShown) {
      applyRootBackground();
      audioRef.current.volume = 0.2;
      audioRef.current.play();
    }
  }, [isShown, applyRootBackground]);

  return (
    <SplashContext.Provider
      value={{
        showSplash: () => {
          setIsShown(true);
        },
        hideSplash: () => {
          setIsShown(false);
        },
        isShown,
      }}
    >
      {isShown ? (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50 bg-black">
          <span className="text-center text-4xl text-white">
            This is a splash screen
          </span>
        </div>
      ) : null}
      {children}
    </SplashContext.Provider>
  );
};

export const useSplash = () => {
  const context = useContext(SplashContext);

  if (!context) {
    throw new Error("Must be in SplashProvider!");
  }

  return context;
};
