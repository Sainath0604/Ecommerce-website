import { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import { RiDeleteBin6Line } from "react-icons/Ri";
import { BiEditAlt } from "react-icons/Bi";
import "../CSS/Admin.css";
import { Oval } from "react-loader-spinner";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import EditProduct from "./EditProduct";

function ViewProduct() {
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

  const deleteProductInfo = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name} info`)) {
      fetch("http://localhost:5000/deleteProductInfo", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          productId: id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.data);
          fetchProductInfo();
        });

      console.log(name, id);
    } else {
      alert("failed to delete product information");
    }
  };

  const editProductInfo = (formData) => {
    fetch("http://localhost:5000/editProductInfo", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.data);
        fetchProductInfo();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className=" md:flex">
        <div className="AdminNav w-full ">
          <AdminNav />
        </div>
        {loading ? (
          <div className="flex sm:w-full md:w-4/5 justify-center ViewProduct lg:mt-60">
            <Oval
              height={160}
              width={160}
              color="#1f2937"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#3e3f40"
              strokeWidth={3}
              strokeWidthSecondary={3}
            />
          </div>
        ) : (
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
                            ₹ {product.Price}
                          </div>
                        </td>
                        <td className="border p-2">
                          <div className="flex flex-row justify-center">
                            <div className="flex justify-center mr-5">
                              <RiDeleteBin6Line
                                className="cursor-pointer text-gray-800 text-2xl hover:text-gray-500"
                                onClick={() =>
                                  deleteProductInfo(product._id, product.pName)
                                }
                              />
                            </div>
                            <div className="flex justify-center ">
                              <div className="flex justify-center ">
                                <Popup
                                  trigger={
                                    <button className="button">
                                      <BiEditAlt />
                                    </button>
                                  }
                                  modal
                                  nested
                                >
                                  {(close) => (
                                    <div>
                                      <EditProduct
                                        id={product._id}
                                        pName={product.pName}
                                        description={product.pDescription}
                                        image={product.image.data}
                                        price={product.Price}
                                        onEdit={(formData) =>
                                          editProductInfo(formData)
                                        }
                                        onCancel={close}
                                      />
                                    </div>
                                  )}
                                </Popup>
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
        )}
      </div>
    </>
  );
}

export default ViewProduct;
