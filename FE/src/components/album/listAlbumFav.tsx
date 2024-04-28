import { Box, Stack } from '@mui/material';
import { IoMdPlay } from 'react-icons/io';

function ListAlbumFav() {
  return (
    <>
      <Box sx={{ border: 1, backgroundColor: 'white', width: '100%', height: '70px', display: 'flex', flexDirection: 'row' }}>
        <Box sx={{ width: '250px', height: '70px', mt: '20px', marginX: '100px' }}>
          <Box>Rei Sarah</Box>
          <Box>Rei Sarah</Box>
        </Box>
        <Box sx={{ width: '250px', height: '70px', mt: '20px', }}>
          <IoMdPlay style={{ width: '100%', height: '40%' }} />
        </Box>
      </Box>
    </>
  );
}

export default ListAlbumFav;
