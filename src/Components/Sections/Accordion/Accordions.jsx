import React, { useState } from 'react'
import styles from './Accordions.module.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

function Accordions({data}) {
  const [expanded, setExpanded] = useState(false);
  // const {queation, answer} = data

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {data.map((items,index) =>(
        <Accordion 
        key={index}
        expanded={expanded === `panel${index}`} 
        onChange={handleChange(`panel${index}`)}
        // onChange={handleChange}
        className={styles.customAccordion}
        sx={{
          maxWidth: '464px', // Changed the maximum height as needed
          overflow: 'auto',
          
        }}
        >
          <AccordionSummary
            expandIcon={expanded === `panel${index}` ? <CloseIcon sx={{ color:  '#2AA7FF' }} /> : <AddIcon sx={{ color: '#2AA7FF' }} />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            className={styles.customAccordionSummary}
          >
            {items.question}
          </AccordionSummary>
          <AccordionDetails className={styles.customAccordionDetails}>
            {items.answer}
          </AccordionDetails>
        </Accordion>

      ))}
      
      
    </div>
  )
}

export default Accordions
