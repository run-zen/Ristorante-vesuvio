import React from "react";
import SocialLinks from "./SocialLinksComponent";

function Footer() {
    return (
        <div>
            <SocialLinks />
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            Copyright <span>&#169;</span> - All Rights Reserved
                            - 'Vesuvio, Via Montegrappa, 2, Bologna - Italy
                        </div>
                        <div className="col-12">| 'Taste | Blog</div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
