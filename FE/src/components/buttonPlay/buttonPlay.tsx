import { Button } from '@mui/material'
import { useState } from 'react'
import { IoMdPause, IoMdPlay } from 'react-icons/io'

export default function ButtonPlay() {
    const [isPlay, setIsPlay] = useState<boolean>(false)

    const handleClick = () => {
      if (isPlay) {
        setIsPlay(false)
      } else {
        setIsPlay(true)
      }
  
      return setIsPlay
    }

  return (
    <Button onClick={handleClick} sx={{ height: '70px', color: 'black'}}>
        {isPlay ? <IoMdPause style={{ width: '100%', height: '40%' }} /> : <IoMdPlay style={{ width: '100%', height: '40%'}} />}
    </Button>
  )
}
