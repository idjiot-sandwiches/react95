import Buttons from "./Buttons";

interface Props {
  onChange?: (selectedItem: string) => void;
}

function Screen({ onChange }: Props) {
  const link = 'https://github.com/idjiot-sandwiches/react95.git';

  return (
    <>
      <div className="w-full text-white text-base p-4">
        <div>Startup Menu</div>
        <div className="h-6"></div>
        <Buttons onChange={onChange} />
        <div className="h-6"></div>
        <div>For more information, please visit: <a href={link} target="_blank" className="text-blue-500!">{link}</a></div>
      </div>
    </>
  );
}

export default Screen;
