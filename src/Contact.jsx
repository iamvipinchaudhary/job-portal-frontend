import React, { useState } from "react";


const Contact = () => {
    const [data, setData] = useState({
        fullname: '',
        phone: '',
        email: '',
        message: '',
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });

    };

    const formSubmit = (e) => {
        e.preventDefault(); // it will not refresh the page while submiting the form
        alert(`My name is ${data.fullname} and my mobile number is ${data.phone} and my Email Id is ${data.email} my question is ${data.message}`)
    };
    return (
        <>
            <div className="my-5">
                <h1 className="text-center" >Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>

                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Your Name" required />
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Mobile</label>
                            <input type="tel" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="eg:0123456789" pattern="[0-9]{10}" required />
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" required />
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="message" value={data.message} onChange={InputEvent} required></textarea>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-outline-primary" type="submit">Send your Message</button>
                        </div>

                    </form>


                </div>

            </div>
        </>
    );
};

export default Contact;