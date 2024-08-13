import Slider from "../mainComponent/Slider";
import "../App.css";
import CardComponet from "./CardComponent";
function Home() {
  return (
    <div>
      <div className="main-slider">
        <Slider />
      </div>
      <div>
        <CardComponet />
      </div>
    </div>
  );
}
export default Home;
