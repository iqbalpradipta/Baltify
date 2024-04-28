import { Box, Button, Stack } from '@mui/material';
import { useState } from 'react';
import { IoMdPlay, IoMdPause } from 'react-icons/io';

function ListAlbumFav() {
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
    <>
    <Stack spacing={2}>
      <Box sx={{border: 1 ,boxShadow: 3, borderRadius: 3 ,backgroundColor: '#717171', width: '100%', height: '70px', display: 'flex', flexDirection: 'row' }}>
      <Box
            sx={{
              borderRadius: '10px',
              display: 'flex',
              justifyContent: 'right',
              marginLeft: '-750px'
            }}
          >
            <Box
              component="img"
              sx={{
                border: '1px solid',
                borderColor: '#3D3D3D',
                boxShadow: 3,
                borderRadius: '10px',
                marginX: '592px'
                
              }}
              alt="REI SARAH"
              src="data:image/jpeg;base64,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"
            />
          </Box>
        <Box>
          <Box sx={{marginX: '-580%', width: '100px', mt: 2}}>Rei Sarah</Box>
        </Box>
        <Box>
          <Box sx={{marginX: '-840%', mt: 5,  width: '100%'}}>Disoriented</Box>
        </Box>
        <Box>
          <Button onClick={handleClick} sx={{ width: '100%', height: '70px', color: 'black', marginLeft: '-260px'}}>
            {isPlay ? <IoMdPause style={{ width: '100%', height: '40%' }} /> : <IoMdPlay style={{ width: '100%', height: '40%'}} />}
          </Button>
        </Box>
      </Box>
    </Stack>
    </>
  );
}

export default ListAlbumFav;
