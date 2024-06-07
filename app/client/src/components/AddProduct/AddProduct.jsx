
import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
// import axios from 'axios';
import toast from 'react-hot-toast';
import api from '../../AxiosConfig';
import SellerProtected from '../redireactions/SellerProtected';

const AddProduct = () => {
const [productData, setProductData] = useState({
  name: "",
  category: "",
  price: "",
  quantity: "",
  tags: "",
  // image:"",
});

console.log(productData, "productData");

const handleChange = (event) => {
  setProductData({ ...productData, [event.target.name]: event.target.value });
};
const { state } = useContext(AuthContext);
console.log(state, "state");

const handleSubmit = async (event) => {
  try {
    event.preventDefault();
    const response = await api.post("/api/v1/product/add-product", {
      productData,
      userId: state.user._id,
    });
    if (response.data.success) {
      toast.success(response.data.message);
    }
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.error);
  }
};
return (
  <SellerProtected>
    <h1>AddProduct</h1>
    <form onSubmit={handleSubmit}>
      <label>Product Name</label>
      <br />
      <input required name="name" onChange={handleChange} />
      <br />
      <label>Product category</label>
      <br />
      <input required name="category" onChange={handleChange} />
      <br />
      <label>Product price</label>
      <br />
      <input required name="price" onChange={handleChange} />
      <br />
      <label>Product quantity</label>
      <br />
      <input required name="quantity" onChange={handleChange} />
      <br />
      <label>Product Tags</label>
      <br />
      <input required name="tags" onChange={handleChange} />
      <br />
      {/* <label>Image</label>
       <br />
      <input required name="image" onChange={handleChange} /> */}
      <br />
      <input type="submit" />
      <br />
    </form>
  </SellerProtected>
);
};

export default AddProduct;

// import React, { useContext, useState } from 'react';
// import { AuthContext } from '../Context/AuthContext';
// import toast from 'react-hot-toast';
// import api from '../../AxiosConfig';
// import SellerProtected from '../redireactions/SellerProtected';

// const AddProduct = () => {
//   const [productData, setProductData] = useState({
//     name: "",
//     category: "",
//     price: "",
//     quantity: "",
//     tags: "",
//     image: null,
//   });

//   const { state } = useContext(AuthContext);

//   const handleChange = (event) => {
//     const { name, value, files } = event.target;
//     if (name === "image") {
//       setProductData({ ...productData, [name]: files[0] });
//     } else {
//       setProductData({ ...productData, [name]: value });
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     for (const key in productData) {
//       formData.append(key, productData[key]);
//     }
//     formData.append('userId', state.user._id);

//     try {
//       const response = await api.post("/api/v1/product/add-product", formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       if (response.data.success) {
//         toast.success(response.data.message);
//         setProductData({
//           name: "",
//           category: "",
//           price: "",
//           quantity: "",
//           tags: "",
//           image: null,
//         });
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error(error.response?.data?.error || 'An error occurred');
//     }
//   };

//   return (
//     <SellerProtected>
//       <h1>Add Product</h1>
//       <form onSubmit={handleSubmit}>
//         <label>Product Name</label>
//         <br />
//         <input type="text" required name="name" value={productData.name} onChange={handleChange} />
//         <br />
//         <label>Product Category</label>
//         <br />
//         <input type="text" required name="category" value={productData.category} onChange={handleChange} />
//         <br />
//         <label>Product Price</label>
//         <br />
//         <input type="number" required name="price" value={productData.price} onChange={handleChange} />
//         <br />
//         <label>Product Quantity</label>
//         <br />
//         <input type="number" required name="quantity" value={productData.quantity} onChange={handleChange} />
//         <br />
//         <label>Product Tags</label>
//         <br />
//         <input type="text" required name="tags" value={productData.tags} onChange={handleChange} />
//         <br />
//         {/* <label>Image</label>
//         <br />
//         <input type="file" required name="image" onChange={handleChange} /> */}
//         <br />
//         <input type="submit" value="Add Product" />
//         <br />
//       </form>
//     </SellerProtected>
//   );
// };

// export default AddProduct;