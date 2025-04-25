import "./About.css";
import AboutHome from "./AboutHome";
import Video from "./Video";
import Count1 from "./Count1";
import Count2 from "./Count2";
import Count3 from "./Count3";
import Scroll from "./Scrool";
export default function About() {
  return (
    <div id='mohassan'>
      <Video/>
      <div className="countttotal">
      <Count1/>
      <Count2/>
      <Count3/>
      </div>
      <AboutHome/>
      <Scroll/>
    </div>
  )
}
