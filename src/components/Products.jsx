import product1 from "../assets/img/product-1.jpeg";
import product2 from "../assets/img/product-2.jpeg";
import product3 from "../assets/img/product-3.jpeg";

const products = [product1, product2, product2, product3];

const Products = () => {
  return (
    <div
      className="bg-[#F6F5F5] min-h-screen flex flex-col justify-center"
      data-aos="fade-down"
    >
      <h1 className="uppercase sm:text-[70px] text-[40px] font-custom font-semibold xl:ml-32 ml-4 mt-4 mb-8">
        Buy 1 get 1 Free <br />
        on{" "}
        <span
          className="text-white"
          style={{
            WebkitTextStrokeColor: "black",
            WebkitTextStrokeWidth: "2px"
          }}
        >
          best selling products
        </span>
      </h1>
      <div className="flex max-xl:flex-col gap-4 justify-center items-center md:mx-32">
        {products.map((product) => (
          <div className="bg-white flex flex-col p-4 rounded-xl" key={product}>
            <img
              src={product}
              alt="card"
              className="rounded-xl  w-full max-sm:w-[w-50%]"
            />

            <div>
              <h4 className="font-custom mt-2 font-semibold">
                Army Green Active Short Sleeve
              </h4>
              <h4 className="font-custom font-semibold text-[20px]">
                $ 34.95{" "}
                <span className="font-medium line-through ml-2 text-[#9B9B9B]">
                  $ 34.95
                </span>
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
