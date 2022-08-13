import React, {useEffect, useState} from "react";
import axios from "axios";
import "../style/Products.css"


const Products = (props)=>{
    const{allProducts, setAllProducts}=props;
    const{division, id, image, jerseyNumber, playerName, price, teamName}= allProducts

    
    return(
        <div className="products_main">
        
        {allProducts.map((eachProduct,idx)=>{
            return(
                <div key={idx} className="single_product">
                    <img src={eachProduct.image} alt="NFL Property" height="200px" width="200px"/>
                    <p>{eachProduct.playerName}</p>
                    <p>#{eachProduct.jerseyNumber}</p>
                    <p>{eachProduct.teamName}</p>
                    <p>{eachProduct.division}</p>
                    <p>${eachProduct.price}</p>
                    <button className="cart_button">Add To Cart</button>
                </div>

            );
        })}
        
        </div>
    )
}


export default Products;