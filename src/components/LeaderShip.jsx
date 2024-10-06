import {ReactComponent as Quotes} from "../assets/Icon/quotes.svg";
import leader from "../assets/img/leader.png";

const LeaderShip = () => {
  return (
    <div className="bg-gradient-to-r from-[#EC3339] to-[#BB1117] xl:h-[70vh] ">
      <div className="grid xl:grid-cols-3 grid-cols-1">
        <div
          className="sm:ml-24 ml-8 sm:mt-8 sm:col-span-2"
          data-aos="fade-right"
        >
          <Quotes />
          <h2 className="uppercase text-white font-custom font-bold xl:text-[40px]  text-[24px] xl:-mt-20 sm:ml-16">
            Our mission is to enlighten, entertain <br /> and empower current
            and future <br /> leaders around the world.
          </h2>
        </div>
        <div
          className="sm:col-span-1 xl:-mt-40 max-sm:ml-20 max-xl:ml-80 xl:-ml-12"
          data-aos="fade-left"
        >
          <img
            src={leader}
            className="h-[800px]  max-xl:h-[400px]"
            alt="leader"
          />
        </div>
      </div>
    </div>
  );
};

export default LeaderShip;
