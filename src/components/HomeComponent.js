import React from "react";
import MyCarousel from "./MyCarousel";

function Home() {
    return (
        <div>
            <div className="mainHome">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="title">
                                'Vesuvio <small>roman cuisine</small>
                            </div>
                        </div>
                        <div className="col-12">
                            <MyCarousel />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
