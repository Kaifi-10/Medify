import React from 'react'
import detox from '../../../assets/detox.png'
import rebecca from '../../../assets/author.jpeg'
import { Box } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styles from './Blog.module.css'



function BlogCard() {
  return (
    <Box alignItems='left'>
        <Card sx={{ maxWidth: 363 }} alignItems='left' className={styles.cardContainer}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="294.59"
          width="363.33"
          src={detox}
          borderradius="8px"
          alt="detox"
        />
        <CardContent className={styles.cardContent}>
          <Typography gutterBottom variant="h5" component="div" className={styles.date}>
                 Medical | March 31, 2022
          </Typography>
          <Typography variant="body2" className={styles.tips}>
                6 Tips To Protect Your Mental Health When You're Sick
          </Typography>
          <Box className={styles.author} mt={2}>
            <Box 
            component='img'
            src={rebecca}
            height={32}
            width={32}
            borderRadius={30} />

            <Typography ml={2} className={styles.rebeccaName}>
                Rebecca Lee
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
    </Box>
  )
}

export default BlogCard