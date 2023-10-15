import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define the props for the CustomSlider component
interface CustomSliderProps {
  pictures: string[];
}

// Component to display a custom image slider
export default function CustomSlider({ pictures }: CustomSliderProps) {
  // Define the settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Render the slider with each picture as a slide
  return (
    <Slider {...settings}>
      {pictures.map((pic: string) => (
        <img key={pic} src={pic} />
      ))}
    </Slider>
  );
}