import React from 'react'
import styles from './Navbar.module.css'
// eslint-disable-next-line
import {Box,Container,Button,Stack,Typography,useMediaQuery,IconButton} from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import logo from '../../assets/Logo.svg'

function Navbar() {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
        <Box p={1} className={styles.heading}>
            <p>The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</p>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 2,}} mx={15}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Link to="/" className={styles.noUnderlineLink}>
                <Box className={styles.img}>
                  <img src={logo} alt='logo' /> 
                  <p>Medify</p>
                </Box>
                  
              </Link>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', gap: 2 }} 
            className={[styles.navlinks, menuOpen && styles.active]}  
            style={{display:"flex", alignItems:"flex-start", justifyContent:"flex-start"}}>
              
                <Link className={styles.navLink}>Find Doctors</Link>
                <Link className={styles.navLink}>Hospitals</Link>
                <Link className={styles.navLink}>Medicines</Link>
                <Link className={styles.navLink}>Surgeries</Link>
                <Link className={styles.navLink}>Software for Provider</Link>
                <Link className={styles.navLink}>Facilities</Link>
                <Link >
                <Button variant="contained" disableElevation style={{background:"#2AA8FF"}}>My Bookings</Button>
                </Link>
             

              {isMobile && (<IconButton onClick={() => setMenuOpen(false)}
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 32,
                  color: "#fff",
                }}>
                <CloseIcon />
              </IconButton>)}
              
              </Box>
              {isMobile && (
            <IconButton onClick={() => setMenuOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
              
        
        </Box>
        

    </header>
  )
}

export default Navbar