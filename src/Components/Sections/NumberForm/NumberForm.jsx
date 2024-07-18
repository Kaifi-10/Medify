// import React from 'react'
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import { Box, TextField, Typography, Button } from '@mui/material';
// import styles from './NumberForm.module.css'

// function NumberForm() {
//   return (
//     <Box mb={5} className={styles.coontainerBox}>
//         <Typography fontWeight={600} mb={1} mt={2}>
//             Get the link to download the app
//         </Typography>
//         {/* <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel> */}
//         <Box component='form' className={styles.inputButtonContainer}>
//         <TextField
//                 className={styles.formInput}
//                 placeholder='Enter Phone Number'
//                 id="outlined-adornment-amount"
//                 InputProps={{
//                     startAdornment: <InputAdornment position="start">+91</InputAdornment>,
//                 }}
//                 inputProps={{
//                     maxLength: 10,
//                     pattern: "[0-9]*",
//                     inputMode: "numeric",
//                 }}
               
//                 required
//             />
//             <Button type='submit' size='large' variant="contained" disableElevation className={styles.submitButton} >
//                     Send SMS
//                 </Button>

//         </Box>
          
//     </Box>
//   )
// }

// export default NumberForm

import React from 'react'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import { Box, TextField, Typography, Button } from '@mui/material';
import styles from './NumberForm.module.css'

function NumberForm() {
  return (
    <Box mb={5} className={styles.containerBox}>
        <Typography fontWeight={600} mb={1} mt={2}>
            Get the link to download the app
        </Typography>
        
        <Box component='form' className={styles.inputButtonContainer}>
            <TextField
                className={styles.formInput}
                placeholder='Enter Phone Number'
                id="outlined-adornment-amount"
                InputProps={{
                    startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                }}
                inputProps={{
                    maxLength: 10,
                    pattern: "[0-9]*",
                    inputMode: "numeric",
                }}
                fullWidth
                required
            />
            <Button 
                type='submit' 
                size='large' 
                variant="contained" 
                disableElevation 
                className={styles.submitButton}
                // fullWidth
            >
                Send SMS
            </Button>
        </Box>
     
    </Box>
  )
}

export default NumberForm