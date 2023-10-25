import { Carousel } from "flowbite-react";
import img01 from "../../../assets/images/banner/1.jpg";
import img02 from "../../../assets/images/banner/2.jpg";
import img03 from "../../../assets/images/banner/3.jpg";
import img04 from "../../../assets/images/banner/4.jpg";
const Banner = () => {
  return (
    <div className="h-96">
      <Carousel>
        <img className=" h-full w-full object-cover" alt="..." src={img01} />
        <img className=" h-full w-full object-cover" alt="..." src={img02} />
        <img className=" h-full w-full object-cover" alt="..." src={img03} />
        <img className=" h-full w-full object-cover" alt="..." src={img04} />
      </Carousel>
    </div>
  );
};

export default Banner;
