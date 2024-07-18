import { Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import styles from './Footer.module.css'


function FooterLinks({data}) {
  return (
    <Link underline="none" color='#fff' fontWeight={300} fontSize={14} className={styles.footerLinks}>
            <Stack direction='row' gap={0.5}>
                <KeyboardArrowRightIcon />
                {data}
            </Stack>
        </Link>
  )
}

export default FooterLinks