import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import mobile from '../../../assets/mobiles.svg'
import styles from './DownloadApp.module.css'
import appleLogo from '../../../assets/apple-logo.png'
import playStore from '../../../assets/playstore.png'
import curvedArrow from '../../../assets/curvedArrow.svg'
import NumberForm from '../NumberForm/NumberForm'

function DownloadApp() {
  return (
    <Box className={styles.containerBackground}>
        <Container>
            <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Box>
                        <img  src={mobile} alt='mobile' className={styles.imgMobile}/>
                        {/* <Box 
                            src={curvedArrow}
                            component='img'
                            width={{ xs: 24, md: 40 }}
                            position="absolute"
                            left={960}
                            top={850}
                        /> */}
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box>
                        <Box position='relative'>
                            <Typography className={styles.typoText}>
                                Download the <br/>
                                <Box component='span' className={styles.medifyText}>
                                    Medify
                                </Box>
                                App
                            </Typography>
                            <Box 
                                src={curvedArrow}
                                component='img'
                                width={{ xs: 24, md: 40 }}
                                position="absolute"
                                left={0}
                                top={60}
                            />

                        </Box>
                        
                        <NumberForm />

                        <Stack direction={{xs:"column", md:"row"}} 
                        spacing={{ xs: 1, md: 2 }}
                        className={styles.buttonStack}>
                            <Button
                            className={styles.customButton}
                            startIcon={<img src={playStore} alt='playstore' height={24} />}
                            variant="contained"
                            disableElevation>
                                Google Play
                            </Button>

                            <Button
                            className={styles.customButton}
                            startIcon={<img src={appleLogo} alt='apple' height={24} />}
                            variant="contained"
                            disableElevation>
                                App Store

                            </Button>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
        </Container>

    </Box>
  )
}

export default DownloadApp