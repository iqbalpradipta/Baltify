import { Button } from "@mui/material";
import { useState } from "react";
import { IoMdPlay } from "react-icons/io";
import { IoPauseSharp } from "react-icons/io5";

function ButtonPlay() {
    const [isPlay, setIsPlay] = useState<boolean>(false)

    const handlePlay = () => {
        if(!isPlay) {
            setIsPlay(true)
        } else {
            setIsPlay(false)
        }
    }

  return (
    <>
      <Button sx={{ color: "white", fontSize: "18px" }} onClick={handlePlay} >
        {!isPlay ? <IoMdPlay /> : <IoPauseSharp />}
      </Button>
    </>
  );
}

export default ButtonPlay;
