



// // import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import api from '../AxiosConfig';

// const AllProducts = (props)=> {
//   const {awdiz} = props;
//   console.log(awdiz);

//   const [allProducts ,setAllProducts] =useState([]);

 
//   useEffect(()=>{
//    async function getProducts(){
//       try {
//         const response = await api.get("/api/v1/product/get-products")
//         if(response?.data?.success){
//           // console.log(response.data.products);
//           setAllProducts(response.data.products);

//         }
        
//       } catch (error) {
//         console.log(error);
//       }

//     }
//     getProducts();
    
//   },[])



//   return (
//     <div>
//          <h1>AllProducts</h1>
//           {allProducts.length? 
          
//           <div style={{display:"flex" ,flexWrap:"wrap" , justifyContent :"space-around"}}>
//            {allProducts.map((productObj)=>(
//            <div style={{width :"15%" , border:"2px solid black" , marginBottom:"5%", height:"250px"}}> 
//                {/* <img style={{height:"54%" , width:"100%"}} src={productObj.image} /> */}
//                <h1>Name :- {productObj.name}</h1>
//               <p>Category :- {productObj.category}</p>
//               <p>Price :- {productObj.price}/-</p>
//               <p>Total Quantities :- {productObj.quantity}</p>
//               <p>Tags :- {productObj.tags}</p>

//            </div>
//          ))}
//         </div>:

//          <div><h1>Loding..</h1></div>}
       
//     </div>
//   )
// }

// export default AllProducts





// import axios from 'axios';
import React, { useEffect, useState } from 'react'
import api from '../AxiosConfig';



const AllProducts = (props) => {
    const { awdiz } = props;
    console.log(awdiz, "awdiz");
const [allProducts,setAllProducts] = useState([]);


    useEffect(()=>{
       async function getProducts(){
            try{
const response = await api.get("/api/v1/product/get-products");

// const response = await api.get("/get-products");

if (response?.data?.success){
    setAllProducts(response.data.products);
}
            }catch (error){
                console.log(error);
            }
        }
        getProducts();
    },[]);


    return (
        <div>
          <h1>All Products</h1>
          {allProducts.length ? (
           <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
            >
              {allProducts.map((productObj) => (
                <div
                  style={{
                    width: "18%",
                    border: "2px solid black",
                    height: "250px",
                  }}
                >
                  <h1>Name : {productObj.name}</h1>
                  <p>Category : {productObj.category}</p>
                  <p>Price : {productObj.price}/-</p>
                  <p>Total Quantities : {productObj.quantity}</p>
                  <p>{productObj.tags}</p>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <h1>Loading..</h1>
            </div>
          )} 
        </div>
      );
    };
    
    export default AllProducts;




