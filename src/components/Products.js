import React, {useEffect, useState} from "react";
import axios from "axios";
import "../style/Products.css"


const Products = (props)=>{
    const{allProducts, setAllProducts, testState}=props;
    const{division, id, image, jerseyNumber, playerName, price, teamName}= allProducts

    useEffect(()=>{
        const fetchProducts = async ()=>{
            try {
                const response = await axios.get("http://localhost:3000/api/products")
                const result = response.data
                setAllProducts(result)
                console.log(allProducts)
            } catch (error) {
                console.error(error)
            }
        };
        fetchProducts() 
    },[])

    return(
        <div className="products_main">
        
        {allProducts.map((eachProduct,idx)=>{
            return(
                <div key={idx} className="single_product">
                <img src={eachProduct.image} alt="NFL Property" width="200px" height="200px"/>
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