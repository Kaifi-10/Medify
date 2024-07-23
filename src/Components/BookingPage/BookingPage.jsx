import { Box, Container, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SearchBar from '../BookingPage/SearchBar'
import Navbar from '../Navbar/Navbar'
import styles from './BookingPage.module.css'
import oral from '../../assets/oral.png'
import HospitalCard from '../Sections/HospitalCard/HospitalCard'
import BookingCard from './BookingCard'

function BookingPage() {
    const [bookings, setBookings] = useState([]);
    

    useEffect(() => {
        const localBookings = localStorage.getItem("hospitalBookings") || "[]";
        setBookings(JSON.parse(localBookings));
    }, []);

    

    console.log("BOOKINGS:",bookings)



    return (
        <Box className={styles.bookingPgeContainer}>
            <Navbar />
            <Box className={styles.BookingbuleBackground}>
                <Container>
                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        spacing={{ xs: 0, md: 12 }}
                        alignItems={{ xs: "center", md: "flex-end" }}>
                        <Typography className={styles.myBooking}>
                            My Bookings
                        </Typography>
                        <Box
                            bgcolor="#fff"
                            p={3}
                            flexGrow={1}
                            borderRadius={2}
                            boxShadow="0 0 10px rgba(0,0,0,0.1)"
                            sx={{ translate: "0 50px" }}
                            width={{ xs: 1, md: "auto" }}>
                            <SearchBar />
                        </Box>
                    </Stack>
                </Container>
            </Box>

            <Container sx={{
                mt: '50',
                pt: 8, pb: 10, px: { xs: 0, md: 4 }
            }}>         
                <Box sx={{ position: 'relative' }}>
                    <Stack direction={{ md: "row" }} alignItems='center'> 
                        <Stack alignItems='center'>
                            
                        {bookings.length > 0 ? (
                                bookings.map((booking, index) => (
                                    <BookingCard key={index} booking={booking} />
                                ))
                            ) : (
                                <Typography variant="h6" sx={{
                                    mr:"20px",
                                   
                                }}> No bookings found</Typography>
                            )}
                            {/* <BookingCard /> */}
                          
                        </Stack>
                        <Box component='img' src={oral} alt='Oral' width={363} 
                            position='relative'
                            sx={{
                                position: 'sticky',
                                alignSelf: 'flex-start',
                                display: { xs: 'block', md: 'block' },
                                boxShadow: 5, 
                                borderRadius: 5,
                                mt:{ xs: '25px', sm: '25px', md: '0px', lg: '0px', xl: '15px' },
                                ml:{ xs: '40px', sm: '225px', md: '0px', lg: '0px', xl: '0px' }
                            }}
                        />
                    </Stack>
                </Box>
            </Container>
        </Box>
    )
}

export default BookingPage