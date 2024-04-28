import { Box } from '@mui/material';
import Navbar from '../components/navbar/navbar';
import { Outlet } from 'react-router-dom';
import AudioPlay from '../components/play/audioPlay';

function Layout() {
  return (
    <>
      <Box>
        <Navbar />
      </Box>

      <Box sx={{position: 'relative', top: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Outlet />
      </Box>

      {/* <Box sx={{position: 'fixed', display: 'flex', color: 'white', top: '365px', left: '350px'}}>
        <AudioPlay />
      </Box> */}
    </>
  );
}

export default Layout;
