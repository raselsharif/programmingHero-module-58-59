import { Carousel } from "flowbite-react";
import img01 from "../../../assets/images/banner/1.jpg";
import img02 from "../../../assets/images/banner/2.jpg";
import img03 from "../../../assets/images/banner/3.jpg";
import img04 from "../../../assets/images/banner/4.jpg";
const Banner = () => {
  return (
    <div className="h-96">
      <Carousel>
        <img alt="..." src={img01} />
        <img alt="..." src={img02} />
        <img alt="..." src={img03} />
        <img alt="..." src={img04} />
      </Carousel>
    </div>
  );
};

export default Banner;
