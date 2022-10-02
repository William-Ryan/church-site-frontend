import React from "react"
import {Link} from "react-router-dom"

import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function Navigation() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs"
          indicatorColor="primary"
          centered={true}
          style={{ backgroundColor: "yellowgreen"}}
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
  );
}

 