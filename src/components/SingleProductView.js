import React ,{useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import "../style/SingleProductView.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";





const SingleProductView=(props)=>{
    const {allProducts, shoppingCart, setShoppingCart}=props
    const [selectedProduct, setSelectedProduct]= useState({});
    const {id} = useParams();
    const navigate= useNavigate()
    
    
    

    useEffect(()=>{
        const findSelectedProduct = ()=>{
            let currentProduct = allProducts.find((product)=>{
                
                return product.id == id;
            })
            
            setSelectedProduct(currentProduct)
            
        }
        findSelectedProduct();
    }, [])

const addToCart = async (event) =>{

        try {
            const response= await axios.post(`http://localhost:3000/api/cart/${event}`)
            const cartItems = response.data.items;
            
            setShoppingCart(cartItems);
        } catch (error) {
            console.error(error)
        }
}


    return(
        
            
            <div className="single_product_page">
                 <div className="single_product_name_picture">
                    {/* <h2>{selectedProduct.playerName}</h2> */}
                    <img src={selectedProduct.image}/>
                </div>
                <div className="single_product_info">
                    <p>{selectedProduct.teamName} {selectedProduct.playerName} Jersey</p>
                    {/* <p>{selectedProduct.division}</p>
                    <p>{selectedProduct.jerseyNumber}</p> */}
                    <p className="price">Price: ${selectedProduct.price}</p>
                    <button   onClick={()=>addToCart(selectedProduct.id)}>Add to Cart</button>
                    <button className="back_button" onClick={()=>navigate('/')}>Back</button>
                </div>
            </div>
    )
}


export default SingleProductView;