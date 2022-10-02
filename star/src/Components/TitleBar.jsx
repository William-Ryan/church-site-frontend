import React from 'react';
import {CloudinaryContext, Image, Transformation} from 'cloudinary-react';

import Typography from '@mui/material/Typography';

const TitleBar = () => {
    return (
        <div>
            <div>
            <CloudinaryContext cloudName="snap-globe">
                <Image publicId="Church-Media/Church_Symbol" format="jpg"/>
            </CloudinaryContext>
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