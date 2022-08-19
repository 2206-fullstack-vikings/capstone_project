import React, {useState, useEffect} from "react";
import axios from "axios";
import "../style/Admin.css"
import EditProduct from "./EditProduct";
// import { UNSAFE_NavigationContext } from "react-router-dom";

const Admin = (props)=>{
const {setCurrentUser, currentUser, allProducts, setAllProducts} = props;

// const [playerName, setPlayerName]= useState("");
// const [teamName, setTeamName]= useState("");
// const [division, setDivision]= useState("");
// const [jerseyNumber, setJerseyNumber]= useState("");
// const [price, setPrice]= useState("");
// const [image, setImage]= useState("");
const [formToggle, setFormToggle] = useState(false);
const [formType, setFormType] = useState("");
const [currentProduct, setCurrentProduct] = useState("");
const [buttonValue, setButtonValue] = useState("");


function getTeamColors(team) {
    if ( team === "Minnesota Vikings") {
        return {background: "whitePS", text: "purple", buttonT: "buttonPYT", buttonB: "buttonPYB"}
    } 
    
    // if ( team === "Detroit Lions") {
    //     return [{background: "white"}, {text: "lightblue"}, {buttonText: "lightblue"}, {buttonColor: "gray"}]
    // } 
    else if ( team === "Green Bay Packers") {
        return {background: "white", text: "green", buttonT: "buttonGYT", buttonB: "buttonGYB" }
    } 
    // if ( team === "Chicago Bears") {
    //     return [{background: "gold"}, {text: "white"}, {button: "yellow"}, {buttonColor: "black"}]
    // } 
    else {
         return {background: "white", text: "buttonGrayGB", buttonT: "buttonBGT", buttonB: "buttonBGB"}
    }
}

async function deleteProduct(productId) {
    try {
        await axios.delete(`http://localhost:3000/api/products/${productId}`)
    } catch(error) {
        console.log(error)
    }
}

   const fetchProducts = async ()=>{
        try {
            const response = await axios.get("http://localhost:3000/api/products")
            const result = response.data
            setAllProducts(result);
                        console.log("result Edit Product line 20 /////////////////////");

            console.log(result);
        } catch (error) {
            console.error(error)
        }
    };


// const styleJerseys = {
//     display:"flex",
//     flexDirection:"row",
// }

// const adminBody = {
//     width:"100%",
//     height:"100%",
//     backgroundColor:"blue"
// }




    return(
        <div >
            {
                formToggle ? <EditProduct formToggle = {formToggle} setFormToggle = {setFormToggle} formType = {formType} setFormType = {setFormType} currentProduct = {currentProduct} setCurrentProduct = {setCurrentProduct} allProducts = {allProducts} setAllProducts = {setAllProducts} />: null
            }
            {currentUser.admin && !formToggle ? 
            <div className="admin_main">  
                <div className="admin_new_container">
                    <button onClick={()=>{
                            setFormToggle(true);
                            setFormType("new");
                            setCurrentProduct({id: "", playerName: "", jerseyNumber: "", teamName: "", division: "", price: "", image: ""})
                    }} className="button_new">Add New Product</button>
                </div>    
         
                {allProducts.map((eachProduct,idx)=>{
                    let teamColors = getTeamColors(eachProduct.teamName);
                    console.log("teamColors");
                                        console.log(teamColors.teamColorsT)

                    // let buttonColor = "";
                    // let backgroundColor = "";
                    // let textColor = "";
                    return <div key={idx} className="admin_product">
                        <div className="image_container">
                            <img src={eachProduct.image} alt="NFL Property" className="admin_image" />
                        </div>
                    <p>{eachProduct.playerName}</p>
                    <p>#{eachProduct.jerseyNumber}</p>
                    <p>{eachProduct.teamName}</p>
                    <p>{eachProduct.division}</p>
                    <p>${eachProduct.price}</p>
                    <button value={eachProduct.id} onClick={() => {
                        deleteProduct(eachProduct.id);
                        fetchProducts();
                    }} className={teamColors.buttonT}>Delete Product</button>
                    <button value={eachProduct.id} onClick={() => {
                        setFormToggle(true);
                        setFormType("edit");
                        setCurrentProduct({id: eachProduct.id, playerName: eachProduct.playerName, jerseyNumber: eachProduct.jerseyNumber, teamName: eachProduct.teamName, division: eachProduct.division, price: eachProduct.price, image: eachProduct.image})
                    }} className={teamColors.buttonB}>Edit Product</button>
                </div>
                })}
            </div> : 
            <h1>You need to be an admin to view</h1>
            }   
        </div>
    )
}

export default Admin; 