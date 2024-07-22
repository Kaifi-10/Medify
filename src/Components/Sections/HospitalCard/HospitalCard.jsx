import { Box, Button, Chip, Divider, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import hospitalIcon from '../../../assets/hospitalCircle.svg'
import styles from './HospitalCard.module.css'
import thumbsup from '../../../assets/thumbsup.png'
import Calender from '../Calender/Calender'
import { format } from "date-fns";

// function HospitalCard() {

//     const [showCalender, setShowCalender] = useState(false)
//   return (
//     <Box className={styles.hopitalCardContainer} 
//         sx={{
//              width: { xs: '90%', sm: '85%', md: '80%', lg: '75%', xl: '785.56px' },
//              height: { xs: '90%', sm: '85%', md: '80%', lg: '75%', xl: '180.38px' },
//             //  mx: 'auto'
//             mb:{xs:'30px', sm:'30px'},
//             justifyContent:'center',
//             alignContent:'center'
//         }}>
//             <Box className={styles.hospitalCardContent}
//             // direction='column'
//         sx={{
//           height: { xs: 'auto', xl: '180.38px' },
//           mb: showCalender ? 2 : 0,
//         }}>
//         <Stack
//         direction={{ xs: "column", md: "row" }}
//         spacing={{ xs: 1, md: 4 }}
//         flexWrap={"wrap"}
//         className={styles.texting}>
//             <Box component='img' src={hospitalIcon} alt='hospitalIcon' width={{ xs: 64, md: 130 }} height="auto"
//              sx={{ flexShrink: 0, alignSelf: "start" }}/>

//              <Box textAlign='left' height={220} width={340} flex={1}>
//                 <Typography className={styles.hospitalName} lineHeight={5}>
//                 Fortis Hospital Richmond Road
//                 </Typography>
//                 <Typography className={styles.hospitalLocation}>
//                 Banglore, Karnataka
//                 </Typography>
//                 <Typography className={styles.hospitalType}>
//                 Smilessence Center for Advanced Dentistry + 1 more
//                 </Typography>

//                 <Stack 
//                 direction={{ xs: "column", md: "row" }}
//                 spacing={{ xs: 1, md: 1 }}>
//                     <Typography className={styles.free}>
//                     FREE
//                     </Typography>
//                     <Typography className={styles.amount}>
//                     ₹500
//                     </Typography>
//                     <Typography className={styles.consultaion}>
//                     Consultation fee at clinic
//                     </Typography>
//                 </Stack>
//                 <Divider sx={{ borderStyle: "dashed", mb: 2 }} />

//                 <Stack 
//                 className={styles.rating}
//                 direction='row'
//                 alignItems="center">
//                     <Box component='img' src={thumbsup} alt='thumbsup' width={24} pr={0.5}/>
//                     <Typography
//                     fontWeight={700}
//                     fontSize={{ xs: 14, md: 16 }}
//                     color="#fff"
//                     sx={{ opacity: 0.5 }}>
//                         5
//                     </Typography>
//                 </Stack>
                

//              </Box>

//              <Stack>
//                 <Typography className={styles.available}>
//                 Available Today
//                 </Typography>
//                 <Button
//                 variant="contained"
//                 disableElevation
//                 className={styles.bookButton}
//                 onClick={() => setShowCalender((prev) => !prev)}>
//                 {!showCalender
//                   ? "Book FREE Center Visit"
//                   : "Hide Booking Calendar"}
                
//                 </Button>
//              </Stack>
           
//         </Stack>
//         </Box>            
//         {showCalender && (
//             <Box className={styles.calendarWrapper}
//                 sx={{
//                 width: '100%',
//                 mt: 2,
//                 // bgcolor: '#fff'
//                 }}>
//                 <Calender />
//             </Box>
//         )}
        
//     </Box>
//   )
// }

// export default HospitalCard


export default function HospitalCard({
  details,
  availableSlots,
  handleBooking,
  booking = false,
}) {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <Box 
    sx={{ borderRadius: 2, 
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
            className={styles.hospitalName}
          >
            {/* {details["Hospital Name"].toLowerCase()} */}
            Fortis Hospital Richmond Road
          </Typography>
          <Typography
            textTransform="capitalize"
            color="#414146"
            fontSize={14}
            fontWeight={700}
            className={styles.hospitalLocation}
          >
            {/* {`${details["City"].toLowerCase()}, ${details["State"]}`} */}
            Banglore, Karnataka
          </Typography>
          <Typography fontSize={14} mb={1} className={styles.hospitalType}>
            {/* {details["Hospital Type"]} */}
            Smilessence Center for Advanced Dentistry + 1 more
          </Typography>
          <Stack direction="row" flexWrap="wrap" spacing="4px" mb={2}>
            <Typography
              
              className={styles.free}
            >
              Free
            </Typography>
            <Typography
            className={styles.amount}
             
            >
              ₹500
            </Typography>
            <Typography  className={styles.consultaion}>Consultation fee at clinic</Typography>
          </Stack>
          <Divider sx={{ borderStyle: "dashed", mb: 2 }} />
          <Stack
            direction="row"
            alignItems="center"
            py="4px"
            px={1}
            borderRadius={1}
            width="fit-content"
            spacing="4px"
            className={styles.rating}
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
              {/* {details["Hospital overall rating"] == "Not Available"
                ? 0
                : details["Hospital overall rating"]} */}
                 5
            </Typography>
          </Stack>
        </Box>

        <Stack
          justifyContent={booking ? "flex-start" : "flex-end"}
          minWidth="23%"
        >
          {!booking && (
            <>
              <Typography
                mb={1}
                className={styles.available}
              >
                Available Today
              </Typography>
              <Button
              className={styles.bookButton}
                variant="contained"
                disableElevation
                onClick={() => setShowCalendar((prev) => !prev)}
              >
                {!showCalendar
                  ? "Book FREE Center Visit"
                  : "Hide Booking Calendar"}
              </Button>
            </>
          )}

          {/*  */}
        </Stack>
      </Stack>

      {showCalendar && (
        <Calender />
      )}
    </Box>
  );
}
