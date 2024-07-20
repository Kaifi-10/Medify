import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import banner from '../../../assets/patientcaring.png'
import tick from '../../../assets/blueTick.svg'
import styles from './PatientCaring.module.css'

export default function PatientCaring() {

    const listText = [
        {text: 'Stay Updated About Your Health'},
        {text: 'Check Your Results Online'},
        {text: 'Manage Your Appointments'},
    ]
    return (
        <Box py={6} textAlign='left' >
            <Container>
                <Grid container spacing={6} alignItems='center'>

                    <Grid item xs={12} md={6}>
                        <Box
                            component='img'
                            src={banner}
                            width={1}
                        />
                    </Grid>

                    <Grid item xs={12} md={6} ml={0}>
                        <Typography
                            fontWeight={600}
                            className={styles.patientHeading}
                        >
                            HELPING PATIENTS FROM AROUND THE GLOBE!!
                        </Typography>
                        <Typography variant="h2" mb={1} className={styles.patientCaringBox}>
                            Patient <Box component='span' color='#2AA7FF'>Caring</Box>
                        </Typography>
                        <Typography color='#77829D' lineHeight={2}>
                            Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.
                        </Typography>

                        <List sx={{ fontSize: { xs: 12, md: 18 } }}>

                            {listText.map((list, index) => (
                                <ListItem disableGutters>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                    <Box component='img' src={tick} height={22} width={22} />
                                </ListItemIcon>
                                <ListItemText
                                    primary={list.text}
                                    primaryTypographyProps={{ fontSize: { xs: 14, md: 18 }, fontWeight: 500, color: '#1B3C74' }}
                                />
                            </ListItem>

                            ))}
                            
                        </List>

                    </Grid>

                </Grid>
            </Container>
        </Box>
    )
}