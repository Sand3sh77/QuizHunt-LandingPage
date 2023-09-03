import SliderButtons from "./slider_buttons";
import SliderImages from "./slider_images";
import Indicators from "./slider_indicators";
import "./slider.css";

const Slider = () => {
  return (
    <div className="image_container">
      <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
        {/* <Indicators /> */}
        <SliderImages />
        {/* <SliderButtons /> */}
      </div>
    </div>
  );
};
export default Slider;
