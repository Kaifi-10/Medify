import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import styles from './Blog.module.css'
import BlogCard from './BlogCard'

function Blog() {
    const posts =[1,2,3]
  return (
    <Box bgcolor="#FFF" p={5}>
        <Typography className={styles.blogNews}>
            Blog & News
        </Typography>
        <Typography className={styles.readLatest}>
             Read Our Latest News
        </Typography>

        <Grid container 
        spacing={4} 
        justifyContent="center" 
        columnSpacing={{ xs: 1, sm: 1, md: 2 }}
        m={1}
        
            >
            {posts.map((post) =>(
                <Grid item xs={12} md={3}  sm={6}>
                    <BlogCard />
                </Grid>
            ))}
        </Grid>
    </Box>
  )
}

export default Blog