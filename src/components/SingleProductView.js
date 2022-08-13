import React ,{useState, useEffect} from "react";
import {useParams} from 'react-router-dom';





const SingleProductView=(props)=>{
    const {allProducts}=props
    const [selectedProduct, setSelectedProduct]= useState({});
    const {id} = useParams();
    console.log("this is the product id we are looking at", id)
    console.log("these are all the products", allProducts)

    useEffect(()=>{
        const findSelectedProduct = ()=>{
            let currentProduct = allProducts.find((product)=>{
                return product.id == id;
            })
            console.log("singleproducttest", currentProduct)
            setSelectedProduct(currentProduct)
        }
        findSelectedProduct
    }, [])
    return(
    <p>does this work</p>
    )
}


export default SingleProductView;