import { Box, Divider } from '@mui/material';
import Caraousel from '../caraousel/caraousel';

function HomeCard() {
  return (
    <>
      <Caraousel />
      <Divider orientation="horizontal" color="gray" flexItem sx={{ mt: 2 }} />
      <Box padding="10px" color="white" fontWeight="bold">
        Populer
      </Box>
    </>
  );
}

export default HomeCard;
