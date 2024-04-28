import { Box, Divider } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import ImagePopuler from '../../mocks/imagePopuler.json'

function AlbumPopular() {

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', width: '80%', padding: 5 }}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {ImagePopuler.map((data) => (
            <SwiperSlide style={{ width: '200px', margin: 'auto', display: 'flex', justifyContent: 'center'}}>
              <Box
                sx={{
                  width: '80%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Box
                  component="img"
                  sx={{
                    border: '1px solid',
                    borderColor: '#3D3D3D',
                    boxShadow: 3,
                    borderRadius: '10px',
                  }}
                  alt={data.alt}
                  src={data.src}
                />
                <Box sx={{ color: 'gray', display: 'flex', justifyContent: 'center' }}>{data.alt}</Box>
                <Box sx={{ color: 'white', display: 'flex', justifyContent: 'center', mb: 4 }}>{data.tittle}</Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Divider orientation="horizontal" color="gray" flexItem sx={{ mt: -3 }} />
      <Box padding="10px" color="white" fontWeight="bold">
        Your Favorite Album's
      </Box>
    </>
  );
}

export default AlbumPopular;
