import { Box, Typography } from '@mui/material'
import React from 'react'
import styles from './Specialist.module.css'

function SpecialistCard({img,title,designation}) {
  return (
    <Box className={styles.boxContainer}>
        <Box 
            className={styles.docImg}
            component={'img'} 
            src={img} 
            // className={styles.swiperImage}
            sx={{
                width: { xs: '90%', sm: '85%', md: '80%', lg: '75%', xl: '70%' },
                height: { xs: '90%', sm: '85%', md: '80%', lg: '75%', xl: '70%' },
                borderRadius: '20px',
                objectFit: 'cover'
            }}
        />
        <Typography className={styles.docTitle}>
            {title}
        </Typography>
        <Typography className={styles.docDesignation}>
            {designation}
        </Typography>
    </Box>
  )
}

export default SpecialistCard