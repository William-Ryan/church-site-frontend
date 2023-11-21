import React from "react"
import {Link} from "react-router-dom"

import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography'

export default function Navigation() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ display: "flex", padding: "0% 0% 0.5% 0%", backgroundColor: "grey"}}>
      <div style={{ width: "27%"}}>
            <Typography variant={"h1"} style={{  textShadow: "darkred -2px 0px", color: "red", fontSize: "1.5rem", margin: "2% 0% 0% 2%"}}>
                Star Of Hope Chapel
            </Typography>
      </div>
      <div style={{ width: "100%" }}>
      <AppBar position="static">
        <Tabs 
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs"
          indicatorColor="primary"
          centered={true}
          style={{ borderRadius: "3%", backgroundColor: "antiquewhite", width: "100%"}}
        >
          <Tab  label="HOME" component={Link} to="/" />
          <Tab label="ABOUT US" component={Link} to="/about" />
          {/* <Tab label="LIVE STREAM" component={Link} to="/stream" /> */}
          {/* <Tab label="MEDIA" component={Link} to="/media" /> */}
          <Tab label="EVENTS" component={Link} to="/events" />
          <Tab label="CONTACT" component={Link} to="/contact" />
        </Tabs>
      </AppBar>
      </div>
      <div style={{ display: "flex", justifyContent: "right"}}>
          <img 
          src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.18169-9/10624727_710356892396045_1093676820065097135_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=2be8e3&_nc_ohc=C-jK4jwVivMAX-oC_aJ&_nc_ht=scontent-iad3-1.xx&oh=00_AfD_avYfjvBZ-ubP_kAVZGcypadFvq5uQOxFvFUkRQPrAg&oe=658321CC"
          alt="Star Of Hope Church when first built"
          style={{ width: "15%"}}
          />
      </div>
    </div>
  );
}

 