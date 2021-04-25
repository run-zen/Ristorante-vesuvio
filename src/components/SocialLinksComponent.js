import React from "react";

function SocialLinks() {
    return (
        <div className="social-links">
            <div className="container">
                <div className="row">
                    <div className="col-12 social-text">
                        <h4 style={{ fontWeight: "300" }}>
                            Our social media links
                        </h4>
                    </div>
                    <div className="col-12 social-fonts">
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a
                            href="https://www.youtube.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fa fa-youtube-play"></i>
                        </a>
                        <a
                            href="https://www.twitter.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fa fa-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SocialLinks;
