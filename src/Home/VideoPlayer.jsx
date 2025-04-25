
import "./VideoPlayer.css";

const VideoPlayer = () => {

    return (
      <div className="vio">
        <div className="hero">
        {/* <video playsinline="" autoplay="" controls="" loop="" muted="" src="/imgs/WPP Open_ transforming creative collaboration with AI​.mp4" data-src="/imgs/WPP Open_ transforming creative collaboration with AI​.mp4"></video> */}
          <video poster="/imgs/cover.jpg" playsinline autoplay controls loop muted className="hero-video">
            <source src="/imgs/WPP Open_ transforming creative collaboration with AI​.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    );
  };
  
  export default VideoPlayer;

