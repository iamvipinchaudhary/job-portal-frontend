import React from "react";
import web from "../src/images/img.png";
import { NavLink } from "react-router-dom";
// import Common from "./Common";

const Home = () => {
    return (
        <>

            <section id="header" className="d-flex align-items-center">
                <div className='container-fluid '>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>
                                        <strong className="brand-name">3,000+</strong> Browse Jobs
                                    </h1>
                                    <p>Find Jobs, Employment & Career Opportunities</p>


                                    <input class="form-control" type="text" placeholder="Keyword e.g. (Job Title, Description, Tags)" />



                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Select Location</option>
                                        <option value="1">New delhi</option>
                                        <option value="2">Gurgaon</option>
                                        <option value="3">Noida</option>
                                        <option value="3">Bangalore</option>
                                        <option value="3">Chennai</option>
                                        <option value="3">Hyderabad</option>
                                    </select>

                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Select Experience</option>
                                        <option value="1">Fresher(less than 1 year)</option>
                                        <option value="2">1 year</option>
                                        <option value="3">2 years</option>
                                        <option value="3">3 years</option>
                                        <option value="3">4 years</option>
                                        <option value="3">5 years</option>
                                    </select>

                                    {/* <div class="jp_banner_main_jobs">
                                        <ul>
                                            <li><i class="fa fa-tags" aria-hidden="true"></i> Trending Keywords :</li>
                                            <li><a href="#">ui designer,</a></li>
                                            <li><a href="#">developer,</a></li>
                                            <li><a href="#">senior</a></li>
                                            <li><a href="#">it company,</a></li>
                                            <li><a href="#">design,</a></li>
                                            <li><a href="#">call center</a></li>
                                        </ul>
                                    </div> */}





                                    <div className="mt-3">
                                        <NavLink to="/" className="btn-get-started ">
                                            Search
                                        </NavLink>
                                    </div>


                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={web} className="img-fluid animated" alt="home img" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section >

        </>
    );
};

export default Home;