import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid, Paper, Stack, Divider } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import styles from './Calender.module.css'
import {  useMediaQuery, useTheme } from '@mui/material';


function Calender() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [visibleDateRange, setVisibleDateRange] = useState([]);
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));
    
  
    const timeSlots = {
      Morning: ['11:30 AM'],
      Afternoon: ['12:00 PM', '12:30 PM', '01:30 PM', '02:00 PM', '02:30 PM'],
      Evening: ['06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM'],
    };
  

    const generateDateRange = (startDate) => {
      return Array.from({ length: 7 }, (_, i) => {
        const date = new Date(startDate);
        date.setDate(date.getDate() + i);
        return date;
      });
    };
  
    const formatDate = (date) => {
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
  
      if (date.toDateString() === today.toDateString()) {
        return 'Today';
      } else if (date.toDateString() === tomorrow.toDateString()) {
        return 'Tomorrow';
      } else {
        return date.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' });
      }
    };
  
    useEffect(() => {
      const fullRange = generateDateRange(currentDate);
      setVisibleDateRange(fullRange.slice(0, 3));
    }, [currentDate]);
  
    const handlePrevDate = () => {
      if (visibleDateRange[0] > currentDate) {
        const newStartDate = new Date(visibleDateRange[0]);
        newStartDate.setDate(newStartDate.getDate() - 1);
        setVisibleDateRange(generateDateRange(newStartDate).slice(0, 3));
      }
    };
  
    const handleNextDate = () => {
      const fullRange = generateDateRange(currentDate);
      const lastPossibleDate = fullRange[fullRange.length - 1];
      if (visibleDateRange[2] < lastPossibleDate) {
        const newStartDate = new Date(visibleDateRange[1]);
        setVisibleDateRange(generateDateRange(newStartDate).slice(0, 3));
      }
    };
 
  
    return (
        <Box elevation={3}  
        // className={styles.calenderContainer}
        // bgcolor='#fff'
        mt={7}
        pb={5}
        // ml={-50}


        sx={{
            width: { xs: '90%', sm: '85%', md: '80%', lg: '75%', xl: '785.56px' },
            height: { xs: '90%', sm: '85%', md: '80%', lg: '75%', xl: '180.38px' },
           //  mx: 'auto'
           mb:{xs:'30px', sm:'30px'},
           display:'flex',
           flexDirection:'column',
           justifyContent:'flex-start',
           alignContent:'flex-start',
        //    bgcolor: '#fff'
       }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Button onClick={handlePrevDate} disabled={visibleDateRange[0] <= currentDate}>
            <KeyboardArrowLeftIcon />
          </Button>
          <Box display="flex" justifyContent="space-around" flex={1} mt={1}>
            {visibleDateRange.map((date, index) => (
              <Button
                key={index}
                onClick={() => setSelectedDate(date)}
                variant={selectedDate && date.toDateString() === selectedDate.toDateString() ? 'contained' : 'outlined'}
                sx={{ flexDirection: 'column', minWidth: { xs: 60, sm: 80 } }}
              >
                <Typography variant="caption">{formatDate(date)}</Typography>
              </Button>
            ))}
          </Box>
          <Button onClick={handleNextDate} disabled={visibleDateRange[2]?.getDate() === currentDate.getDate() + 6}>
            <KeyboardArrowRightIcon />
          </Button>
        </Box>

        <Box mt={4}>
          {Object.entries(timeSlots).map(([period, slots]) => (
            <Box key={period} mb={5} textAlign='left'  >
              <Stack 
              // direction={isLargeScreen ? 'row' : 'column'}
              direction={{ xs: 'column', xl: 'row' }}
              // mr={2}
              // sx={{
              //   direction:{xl:'row', sm:'column'}
              // }}
              flexWrap="wrap" 
              gap={1}
              >
              <Typography variant="h6" 
              textAlign={{ xs: 'left', xl: 'left' }}
              mb={1}
              mr={5}
              className={styles.timePeriod}
              >
                {period}
              </Typography>
              
              <Stack direction="row" flexWrap="wrap" gap={1}  >
                {slots.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? 'contained' : 'outlined'}
                    onClick={() => setSelectedTime(time)}
                    size="small"
                    border= "1px solid #2AA7FF"
                    sx={{
                      mr:'40px',
                      alignItems:'flex-start',
                      justifyContent:'flex-start'
                    }}    

                    
                  >
                    {time}
                  </Button>
                  
                ))}
                <Divider sx={{ borderStyle: "dashed", mb: 2 }} />
              </Stack>
              </Stack>
            </Box>
          ))}
        </Box>
      </Box>
    );
  };

export default Calender