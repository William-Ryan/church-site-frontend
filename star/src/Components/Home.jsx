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
                    <Typography variant={"body1"}>
                        Hello, Brothers and Sisters. Our loving church has recently celebrated 50 years together in fellowship with our Lord God. We are blessed to have our church family to gather together and spread the good word!
                    </Typography>
                    <Typography variant={"body1"}>
                        Mark 10:9: Therefore what God has joined together, let no one separate.
                    </Typography>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default Home;