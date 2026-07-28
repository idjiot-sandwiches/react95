import { Frame } from "@react95/core";

function Anime() {
  return (
    <>
      <div className="flex p-0 m-0 w-[750px] h-[500px]">
        <Frame
          w="50%"
          h="100%"
          bgColor="$material"
          boxShadow="$out"
          padding="$4"
        >
          <Frame h="100%" bgColor="white" boxShadow="$in" overflow="auto">
            help
          </Frame>
        </Frame>
        <Frame
          w="100%"
          h="100%"
          bgColor="$material"
          boxShadow="$out"
          padding="$4"
        >
          <Frame h="100%" bgColor="white" boxShadow="$in" overflow="auto">
            help
          </Frame>
        </Frame>
      </div>
    </>
  );
}

export default Anime;
