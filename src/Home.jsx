import React from "react";
import web from "../src/images/img.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";
const Home = () => {
    return (
        <>
            <Common name="
Best Free Job Posting Sites in India!" imgsrc={web} visit="/service" btnname="Get Started" />
        </>
    );
};

export default Home;