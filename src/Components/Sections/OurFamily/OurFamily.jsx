import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import styles from './OurFamily.module.css'
import banner from '../../../assets/our-families-banner.png'

function OurFamily() {
  return (
    
    <Box className={styles.boxContainer}>
        <Container>
            <Grid container>
                <Stack direction={{sx:'column', md:'row'}} spacing={5} alignItems='center' pt={2}>
                    <Box className={styles.textContainer} textAlign='left'>
                        <Typography  className={styles.caringHeading}>
                        CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
                        </Typography>
                        <Typography className={styles.families}>
                        Our Families
                        </Typography>
                        <Typography className={styles.ourFamilyConnect}>
                        We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.
                        </Typography>

                    
                    </Box>
                    <Box  component='img' src={banner} className={styles.banner}/>
                </Stack>
            </Grid>
        </Container>
        
    </Box>
  )
}

export default OurFamily