import React from "react";
import { Zoom } from "react-reveal";
import MyCarousel from "./MyCarousel";

function Home() {
    return (
        <div>
            <div className="mainHome">
                <div className="container">
                    <div className="row">
                        <div className="col-12 hometitle">
                            <Zoom>
                                <div className="title">
                                    'Vesuvio <small>roman cuisine</small>
                                </div>
                            </Zoom>
                        </div>
                        <div className="col-12 carouselGrid">
                            <MyCarousel />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
