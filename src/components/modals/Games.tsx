import GTAO from "../../assets/icon/GTAO.webp";
import AzurLane from "../../assets/icon/AzurLane.webp";
import Umamusume from "../../assets/icon/Umamusume.webp";
import WarThunder from "../../assets/icon/WarThunder.webp";
import ALPreview from "../../assets/preview/ALPreview.webp";
import WTPreview from "../../assets/preview/WTPreview.webp";
import HSRPreview from "../../assets/preview/HSRPreview.webp";
import UmaPreview from "../../assets/preview/UmaPreview.webp";
import GTAOPreview from "../../assets/preview/GTAOPreview.webp";
import HonkaiStarRail from "../../assets/icon/HonkaiStarRail.webp";
import { useState } from "react";
import { Button, Frame } from "@react95/core";

function Games() {
  const games: Record<string, any> = {
    hsr: {
      icon: HonkaiStarRail,
      name: "Honkai Star Rail",
      img: HSRPreview,
    },
    wt: {
      icon: WarThunder,
      name: "War Thunder",
      img: WTPreview,
    },
    al: {
      icon: AzurLane,
      name: "Azur Lane",
      img: ALPreview,
    },
    gtao: {
      icon: GTAO,
      name: "GTA Online",
      img: GTAOPreview,
    },
    uma: {
      icon: Umamusume,
      name: "Umamusume: Pretty Derby",
      img: UmaPreview,
    },
  };

  const [active, setActive] = useState<string | undefined | null>();

  return (
    <>
      <div className="flex pt-1 w-[600px] h-[450px]">
        <Frame
          w="60%"
          h="100%"
          bgColor="$material"
          boxShadow="$in"
          padding="$2"
        >
          <Frame h="10%">
            <Button w="100%" h="100%">Games I have played.</Button>
          </Frame>
          <Frame
            h="90%"
            bgColor="white"
            overflow="auto"
            padding="$4"
            className="grid grid-cols-2 gap-2 auto-rows-max"
          >
            {Object.entries(games).map(([key, val]) => (
              <Frame
                key={val.name}
                className="flex flex-col items-center justify-start p-2 text-center select-none hover:cursor-pointer"
                onClick={() => setActive(key)}
              >
                <img
                  src={val.icon}
                  alt={val.name}
                  className="w-8 h-8 object-contain"
                />
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
            {active && (
              <>
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  {games[active].name}
                </h2>
                <img src={games[active].img} alt={games[active].name} />
              </>
            )}
          </Frame>
        </Frame>
      </div>
    </>
  );
}

export default Games;
