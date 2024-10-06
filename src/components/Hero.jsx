import {ReactComponent as Logo} from "../assets/Logo/valuetainment.svg";
import tagline from "../assets/img/future-looks-brights.png";
import menu from "../assets/img/menu.png";
import Card from "./Card";

const Hero = () => {
  return (
    <div className="min-h-screen bg-[#EA2127]  ">
      <div className="flex justify-between">
        <div className="flex ">
          <div className="mt-10 xl:ml-24 cursor-pointer">
            <Logo fill="#ffffff" height="90px" width="115px" />
          </div>
          <h4 className="text-white xl:text-[112px] text-[30px] font-custom font-extrabold tracking-widest sm:ml-6  max-xl:mt-14 max-sm:mr-4">
            VTMERCH
          </h4>
        </div>
        <div className="sm:mr-24 mr-4 mt-14 cursor-pointer">
          <img src={menu} alt="menu" height={40} width={40} />
        </div>
      </div>
      <div className="sm:ml-48 ml-4 sm:mt-32 mt-10 pb-12">
        <img src={tagline} alt="" />
        <div className="xl:ml-12 xl:-mt-16">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Hero;
