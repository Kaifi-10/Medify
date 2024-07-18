import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import styles from './Footer.module.css'
import fullLogo from '../../../assets/logoFull.png'
import fb from '../../../assets/facebook.svg'
import x from '../../../assets/twitter.svg'
import yt from '../../../assets/youtube.svg'
import pin from '../../../assets/pinterest.svg'
import FooterLinks from './FooterLinks'

function Footer() {
  return (
    <Box className={styles.footerContainer}>
        <Container >
            <Grid container >
                <Grid item xs={12} md={5}>
                    <Stack>
                        <Box component='img' src={fullLogo} width={150} mb={2} mt={5}/>

                        <Stack direction="row" spacing={2}>
                            <Box component="img" src={fb} height={36} />
                            <Box component="img" src={x} height={36} />
                            <Box component="img" src={yt} height={36} />
                            <Box component="img" src={pin} height={36} />

                        </Stack>
                    </Stack>
                </Grid>

                <Grid item xs={12} md={2} >
                    <Stack spacing={2} mt={5} mb={10}>
                        <FooterLinks data="About Us" />
                        <FooterLinks data="Our Pricing" />
                        <FooterLinks data="Our Gallery" />
                        <FooterLinks data="Appointment" />
                        <FooterLinks data="Privacy Policy" />
                    </Stack>
                </Grid>

                <Grid item xs={12} md={2}>
                    <Stack spacing={2} mt={5} mb={10}>
                        <FooterLinks data="Orthology" />
                        <FooterLinks data="Neurology" />
                        <FooterLinks data="Dental Care" />
                        <FooterLinks data="Opthalmology" />
                        <FooterLinks data="Cardiology" />
                    </Stack>
                </Grid>

                <Grid item xs={12} md={2}>
                    <Stack spacing={2} mt={5} mb={10}>
                        <FooterLinks data="About Us" />
                        <FooterLinks data="Our Pricing" />
                        <FooterLinks data="Our Gallery" />
                        <FooterLinks data="Appointment" />
                        <FooterLinks data="Privacy Policy" />
                    </Stack>
                </Grid>
                
            </Grid>
            <Typography fontWeight={300}
                color="#fff"
                fontSize={14}
                pt={3}
                mt={5}
                borderTop="1px solid rgba(255,255,255,0.1)"
                className={styles.copyright}>
                 Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
            </Typography>
        </Container>
    </Box>
  )
}

export default Footer