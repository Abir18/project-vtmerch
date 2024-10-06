import img1 from "../assets/img/img-1.png";
import img2 from "../assets/img/img-2.png";
import img3 from "../assets/img/img-3.jpeg";
import img4 from "../assets/img/img-4.png";

const images = [img1, img2, img3, img4, img3];
const Card = () => {
  return (
    <div className="flex max-xl:flex-col overflow-x-hidden gap-4">
      {images.map((image) => (
        <div className="flex flex-col" key={image}>
          <img
            src={image}
            alt="card"
            height={400}
            width={355}
            className="rounded-xl object-cover h-96 "
          />

          <div>
            <h4 className="text-white font-custom mt-2 font-medium">
              Army Green Active Short Sleeve
            </h4>
            <h4 className="text-white font-custom text-xl">
              $ 34.95 <span className="line-through ml-2">$34.95</span>
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
