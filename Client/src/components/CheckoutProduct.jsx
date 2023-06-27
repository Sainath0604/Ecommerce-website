import { useDispatch, useSelector } from "react-redux";
import { removeFromBasket } from "./Reducer";

function CheckoutProduct() {
  const basket = useSelector((state) => state.basket.items);
  const dispatch = useDispatch();

  function removeFromCart(id) {
    try {
      dispatch(removeFromBasket(id));
      console.log("removed");
    } catch (error) {
      console.log("failed to remove");
    }
  }

  return (
    <div>
      <div className="flex flex-col  gap-y-2">
        {basket.map((item) => (
          <div className="flex flex-col " key={item.id}>
            <div className=" mt-5 bg-gray-100">
              <div className="border border-gray-300 h-48 lg:h-60 p-2 flex items-center lg:gap-x-2 rounded-lg shadow-xl">
                <div className="h-44 w-64  ">
                  <img
                    className="w-full h-full lg:w-full lg:h-full object-contain drop-shadow-2xl rounded-md "
                    src={item.img_src}
                    alt="img"
                  />
                </div>
                <div className="flex flex-col  items-center justify-center w-96 h-48 p-2 gap-y-2">
                  <div className=" h-24">
                    <div className=" h-12">
                      <span className="mr-2 font-medium">Name:</span>
                      <span className="font-semibold text-lg">
                        {item.pName}
                      </span>
                    </div>
                    <div className=" h-12">
                      <span className="mr-2 font-medium">Price:</span>
                      <span className="font-semibold text-lg">
                        ₹<span>{item.price}</span>
                      </span>
                    </div>
                  </div>
                  <button
                    className="border p-1 w-36 h-10 text-center border-lime-400 rounded-lg bg-red-500 text-gray-50"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove from cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CheckoutProduct;
