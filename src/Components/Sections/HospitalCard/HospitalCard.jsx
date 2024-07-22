import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import hospitalIcon from '../../../assets/hospitalCircle.svg'
import styles from './HospitalCard.module.css'
import thumbsup from '../../../assets/thumbsup.png'

function HospitalCard() {

    const [showCalender, setShowCalender] = useState(false)
  return (
    <Box className={styles.hopitalCardContainer} >
        <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 1, md: 4 }}
        flexWrap={"wrap"}>
            <Box component='img' src={hospitalIcon} alt='hospitalIcon' width={{ xs: 64, md: 130 }} height="auto"
             sx={{ flexShrink: 0, alignSelf: "start" }}/>

             <Box textAlign='left' height={220} width={340} flex={1}>
                <Typography className={styles.hospitalName} lineHeight={5}>
                Fortis Hospital Richmond Road
                </Typography>
                <Typography className={styles.hospitalLocation}>
                Banglore, Karnataka
                </Typography>
                <Typography className={styles.hospitalType}>
                Smilessence Center for Advanced Dentistry + 1 more
                </Typography>

                <Stack 
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 1, md: 1 }}>
                    <Typography className={styles.free}>
                    FREE
                    </Typography>
                    <Typography className={styles.amount}>
                    ₹500
                    </Typography>
                    <Typography className={styles.consultaion}>
                    Consultation fee at clinic
                    </Typography>
                </Stack>
                <Divider sx={{ borderStyle: "dashed", mb: 2 }} />

                <Stack 
                className={styles.rating}
                direction='row'
                alignItems="center">
                    <Box component='img' src={thumbsup} alt='thumbsup' width={24} pr={0.5}/>
                    <Typography
                    fontWeight={700}
                    fontSize={{ xs: 14, md: 16 }}
                    color="#fff"
                    sx={{ opacity: 0.5 }}>
                        5
                    </Typography>
                </Stack>
                

             </Box>

             <Stack>
                <Typography className={styles.available}>
                Available Today
                </Typography>
                <Button
                variant="contained"
                disableElevation
                className={styles.bookButton}
                onClick={() => setShowCalender((prev) => !prev)}>
                {!showCalender
                  ? "Book FREE Center Visit"
                  : "Hide Booking Calendar"}
                
                </Button>
             </Stack>
           
        </Stack>
        
    </Box>
  )
}

export default HospitalCard