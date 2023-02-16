import "./BackgrndVideo.css"

import video from "../Assets/video.mp4"

//Ref: https://www.imi21.com/background-video-full-screen.php

function BackgrndVideo() {
    return  (
        <div id="videowrapper">
            <video id="video" role="presentation" preload="auto" playsinline crossorigin="anonymous" loop="" muted="" autoplay="" class="blur">
                <source src={video} type="video/mp4" />
            </video>
            <div id="videoMessage" class="styling"> 
                <h1>Full screen background video</h1>
                <h2>Would you like this on your site?</h2>
                <p class="videoClick"><a href="#main">Find out how</a></p> 
            </div>
        </div>
    )
}

export default BackgrndVideo;