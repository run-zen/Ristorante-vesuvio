import React from "react";
import { Zoom } from "react-reveal";
import Breaklink from "./BreadCrumbComponent";
import { AboutItems } from "../shared/AboutItems";

const links = ["home", "about"];

function renderPara(para) {
    return <p style={{ fontSize: "18px", fontWeight: "350" }}>{para}</p>;
}

const Gap = () => {
    return <div className="col-12 gap"></div>;
};
const Header = () => {
    return (
        <div>
            <div className="about-header">
                <div style={{ fontSize: "4rem" }}>
                    <Zoom>Always with Passion</Zoom>
                </div>
            </div>
        </div>
    );
};

const HistoryPara = (props) => {
    return <React.Fragment>{props.paras.map(renderPara)}</React.Fragment>;
};
const About = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-12" style={{ marginTop: "3vh" }}>
                        <Breaklink Links={links} />
                    </div>
                    <div className="col-12">
                        <div
                            style={{
                                fontSize: "40px",
                                fontWeight: "600",
                            }}
                        >
                            About us
                        </div>
                    </div>
                    <div className="col-12">
                        <hr />
                    </div>
                    <Gap />
                    <div className="col-12">
                        <div
                            style={{
                                fontSize: "40px",
                                fontWeight: "600",
                            }}
                        >
                            Our History
                        </div>
                        <HistoryPara paras={AboutItems.OurHistory} />
                    </div>
                    <Gap />
                    <div className="col-12">
                        <hr />
                    </div>
                    <Gap />
                    <div className="col-12 col-lg-6 history-img">
                        <img src={AboutItems.image} alt="old structure" />
                    </div>
                    <div className="col-12 col-lg-6">
                        <HistoryPara paras={AboutItems.OurStructure} />
                    </div>
                    <Gap />
                    <Gap />
                </div>
            </div>
        </div>
    );
};

export default About;
