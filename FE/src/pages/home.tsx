import { Box } from '@mui/material';
import HomeCard from '../components/card/HomeCard';
import AlbumPopular from '../components/album/albumPopular';
import AlbumFavorite from '../components/album/albumFavorite';

function Home() {
  return (
    <>
      <Box width={'100%'} height={'100%'} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <HomeCard />
        <AlbumPopular />
        <AlbumFavorite />
      </Box>
    </>
  );
}

export default Home;
