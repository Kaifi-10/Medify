import { Box, Stack } from '@mui/material'
import React from 'react'
import HeroSection from '../Sections/HeroSection/HeroSection'
import Navbar from '../Navbar/Navbar'
import styles from './HomePage.module.css'
import Search from '../Sections/Search/Search'

function HomePage() {
  return (
    <Box >
        <Box className={styles.homeContainerBox}>
            <Navbar />
            <HeroSection />
            <Stack>
                <Search />
            </Stack>

        </Box>
        
    </Box>
  )
}

export default HomePage