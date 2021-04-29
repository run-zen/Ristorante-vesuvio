import React from "react";
import { Zoom } from "react-reveal";
import Breadlink from "./BreadCrumbComponent";

const links = ["home", "contact"];

function Contact() {
    return (
        <div>
            <div className="ContactHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="pageTitle">
                                <Zoom>Write or call us</Zoom>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row row-header">
                    <div className="col-12">
                        <Breadlink Links={links} />
                    </div>
                    <div className="col-12">
                        <h1>Contact us</h1>
                        <hr />
                    </div>
                    <div className="gap col-12"></div>
                </div>
                <div className="row row-header">
                    <div className="col-12">
                        <h2>Location Information</h2>
                    </div>
                    <div className="gap col-12"></div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            Via Montegrappa, 2 <br />
                            Bologna, Italy <br />
                            <i className="fa fa-phone"></i>: +852 1234 5678
                            <br />
                            <i className="fa fa-fax"></i>: +852 8765 4321
                            <br />
                            <i className="fa fa-envelope"></i>:
                            <a
                                href="mailto:ranjanbaruah1101@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                vesuvio@food.net
                            </a>
                        </address>
                        <div className="contactInfo mt-2">
                            <strong>Tuesday to Sunday:</strong>
                            <br />
                            8:00am to 11:59pm <br />
                            Closed on Mondays
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12 mb-4">
                        <h3>
                            For any request write to us and we will reply as
                            soon as possible
                        </h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <form>
                            <div className="form-group row">
                                <label
                                    for="firstname"
                                    className="col-md-3 col-form-label"
                                >
                                    First Name (required)
                                </label>
                                <div className="col-md-9">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="firstname"
                                        name="firstname"
                                        placeholder="First Name"
                                        required
                                    />
                                </div>
                                <br />
                                <br />
                                <label
                                    for="lastname"
                                    className="col-md-3 col-form-label"
                                >
                                    Last Name
                                </label>
                                <div className="col-md-9 mt-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="lastname"
                                        name="lastname"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label
                                    for="telnum"
                                    className="col-12 col-md-3 col-form-label"
                                >
                                    Contact Tel.
                                </label>
                                <div className="col-4 col-md-2">
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="areacode"
                                        name="areacode"
                                        placeholder="Area Code"
                                    />
                                </div>
                                <div className="col-8 col-md-7">
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="telnum"
                                        name="telnum"
                                        placeholder="Tel. Number"
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label
                                    for="emailid"
                                    className="col-12 col-md-3 col-form-label"
                                >
                                    Email Id.
                                </label>
                                <div className="col-12 col-md-9">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="emailid"
                                        name="emailid"
                                        placeholder="Email"
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-5 offset-md-3">
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="approve"
                                            id="approve"
                                            value=""
                                        />
                                        <label
                                            className="form-check-label"
                                            for="approve"
                                        >
                                            <strong>May we contact you?</strong>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-3 offset-md-1">
                                    <select className="form-control">
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label
                                    for="request"
                                    className="col-12 col-md-3 col-form-label"
                                >
                                    Your request
                                </label>
                                <div className="col-12 col-md-9">
                                    <textarea
                                        type="text"
                                        className="form-control"
                                        id="request"
                                        name="request"
                                        rows="12"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="offset-md-3 col-md-9">
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            name="privacypolicy"
                                            id="privacypolicy"
                                            class="form-check-input"
                                            required
                                        />
                                        <label for="privacypolicy">
                                            <a
                                                href="https://google.com"
                                                class="customLink"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                I accept the privacy policy
                                            </a>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="offset-md-3 col-md-9">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Send Feedback
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-12 col-md"></div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
