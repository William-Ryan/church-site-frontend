import React from 'react';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const Contact = () => {
    return (
        <div style={{ backgroundImage: "url(https://res.cloudinary.com/dmtkcjrqv/image/upload/v1701563652/Star_background_adbxe4.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "22%", backgroundPosition: "center"}}>
            <Card style={{ width: "23%", margin: "10% auto", fontSize: "1.5rem", textAlign: "center", opacity: "90%" }}>
                <CardContent>
                    <Typography>
                        Contact Us
                    </Typography>
                    <ul>
                        <li>Address: 233 W Artisan St, Williamsport, MD </li>
                        <li>Number: 240-520-7202 </li>
                        <li>Email: church@gmail.com </li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    )
}

export default Contact