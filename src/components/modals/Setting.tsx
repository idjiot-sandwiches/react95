import { useState } from "react";
import { Frame } from "@react95/core";
import { Computer4 } from "@react95/icons";
import Wallpaper from "../settings/Wallpaper";

function Setting() {
  const settings: Record<string, any> = {
    wallpaper: {
      icon: <Computer4 variant="32x32_4" />,
      name: "Wallpaper",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, perspiciatis. Doloribus quas nisi, excepturi esse laudantium quibusdam nemo explicabo corporis vitae, provident error cumque praesentium sed molestias rerum quia nobis.",
      page: <Wallpaper />,
    },
  };

  const [active, setActive] = useState<string | undefined | null>();

  return (
    <>
      <div className="flex pt-1 w-175 h-125">
        <Frame
          w="50%"
          h="100%"
          bgColor="$material"
          boxShadow="$in"
          padding="$2"
        >
          <Frame
            h="100%"
            bgColor="white"
            overflow="auto"
            padding="$4"
            className="grid grid-cols-2 gap-2 auto-rows-max"
          >
            {Object.entries(settings).map(([key, val]) => (
              <Frame
                key={val.name}
                className="flex flex-col items-center justify-start p-2 text-center select-none hover:cursor-pointer"
                onClick={() => setActive(key)}
              >
                {val.icon}
                <span>{val.name}</span>
              </Frame>
            ))}
          </Frame>
        </Frame>
        <Frame
          w="100%"
          h="100%"
          bgColor="$material"
          boxShadow="$in"
          padding="$2"
        >
          <Frame h="100%" bgColor="white" overflow="auto" padding="$4">
            {active && <>{settings[active].page}</>}
          </Frame>
        </Frame>
      </div>
    </>
  );
}

export default Setting;
