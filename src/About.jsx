import React from "react";
import web from "../src/images/about.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";
const About = () => {
    return (
        <>
            <Common name="About Us" imgsrc={web} visit="/contact" btnname="Contact Us" />
        </>
    );
};

export default About;