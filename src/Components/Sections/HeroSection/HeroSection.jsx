import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import heroImg from '../../../assets/heroImage.png'
import styles from './HeroSection.module.css'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <Box className={styles.boxContainer}>
        <Container>
            <Grid container>
                <Stack direction={{sx:'column', md:'row'}} spacing={5} alignItems='center' pt={2}>
                    <Box className={styles.textContainer}>
                        <Typography variant='h4' className={styles.textSkip}>
                            Skip the travel! Find Online
                        </Typography>
                        <Typography variant='h2' className={styles.textMedical}>
                            Medical <span> Centers</span>
                        </Typography>
                        <Typography className={styles.textConnect}>
                            Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
                        </Typography>

                        <Link to='/search'>
                            <Button variant='contained' size="large" disableElevation className={styles.heroButton}>Find Centers</Button>
                        </Link>

                    </Box>
                    <Box  component='img' src={heroImg}/>
                </Stack>
            </Grid>
        </Container>
        
    </Box>
  )
}

export default HeroSection