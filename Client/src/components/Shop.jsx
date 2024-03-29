import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import "../css/component.css";
import Footer from "./Footer";

function Shop() {
  const navigate = useNavigate();

  const [productInfo, setProductInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProductInfo();
  }, []);

  const fetchProductInfo = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/getProductInfo");
      const data = await response.json();
      setProductInfo(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-indigo-100">
      <nav>
        <Navbar />
      </nav>

      <main className="bg-indigo-100 flex-grow">
        {loading ? (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Oval
              height={80}
              width={80}
              color="#4fa94d"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#4fa94d"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </div>
        ) : (
          <div className="flex justify-center lg:p-10 ">
            <div className="grid grid-cols-1 mb-4 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-14 ">
              {productInfo.map((product) => (
                <div
                  key={product._id}
                  className="card my-4 relative p-3 bg-gray-100 rounded-md shadow-lg shadow-cyan-500/50 w-80 h-[450px] "
                >
                  <img
                    className="w-full h-4/5 object-contain drop-shadow-2xl rounded-md"
                    src={product.image.data}
                    alt={product.pName}
                  />
                  <div className="card-content py-3 text-center relative z-10">
                    <h3 className="text-xl text-black font-bold mb-2 ">
                      {product.pName}
                    </h3>

                    <p className="text-slate-950 text-lg mb-4">
                      <span className="font-semibold">Price:</span>{" "}
                      <span className="font-bold">
                        $<span>{product.Price}</span>
                      </span>
                    </p>
                    <button
                      className="card-btn hidden absolute top-[-100%] left-1/2 transform translate-x-[-50%] translate-y-[-50%] py-2 px-4 text-white bg-indigo-500 rounded-md"
                      onClick={() =>
                        navigate("/productDetails", {
                          state: {
                            id: product._id,
                            pName: product.pName,
                            image: product.image.data,
                            price: product.Price,
                            pDescription: product.pDescription,
                          },
                        })
                      }
                    >
                      View Product
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Shop;
