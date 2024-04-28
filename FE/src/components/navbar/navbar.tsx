import { Container, Box, Grid, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SearchBar from '../Search/Search';
import HomeIcon from '@mui/icons-material/Home';

function Navbar() {
  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ color: 'white', backgroundColor: '#2C3856', height: '80px' }}>
        <Grid item xs={2}>
          <Link component={RouterLink} to="/" underline="none" sx={{ position: 'relative', right: '-70px', color: 'white', top: '25px' }}>
            Logo
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Link component={RouterLink} to="/" underline="none" sx={{ position: 'relative', right: '-150px', color: 'white', top: '20px' }}>
            <HomeIcon />
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ position: 'relative', right: '10px', color: 'white', Bgcolor: 'gray', top: '14px' }}>
            <SearchBar />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Link component={RouterLink} to="/login" underline="none" sx={{ position: 'relative', right: '-200px', color: 'white', top: '25px' }}>
            Login
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Link component={RouterLink} to="/register" underline="none" sx={{ position: 'relative', right: '-80px', color: 'white', top: '25px' }}>
            Register
          </Link>
        </Grid>
      </Grid>
    </>
  );
}

export default Navbar;
