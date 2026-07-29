import { Button, Dropdown, Frame } from "@react95/core";
import { useState } from "react";

function Wallpaper() {
  const map = [
    "default", 
    "/wallpaper/static/konosuba.webp",
    "/wallpaper/static/miku.webp",
  ];

  const [active, setActive] = useState<string>(() => {
    const match = document.cookie.match(
      new RegExp("(^| )" + "wallpaper" + "=([^;]+)"),
    );
    return match ? decodeURIComponent(match[2]) : "";
  });

  function change() {
    const root = document.getElementById("root");
    if (!root) {
      return;
    }

    if (active === "default") {
      document.documentElement.style.backgroundImage = "";
    } else {
      document.documentElement.style.backgroundImage = `url(${active})`;
    }

    document.cookie = `wallpaper=${active};`;
  }

  return (
    <>
      <Frame className="flex gap-2 pb-2">
        <Dropdown
          options={map}
          value={active}
          onChange={(e) => setActive(e.target.value)}
        />
        <Button onClick={change}>Change</Button>
      </Frame>
      <Frame>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Preview
        </h4>
        {active === "default" ? (
          <div className="h-64 w-full bg-[#55AAAA]"></div>
        ) : (
          <img src={active} alt={active} />
        )}
      </Frame>
    </>
  );
}

export default Wallpaper;
