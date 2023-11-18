import React from 'react';
import {CloudinaryContext, Image, Transformation} from 'cloudinary-react';

import Typography from '@mui/material/Typography';

import styled from '@emotion/styled'

const Img = styled.img`
    width: 10%`

const TitleBar = () => {
    return (
        <div style={{ background: "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(217,246,177,1) 8%, rgba(207,185,16,1) 100%)", padding:"0% 0% 0.5%"}}>
            <div>
                <Img 
                src="https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-6/308787210_457577689737886_6832976261704682608_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_I06z0eNpEkAX-LMOmU&_nc_ht=scontent-iad3-2.xx&oh=00_AfCXhYJJqvKPW91EYLGJsnNDd1MfsDyhvK2BSZOG8koHkw&oe=655D3156"
                alt="Star with middle cross"/>
            </div>
            <div>
                <Typography variant={"h1"} style={{ fontFamily: "serif", textDecoration: "underline", textShadow: "gold -2px 0px", color: "darkkhaki", fontSize: "5rem"}}>
                    Star Of Hope Chapel
                </Typography>
            </div>
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