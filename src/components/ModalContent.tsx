import { type ReactElement } from "react";
import { List, Modal, TitleBar, useModal } from "@react95/core";

interface Props extends React.PropsWithChildren {
  id: string;
  text: string;
  icon: ReactElement;
  desc?: string;
}

function ModalContent({ id, text, icon, children }: Props) {
  const { minimize, remove } = useModal();

  const handleClose = (id: string) => {
    minimize(id);
    remove(id);
  };

  return (
    <>
      <Modal
        id={id}
        icon={icon}
        title={text}
        dragOptions={{
          defaultPosition: {
            x: window.innerWidth * Math.random() * (0.2 - 0.1 + 0.1),
            y: window.innerHeight * Math.random() * (0.2 - 0.1 + 0.1),
          },
        }}
        titleBarOptions={[
          <Modal.Minimize key="minimize" />,
          <TitleBar.Close key="close" onClick={() => handleClose(id)} />,
        ]}
        menu={[
          {
            name: "F\u0332ile",
            list: (
              <List width="200px">
                <List.Item onClick={() => handleClose(id)}>Exit</List.Item>
              </List>
            ),
          },
          {
            name: "H\u0332elp",
            list: (
              <List width="200px">
                <List.Item>
                  About
                </List.Item>
              </List>
            ),
          },
        ]}
      >
        {children}
      </Modal>
    </>
  );
}

export default ModalContent;
