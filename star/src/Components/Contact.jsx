import React from 'react';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const Contact = () => {
    return (
        <div style={{ backgroundImage: "url(https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-6/308787210_457577689737886_6832976261704682608_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5jo5PxPBv8MAX8ZJWsR&_nc_ht=scontent-iad3-2.xx&oh=00_AfA6j9bF3xhF0zyoI0z3-NfPjnw9MydGskVB2WMxnJ9fqw&oe=65671496)", backgroundRepeat: "no-repeat", backgroundSize: "22%", backgroundPosition: "center"}}>
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