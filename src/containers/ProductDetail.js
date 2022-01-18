import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts } from "../redux/actions/productActions";

const ProductDetail = () => {
    const product= useSelector((state)=>state.product);
    const {image, title, price, category, description} = product;
    const {productID}=useParams();
    const dispatch = useDispatch();
    const fetchProductDetail = async()=>{
        const response=await axios
        .get('https://fakestoreapi.com/products/${productId}')
        .catch((err)=>{
            console.log("Err". err);
        });
        dispatch(selectedProducts(response.data));
    };

    useEffect(() => {
        if(productID && product !=="") fetchProductDetail();    
    }, [productID]);

    return (
        <div>
           <h1>Product Details</h1>
           <div className="image">
               <img src={image}></img>
               </div> 
        </div>
    )
}

export default ProductDetail;