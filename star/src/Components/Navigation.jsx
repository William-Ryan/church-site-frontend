import React from "react"
import {Link} from "react-router-dom"
 
const Navigation = () =>{
    return (
            <Nav>
                <div>
                    <Link to="">HOME</Link>
                </div>
                <div>
                    <Link to="">ABOUT US</Link>
                </div>
                <div>
                    <Link to="/">LIVE STREAM</Link>
                </div>
                <div>
                    <Link to="">MEDIA</Link>
                </div>
                <div>
                    <Link to="">EVENTS</Link>
                </div>
                <div>
                    <Link to="/">CONTACT</Link>
                </div>
            </Nav>
    )
}

export default Navigation