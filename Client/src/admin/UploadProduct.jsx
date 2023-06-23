import { useState } from "react";
import AdminNav from "./AdminNav";
import { BsCloudUpload } from "react-icons/Bs";

function UploadProduct() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [description, setDescription] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleUpload = () => {
    console.log("uploaded");
  };

  return (
    <div className="md:flex">
      <AdminNav />
      <div className="flex sm:w-full md:w-4/5 justify-center">
        <div className="flex flex-col items-center m-10 w-4/5">
          <h1 className="flex items-center justify-center bg-gray-800 rounded-xl font-bold text-gray-100 text-xl w-96 h-12 p-5 my-10 shadow-lg hover:shadow-2xl">
            Upload Product Information
            <BsCloudUpload className="text-2xl font-bold ml-5" />
          </h1>
          <div className="m-5 w-11/12 p-5 flex flex-col lg:flex-row justify-center gap-x-20">
            <div className="p-5">
              <div className="mb-2">
                <label className="font-bold text-sky-900">Product Name:</label>
              </div>
              <div className="mb-5">
                <input
                  className="border border-sky-400 rounded-lg p-1 w-80 h-12"
                  type="text"
                  placeholder="Image Description"
                  value={description}
                  onChange={handleDescriptionChange}
                />
              </div>
              <div className="mb-2">
                <label className="font-bold text-sky-900">
                  Product description:
                </label>
              </div>
              <div className="mb-5">
                <textarea
                  rows={4}
                  cols={40}
                  name="postContent"
                  className="  border border-sky-400 rounded-lg p-1 "
                  type="text"
                  placeholder="Product Description"
                  value={description}
                  onChange={handleDescriptionChange}
                />
              </div>
            </div>
            <div className=" p-5">
              <div className="mb-2">
                <label className="font-bold text-sky-900">
                  Upload product image:
                </label>
              </div>
              <div className="mb-5">
                <input
                  className="border border-sky-400 rounded-lg p-1 w-80 h-12"
                  type="file"
                  onChange={handleFileChange}
                />
              </div>
              <div className="mb-2">
                <label className="font-bold text-sky-900">
                  Product Price <span className="text-sm">(in rupees)</span>:
                </label>
              </div>
              <div className="mb-5">
                <input
                  className="border border-sky-400 rounded-lg p-1 w-80 h-12"
                  type="text"
                  placeholder="Price"
                  value={description}
                  onChange={handleDescriptionChange}
                />
              </div>
            </div>
          </div>
          <div>
            <button
              className="border bg-gray-800 rounded-xl font-bold text-gray-100 p-2 mr-14 h-[100%] w-[100%]  text-lg  "
              onClick={handleUpload}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadProduct;
