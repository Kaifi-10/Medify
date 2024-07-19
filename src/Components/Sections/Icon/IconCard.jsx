import { Box, Typography } from '@mui/material'
import React from 'react'
import styles from './IconCard.module.css'

function IconCard({img,title, bg}) {

  console.log("iconcard",title)
  return (
    <Box alignItems="center" justifyContent="center">
        <Box className={bg === "#FAFBFE"?styles.searchCards : styles.specialisationCard}
        bgcolor={ title === "Hospitals" ? "#2AA7FF14": ""}
        border={title === "Hospitals" ? "1px solid #2AA7FF": ""}>
          <Box component='img' src={img} />
          <Typography
          color={title === "Hospitals" ? "#2AA7FF": "#ABB6C7"}
          fontWeight={title === "Hospitals" ? "600": ""}
          marginTop={2}>
              {title}
          </Typography>
      </Box>


    </Box>
    
  )
}


export default IconCard