import React from "react";
import './StoryHeader.css';

export default function StoryHeader() {
    return (
        <React.Fragment>
        <section id="story-header">
            <div className="stories-container">
                <div className="story">
                    <a><img src="http://www.smashbros.com/images/og/rockman.jpg" /></a>
                    <span>@MegaMan</span>
                </div>

                <div className="story">
                    <a><img src="http://www.smashbros.com/images/og/rockman.jpg" /></a>
                    <span>@MegaMan</span>
                </div>

                <div className="story">
                    <a><img src="http://www.smashbros.com/images/og/rockman.jpg" /></a>
                    <span>@MegaMan</span>
                </div>
            </div>
        </section>
    </React.Fragment>
    )
}