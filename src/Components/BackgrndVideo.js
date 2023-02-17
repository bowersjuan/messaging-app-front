import "./BackgrndVideo.css"

import video from "../Assets/video.mp4"

//Ref: https://www.imi21.com/background-video-full-screen.php

function BackgrndVideo() {
    return  (
        <div id="videowrapper" className="video-container">
            <video id="video" role="presentation" preload="auto" playsInline crossOrigin="anonymous" loop="" muted="" autoPlay="" className="blur">
                <source src={video} type="video/mp4" />
            </video>
            <div id="videoMessage" className="styling, container1"> 
                <h1>Q'Hubo Messenger</h1>
                <br></br>
                <p>Links:</p>
                <a target="black" href="https://github.com/bowersjuan/messaging-app-front">@theCode</a>
                <a target="black" href="https://www.linkedin.com/in/bowersjuan/">@theDev</a>
                <a target="black" href="https://github.com/bowersjuan">@GitHub</a>
            </div>
        </div>
    )
}

export default BackgrndVideo;