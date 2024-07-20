import { Box, Container, Typography } from "@mui/material";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
// import styles from './Offers.module.css'
import 'swiper/css/pagination';
import styles from './Specialist.module.css'
import ahmad from '../../../assets/ahmad.png'
import stevens from '../../../assets/ahmad-stevens.png'
import ankur from '../../../assets/ankur.png'
import heena from '../../../assets/heena.png'
import lesley from '../../../assets/lesley.png'
import SpecialistCard from "./SpecialistCard";

export default function Offers() {

    const specialistData = [
        { img: ahmad, title: 'Dr. Ahmad Khan', designation: 'Neurologist' },
        { img: stevens, title: 'Dr. Ahmad Stevens', designation: 'Neurologist' },
        { img: ankur, title: 'Dr. Ankur Sharma', designation: 'Medicine' },
        { img: heena, title: 'Dr. Heena Sachdeva', designation: 'Orthopadics' },
        { img: lesley, title: 'Dr. Lesley Hull', designation: 'Medicine' },
    ]

    return (
        <Box py={6} 
        bgcolor="#FFFFFF"
        pt={10}
        >
            <Typography variant="h2" textAlign='center' mb={3} px={2} className={styles.docHeading}>
                Our Medical Specialist
            </Typography>
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

                    {specialistData.map((docs, index) => (
                        <SwiperSlide key={index}>
                            {/* <Box 
                                component={'img'} 
                                src={docs.img} 
                                // className={styles.swiperImage}
                                sx={{
                                    width: { xs: '90%', sm: '85%', md: '80%', lg: '75%', xl: '70%' },
                                    height: { xs: '90%', sm: '85%', md: '80%', lg: '75%', xl: '70%' },
                                    borderRadius: '20px',
                                    objectFit: 'cover'
                                }}
                            /> */}
                            <SpecialistCard img={docs.img} title={docs.title} designation={docs.designation}/>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </Container>
        </Box>
    )
}