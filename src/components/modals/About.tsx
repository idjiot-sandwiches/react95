import { Frame } from "@react95/core";
import GitHub from "../../assets/icon/GitHub.webp";
import Frieren from "../../assets/random/Frieren.webp";

function About() {
  return (
    <>
      <div className="flex p-0 m-0 w-[350px] h-[200px]">
        <Frame
          w="100%"
          h="100%"
          bgColor="$material"
          boxShadow="$out"
          padding="$4"
        >
          <Frame
            h="100%"
            bgColor="$material"
            boxShadow="$in"
            overflow="auto"
            padding="$4"
          >
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Welcome.
            </h4>
            <p>Accidentally found React95 project and decided to try it.</p>
            <img
              src={GitHub}
              alt="Github"
              className="hover:cursor-pointer w-7"
              onClick={() =>
                window.open(
                  "https://github.com/idjiot-sandwiches/react95",
                  "_blank",
                )
              }
            />
            <img
              src={Frieren}
              alt="Frieren"
              className="w-32 absolute right-3 bottom-3"
            />
          </Frame>
        </Frame>
      </div>
    </>
  );
}

export default About;
