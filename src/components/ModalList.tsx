import type { ReactNode } from "react";
import type { Windows } from "../type/type";
import ModalContent from "./ModalContent";
import Anime from "./modals/Anime";
import Games from "./modals/Games";
import Setting from "./modals/Setting";

interface Props {
  windows: Windows;
}

type Component = Record<string, ReactNode>;

function ModalList({ windows }: Props) {
  const components: Component = {
    settings: <Setting />,
    anime: <Anime />,
    games: <Games />,
  };

  return (
    <>
      {windows.map(
        (w) =>
          w.show && (
            <ModalContent
              key={w.id}
              id={w.id}
              text={w.text}
              icon={w.icon}
            >
              {components[w.id]}
            </ModalContent>
          ),
      )}
    </>
  );
}

export default ModalList;
