import React from "react";

function Contact() {
    return (
        <div>
            <div className="ContactHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="pageTitle">Write or call us</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row row-header">
                    <div className="col-12">
                        <h1>Contact us</h1>
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
                            <i class="fa fa-phone"></i>: +852 1234 5678
                            <br />
                            <i class="fa fa-fax"></i>: +852 8765 4321
                            <br />
                            <i class="fa fa-envelope"></i>:
                            <a href="mailto:vesuvio@food.net" target="_blank">
                                vesuvio@food.net
                            </a>
                        </address>
                        <div class="contactInfo mt-2">
                            <strong>Tuesday to Sunday:</strong>
                            <br />
                            8:00am to 11:59pm <br />
                            Closed on Mondays
                        </div>
                    </div>
                </div>
                <div class="row row-content">
                    <div class="col-12 mb-4">
                        <h3>
                            For any request write to us and we will reply as
                            soon as possible
                        </h3>
                    </div>
                    <div class="col-12 col-md-9">
                        <form>
                            <div class="form-group row">
                                <label
                                    for="firstname"
                                    class="col-md-3 col-form-label"
                                >
                                    First Name (required)
                                </label>
                                <div class="col-md-9">
                                    <input
                                        type="text"
                                        class="form-control"
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
                                    class="col-md-3 col-form-label"
                                >
                                    Last Name
                                </label>
                                <div class="col-md-9 mt-2">
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="lastname"
                                        name="lastname"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label
                                    for="telnum"
                                    class="col-12 col-md-3 col-form-label"
                                >
                                    Contact Tel.
                                </label>
                                <div class="col-4 col-md-2">
                                    <input
                                        type="tel"
                                        class="form-control"
                                        id="areacode"
                                        name="areacode"
                                        placeholder="Area Code"
                                    />
                                </div>
                                <div class="col-8 col-md-7">
                                    <input
                                        type="tel"
                                        class="form-control"
                                        id="telnum"
                                        name="telnum"
                                        placeholder="Tel. Number"
                                    />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label
                                    for="emailid"
                                    class="col-12 col-md-3 col-form-label"
                                >
                                    Email Id.
                                </label>
                                <div class="col-12 col-md-9">
                                    <input
                                        type="email"
                                        class="form-control"
                                        id="emailid"
                                        name="emailid"
                                        placeholder="Email"
                                    />
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-5 offset-md-3">
                                    <div class="form-check">
                                        <input
                                            type="checkbox"
                                            class="form-check-input"
                                            name="approve"
                                            id="approve"
                                            value=""
                                        />
                                        <label
                                            class="form-check-label"
                                            for="approve"
                                        >
                                            <strong>May we contact you?</strong>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-md-3 offset-md-1">
                                    <select class="form-control">
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label
                                    for="request"
                                    class="col-12 col-md-3 col-form-label"
                                >
                                    Your request
                                </label>
                                <div class="col-12 col-md-9">
                                    <textarea
                                        type="text"
                                        class="form-control"
                                        id="request"
                                        name="request"
                                        rows="12"
                                    ></textarea>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="offset-md-3 col-md-9">
                                    <div class="form-check">
                                        <input
                                            type="checkbox"
                                            name="privacypolicy"
                                            id="privacypolicy"
                                            class="form-check-input"
                                            required
                                        />
                                        <label for="privacypolicy">
                                            <a
                                                href="#"
                                                class="customLink"
                                                target="_blank"
                                            >
                                                I accept the privacy policy
                                            </a>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="offset-md-3 col-md-9">
                                    <button
                                        type="submit"
                                        class="btn btn-primary"
                                    >
                                        Send Feedback
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-12 col-md"></div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
