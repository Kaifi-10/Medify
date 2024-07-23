import { Alert, Box, Button, Chip, Divider, Snackbar, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import hospitalIcon from '../../../assets/hospitalCircle.svg'
import styles from './HospitalCard.module.css'
import thumbsup from '../../../assets/thumbsup.png'
import Calender from '../Calender/Calender'
import { format } from "date-fns";


export default function HospitalCard({
  key,
  details,
  booking = false,
  onBookingConfirmed,
  appointmentDate,
  appointmentTime
}) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [open, setOpen] = useState(false);

  const hospitalName = details["Hospital Name"] || 'N/A';
  const city = details["City"] || 'N/A';
  const state = details["State"] || 'N/A';
  const hospitalType = details["Hospital Type"] || 'N/A';
  const hospitalRating = details["Hospital overall rating"] || 'Not Available';


  const handleBookingSuccess = (selectedDate, selectedTime) => {
    if (onBookingConfirmed) {
      onBookingConfirmed(details, selectedDate, selectedTime);
    }
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    checkBookingComplete();
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    checkBookingComplete();
  };



  const checkBookingComplete = () => {
    if (selectedDate && selectedTime) {
      setOpen(true);
      storeBookingData();
      if (onBookingConfirmed) {
        onBookingConfirmed();
      }
    }
  };

  const storeBookingData = () => {
    const bookingData = {
      hospital: details["Hospital Name"],
      date: selectedDate,
      time: selectedTime,
      ...details
    };
    localStorage.setItem('hospitalBooking', JSON.stringify(bookingData));
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Box 
    sx={{ 
        borderRadius: 2, 
        bgcolor: "#fff", 
        p: { xs: 2, md: 4 },
        width: { xs: '90%', sm: '85%', md: '80%', lg: '75%', xl: '785.56px' },
        mr:{xl:'30px'},
        mt:'20px'
        // mb:{xs:'30px', sm:'30px'},
        // height: { xs: '90%', sm: '85%', md: '80%', lg: '75%', xl: '180.38px' },
     }}
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
          
            {hospitalName.toLowerCase()}
            {/* Fortis Hospital Richmond Road */}
          </Typography>
          <Typography
            textTransform="capitalize"
            color="#414146"
            fontSize={14}
            fontWeight={700}
            className={styles.hospitalLocation}
          >
          
            {`${city.toLowerCase()}, ${state}`}
            {/* Banglore, Karnataka */}
          </Typography>
          <Typography fontSize={14} mb={1} className={styles.hospitalType}>
          
            {hospitalType}
            {/* Smilessence Center for Advanced Dentistry + 1 more */}
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
         
                {hospitalRating === "Not Available" ? 0 : hospitalRating}
                 
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
        <Calender 
        details={details}
        // onDateSelect={handleDateSelect}
        // onTimeSelect={handleTimeSelect}
        onBookingSuccess={handleBookingSuccess}
          />
      )}
      
    </Box>
  );
}
