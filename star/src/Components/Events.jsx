import React from 'react';

import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/material/styles';

const Events = () => {
    return (
        <div style={{ backgroundImage: "url(https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-6/308787210_457577689737886_6832976261704682608_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5jo5PxPBv8MAX8ZJWsR&_nc_ht=scontent-iad3-2.xx&oh=00_AfA6j9bF3xhF0zyoI0z3-NfPjnw9MydGskVB2WMxnJ9fqw&oe=65671496)", backgroundRepeat: "no-repeat", backgroundSize: "22%", backgroundPosition: "center"}}>
            <div>
                <Typography variant={"h3"}>Events At Star Of Hope Chapel</Typography>
            </div>
            <div>
                <Typography>2024-2025</Typography>
            </div>
        </div>
    )
}

export default Events