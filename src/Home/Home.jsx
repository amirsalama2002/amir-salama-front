import "./Home.css";
import Heder from "./Heder";
import Contact from "./Contact";
import Folder from "./Folder";
import Fot from "./Fot";
import Loop from "./Loop";
import Lok from "./Lok";
import Mo from "./Mo";
import VideoPlayer from "./VideoPlayer";
function Home(){
    return(
        <div className="Home">
            <Heder/>
            <Contact/>
            <Folder/>
            <Fot/>
            <Loop/>
            <Lok/>
            <Mo/>
            <VideoPlayer/>
        </div>
    )
}

export default Home;