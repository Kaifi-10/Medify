import React from 'react'
import dentistry from '../../../assets/dentistry.svg'
import primary from '../../../assets/primaryCare.svg'
import cardio from '../../../assets/cardiology.svg'
import mri from '../../../assets/MRI.svg'
import blood from '../../../assets/bloodTest.svg'
import pisocologist from '../../../assets/piscologist.svg'
import lab from '../../../assets/laboratory.svg'
import xray from '../../../assets/xray.svg'
import { Box, Button, Grid, Typography } from '@mui/material'
import IconCard from '../Icon/IconCard'
import styles from './Specialization.module.css'



function Specialization() {

    const data = [
        { icon: dentistry, title: 'Dentistry' },
        { icon: primary, title: 'Primary Care' },
        { icon: cardio, title: 'Cardiology' },
        { icon: mri, title: 'MRI Resonance' },
        { icon: blood, title: 'Blood Test' },
        { icon: pisocologist, title: 'Piscologist' },
        { icon: lab, title: 'Laboratory' },
        { icon: xray, title: 'X-Ray' }
    ]

  return (
    <Box className={styles.specBox}>
        <Typography  
        className={styles.textSpec}
        fontSize={20}
        color="#1B3C74"
        fontWeight={500}
        textAlign="center"
        mb={2}>
             Find by specialisation
        </Typography>

        <Box className={styles.gridWrapper}>
            <Grid container 
            columnSpacing={{ xs: 1, sm: 1, md: 20 }}
            spacing={3}
            justifyContent="center"
            alignItems="stretch"
            className={styles.gridContainer}>
                {data.map((data, index) => (
                    <Grid item key={index} xs={6} sm={4} md={3} className={styles.cardItem}>
                        <IconCard img={data.icon} title={data.title} bg= "#FFFFFF"
                        />
                    </Grid>
                ))}
            </Grid>

        </Box>
        

        <Button
            variant="contained"
            size="large"
            disableElevation
            className={styles.specButton}
        >
                    View All
        </Button>
        
    </Box>
  )
}

export default Specialization