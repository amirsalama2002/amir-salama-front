import "./Home.css";
import Heder from "./Heder";
import Contact from "./Contact";
import Folder from "./Folder";
import Fot from "./Fot";
function Home(){
    return(
        <div className="Home">
            <Heder/>
            <Contact/>
            <Folder/>
            <Fot/>
        </div>
    )
}

export default Home;