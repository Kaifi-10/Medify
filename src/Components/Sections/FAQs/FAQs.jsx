import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Accordions from '../Accordion/Accordions'
import faqBanner from '../../../assets/faqs-banner.jpg'
import styles from './FAQs.module.css'

function FAQs() {

    const faqsData = [
        {
            question: 'Why choose our medical for your family?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
        {
            question: 'Why we are different from others?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
        {
            question: 'Trusted & experience senior care & love',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
        {
            question: 'How to get appointment for emergency cases?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        }
    ]

  return (
    <Box>
        <Container >
            <Typography className={styles.answer} mt={4}>
                Get Your Answer
            </Typography>
            <Typography variant='h3' className={styles.question} mb={2} fontWeight={600}>
            Frequently Asked Questions
            </Typography>

            <Grid container alignItems='center' spacing={5}>
                <Grid item xs={12} md={6}>
                    <Box height='auto'>
                        <img src={faqBanner} alt='faqBanner' width={500} className={styles.imgFaq} />                                          
                    
                    </Box>
                        
                    
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box className={styles.accordianRes}>
                        <Accordions data = {faqsData}/>
                    </Box>                    
                </Grid>

            </Grid>
        </Container>
    </Box>
  )
}

export default FAQs