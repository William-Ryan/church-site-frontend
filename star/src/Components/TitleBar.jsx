import React from 'react';
import {CloudinaryContext, Image, Transformation} from 'cloudinary-react';

import Typography from '@mui/material/Typography';

import styled from '@emotion/styled'

const Img = styled.img`
    width: 15%`

const TitleBar = () => {
    return (
        <div>
            <div>
                <Img 
                src="https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/308787210_457577689737886_6832976261704682608_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=IcmQKIGaQmIAX9yUSMP&_nc_ht=scontent-lga3-2.xx&oh=00_AT--JjGLTckMkTwGuV7cV5QXgcI7LsrGCTMEE_jG6RpEXQ&oe=633D5E96"
                alt="Star with middle cross"/>
            </div>
            <Typography variant={"h1"}>
                Star Of Hope Chapel
            </Typography>
        </div>
    )
}

export default TitleBar

{/* <input name="file" type="file"
   class="file-upload" data-cloudinary-field="image_id"
   data-form-data="{ 'transformation': {'crop':'limit','tags':'samples','width':3000,'height':2000}}"/> */}

// <CloudinaryContext cloudName="dvtt3ptgl">
//    <Image publicId="sample" format="jpg">
//        <Transformation crop="fill" gravity="faces" width="300" height="200"/>
//    </Image>
// </CloudinaryContext>