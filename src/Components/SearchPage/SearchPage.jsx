import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Search from '../Sections/Search/Search'
import styles from './SearchPage.module.css'
import oral from '../../assets/oral.png'
import tick from '../../assets/greyTick.png'
import HospitalCard from '../Sections/HospitalCard/HospitalCard'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Calender from '../Sections/Calender/Calender'



function SearchPage() {
    const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box className={styles.searchPageContainer}>
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

        <Container sx={{
          mt:'50',
          pt: 8, pb: 10, px: { xs: 0, md: 4 }
        }}>
          <Box>
            <Typography className={styles.medicalCenter}>
            15 medical centers available in Alaska
            </Typography>

            <Stack direction='row'>
              <Box component='img' src={tick} width={24} alt='tick' pr={1}/>
              <Typography className={styles.appointments}>
              Book appointments with minimum wait-time & verified doctor details
              </Typography>
            </Stack>
          </Box>

          <Stack /*alignItems="flex-start"*/ direction={{ md: "row" }}
          // sx={{
          //   alignItems:{
          //     md:'center',
          //     xl:'flex-start'
          //   }
          // }}
          alignItems='center'
          > 
            <Stack alignItems='center' >
            {/* <Stack direction={matches ? "row" : "column"}>
            <Stack alignItems="flex-start"> */}
                <HospitalCard />
                {/* <Calender /> */}
            </Stack>
            <Box component='img' src={oral} alt='Oral' width={363} 
            sx={{
              boxShadow: 5, 
              borderRadius:5,
              // boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              mt:{ xs: '25px', sm: '25px', md: '0px', lg: '0px', xl: '0px' },
              ml:{ xs: '-40px', sm: '-40px', md: '0px', lg: '0px', xl: '0px' }
            }}
            // alignItems='center'
            />
          </Stack>
        </Container>
        

    </Box>
  )
}

export default SearchPage


