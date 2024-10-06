import book1 from "../assets/img/Choose-Your-Enemies.png";
import book2 from "../assets/img/book2.png";
import signature from "../assets/img/pat-signature-white.png";

const SignedCollection = () => {
  return (
    <div
      className="bg-black min-h-screen grid xl:grid-cols-2 grid-cols-1"
      data-aos="fade-down"
    >
      <div
        className="text-white uppercase sm:mt-32 mt-12 sm:ml-24 ml-8"
        data-aos="fade-right"
      >
        <h3 className="sm:text-[50px] text-[30px] font-medium">
          Patrick Bet-David&apos;s{" "}
        </h3>
        <h2 className="sm:text-[70px] text-[40px] font-bold text-[#DE2A2F]">
          Signed <br /> Collection
        </h2>
        <button className="uppercase bg-white text-black rounded-xl font-custom font-medium py-4 px-10 mt-6">
          Shop Now{" "}
        </button>
        <div className="mt-8 max-sm:-ml-8" data-aos="fade-left">
          <img src={signature} alt="signature" />
        </div>
      </div>
      <div
        className="flex max-sm:flex-col max-md:flex-col max-lg:flex-col max-xl:flex-col  gap-8 sm:mt-24 pb-4 max-lg:mx-auto max-xl:pb-40"
        data-aos="fade-left"
      >
        <img
          src={book1}
          className="xl:h-[520px] xl:w-[350px] w-[100%] max-xl:w-[70%] max-xl:mx-auto "
          alt=""
        />
        <img
          src={book2}
          className="mt-6 xl:h-[480px] xl:w-[390px] w-[90%] max-sm:ml-20 max-xl:w-[70%] max-xl:mx-auto"
          alt=""
        />
      </div>
    </div>
  );
};

export default SignedCollection;
