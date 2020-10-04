import React from 'react';

import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles(() => ({
//     body1: {
//         display: 'flex',
//         flexDirection: 'row-reverse',
//         justifyContent: 'center',
//         alignItems: 'center',
//         textAlign: 'center',
//         backgroundImage: `url(${Image})`,
//         backgroundSize: '100% 220%',
//         backgroundPosition: 'center center',
//         backgroundRepeat: 'no-repeat'
//     },
//     body2: {
//         margin: '15% 41% 10% 5%',
//     },
//     profile: {
//         height: '24rem',
//         maxWidth: '100%'
//     }
// }))



const Home = () => {
    // const classes = useStyles();
    const theme = createMuiTheme({
        typography: {
            fontFamily: 'sans-serif',
        }
    })
    return (
        <ThemeProvider theme={theme}>
            <div theme={theme}>
                <div>
                <Typography variant={"h1"}>
                    Star Of Hope Chapel
                </Typography>
                <Typography variant={"h3"}>
                    I'm William a Web Developer.
                </Typography>
                </div>
                <div>
                    {/* <img className={classes.profile} src={require('')} alt="site owner William"></img> */}
                </div>
            </div>
        </ThemeProvider>
    )
}

export default Home;