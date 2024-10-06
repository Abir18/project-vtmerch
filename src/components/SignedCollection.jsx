import book1 from "../assets/img/Choose-Your-Enemies.png";
import book2 from "../assets/img/book2.png";
import signature from "../assets/img/pat-signature-white.png";

const SignedCollection = () => {
  return (
    <div className="bg-black min-h-screen grid lg:grid-cols-2 grid-cols-1">
      <div className="text-white uppercase sm:mt-32 mt-12 sm:ml-24 ml-8">
        <h3 className="sm:text-[50px] text-[30px] font-medium">
          Patrick Bet-David&apos;s{" "}
        </h3>
        <h2 className="sm:text-[70px] text-[40px] font-bold text-[#DE2A2F]">
          Signed <br /> Collection
        </h2>
        <button className="uppercase bg-white text-black rounded-xl font-custom font-medium py-4 px-10 mt-6">
          Shop Now{" "}
        </button>
        <div className="mt-8 max-sm:-ml-8">
          <img src={signature} alt="signature" />
        </div>
      </div>
      <div className="flex max-sm:flex-col max-md:flex-col max-lg:flex-col max-xl:flex-col  gap-8 sm:mt-24 pb-4 max-lg:mx-auto max-lg:pb-40">
        <img
          src={book1}
          className="xl:h-[520px] xl:w-[350px] w-[100%] max-lg:w-[70%] max-lg:mx-auto"
          alt=""
        />
        <img
          src={book2}
          className="mt-6 xl:h-[480px] xl:w-[390px] w-[90%] max-sm:ml-10 max-lg:w-[70%] max-lg:mx-auto"
          alt=""
        />
      </div>
    </div>
  );
};

export default SignedCollection;
