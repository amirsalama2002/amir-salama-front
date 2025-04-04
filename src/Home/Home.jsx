import "./Home.css";
import Heder from "./Heder";
import Contact from "./Contact";
import Folder from "./Folder";
import Fot from "./Fot";
import Loop from "./Loop";
function Home(){
    return(
        <div className="Home">
            <Heder/>
            <Contact/>
            <Folder/>
            <Fot/>
            <Loop/>
        </div>
    )
}

export default Home;