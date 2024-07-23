import { Alert, Box, Button, Chip, Divider, Snackbar, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import hospitalIcon from '../../assets/hospitalCircle.svg'
import styles from './BookingCard.module.css'
import thumbsup from '../../assets/thumbsup.png'
import { format } from "date-fns";


export default function BookingCard({booking }) {

    const FormatDate = ({ dateString }) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const monthNames = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
      
        return `${day} ${month} ${year}`;
      };
      
 
  return (
    <Box 
    sx={{
        borderRadius: 2, 
        boxShadow: 5,
        bgcolor: "#fff", 
        p: { xs: 2, md: 4 },
        width: { xs: '90%', sm: '85%', md: '80%', lg: '75%', xl: '785.56px' },
        mr:{xl:'30px'},
        mt:'20px'
        // mb:{xs:'30px', sm:'30px'},
        // height: { xs: '90%', sm: '85%', md: '80%', lg: '75%', xl: '180.38px' },
     }}
    // sx={{
    //                  width: { xs: '90%', sm: '85%', md: '80%', lg: '75%', xl: '785.56px' },
    //                  height: { xs: '90%', sm: '85%', md: '80%', lg: '75%', xl: '180.38px' },
    //                 //  mx: 'auto'
    //                 mb:{xs:'30px', sm:'30px'},
    //                 justifyContent:'center',
    //                 alignContent:'center'
    //             }}
                >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 1, md: 4 }}
        flexWrap={"wrap"}
      >
        <Box
          component="img"
          src={hospitalIcon}
          width={{ xs: 64, md: 130 }}
          height="auto"
          sx={{ flexShrink: 0, alignSelf: "start" }}
        />
        <Box flex={1}
        textAlign='left'>
          <Typography
            component="h3"
            color="primary.main"
            fontWeight={600}
            fontSize={{ xs: 18, md: 20 }}
            mb={1}
            textTransform="capitalize"
            lineHeight={1}
            className={styles.bookingHospitalName}
          >
          
            {/* Fortis Hospital Richmond Road */}
            {/* {hospitalName} */}
            {booking["Hospital Name"].toLowerCase()}
          </Typography>
          <Typography
            textTransform="capitalize"
            color="#414146"
            fontSize={14}
            fontWeight={700}
            className={styles.bookingHospitalLocation}
          >
            
            {/* Banglore, Karnataka */}
            {`${booking["City"].toLowerCase()}, ${booking["State"]}`}
          </Typography>
          <Typography fontSize={14} mb={1} className={styles.bookingHospitalType}>
            
            {/* Smilessence Center for Advanced Dentistry + 1 more */}
            {booking["Hospital Type"]}
          </Typography>
          
          <Stack
            direction="row"
            alignItems="center"
            py="4px"
            px={1}
            borderRadius={1}
            width="fit-content"
            spacing="4px"
            className={styles.bookingRating}
          >
            <Box
              component={"img"}
              src={thumbsup}
              width={{ xs: 16, md: 20 }}
              height={{ xs: 16, md: 20 }}
            />
            <Typography
              fontWeight={700}
              fontSize={{ xs: 14, md: 16 }}
              color="#fff"
              sx={{ opacity: 0.5 }}
            >
              {booking["Hospital overall rating"] == "Not Available"
                ? 0
                : booking["Hospital overall rating"]}
                 
            </Typography>
          </Stack>
        </Box>

        <Stack
        //   justifyContent={booking ? "flex-start" : "flex-end"}
        direction='row'
        sx={{
            mr:'20px'
        }}
          minWidth="23%"
        >
          
          
              <Typography variant="body2" mr={2} className={styles.bookingTime}>{booking["time"]}</Typography>
              <Typography variant="body2" className={styles.bootingDate}> {FormatDate({ dateString: booking["date"] })}</Typography>
           

          {/*  */}
        </Stack>
      </Stack>

      
    </Box>
  );
}
