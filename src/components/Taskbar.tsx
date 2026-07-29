import { Computer3 } from "@react95/icons";
import { List, TaskBar, useModal } from "@react95/core";
import type { ReactElement } from "react";
import type { Windows } from "../type/type";
import GitHub from "../assets/icon/GitHub.webp";

interface Props {
  windows: Windows;
  handleOpen: (id: string) => void;
}

function Taskbar({ windows, handleOpen }: Props) {
  const { add, restore, focus } = useModal();

  const handleRestore = (
    id: string,
    text: string,
    icon: ReactElement,
    show: boolean,
  ) => {
    if (!show) {
      handleOpen(id);
      return;
    }

    add({
      id: id,
      title: text,
      icon: icon,
      hasButton: true,
    });
    restore(id);
    focus(id);
  };

  return (
    <>
      <TaskBar
        list={
          <List>
            <List.Item
              icon={
                <img
                  src={GitHub}
                  alt="Github"
                  style={{
                    width: "32px",
                    marginLeft: "-20px",
                    marginRight: "10px",
                  }}
                />
              }
              onClick={() =>
                window.open(
                  "https://github.com/idjiot-sandwiches/react95",
                  "_blank",
                )
              }
            >
              Source Code
            </List.Item>
            {windows.map(
              (w) =>
                w.taskbar && (
                  <List.Item
                    icon={w.icon}
                    onClick={() => handleRestore(w.id, w.text, w.icon, w.show)}
                  >
                    {w.text}
                  </List.Item>
                ),
            )}
            <List.Divider />
            <List.Item icon={<Computer3 variant="32x32_4" />}>
              Shut Down...
            </List.Item>
          </List>
        }
      />
    </>
  );
}

export default Taskbar;
