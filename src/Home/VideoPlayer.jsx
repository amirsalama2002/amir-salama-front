import "./VideoPlayer.css";

const VideoPlayer = () => {
    return (
      <div className="vio">
        <div className="fo">
          <video controls className="">
            <source src="/imgs/WPP Open_ transforming creative collaboration with AI​.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    );
  };
  
  export default VideoPlayer;