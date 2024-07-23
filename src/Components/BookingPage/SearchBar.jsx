import { Stack, TextField, Button } from "@mui/material";
import { useState, useMemo } from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from './BookingPage.module.css'

export default function SearchBar({ list, filterList }) {
  const [inputText, setInputText] = useState("");

  

  return (
    <form >
      <Stack direction="row" spacing={2}>
        <TextField
          type="text"
          label="Search By Hospital"
          variant="outlined"
          fullWidth
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
    
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          startIcon={<SearchIcon sx={{color:"#fff"}}/>}
          sx={{ py: "15px", px: 8, flexShrink: 0 }}
          disableElevation
          className={styles.bookingPageButton}
        >
          Search
        </Button>
      </Stack>
    </form>
  );
}
