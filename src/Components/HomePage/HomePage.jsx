import { Box } from '@mui/material'
import React from 'react'
import HeroSection from '../Sections/HeroSection/HeroSection'
import Navbar from '../Navbar/Navbar'
import styles from './HomePage.module.css'

function HomePage() {
  return (
    <Box >
        <Box className={styles.homeContainerBox}>
            <Navbar />
            <HeroSection />

        </Box>
        
    </Box>
  )
}

export default HomePage