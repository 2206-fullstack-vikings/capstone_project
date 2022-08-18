import React, {useState, useEffect} from "react";
import axios from "axios";
import "../style/Products.css"
import EditProduct from "./EditProduct";

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
const [buttonValue, setButtonValue] = useState("")

// function getTeamColors(team) {
//     if ( team === "Vikings") {
//         return [{background: "purple"}, {text: "white"}, {button: "yellow"}, {buttonColor: "black"}]
//     } if ( team === "Saints") {
//         return [{background: "gold"}, {text: "white"}, {button: "yellow"}, {buttonColor: "black"}]
//     } else {

//     }
// }

function editProduct(product) {
setCurrentProduct(product)
    // if ( !formToggle ) {
    //     setFormToggle(true);
    // } else {
    //     setFormToggle(false);
    // }
//     let currentProduct = allProducts.filter((product) => { 
//         console.log("itemId");
//         console.log(product.id);
//         console.log("buttonValue");
//         console.log(buttonValue)
//         if (item.id === buttonValue ) {
//             return item
//         }
//      });
// console.log("currentProduct")
// console.log(currentProduct)
        // for ( let i=0; i< allProducts.length; i++) {
        //         console.log("currentProductijdidijdhijh");
        //             console.log(allProducts[i].id);
        //             console.log("ththiewijhjeiwoBUBUTUUTTUTUIOONNIJVIJJLJLAIJOJOOFJJIO");
        //             console.log(buttonValue);
        //     if ( allProducts[i].id === buttonValue) {
                
        //         setCurrentProduct(allProducts[i]);
             
        //         return;
        //     }
        // }

       

}

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
                formToggle ? <EditProduct formToggle = {formToggle} setFormToggle = {setFormToggle} formType = {formType} setFormType = {setFormType} currentProduct = {currentProduct} setCurrentProduct = {setCurrentProduct}/>: null
            }
            {currentUser.admin && !formToggle ? 
            <div className="products_main">  
                {allProducts.map((eachProduct,idx)=>{
                    // let buttonColor = "";
                    // let backgroundColor = "";
                    // let textColor = "";
                    return <div key={idx} className="single_product">
                    <img src={eachProduct.image} alt="NFL Property"  height="200px" width="200px"/>
                    <p>{eachProduct.playerName}</p>
                    <p>#{eachProduct.jerseyNumber}</p>
                    <p>{eachProduct.teamName}</p>
                    <p>{eachProduct.division}</p>
                    <p>${eachProduct.price}</p>
                    <button value={eachProduct.id} onClick={() => {
                        
                    }}>Delete Product</button>
                    <button value={eachProduct.id} onClick={() => {
                        // setButtonValue(event.target.value)
                        editProduct({id: eachProduct.id, playerName: eachProduct.playerName, jerseyNumber: eachProduct.jerseyNumber, teamName: eachProduct.teamName, division: eachProduct.divison, price: eachProduct.price, image: eachProduct.image});
                        console.log("currentProduct");
                        console.log(currentProduct);
                            //     let singleProduct = await axios.get(`http://localhost:3000/api/products/${buttonValue}`)
                            // console.log(singleProduct)

                        // editProduct()
                        // console.log(allProducts)
                        // let singleProductEdit = allProducts.find((product)=> {
                        //     product.id === event.target.value
                        // })
                        //   console.log("event.target.value")
                        // console.log(event.target.value)
                        // console.log(singleProductEdit)
                    }}>Edit Product</button>
                </div>
                })}
                {/* <form className='edit_product' onSubmit={editProduct}>placeholder
                    <h3>Edit Product</h3>
                    <label>Player Name</label>
                    <br />
                    <input
                        type="text"
                        required
                        onChange={(event) => setPlayerName(event.target.value)}
                    ></input>
                    <br />
                    <label>Team Name</label>
                    <br />
                    <input
                        type="text"
                        required
                        onChange={(event) => setTeamName(event.target.value)}
                    ></input>
                    <br />
                    <label>Team Name</label>
                    <br />
                    <input
                        type="text"
                        required
                        onChange={(event) => setTeamName(event.target.value)}
                    ></input>
                    <br />
                    <label>Team Name</label>
                    <br />
                    <input
                        type="text"
                        required
                        onChange={(event) => setTeamName(event.target.value)}
                    ></input>
                    <br />
                    <label>Team Name</label>
                    <br />
                    <input
                        type="text"
                        required
                        onChange={(event) => setTeamName(event.target.value)}
                    ></input>
                    <br />
                    <button typeof="submit">Log In</button>
                </form>
                
                <form className="remove_product">placeholder</form>
                <form className="add_product">placeholder</form> */}
            </div> : 
            <h1>You need to be an admin to view</h1>
            }   
        </div>
    )
}

export default Admin; 