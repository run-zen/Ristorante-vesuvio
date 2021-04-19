import React from "react";
import { Events } from "../shared/Events";
import Breadlink from "./BreadCrumbComponent";

const links = ["home", "events"];

function renderEvent(data) {
    return (
        <React.Fragment>
            <div class="col-12 gap"></div>
            <div class="col-12 col-lg-6 event">
                <img src={data.image} alt={data.alt} />
            </div>
            <div class="col-12 col-lg-6 eventtext">
                <h1>{data.title}</h1>
                <p>{data.p1}</p>
                <p>{data.p2}</p>
            </div>
        </React.Fragment>
    );
}

const AllEvents = (props) => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">{props.events.map(renderEvent)}</div>
            </div>
        </React.Fragment>
    );
};

const CustomTeam = () => {
    return (
        <div>
            <div className="col-12 gap"></div>
            <div className="col-12 customTeam">
                <h1>Custom Team Building</h1>
                <p style={{ fontSize: "18px", fontWeight: "350" }}>
                    {Events.customTeamBuilding.p1}
                </p>
            </div>
        </div>
    );
};

function TeamBuilding() {
    return (
        <div>
            <div className="eventsHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="pageTitle">
                                The 'Taste of Team Building
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
                    <div className="col-12 eventsPara">
                        <div
                            style={{
                                fontSize: "60px",
                                textAlign: "center",
                                fontWeight: "600",
                            }}
                        >
                            Team Building
                        </div>
                        <p>{Events.teamBuilding.p1}</p>
                        <p>{Events.teamBuilding.p2}</p>
                    </div>
                    <div className="col-12 gap"></div>
                    <div className="col-12">
                        <hr />
                    </div>
                    <div className="col-12 gap"></div>
                </div>
                <div className="row row-header">
                    <div className="col-12">
                        <div
                            style={{
                                fontSize: "50px",
                                fontWeight: "450",
                            }}
                        >
                            Tailor-Made Events
                        </div>
                    </div>
                </div>
            </div>
            <AllEvents events={Events.tailorMadeEvents} />
            <div className="container">
                <div className="row row-header">
                    <div className="col-12">
                        <hr />
                    </div>
                    <CustomTeam />
                </div>
            </div>
        </div>
    );
}

export default TeamBuilding;
