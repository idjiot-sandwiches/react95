import { useState, type ReactElement } from "react";
import { Alert, List, Modal, TitleBar, useModal } from "@react95/core";
import { Awfxex32Info } from "@react95/icons";

interface Props extends React.PropsWithChildren {
  id: string;
  text: string;
  icon: ReactElement;
  desc?: string;
}

function ModalContent({ id, text, icon, desc, children }: Props) {
  const { add, restore, focus, minimize, remove } = useModal();
  // const [show, setShow] = useState(false);

  const handleClose = (id: string) => {
    minimize(id);
    remove(id);
  };

  // const handleRestore = (id: string) => {
  //   if (!show) {
  //     setShow(true);
  //     return;
  //   }

  //   add({
  //     id: id,
  //     title: text,
  //     icon: icon,
  //     hasButton: true,
  //   });
  //   restore(id);
  //   focus(id);
  // };

  return (
    <>
      {/* {show && (
        <Alert
          message={desc || ""}
          id={id + "-help"}
          title="About"
          icon={<Awfxex32Info variant="32x32_4" />}
          type="info"
          dragOptions={{
            defaultPosition: {
              x: window.innerWidth * 0.2,
              y: window.innerHeight * 0.4,
            },
          }}
          titleBarOptions={[
            <TitleBar.Close
              key="close"
              onClick={() => handleClose(id + "-help")}
            />,
          ]}
          buttons={[
            {
              value: "Ok",
              onClick: () => handleClose(id + "-help"),
            },
          ]}
        />
      )} */}

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
