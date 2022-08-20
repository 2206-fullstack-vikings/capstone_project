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
        return {background: "gradientYellow", buttonT: "buttonPYT", buttonB: "buttonPYB" }
    } 
    
    else if ( team === "Detroit Lions") {
        return {background: "gradientGray", buttonT: "buttonLBGT", buttonB: "buttonLBGB" }
    } 
    else if ( team === "Green Bay Packers") {
        return {background: "gradientYellow", buttonT: "buttonGYT", buttonB: "buttonGYB" }
    } 
    else if ( team === "Chicago Bears") {
        return {background: "gradientOrangeDark", buttonT: "buttonNavyBlueT", buttonB: "buttonNavyBlueB" }
    } else if ( team === "Arizona Cardinals") {
        return {background: "gradientBlack", buttonT: "buttonCardinalRedT", buttonB: "buttonCardinalRedB" }
    } else if ( team === "Indianapolis Colts") {
        return {background: "gradientBarelyGray", buttonT: "buttonRoyalBlueT", buttonB: "buttonRoyalBlueB" }
    } else if ( team === "Los Angeles Rams") {
        return {background: "gradientGold", buttonT: "buttonRoyalBlueT", buttonB: "buttonRoyalBlueB" }
    } else if ( team === "San Francisco 49ers") {
        return {background: "gradientGold", buttonT: "buttonScarletRedT", buttonB: "buttonScarletRedB" }
    } else if ( team === "Seattle Seahawks") {
        return {background: "gradientLimeGreen", buttonT: "buttonDarkAquaT", buttonB: "buttonDarkAquaB" }
    } else if ( team === "Buffalo Bills") {
        return {background: "gradientRed", buttonT: "buttonRoyalBlueT", buttonB: "buttonRoyalBlueB" }
    } else if ( team === "Miami Dolphins") {
        return {background: "gradientOrange", buttonT: "buttonAquaT", buttonB: "buttonAquaB" }
    } else if ( team === "New York Jets") {
        return {background: "gradientGray", buttonT: "buttonGYT", buttonB: "buttonGYB" }
    } else if ( team === "New England Patriots") {
        return {background: "gradientRed", buttonT: "buttonNavyBlueT", buttonB: "buttonNavyBlueB" }
    } else if ( team === "New Orleans Saints") {
        return {background: "gradientGold", buttonT: "buttonBlackT", buttonB: "buttonBlackB" }
    } else if ( team === "Pittsburgh Steelers") {
        return {background: "gradientGold", buttonT: "buttonBlackT", buttonB: "buttonBlackB" }
    }  else if ( team === "Carolina Panthers") {
        return {background: "gradientBlack", buttonT: "buttonPantherBlueT", buttonB: "buttonPantherBlueB" }
    } 
    
    
    
    
    else if ( team === "Atlanta Falcons") {
        return {background: "gradientRed", buttonT: "buttonBlackT", buttonB: "buttonBlackB" }
    } 
    
      else if ( team === "New York Giants") {
        return {background: "gradientRed", buttonT: "buttonRoyalBlueT", buttonB: "buttonRoyalBlueB" }
    }  
    else if ( team === "Las Vegas Raiders") {
        return {background: "gradientGray", buttonT: "buttonBlackT", buttonB: "buttonBlackB" }
    }  else if ( team === "Cincinnati Bengals") {
        return {background: "gradientOrangeDark", buttonT: "buttonBlackT", buttonB: "buttonBlackB" }
    } else if ( team === "Tampa Bay Buccaneers") {
        return {background: "gradientPewter", buttonT: "buttonBucsRedT", buttonB: "buttonBucsRedB" }
    } else if ( team === "Dallas Cowboys") {
        return {background: "gradientGray", buttonT: "buttonDarkBlueT", buttonB: "buttonDarkBlueB" }
    } else if ( team === "Jacksonville Jaguars") {
        return {background: "gradientGold", buttonT: "buttonTealT", buttonB: "buttonTealB" }
    } else {
         return {background: "admin_product", buttonT: "buttonBGT", buttonB: "buttonBGB" }
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
                    return <div key={idx} className={teamColors.background}>
                        <div className="image_container">
                            <img src={eachProduct.image} alt="NFL Property" className="admin_image" />
                        </div>
                    <p>{eachProduct.playerName}</p>
                    <p>#{eachProduct.jerseyNumber}</p>
                    <p>{eachProduct.teamName}</p>
                    <p>{eachProduct.division}</p>
                    <p>${eachProduct.price}</p>
                 {/* <div className={teamColors.container}> */}
                          <button value={eachProduct.id} onClick={() => {
                        deleteProduct(eachProduct.id);
                        fetchProducts();
                    }} className={teamColors.buttonT}>Delete Product</button>
                    <br />
                    <button value={eachProduct.id} onClick={() => {
                        setFormToggle(true);
                        setFormType("edit");
                        setCurrentProduct({id: eachProduct.id, playerName: eachProduct.playerName, jerseyNumber: eachProduct.jerseyNumber, teamName: eachProduct.teamName, division: eachProduct.division, price: eachProduct.price, image: eachProduct.image})
                    }} className={teamColors.buttonB}>Edit Product</button>
                    </div>
                  
                // </div>
                })}
            </div> : 
            <h1>You need to be an admin to view</h1>
            }   
        </div>
    )
}

export default Admin; 