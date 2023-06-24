import { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import { RiDeleteBin6Line } from "react-icons/Ri";
import { BiEditAlt } from "react-icons/Bi";
import "../CSS/Admin.css";

function ViewProduct() {
  const [productInfo, setProductInfo] = useState([]);

  useEffect(() => {
    fetchProductInfo();
  }, []);

  const fetchProductInfo = async () => {
    try {
      const response = await fetch("http://localhost:5000/getProductInfo");
      const data = await response.json();
      setProductInfo(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className=" md:flex">
        <div className="AdminNav w-full ">
          <AdminNav />
        </div>

        <div className="flex sm:w-full md:w-4/5 justify-center ViewProduct">
          <div className="mb-10">
            <table className="border border-separate w-[68vw]">
              <caption className="caption-top my-12 text-3xl font-bold text-gray-900">
                All Product information
              </caption>
              <thead className="h-14">
                <tr>
                  <th className="border p-2 w-[10vw]">Name</th>
                  <th className="border p-2 w-[15vw]">Product image</th>
                  <th className="border p-2 w-[25vw]">description</th>
                  <th className="border p-2 w-[8vw]">Price</th>
                  <th className="border p-2 w-[10vw]">actions</th>
                </tr>
              </thead>
              <tbody>
                {/* mapping the fetched data */}
                {productInfo.map((product, index) => {
                  return (
                    <tr
                      key={product._id}
                      className={`${
                        index % 2 === 0 ? "bg-gray-100" : "bg-white"
                      } h-56`}
                    >
                      <td className="border p-2 ">
                        <div className="flex justify-center">
                          {product.pName}
                        </div>
                      </td>
                      <td className="border p-2">
                        <div className="flex justify-center items-center">
                          <img
                            className="w-44 h-44 object-cover rounded-md"
                            src={product.image.data}
                            alt={product.pName}
                          />
                        </div>
                      </td>
                      <td className="border p-2 ">{product.pDescription}</td>
                      <td className="border p-2 ">
                        <div className="flex justify-center">
                          {product.Price}
                        </div>
                      </td>
                      <td className="border p-2">
                        <div className="flex flex-row justify-center">
                          <div className="flex justify-center mr-5">
                            <RiDeleteBin6Line className="cursor-pointer text-gray-800 text-2xl hover:text-gray-500" />
                          </div>
                          <div className="flex justify-center ">
                            <div className="flex justify-center ">
                              <button className="button">
                                <BiEditAlt />
                              </button>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewProduct;
