import {ReactComponent as AmericanExpress} from "../assets/Icon/american-express.svg";
import {ReactComponent as Amex} from "../assets/Icon/amex.svg";
import {ReactComponent as ApplePay} from "../assets/Icon/apple-pay.svg";
import {ReactComponent as DinnersClub} from "../assets/Icon/diners-club.svg";
import {ReactComponent as Email} from "../assets/Icon/email.svg";
import {ReactComponent as Facebook} from "../assets/Icon/facebook.svg";
import {ReactComponent as Instagram} from "../assets/Icon/instagram.svg";
import {ReactComponent as Linkedin} from "../assets/Icon/linkedin.svg";
import {ReactComponent as Paypal} from "../assets/Icon/paypal.svg";
import {ReactComponent as Telephone} from "../assets/Icon/telephone.svg";
import {ReactComponent as Twitter} from "../assets/Icon/twitter.svg";
import {ReactComponent as Visa} from "../assets/Icon/visa.svg";
import {ReactComponent as Logo} from "../assets/Logo/valuetainment.svg";

const Footer = () => {
  return (
    <div className="bg-black  text-white">
      <div className="flex pt-8">
        <div className="mt-8 xl:ml-24 cursor-pointer">
          <Logo fill="red" height="90px" width="115px" />
        </div>
        <h4 className="text-white sm:text-[100px] text-[40px] font-custom font-extrabold tracking-widest sm:ml-6 max-sm:mt-10">
          VTMERCH
        </h4>
      </div>
      <div className="border-t w-[90%] mx-auto mt-4"></div>
      <div className=" grid grid-cols-1 gap-10 sm:grid-cols-4 ">
        <div className="my-4 sm:ml-24 ml-6 max-sm:mr-6">
          <h4 className="text-[18px]">
            Subscribe and be the first to receive <br /> notifications about our
            upcoming releases <br /> and the latest news.{" "}
          </h4>
          <div className="my-4">
            <button className="w-full border-[1px] border-white rounded-xl p-2 hover:bg-white hover:text-black">
              Enter your email
            </button>
          </div>
          <div>
            <button className="bg-white text-black font-medium w-full border-[1px] border-white rounded-xl p-2 hover:bg-black hover:text-white">
              Subscribe
            </button>
          </div>
        </div>
        <div className="py-4 ml-24">
          <h4 className="text-[20px] font-medium">Customer Services</h4>
          <div href="#" className="py-2 pt-4 cursor-pointer hover:underline">
            About Us
          </div>
          <div href="#" className="py-2 cursor-pointer hover:underline">
            Search
          </div>
          <div href="#" className="py-2 cursor-pointer hover:underline">
            Privacy Policy
          </div>
          <div href="#" className="py-2 cursor-pointer hover:underline">
            Contact Us
          </div>
          <div href="#" className="py-2 cursor-pointer hover:underline">
            Terms of Service
          </div>
          <div href="#" className="py-2 cursor-pointer hover:underline">
            Refund policy
          </div>
          <div href="#" className="py-2 cursor-pointer hover:underline">
            Track Order
          </div>
        </div>
        <div className="py-4 ml-24">
          <h4 className="text-[20px] font-medium">Products</h4>
          <div href="#" className="py-2 pt-4 cursor-pointer hover:underline">
            Featured products
          </div>
          <div href="#" className="py-2 cursor-pointer hover:underline">
            Bestseller
          </div>
          <div href="#" className="py-2 cursor-pointer hover:underline">
            Latest product
          </div>
          <div href="#" className="py-2 cursor-pointer hover:underline">
            All collections
          </div>
          <div href="#" className="py-2 cursor-pointer hover:underline">
            All products
          </div>
        </div>
        <div className="py-4 max-sm:ml-24">
          <h4 className="text-[20px] font-medium">Contact Us</h4>
          <p className="py-4">
            Available between 8AM to 8PM. Ready <br /> to answer your questions.
          </p>
          <div className="flex py-2">
            <Telephone /> &nbsp; <span> 013456789</span>
          </div>

          <div className="flex">
            <Email /> &nbsp;
            <span className="-mt-1"> store@valuetainment.com</span>
          </div>
          <div className="flex mt-2">
            <Facebook />
            <div className="ml-2 ">
              <Twitter />
            </div>
            <div className="ml-2 ">
              <Linkedin />
            </div>
            <div className="ml-2 ">
              <Instagram />
            </div>
          </div>
        </div>
      </div>
      <div className="flex max-sm:flex-col max-sm:p-2 sm:justify-between py-6">
        <p className="sm:ml-24 max-sm:p-4">
          © 2024 Valuetainment Store. All rights reserved.
        </p>
        <div className="flex sm:mr-24 max-sm:ml-4">
          <div className="mx-2">
            <Visa />
          </div>
          <div className="mx-2">
            <ApplePay />
          </div>
          <div className="mx-2">
            <DinnersClub />
          </div>
          <div className="mx-2">
            <Visa />
          </div>
          <div className="mx-2">
            <Amex />
          </div>
          <div className="mx-2">
            <Paypal />
          </div>
          <div className="mx-2">
            <AmericanExpress />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
