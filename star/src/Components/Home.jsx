import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Paper, Button } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const Home = () => {
    const pics = [
        {
            label: "Our Pastor Doug Forsythe",
            img: "https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-6/365172692_6381649335244449_8847919768661449676_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jBH2kSsSYOYAX_oL6B8&_nc_ht=scontent-iad3-2.xx&oh=00_AfDdqlPO2vTJxmjMS7r2cLLKmNQE7OrkK8vzUjC3_296Eg&oe=655DE5CE",
            alt: "Pastor Doug"
        },
        {
            label: "Our Family",
            img: "https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-6/383979389_6563610280381686_645472901985917613_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=AznUat19QLoAX-KGN8T&_nc_ht=scontent-iad3-2.xx&oh=00_AfDCR5tDkhnGgfYX674gyK-jMaWLzrh-S8uzzj2L8lbNWg&oe=655D67DE",
            alt: "Family together"
        },
        {
            label: "Our Friends",
            img: "https://scontent-iad3-2.xx.fbcdn.net/v/t1.6435-9/78876208_2509043972527319_4768466253310328832_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=IONCRC38TJUAX_DfJhg&_nc_ht=scontent-iad3-2.xx&oh=00_AfBtSf4uV4gMokMb24A1eltqwxKHM2xjaoTeCyLOyemw6A&oe=65808926",
            alt: "Large gathering"
        },
        {
            label: "Our Future",
            img: "https://scontent-iad3-2.xx.fbcdn.net/v/t1.18169-9/19884200_1347046002060461_6593021106532567376_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=GuPEf2h8eCoAX916aIB&_nc_ht=scontent-iad3-2.xx&oh=00_AfApx-KtkMCu3xDT3yz6TkdzHQUn4Z8zgmkuUFgv2nSvag&oe=65809A33",
            alt: "Kids playing in the grass"
        } 
    ]

    return (
            <div style={{ background: "linear-gradient(90deg, rgba(205,244,0,1) 0%, rgba(130,255,231,1) 50%, rgba(205,244,0,1) 84%)" }}>
                <div>
                    <Typography variant={"h4"} style={{ textAlign: "center", padding: "1% 0%", fontFamily: "monospace", fontWeight: "bold", color: "lightseagreen" }}>
                        Who is Star Of Hope Chapel?
                    </Typography>
                    <div>
                        <Carousel style={{ margin: "0% 0% 1%" }}>
                            {
                                pics.map( (pic, i) => <Pic key={i} pic={pic} /> )
                            }
                        </Carousel>
                    </div>
                    <Typography variant={"body1"}>
                        Hello, Brothers and Sisters. Our loving church has recently celebrated 50 years together in fellowship with our Lord God. We are blessed to have our church family to gather together and spread the good word!
                    </Typography>
                </div>
                <div>
                    <Typography variant={"h4"}>
                        Daily Scripture
                    </Typography>
                    <Typography variant={"body1"}>
                        Mark 10:9: Therefore what God has joined together, let no one separate.
                    </Typography>
                </div>
                <div>
                    <Typography variant={"h4"}>
                        Our Congregation
                    </Typography>
                    <Typography variant={"body1"}>
                        Lead Members of the church ^
                    </Typography>
                    <Button>Meet Our Members</Button>
                </div>
                {/* <div>
                    <Typography variant={"h4"}>
                        Church Media
                    </Typography>
                    <Typography variant={"body1"}>
                        Media of different church events ^
                    </Typography>
                    <Button>Church Memories</Button>
                </div> */}
                <div>
                    <Typography variant={"h4"}>
                        Contact Us
                    </Typography>
                    <Typography>
                        If you need our location or wish to get in touch with us click the contact tab for information!
                    </Typography>
                </div>
            </div>
    )
    function Pic(props)
    {
        return (
            <Paper style={{ background: "linear-gradient(90deg, rgba(205,244,0,1) 0%, rgba(130,255,231,1) 50%, rgba(205,244,0,1) 84%)", textAlign: "center", padding: "0% 0% 2%"}}>
                <h6>{props.pic.label}</h6>
                <img
                    src={props.pic.img}
                    alt={props.pic.alt}
                    style={{ height: "16rem", width: "16rem", marginLeft: "auto", marginRight: "auto"}}
                />
                <div>
                    <Button>Swipe Me</Button>
                </div>
            </Paper>
        )
    }
}

export default Home;