import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";
const Service = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Service</h1>
                <p className="text-center">We have some skill development program. Please join and improve your skill </p>
            </div>
            <div className='container-fluid mb-5'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className="row gy-4">
                            {/* to give margin between up and down */}
                            {Sdata.map((val, ind) => {
                                return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />
                            })
                            }

                        </div>
                    </div>
                </div >

            </div >
        </>
    );
};

export default Service;  