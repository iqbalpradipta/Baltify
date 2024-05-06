import { Box, Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar';

function Layout() {
  return (
    <>
    <Grid spacing={2}>
      <Grid item xs={6}>
        <Sidebar />
      </Grid>

      <Grid item xs={6}>
        <Outlet />
      </Grid>
    </Grid>

    </>
  );
}

export default Layout;
