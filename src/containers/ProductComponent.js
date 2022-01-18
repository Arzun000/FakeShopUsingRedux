import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ProductComponent.css"

const ProductComponent = () => {
   const products = useSelector((state)=>state.allProducts.products);
   const { title, image, price, category}=products;
   const id=products.id;
   const renderList = products.map((products)=>{
    return (
        <div className="four column wide" key={products.id}>
        <Link to={"/product/${id}"}>
           <div className="ui link card">
               <div className="card">
                   <div className="image">
                       <img src={products.image} alt ={title}></img>
                   </div>
               {/* </div>
               <div className="image"></div> */}
                    <div className="content">
                    <div className="header">{products.title} </div>
                    <div className="meta price">${products.price}</div>
                    <div className="meta">{products.category}</div>
                 </div>  {/*remove if up comment removed */}
                </div>
            </div> 
        </Link>          
        </div>
    );
   });
   return<>{renderList}</>;

};

export default ProductComponent;