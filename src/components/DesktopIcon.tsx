import { Frame, useModal } from "@react95/core";
import type { ReactElement } from "react";

interface Props {
  id: string,
  text: string,
  icon: ReactElement,
  show: boolean,
  open: () => void
}

function DesktopIcon({ id, text, icon, show, open }: Props) {
  const { add, restore, focus } = useModal();

  const handleRestore = () => {
    if (!show) {
      open();
      return; 
    }
    
    add({
      id: id,
      title: text,
      icon: icon,
      hasButton: true
    });
    restore(id);
    focus(id);
  };

  return (
    <>
      <Frame 
        className="flex flex-col items-center w-17.5 h-17.5 justify-center text-white select-none hover:cursor-pointer"
        onClick={handleRestore}
      >
        {icon}
        <p>{text}</p>
      </Frame>
    </>
  );
}

export default DesktopIcon;
