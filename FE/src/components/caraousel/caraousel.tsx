import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Box } from '@mui/material';
import imageBanner from '../../mocks/imageBanner.json';

function Caraousel() {
  return (
    <>
      <Box sx={{ width: '50%', height: '50%', mt: '-30px' }}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {imageBanner.map((data) => (
            <SwiperSlide>
              <Box
                component="img"
                sx={{
                  width: '100%',
                  height: '100%',
                  border: '1px solid',
                  borderColor: '#3D3D3D',
                  boxShadow: 3,
                  borderRadius: '10px',
                }}
                alt={data.alt}
                src={data.src}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
}

export default Caraousel;
