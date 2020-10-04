import React from "react"
import {Link} from "react-router-dom"
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function LinkTab(props) {
  return (
    <Tab
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Navigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          indicatorColor="secondary"
        >
          <LinkTab label="HOME"><Link to="/"></Link></LinkTab>
          <LinkTab label="ABOUT US"><Link to=""></Link></LinkTab>
          <LinkTab label="LIVE STREAM"><Link to=""></Link></LinkTab>
          <LinkTab label="MEDIA"><Link to=""></Link></LinkTab>
          <LinkTab label="EVENTS"><Link to=""></Link></LinkTab>
          <LinkTab label="CONTACT"><Link to=""></Link></LinkTab>
        </Tabs>
      </AppBar>
    </div>
  );
}

 