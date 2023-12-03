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
            <div style={{ backgroundImage: "url(https://res.cloudinary.com/dmtkcjrqv/image/upload/v1701563652/Star_background_adbxe4.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "22%", backgroundPosition: "center"}}>
                <div>
                    <div style={{ width: "30%", margin: "0% auto 0% 64%", opacity: "70%" }}>
                        <Carousel style={{ margin: "0% 0% 1%" }}>
                            {
                                pics.map( (pic, i) => <Pic key={i} pic={pic} /> )
                            }
                        </Carousel>
                    </div>
                    <div>
                        <Typography variant={"body1"} style={{ width: "29%", fontSize: "3.5rem", margin: "1% 0% 1%"}}>
                            To God Be The Glory
                        </Typography>
                    </div>
                </div>
                <div>
                    <Typography variant={"h4"} style={{ fontSize: "4rem", textAlign: "center", margin: "2% 0% 0%"}}>
                        Daily Scripture
                    </Typography>
                    <Typography variant={"body1"} style={{ textAlign: "center", fontSize: "2rem", fontStyle: "italic"}}>
                    2 Corinthians 4:16-18 ~ So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen. For the things that are seen are transient, but the things that are unseen are eternal.
                    </Typography>
                </div>
            </div>
    )
    function Pic(props)
    {
        return (
            <Paper style={{ textAlign: "center", padding: "0% 0% 2%"}}>
                <h6>{props.pic.label}</h6>
                <img
                    src={props.pic.img}
                    alt={props.pic.alt}
                    style={{ height: "16rem", width: "16rem", marginLeft: "auto", marginRight: "auto", borderRadius: "33%"}}
                />
            </Paper>
        )
    }
}

export default Home;