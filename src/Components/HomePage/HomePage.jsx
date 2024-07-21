import { Box, Stack } from '@mui/material'
import React from 'react'
import HeroSection from '../Sections/HeroSection/HeroSection'
import Navbar from '../Navbar/Navbar'
import styles from './HomePage.module.css'
import Search from '../Sections/Search/Search'
import ServiceLooking from '../Sections/ServiceLooking/ServiceLooking'
import Offers from '../Sections/Offers/Offers'
import Specialization from '../Sections/Specialization/Specialization'
import Specialist from '../Sections/Specialist/Specialist'
import PatientCaring from '../Sections/PatientCaring/PatientCaring'
import Blog from '../Sections/Blog/Blog'
import OurFamily from '../Sections/OurFamily/OurFamily'


function HomePage() {
  return (
    <Box >
        <Box className={styles.homeContainerBox}>
            <Navbar />
            <HeroSection />
            <Stack p={{ xs: 2.5, md: 8 }}
            mt={{ xs: -2, md: 0, lg: -6, xl: -10 }}
            sx={{
                width: { xs: '90%', sm: '85%', md: '80%', lg: '75%', xl: '70%' },
                height: 'auto',
                mx: 'auto',
                background: '#FFFFFF',
                borderRadius: '15px',
                boxShadow: '6px 6px 35px 0px #1028511C',
              }}
            className={styles.searchServiceBox} >
                <Search />
                <ServiceLooking />
            </Stack>

            <Offers />

            <Specialization />

            <Specialist />

            <PatientCaring />

            <Blog />

            <OurFamily />

        </Box>
        
    </Box>
  )
}

export default HomePage