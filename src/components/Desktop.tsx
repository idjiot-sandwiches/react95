import type { Windows } from "../type/type";
import DesktopIcon from "./DesktopIcon";

interface Props {
  windows: Windows;
  handleOpen: (id: string) => void;
}

function Desktop({ windows, handleOpen }: Props) {
  return (
    <>
      {windows.map((w) => (
        <DesktopIcon
          key={w.id}
          id={w.id}
          text={w.text}
          icon={w.icon}
          show={w.show}
          open={() => handleOpen(w.id)}
        />
      ))}
    </>
  );
}

export default Desktop;
