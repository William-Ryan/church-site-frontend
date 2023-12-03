import React from 'react';

import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide'

const Events = () => {
    return (
        <div style={{ backgroundImage: "url(https://res.cloudinary.com/dmtkcjrqv/image/upload/v1701563652/Star_background_adbxe4.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "22%", backgroundPosition: "center"}}>
            <div>
                <Typography variant={"h3"}>Events At Star Of Hope Chapel</Typography>
            </div>
            <Slide direction='right' in={"on"}>
                <Typography style={{ textAlign: "center", fontSize: "4rem", fontWeight: "bold", color: "midnightblue"}}>2024-2025</Typography>
            </Slide>
            <Slide direction='right' in={"on"} timeout={ 1000 }>
                <Typography style={{ fontSize: "2.5rem", textAlign: "center", color: "blueviolet", fontStyle: "italic", textDecoration: "underline"}}>To Be Added Soon!</Typography>
            </Slide>
        </div>
    )
}

export default Events