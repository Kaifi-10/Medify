import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Search from '../Sections/Search/Search'
import styles from './SearchPage.module.css'

function SearchPage() {
  return (
    <Box>
        <Navbar />
       
        <Box
       
              className={styles.buleBackground}
        >
          <Container  
           maxWidth="xl"
           sx={{
            width: { xs: '90%', sm: '85%', md: '80%', lg: '75%', xl: '70%' },
            height: 'auto',
            mx: 'auto',
             background: "#fff",
             p: .1,
             borderRadius: 2,
             transform: "translatey(30px)",
             mb: "50px",
             boxShadow: "0 0 10px rgba(0,0,0,0.1)",
             alignItems:'center',
             justifyContent:'center',
             display:'flex'
           }}          
            // className={styles.searchBox}
          >

    
            <Search />
        
          </Container>
          
        </Box>
        

    </Box>
  )
}

export default SearchPage


