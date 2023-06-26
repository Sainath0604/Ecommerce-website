import { useState } from "react";
import PropTypes from "prop-types";

const EditProduct = ({ id, pName, description, price, onEdit, onCancel }) => {
  const [newPname, setnewPname] = useState(pName);
  const [newDescription, setNewDescription] = useState(description);
  const [newPrice, setNewPrice] = useState(price);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleEdit = () => {
    const formData = new FormData();
    formData.append("productId", id);
    formData.append("pName", newPname);
    formData.append("pDescription", newDescription);
    formData.append("Price", newPrice);
    if (selectedFile) {
      formData.append("product", selectedFile);
    }

    onEdit(formData);
    onCancel();
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="bg-white border-2 border-sky-500 rounded-3xl p-4 h-[65vh]">
      <h1 className="flex items-center justify-center border border-gray-300 bg-emerald-500 rounded-xl h-10 p-2 font-bold text-stone-800 text-xl">
        Edit Product
      </h1>

      <div>
        <div className="md:mt-10 md:ml-10 md:mb-10 flex flex-col">
          <div>
            <label className="font-bold">
              Upload new product image here:
              <input
                className="ml-5 mb-4 border border-sky-400 rounded-lg p-1 font-normal"
                type="file"
                onChange={(e) => setSelectedFile(e.target.files[0])}
              />
            </label>
          </div>
          <div>
            <label className="font-bold">
              New product name:
              <input
                className="ml-5 mb-4 border border-sky-400 rounded-lg p-1 font-normal"
                type="text"
                placeholder="Product Name"
                value={newPname}
                onChange={(e) => setnewPname(e.target.value)}
              />
            </label>
          </div>
          <div className="flex flex-row">
            <div>
              <label className="font-bold">New product description:</label>
            </div>
            <div>
              <textarea
                className="ml-5 mb-4 border border-sky-400 rounded-lg p-1 font-normal"
                type="text"
                rows={4}
                cols={40}
                placeholder="Product Description"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label className="font-bold">
              New product price:
              <input
                className="ml-5 mb-4 border border-sky-400 rounded-lg p-1 font-normal"
                type="text"
                placeholder="Price"
                value={newPrice}
                onChange={(e) => setNewPrice(e.target.value)}
              />
            </label>
          </div>
        </div>
        <div className="flex justify-center ">
          <button
            className="border border-blue-700 bg-blue-500 rounded-lg px-2 py-1 mr-14 h-[6vh] w-[5vw] font-bold text-lg text-white "
            onClick={handleEdit}
          >
            Save
          </button>
          <button
            className="border border-red-700 bg-red-500 rounded-lg px-2 py-1  h-[6vh] w-[5vw] font-bold text-lg text-white "
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

EditProduct.propTypes = {
  id: PropTypes.string,
  pName: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  onEdit: PropTypes.func,
  onCancel: PropTypes.func,
};

export default EditProduct;
