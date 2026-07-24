import { Frame } from "@react95/core";

interface Props extends React.PropsWithChildren {
  text: string
}

function DesktopIcon({ text, children }: Props) {
  return (
    <>
      <Frame className="flex flex-col items-center w-17.5 h-17.5 justify-center text-white select-none hover:cursor-pointer">
        {children}
        <p>{text}</p>
      </Frame>
    </>
  );
}

export default DesktopIcon;
