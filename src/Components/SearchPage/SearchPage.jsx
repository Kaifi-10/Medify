import { Box, Container } from '@mui/material'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Search from '../Sections/Search/Search'
import styles from './SearchPage.module.css'

function SearchPage() {
  return (
    <Box>
        <Navbar />
       
        <Box
        //   sx={{
        //     position: "relative",
        //     background: "linear-gradient(90deg, #2AA7FF, #0C8CE5)",
        //     borderBottomLeftRadius: "1rem",
        //     borderBottomRightRadius: "1rem",
        //   }}
          className={styles.buleBackground}
        >
          <Container
            maxWidth="xl"
            // sx={{
            //   background: "#fff",
            //   p: 3,
            //   borderRadius: 2,
            //   transform: "translatey(50px)",
            //   mb: "50px",
            //   boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            // }}
            className={styles.searchBox}
          >
            <Search />
          </Container>
        </Box>
        

    </Box>
  )
}

export default SearchPage


