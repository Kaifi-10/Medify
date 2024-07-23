import { Alert, Box, Container, Snackbar, Stack, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Search from '../Sections/Search/Search'
import styles from './SearchPage.module.css'
import oral from '../../assets/oral.png'
import tick from '../../assets/greyTick.png'
import HospitalCard from '../Sections/HospitalCard/HospitalCard'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Calender from '../Sections/Calender/Calender'
import { useSearchParams } from "react-router-dom";
import axios from 'axios'




function SearchPage() {
    const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const [seachParams, setSearchParams] = useSearchParams();
  const [state, setState] = useState(seachParams.get("state"));
  const [city, setCity] = useState(seachParams.get("city"));
  const [hospitals, setHospitals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);



  useEffect(() =>{
    setState(seachParams.get("state"))
    setCity(seachParams.get("city"))
  },[seachParams])

  useEffect(() =>{
    const hospitalData = async () =>{
      setHospitals([])
      setIsLoading(true)
      try {
        const data = await axios.get(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`)
        setHospitals(data.data)
        isLoading(false)
      } catch (error) {
        console.log("Error while fetching the hospitals data:", error)
        setIsLoading(false)
      }
    }

    if(state && city){
      hospitalData()
    }
  },[state,city])
  console.log("Hospital:",hospitals)

  // const handleBookingConfirmed = () => {
  //   setOpenAlert(true);
  // };

  /*const handleBookingConfirmed = (details, selectedDate, selectedTime) => {

    if (!selectedDate || !selectedTime) {
      console.log("Both date and time must be selected to confirm booking");
      return;
    }
    const bookingData = {
      hospital: details["Hospital Name"],
      date: selectedDate,
      time: selectedTime,
      ...details
    };
    // localStorage.setItem('hospitalBooking', JSON.stringify(bookingData));

    
    // Retrieve existing bookings from localStorage
    const existingBookingsJSON = localStorage.getItem('hospitalBookings');
    let existingBookings = [];

    if (existingBookingsJSON) {
      try {
        existingBookings = JSON.parse(existingBookingsJSON);
      } catch (error) {
        console.error('Error parsing existing bookings:', error);
      }
    }

     // Define the newBooking object using the parameters
     const newBooking = {
      ...bookingData,
      id: Date.now(), // Adding a unique ID to the new booking
    };

    // Add the new booking to the array
    const updatedBookings = [...existingBookings, newBooking];

    // Store the updated bookings array back in localStorage
    localStorage.setItem('hospitalBookings', JSON.stringify(updatedBookings));
    setOpenAlert(true);
  };*/

  const handleBookingConfirmed = (details, selectedDate, selectedTime) => {
    if (!selectedDate || !selectedTime) {
      console.log("Both date and time must be selected to confirm booking");
      return;
    }

    let formattedDate;
    if (selectedDate instanceof Date) {
      formattedDate = selectedDate.toISOString();
    } else if (typeof selectedDate === 'string') {
      // Assuming selectedDate is already in a valid format
      formattedDate = selectedDate;
    } else {
      console.error('Invalid date format');
      return;
    }

    // Highlight start
    const bookingData = {
      hospital: details["Hospital Name"],
      date: formattedDate, // Ensure date is stored as string
      time: selectedTime,
      ...details
    };

    // Retrieve existing bookings from localStorage
    const existingBookingsJSON = localStorage.getItem('hospitalBookings');
    let existingBookings = [];

    if (existingBookingsJSON) {
      try {
        existingBookings = JSON.parse(existingBookingsJSON);
      } catch (error) {
        console.error('Error parsing existing bookings:', error);
      }
    }

    // Define the newBooking object using the parameters
    const newBooking = {
      ...bookingData,
      id: Date.now(), // Adding a unique ID to the new booking
    };

    // Add the new booking to the array
    const updatedBookings = [...existingBookings, newBooking];

    // Store the updated bookings array back in localStorage
    localStorage.setItem('hospitalBookings', JSON.stringify(updatedBookings));
    // Highlight end

    setOpenAlert(true);
  };

  // ... rest of the component remains the same





  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };

  return (
    <Box className={styles.searchPageContainer}>
        <Navbar />
       
        <Box
       
              className={styles.buleBackground}
        >
          <Container  
           maxWidth="xl"
           sx={{
            width: { xs: '90%', sm: '85%', md: '80%', lg: '75%', xl: '70%' },
            height: 'auto',
            mx: 'auto',
             background: "#fff",
             p: .1,
             borderRadius: 2,
             transform: "translatey(30px)",
             mb: "50px",
             boxShadow: "0 0 10px rgba(0,0,0,0.1)",
             alignItems:'center',
             justifyContent:'center',
             display:'flex'
           }}          
            // className={styles.searchBox}
          >

    
            <Search />
        
          </Container>
          
        </Box>

        <Container sx={{
          mt:'50',
          pt: 8, pb: 10, px: { xs: 0, md: 4 }
        }}>
          
          
          {hospitals.length >0 && (
            <Box>
            <Typography className={styles.medicalCenter}>
            {hospitals.length} medical centers available in {city}
            </Typography>

            <Stack direction='row'>
              <Box component='img' src={tick} width={24} alt='tick' pr={1}/>
              <Typography className={styles.appointments}>
              Book appointments with minimum wait-time & verified doctor details
              </Typography>
            </Stack>
          </Box>


        )}
          

          <Box sx={{ position: 'relative' }}>
          <Stack /*alignItems="flex-start"*/ direction={{ md: "row" }}
          // sx={{
          //   alignItems:{
          //     md:'center',
          //     xl:'flex-start'
          //   }
          // }}
          alignItems='center'
          > 
            <Stack alignItems='center' >
            {/* <Stack direction={matches ? "row" : "column"}>
            <Stack alignItems="flex-start"> */}

              {hospitals.length>0 && (
                hospitals.map((hospital) => (
                  <HospitalCard 
                  key={hospital["Hospital Name"]}
                  details={hospital}
                  onBookingConfirmed={handleBookingConfirmed}
                  /* onBookingConfirmed={(details, selectedDate, selectedTime) => handleBookingConfirmed(details, selectedDate, selectedTime)}*/
                  />
                ))
              )}

              {isLoading && (
                <Typography variant="h3" bgcolor="#fff" p={3} borderRadius={2} mr={5}>
                  Loading...
                </Typography>
              )}

              {!state && (
                <Typography variant="h3" bgcolor="#fff" p={3} borderRadius={2} mr={5}>
                  Please select a state and city
                </Typography>
              )}
                
                
            </Stack>
            <Box component='img' src={oral} alt='Oral' width={363} 
            position='relative'
            sx={{
              position: 'sticky',
              alignSelf: 'flex-start',
              display: { xs: 'block', md: 'block' },
              boxShadow: 5, 
              borderRadius:5,
              // boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              mt:{ xs: '25px', sm: '25px', md: '0px', lg: '0px', xl: '15px' },
              ml:{ xs: '40px', sm: '225px', md: '0px', lg: '0px', xl: '0px' }
            }}
            // alignItems='center'
            />
          </Stack>
          </Box>
        </Container>

        <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
          Appointment Booking Confirmed! 
        </Alert>
      </Snackbar>
        

    </Box>
  )
}

export default SearchPage


