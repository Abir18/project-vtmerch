import {ReactComponent as Quotes} from "../assets/Icon/quotes.svg";
import leader from "../assets/img/leader.png";

const LeaderShip = () => {
  return (
    <div className="bg-gradient-to-r from-[#EC3339] to-[#BB1117] sm:h-[90vh] max-xl:h-[100vh]">
      <div className="grid xl:grid-cols-3 grid-cols-1">
        <div className="sm:ml-24 ml-8 sm:mt-8 sm:col-span-2">
          <Quotes />
          <h2 className="uppercase text-white font-custom font-bold sm:text-[48px] text-[24px] sm:-mt-20 sm:ml-16">
            Our mission is to enlighten, entertain <br /> and empower current
            and future <br /> leaders around the world.
          </h2>
        </div>
        <div className="sm:col-span-1 xl:-mt-40 -mt-8 max-md:-mt-4 xl:-ml-12 mx-auto">
          <img
            src={leader}
            className="xl:h-[803px] max-md:h-[403px]"
            alt="leader"
          />
        </div>
      </div>
    </div>
  );
};

export default LeaderShip;
