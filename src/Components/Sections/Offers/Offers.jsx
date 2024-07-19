import { Box, Container } from "@mui/material";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import offer1 from '../../../assets/offer1.png'
import offer2 from '../../../assets/offer2.png'
import styles from './Offers.module.css'
import 'swiper/css/pagination';

export default function Offers() {
    return (
        <Box py={6} 
        bgcolor="#FFFFFF"
        pt={10}
        >
            <Container maxWidth='xl'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    modules={[Pagination]}
                    pagination={{
                        clickable: true
                    }}
                    breakpoints={
                        {
                            767: {
                                slidesPerView: 3
                            }
                        }
                    }
                >

                    {[offer1, offer2, offer1, offer2, offer1, offer2].map((offer, index) => (
                        <SwiperSlide key={index}>
                            <Box 
                                component={'img'} 
                                src={offer} 
                                className={styles.swiperImage}
                                sx={{
                                    width: { xs: '90%', sm: '85%', md: '80%', lg: '75%', xl: '70%' },
                                    height: { xs: '90%', sm: '85%', md: '80%', lg: '75%', xl: '70%' },
                                    borderRadius: '20px',
                                    objectFit: 'cover'
                                }}
                            />
                        </SwiperSlide>
                    ))}

                </Swiper>
            </Container>
        </Box>
    )
}