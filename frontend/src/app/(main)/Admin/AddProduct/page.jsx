import React from "react";
import Link from "next/link";

const page = () => {
  const productForm = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
      category: "",
      stock: "",
      images: "",
      featured: "",
      rating: "",
      addToCart: "",
    },
  });

  const upload = (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    fd.append("file", file);
    fd.append("upload_preset", "Mernbatch8");
    fd.append("colud_name", "dgx8094we");

    axios
      .post("https://api.cloudinary.com/v1_1/dgx8094we/image/upload", fd)
      .then((result) => {
        toast.success("file upload successfully");
        console.log(result.data);
        setPreview(result.data.url);
        // productForm.setFieldValue('image', result.data.url);
      })
      .catch((err) => {
        console.log(err);
        toast.error("failed to upload file");
      });
  };

  return (
    <>
      <div>
        <h1>add product form</h1>
        <form action="">
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Enter product title"
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Enter product description"
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Enter product title"
              required
            />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Enter product price"
              required
            />
          </div>
          <div>
            <label htmlFor="image">Image URL</label>
            <input
              type="text"
              id="image"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Enter product image URL"
              required
            />
          </div>
          <div>
            <label htmlFor="Add to Cart">Add to Cart</label>
            <input
              type="number"
              id="add-to-cart"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Enter quantity to add to cart"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white p-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default page;
