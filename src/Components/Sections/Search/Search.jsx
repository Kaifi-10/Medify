import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styles from './Search.module.css'
import { Box, Button, InputAdornment } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Search() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [formData, setFormData] = useState({ state: "", city: "" });
  const navigate = useNavigate();
  

  
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  useEffect(() =>{
    const fetchStates = async () =>{
      try {
        const response = await axios.get("https://meddata-backend.onrender.com/states")
        setStates(response.data)
      } catch (error) {
        console.log("Error in fething the States:", error)
      }
    }
    fetchStates()
  },[])


  useEffect( () =>{
    const fetchCities = async () =>{
      try {
        const response = await axios.get(`https://meddata-backend.onrender.com/cities/${formData.state}`)
        setCities(response.data)
      } catch (error) {
        console.log("Error while fetching the cities:", error);
      }
    }
    if(formData.state !==''){
      fetchCities()
    }
  },[formData.state])



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit =(e) =>{
    e.preventDefault()
    if(formData.state && formData.city){
      navigate(`/search?state=${formData.state}&city=${formData.city}`)
    }
  }

  return (
    <div>
      <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        gap: 4,
        // justifyContent: "space-between",
        alignItems:"center",
        justifyContent:"center",
        m:4,
        flexDirection: { xs: "column", md: "row" },
      }}>

        <FormControl className={styles.customSelect} sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="state-select-label">State</InputLabel>
        <Select
            displayEmpty
            className={styles.customSelect}
            //   labelId="demo-multiple-name-label"
            id="state-select-label"
            //   multiple
            value={formData.state}
            name='state'
            onChange={handleChange}
            startAdornment={
                <InputAdornment position="start">
                <SearchIcon />
                </InputAdornment>
            }
            input={<OutlinedInput label="State" />}
            MenuProps={MenuProps}
            required
            sx={{ minWidth: 200, width: "100%" }}
        >
          {states.map((state) => (
            <MenuItem
              key={state}
              value={state}
              style={getStyles(state, formData.state, theme)}
            >
              {state}
            </MenuItem>
          ))}
        </Select>
        </FormControl>



        <FormControl className={styles.customSelect} sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="city-select-label">City</InputLabel>
        <Select
            className={styles.customSelect}
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            //   multiple
            value={formData.city}
            name='city'
            onChange={handleChange}
            startAdornment={
                <InputAdornment position="start">
                <SearchIcon />
                </InputAdornment>
            }
            input={<OutlinedInput label="City" />}
            MenuProps={MenuProps}
            required
            sx={{ minWidth: 200, width: "100%" }}
        >
          {cities.map((city) => (
            <MenuItem
              key={city}
              value={city}
              style={getStyles(city, formData.city, theme)}
            >
              {city}
            </MenuItem>
          ))}
        </Select>
        </FormControl>

        <Button
        className={styles.searchButton}
        type="submit"
        variant="contained"
        size="large"
        startIcon={<SearchIcon sx={{ color: '#FFF' }}  />}
        sx={{ py: "15px", px: 8, flexShrink: 0 }}
        disableElevation
      >
        Search
      </Button>
      </Box>
    </div>
  );
}