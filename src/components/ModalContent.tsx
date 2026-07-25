import { Frame, Modal, TitleBar, useModal } from "@react95/core";
import type { ReactElement } from "react";

interface Props extends React.PropsWithChildren {
  id: string,
  text: string,
  icon: ReactElement,
}

function ModalContent({ id, text, icon, children }: Props) {
  const { minimize, remove } = useModal();

  const handleClose = () => {
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
            x: 50,
            y: 100,
          },
        }}
        titleBarOptions={[<Modal.Minimize key="minimize" />, <TitleBar.Close key="close" onClick={handleClose} />]}
      >
        <Modal.Content width="350px" boxShadow="$in" bgColor="white" p="16px">
          <Frame
            as="div"
            display="flex"
            flexDirection="column"
            gap="8px"
          >
            {children}
          </Frame>
        </Modal.Content>
      </Modal>
    </>
  );
}

export default ModalContent;
