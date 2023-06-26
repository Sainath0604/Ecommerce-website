import Navbar from "./Navbar";
import { BsFillCartPlusFill } from "react-icons/Bs";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "./Reducer";

function ProductDetails() {
  const basket = useSelector((state) => state.basket.items);
  const dispatch = useDispatch();

  const location = useLocation();
  const { id, pName, image, price, pDescription } = location.state;

  function addToCart() {
    console.log("clicked");
    try {
      dispatch(
        addToBasket({
          id: id,
          pName: pName,
          desc: pDescription,
          price: price,
          img_src: image,
        })
      );
      console.log("Basket:", basket);
      console.log("done");
    } catch (error) {
      console.log("error");
    }
  }

  return (
    <>
      <div className="bg-gray-50 h-full lg:h-screen">
        <Navbar />

        <div
          className="flex flex-col-reverse lg:flex-row justify-center py-8 lg:py-0 lg:mt-16 lg:mx-28 lg:mb-10 shadow-2xl rounded-lg bg-indigo-50"
          key={id}
        >
          <div className="h-3/5 lg:h-[65vh] lg:w-1/2 flex flex-col p-5 lg:space-y-2">
            <div className="h-[4vh] lg:h-[8vh] bg-indigo-50 shadow-none hover:shadow-2xl rounded-lg pl-5 lg:p-5 font-medium text-xl text-gray-900">
              <span className="mr-3 font-bold ">Product Name:</span>
              <span>{pName}</span>
            </div>
            <div className="lg:h-[34vh] p-4 bg-indigo-50 shadow-none hover:shadow-2xl rounded-lg text-gray-900 space-y-2">
              <span className=" lg:mr-3 font-bold text-xl ">
                Product Details:
              </span>
              <div className="font-medium text-lg text-gray-700">
                {pDescription}
              </div>
            </div>
            <div className="h-[8vh] lg:h-[16vh] flex flex-row justify-center items-center lg:justify-start space-x-10 lg:space-x-16 p-2">
              <div className="h-[8vh] w-1/5 p-6 flex justify-center items-center bg-indigo-50 shadow-none hover:shadow-2xl rounded-lg">
                <span className="mr-1 lg:mr-3 font-medium text-lg">Price:</span>
                <span className="font-bold text-xl">
                  $<span>{price}</span>{" "}
                </span>
              </div>
              <button className="h-[4vh] lg:h-[8vh] w-[20] lg:w-[12vw] p-4 lg:p-2 flex justify-center items-center font-bold text-xl bg-rose-600 text-white shadow-none hover:shadow-2xl rounded-lg">
                <span className="mr-3" onClick={addToCart}>
                  Add to cart
                </span>
                <span className="">
                  <BsFillCartPlusFill />
                </span>
              </button>
            </div>
          </div>
          <div className="h-[30vh] lg:h-[65vh] lg:w-2/5 p-2 lg:p-10 flex justify-center">
            <div className="bg-indigo-50 shadow-none hover:shadow-2xl rounded-lg p-2 lg:p-8 w-4/5 lg:w-full flex justify-center items-center ">
              <img
                className="w-4/5 h-4/5 lg:w-full lg:h-full object-contain drop-shadow-2xl rounded-md"
                src={image}
                alt={pName}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
