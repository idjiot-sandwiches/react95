import DesktopIcon from "./DesktopIcon";

type WindowItem = {
  id: string;
  text: string;
  icon: React.ReactElement;
  show: boolean;
};

type Windows = Record<string, WindowItem>;

interface Props {
  windows: Windows;
  handleOpen: (id: string) => void;
}

function Desktop({ windows, handleOpen }: Props) {
  return (
    <>
      {Object.values(windows).map((w) => (
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
