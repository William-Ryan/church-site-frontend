import React from 'react';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles'

const ListContainer = styled('ul')(({theme}) => ({
    [theme.breakpoints.down('lg')]: {
      fontSize: "1rem"
    }
  }))

const ContactCard = styled(Card)(({theme}) => ({
    width: "23%", 
    margin: "10% auto", 
    fontSize: "1.5rem", 
    textAlign: "center", 
    opacity: "90%",
    [theme.breakpoints.down('md')]: {
        width: "40%"
      },
    [theme.breakpoints.down('sm')]: {
        width: "70%"
    }
}))

const Contact = () => {
    return (
        <div style={{ backgroundImage: "url(https://res.cloudinary.com/dmtkcjrqv/image/upload/v1701563652/Star_background_adbxe4.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "22%", backgroundPosition: "center"}}>
            <ContactCard>
                <CardContent>
                    <Typography>
                        Contact Us
                    </Typography>
                    <ListContainer>
                        <li>Address: 22 S Artisan St, Williamsport, MD </li>
                        <li>Number: 240-520-7202 </li>
                    </ListContainer>
                </CardContent>
            </ContactCard>
        </div>
    )
}

export default Contact