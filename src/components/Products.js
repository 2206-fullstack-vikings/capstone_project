import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import "../style/Products.css"
import axios from "axios";

const Products = (props)=>{
    const{allProducts, setAllProducts, setShoppingCart}=props;
    const{division, id, image, jerseyNumber, playerName, price, teamName}= allProducts
    const navigate= useNavigate();

    const addToCart = async (event) =>{

        try {
            const response= await axios.post(`http://localhost:3000/api/cart/${event}`)
            const cartItems = response.data.items;
            
    
        } catch (error) {
            console.error(error)
        }
}


    
    return(
        <div className="products_main">
        
        {allProducts.map((eachProduct,idx)=>{
            return(
                <div key={idx} className="single_product">
                    <div class="image-container">
                        <img src={eachProduct.image} alt="NFL Property" height="200px" width="200px"/>
                    </div>
                    <p>{eachProduct.playerName}</p>
                    <p>#{eachProduct.jerseyNumber}</p>
                    <p>{eachProduct.teamName}</p>
                    <p>{eachProduct.division}</p>
                    <p>${eachProduct.price}</p>
                    <button   onClick={()=>addToCart(eachProduct.id)}>Add to Cart</button>
                    <button onClick={()=>navigate(`/${eachProduct.id}`)}>See Details</button>
                </div>

            );
        })}
        
        </div>
    )
}


export default Products;