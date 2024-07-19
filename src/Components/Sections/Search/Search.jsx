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

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Search() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <Box
      component="form"
    //   onSubmit={handleSubmit}
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
            value={personName}
            onChange={handleChange}
            startAdornment={
                <InputAdornment position="start">
                <SearchIcon />
                </InputAdornment>
            }
            input={<OutlinedInput label="Name" />}
            MenuProps={MenuProps}
            required
            sx={{ minWidth: 200, width: "100%" }}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
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
            value={personName}
            onChange={handleChange}
            startAdornment={
                <InputAdornment position="start">
                <SearchIcon />
                </InputAdornment>
            }
            input={<OutlinedInput label="Name" />}
            MenuProps={MenuProps}
            required
            sx={{ minWidth: 200, width: "100%" }}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
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