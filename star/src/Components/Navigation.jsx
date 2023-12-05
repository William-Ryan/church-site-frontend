import React from "react"
import {Link} from "react-router-dom"

import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

const Container = styled('div')(({theme}) => ({
  display: "flex",
  padding: "0% 0% 0.5% 0%",
  backgroundColor: "black",
  [theme.breakpoints.down('lg')]: {
    flexDirection: "column"
  }
}))

const ImageContainer = styled('div')(({theme}) => ({
  display: "flex",
  justifyContent: "right",
  [theme.breakpoints.down('lg')]: {
    justifyContent: 'left'
  },
}))

const ChurchImg = styled('img')(({theme}) => ({
  width: "15%",
  [theme.breakpoints.down('lg')]: {
    width: "6%"
  }
}))

const NavTabs = styled(Tab)(({theme}) => ({
  color: "blueviolet", 
  fontSize: "1.7rem", 
  fontWeight: "bold",
  [theme.breakpoints.down('sm')]: {
    fontSize: "1rem"
  }
}))

export default function Navigation() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <div style={{ width: "27%"}}>
            <Typography variant={"h1"} style={{ color: "deepskyblue", fontSize: "2rem", margin: "3% 0% 0% 2%"}}>
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
          indicatorColor="secondary"
          centered={true}
          style={{ borderRadius: "3%", backgroundColor: "lightslategray", width: "100%"}}
        >
          <NavTabs label="HOME" component={Link} to="/" />
          <NavTabs label="ABOUT US" component={Link} to="/about" />
          {/* <NavTabs label="LIVE STREAM" component={Link} to="/stream" /> */}
          {/* <NavTabs label="MEDIA" component={Link} to="/media" /> */}
          <NavTabs label="EVENTS" component={Link} to="/events" />
          <NavTabs label="CONTACT" component={Link} to="/contact" />
        </Tabs>
      </AppBar>
      </div>
      <ImageContainer>
          <ChurchImg 
          src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.18169-9/10624727_710356892396045_1093676820065097135_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=2be8e3&_nc_ohc=C-jK4jwVivMAX-oC_aJ&_nc_ht=scontent-iad3-1.xx&oh=00_AfD_avYfjvBZ-ubP_kAVZGcypadFvq5uQOxFvFUkRQPrAg&oe=658321CC"
          alt="Star Of Hope Church when first built"
          />
      </ImageContainer>
    </Container>
  );
}

 