import React from 'react'
import ambulance from '../../../assets/ambulance.svg'
import doctor from '../../../assets/doctor.svg'
import lab from '../../../assets/laboratory.svg'
import hospital from '../../../assets/hospital.svg'
import med from '../../../assets/medical.svg'
import { Box, Grid, Icon, Typography } from '@mui/material'
import IconCard from '../Icon/IconCard'

function ServiceLooking() {

    const services = [
        {img: doctor, title:"Doctors"},
        {img: lab, title:"Labs"},
        {img: hospital, title:"Hospitals"},
        {img: med, title:"Medical Store"},
        {img: ambulance, title:"Ambulance"},
    ]
  return (
    <Box>
        <Typography component="h4"
        fontSize={20}
        color="#102851"
        fontWeight={500}
        textAlign="center"
        mb={2}>
             You may be looking for
        </Typography>
        <Grid container columnSpacing={{ xs: 1, md: 2 }}
        justifyContent={"center"}>
            {services.map((service, index) => (
                <Grid item key={index} /*xs={12} sm={6} md={4}*/ xs={4} md={2.4}>
                    <IconCard img={service.img} title={service.title} bg= "#FAFBFE"
                    />
                </Grid>
             ))}
        </Grid>
        
    </Box>
  )
}

export default ServiceLooking