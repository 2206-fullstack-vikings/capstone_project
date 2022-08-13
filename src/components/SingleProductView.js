import React ,{useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import "../style/SingleProductView.css"
import { useNavigate } from "react-router-dom";





const SingleProductView=(props)=>{
    const {allProducts}=props
    const [selectedProduct, setSelectedProduct]= useState({});
    const {id} = useParams();
    const navigate= useNavigate()
    
    
    

    useEffect(()=>{
        const findSelectedProduct = ()=>{
            let currentProduct = allProducts.find((product)=>{
                console.log(product.id)
                return product.id == id;
            })
            
            setSelectedProduct(currentProduct)
            
        }
        findSelectedProduct();
    }, [])

    return(
        <div className="single_product_page">
            <div>
            <h2>{selectedProduct.playerName}</h2>
            <img src={selectedProduct.image}/>
            </div>
            <div>
                <p>{selectedProduct.teamName}</p>
                <p>{selectedProduct.division}</p>
                <p>{selectedProduct.jerseyNumber}</p>
                <p>${selectedProduct.price}</p>
                <button onClick={()=>navigate('/')}>Back</button>
            </div>
        </div>
    )
}


export default SingleProductView;