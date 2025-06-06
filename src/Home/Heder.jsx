import { Link } from "react-router-dom";
import "./Heder.css";
function Heder(){
   
    return(
        <div className="Heder">
        <div className="home-hero__text">
        {/* <h1> <strong>Amir Salama</strong><br/>Front-End Developer</h1> */}
        <h1> <strong>Road to</strong><br/><span className="tow">2025</span></h1>
        
        <div className="home-hero__text--small">
            {/* <p>I am Amir Salama, a programming  <br/> engineer, and I work as a web developer</p> */}
            <p class="bio‑mini">I'm Amir Salama, a software engineer and full-stack   <br/>developer. I previously worked at Hash Studio and Aqarmap.</p>
            {/* <p>Insights on marketing in 2025 with exclusive videos from  <br/>technology partners, clients and our own experts</p> */}
        </div>

       <Link to="/Fullstack" className="mosalah"  role="button">Complete&nbsp;↗ Projects</Link>
    </div>
    </div>
    )
}

export default Heder;