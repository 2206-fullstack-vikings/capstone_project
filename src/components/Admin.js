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
// const [buttonValue, setButtonValue] = useState("");
const [holdAllProducts, setHoldAllProducts] = useState([]);
const [teamFilter, setTeamFilter] = useState("All");
const [priceFilter, setPriceFilter] = useState(false);


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
    }

async function deleteProduct(productId) {
    try {
        await axios.delete(`http://localhost:3000/api/products/${productId}`)
    } catch(error) {
        console.log(error)
    }
}

useEffect(()=>{
    console.log("teamFilterUseEffect");
    console.log(teamFilter);
    if ( teamFilter === "All" ) {
        fetchProducts();
        setHoldAllProducts([]);
    } else 
    
    if ( teamFilter !== "All" && teamFilter !== "NFC North" && teamFilter !== "NFC East" && teamFilter !== "NFC South" && teamFilter !== "NFC West" && teamFilter !== "AFC North" && teamFilter !== "AFC East" && teamFilter !== "AFC South" && teamFilter !== "AFC West" ) {
        // fetchProducts()
        console.log("holdAllProducts");
        console.log(holdAllProducts)
        console.log("teams")
        console.log(teamFilter)

        let teamHolder = [];
            for ( let i=0; i< allProducts.length; i++) {
                if (allProducts[i].teamName === teamFilter) {teamHolder.push(allProducts[i])}
            }
        setHoldAllProducts(teamHolder)
        console.log("teamHolder");
        console.log(teamHolder)
    } else if ( teamFilter === "NFC North" || teamFilter === "NFC East" || teamFilter === "NFC South" || teamFilter === "NFC West" || teamFilter === "AFC North" || teamFilter === "AFC East" || teamFilter === "AFC South" || teamFilter === "AFC West" ) {  

            let divisionHolder = [];
        for ( let i=0; i< allProducts.length; i++) {
            if (allProducts[i].division === teamFilter) {divisionHolder.push(allProducts[i])}
        }
        setHoldAllProducts(divisionHolder)
        console.log("divisionHolder");
        console.log(divisionHolder)
        console.log("teamFilter");
                console.log(teamFilter)
    } else {
        console.log( "filter failed")
    }

},[teamFilter])

function getTeamFilter() {
    console.log("this is the current ");
    console.log(teamFilter)
}

function getTeamColors(team) {
    if ( team === "Minnesota Vikings") {
        return {background: "gradientYellow", buttonT: "buttonPurpleT", buttonB: "buttonPurpleB" }
    } else if ( team === "Detroit Lions") {
        return {background: "gradientGray", buttonT: "buttonLBGT", buttonB: "buttonLBGB" }
    } else if ( team === "Green Bay Packers") {
        return {background: "gradientYellow", buttonT: "buttonGYT", buttonB: "buttonGYB" }
    } else if ( team === "Chicago Bears") {
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
        return {background: "gradientGoldMetallic", buttonT: "buttonBlackT", buttonB: "buttonBlackB" }
    } else if ( team === "Pittsburgh Steelers") {
        return {background: "gradientGold", buttonT: "buttonBlackT", buttonB: "buttonBlackB" }
    }  else if ( team === "Carolina Panthers") {
        return {background: "gradientBlack", buttonT: "buttonPantherBlueT", buttonB: "buttonPantherBlueB" }
    } else if ( team === "Atlanta Falcons") {
        return {background: "gradientRed", buttonT: "buttonBlackT", buttonB: "buttonBlackB" }
    } else if ( team === "New York Giants") {
        return {background: "gradientRed", buttonT: "buttonRoyalBlueT", buttonB: "buttonRoyalBlueB" }
    }  else if ( team === "Las Vegas Raiders") {
        return {background: "gradientGray", buttonT: "buttonBlackT", buttonB: "buttonBlackB" }
    }  else if ( team === "Cleveland Browns") {
        return {background: "gradientOrangeBrowns", buttonT: "buttonBrownT", buttonB: "buttonBrownB" }
    } else if ( team === "Cincinnati Bengals") {
        return {background: "gradientOrangeBrowns", buttonT: "buttonBlackT", buttonB: "buttonBlackB" }
    } else if ( team === "Tampa Bay Buccaneers") {
        return {background: "gradientPewter", buttonT: "buttonBucsRedT", buttonB: "buttonBucsRedB" }
    } else if ( team === "Dallas Cowboys") {
        return {background: "gradientGray", buttonT: "buttonDarkBlueT", buttonB: "buttonDarkBlueB" }
    } else if ( team === "Jacksonville Jaguars") {
        return {background: "gradientGold", buttonT: "buttonTealT", buttonB: "buttonTealB" }
    } else if ( team === "Philadelphia Eagles") {
        return {background: "gradientBlack", buttonT: "buttonMidnightGreenT", buttonB: "buttonMidnightGreenB" }
    } else if ( team === "Washington Commanders") {
        return {background: "gradientOrangeGold", buttonT: "buttonBurgundyT", buttonB: "buttonBurgundyB" }
    } else if ( team === "Houston Texans") {
        return {background: "gradientBattleRed", buttonT: "buttonDeepSteelBlueT", buttonB: "buttonDeepSteelBlueB" }
    } else if ( team === "Tennessee Titans") {
        return {background: "gradientLightBlue", buttonT: "buttonNavyBlueT", buttonB: "buttonNavyBlueB" }
    } else if ( team === "Baltimore Ravens") {
        return {background: "gradientGoldMetallic", buttonT: "buttonPurpleT", buttonB: "buttonPurpleB" }
    } else if ( team === "Denver Broncos") {
        return {background: "gradientNavy", buttonT: "buttonOrangeT", buttonB: "buttonOrangeB" }
    } else if ( team === "Kansas City Chiefs") {
        return {background: "gradientGoldDarker", buttonT: "buttonRedT", buttonB: "buttonRedB" }
    } else if ( team === "Los Angeles Chargers") {
        return {background: "gradientGold", buttonT: "buttonPowderBlueT", buttonB: "buttonPowderBlueB" }
    } else {
         return {background: "admin_product", buttonT: "buttonBGT", buttonB: "buttonBGB" }
    }
}


function filterByPrice() {
    console.log("priceFilter")
    console.log(priceFilter)
    if ( teamFilter === "All" && priceFilter === "MtoL") {
            let productArray = [...allProducts]
            console.log(productArray)

            let productsSortMtoL = [allProducts[0]];
            // productsSortMtoL.push(allProducts[0])
            for (let i=1; i<productArray.length; i++) {
                // let pointer1 =
                let previousIndex = i - 1;
                    if ( allProducts[i].price <= allProducts[previousIndex+1].price) {
                        productsSortMtoL.push(allProducts[i])
                                            console.log(allProducts[i].price)
                                            console.log(allProducts[previousIndex].price)
                                            


                    } else {
                        productsSortMtoL.unshift(allProducts[i])
                                            console.log(allProducts[i].price)
                                            console.log(allProducts[previousIndex].price)
                    }
                   
                  

                    // console.log(productsSortMtoL)
                    console.log(productsSortMtoL.length)
                    console.log(allProducts.length)
                }
                console.log("productsSortMtoL");
                console.log(productsSortMtoL);
                  console.log("loop#3")
                   console.log("loop#1");
                    productsSortMtoL[0]
                                        console.log("loop#2")
                                        productsSortMtoL[1]
                    productsSortMtoL[2]
                    console.log("loop#4")
                    productsSortMtoL[3]
                    console.log("loop#5")
                    productsSortMtoL[4]
            setHoldAllProducts(productsSortMtoL);
    } else if ( teamFilter === "All" && priceFilter === "LtoM"){

    } else if ( teamFilter !== "All" && priceFilter === "MtoL"){
        window.alert("hit l to m")
    let productArray = [...holdAllProducts]
            console.log("holdAllProducts")
            console.log(holdAllProducts)

            let productsSortMtoL = [];
            productsSortMtoL.push(holdAllProducts[0]);
            console.log("holdAllProducts[0]")
            console.log(holdAllProducts.length)
               console.log("productsSortMtoL")
            console.log(productsSortMtoL)
            for (let i=0; i + 1 < holdAllProducts.length; i++) {
                let pointer = productsSortMtoL.length - 1
                    if ( productsSortMtoL[pointer].price <= holdAllProducts[i + 1].price) {
                         console.log("productsSortMtoL[0]")
                        console.log(productsSortMtoL[0])
                        productsSortMtoL.push(holdAllProducts[i + 1])
                                            console.log(holdAllProducts[i].price)                                            
                    } else {

                        // productsSortMtoL.unshift(holdAllProducts[i + 1])
                        //                     console.log(holdAllProducts[i].price)
                    }
                   
                  

                    // console.log(productsSortMtoL)
                    // console.log(productsSortMtoL.length)
                    console.log("productsSortMtoL")
                    console.log(productsSortMtoL)
                    console.log("holdAllProducts")
                    console.log(holdAllProducts)
                }
                console.log("productsSortMtoL");
                console.log(productsSortMtoL);
                  console.log("loop#3")
                   console.log("loop#1");
                    productsSortMtoL[0]
                                        console.log("loop#2")
                                        productsSortMtoL[1]
                    productsSortMtoL[2]
                    console.log("loop#4")
                    productsSortMtoL[3]
                    console.log("loop#5")
                    productsSortMtoL[4]
            setHoldAllProducts(productsSortMtoL);
    }
}

function resetFilters() {
setTeamFilter("All")
setPriceFilter([]);
fetchProducts();
}


    return(
        <div >
            {
                formToggle ? <EditProduct formToggle = {formToggle} setFormToggle = {setFormToggle} formType = {formType} setFormType = {setFormType} currentProduct = {currentProduct} setCurrentProduct = {setCurrentProduct} allProducts = {allProducts} setAllProducts = {setAllProducts} />: null
            }
            {currentUser.admin && !formToggle ? 
            <div className="admin_main">  
                <div className="admin_new_container">
                    <div className="top_bar_admin">
                        <button onClick={()=>{
                                setFormToggle(true);
                                setFormType("new");
                                setCurrentProduct({id: "", playerName: "", jerseyNumber: "", teamName: "", division: "", price: "", image: ""})
                        }} className="button_new">Add New Product</button>
                        
                            <div>
                            <select
                                onChange={(event)=>{
                                    console.log("event.target.value");
                                    console.log(event.target.value);
                                    setTeamFilter(event.target.value);
                                    console.log("newteamFilter")
                                    console.log(teamFilter)
                                    getTeamFilter();
                                }}
                                className="button_new">
                                <option>All</option>
                                <option>Minnesota Vikings</option>
                                <option>Detroit Lions</option>
                                <option>Green Bay Packers</option>
                                <option>Chicago Bears</option>
                                <option>Arizona Cardinals</option>
                                <option>Los Angeles Rams</option>
                                <option>San Francisco 49ers</option>
                                <option>Seattle Seahawks</option>
                                <option>Buffalo Bills</option>
                                <option>Miami Dolphins</option>
                                <option>New York Jets</option>
                                <option>New England Patriots</option>
                                <option>New Orleans Saints</option>
                                <option>Carolina Panthers</option>
                                <option>Tampa Bay Buccaneers</option>
                                <option>Atlanta Falcons</option>
                                <option>Dallas Cowboys</option>
                                <option>New York Giants</option>
                                <option>Philadelphia Eagles</option>
                                <option>Washington Commanders</option>
                                <option>Houston Texans</option>
                                <option>Jacksonville Jaguars</option>
                                <option>Indianapolis Colts</option>
                                <option>Tennessee Titans</option>
                                <option>Cleveland Browns</option>
                                <option>Pittsburgh Steelers</option>
                                <option>Cincinnati Bengals</option>
                                <option>Baltimore Ravens</option>
                                <option>Denver Broncos</option>
                                <option>Kansas City Chiefs</option>
                                <option>Las Vegas Raiders</option>
                                <option>Los Angeles Chargers</option>
                                <option>NFC North</option>
                                <option>NFC East</option>
                                <option>NFC South</option>
                                <option>NFC West</option>
                                <option>AFC North</option>
                                <option>AFC East</option>
                                <option>AFC South</option>
                                <option>AFC West</option>
                            </select>

                                </div>
                            
                            <button onClick={()=>{
                             resetFilters()
                            }} className="button_new">Reset Filters</button>
                            <button onClick={()=>{
                                    setPriceFilter("MtoL")
                             filterByPrice()
                            }} className="button_new">Filter By Price: Most to Least </button>
                            <button onClick={()=>{
                                    setPriceFilter("LtoM")
                             filterByPrice()
                            }} className="button_new">Filter By Price: Least to Most </button>
                    </div>
                </div>    
         
                {/* {allProducts.map((eachProduct,idx)=>{
                    let teamColors = getTeamColors(eachProduct.teamName);
             
                    return <div key={idx} className={teamColors.background}>
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
                        <br />
                        <button value={eachProduct.id} onClick={() => {
                            setFormToggle(true);
                            setFormType("edit");
                            setCurrentProduct({id: eachProduct.id, playerName: eachProduct.playerName, jerseyNumber: eachProduct.jerseyNumber, teamName: eachProduct.teamName, division: eachProduct.division, price: eachProduct.price, image: eachProduct.image})
                        }} className={teamColors.buttonB}>Edit Product</button>
                    </div>
                  
                })} */}
            </div> : 
            <h1>You need to be an admin to view</h1>
            }   
            {
                currentUser.admin && !formToggle && teamFilter === "All" ?
                <div className="admin_main">{allProducts.map((eachProduct,idx)=>{
                    let teamColors = getTeamColors(eachProduct.teamName);
             
                    return <div key={idx} className={teamColors.background}>
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
                        <br />
                        <button value={eachProduct.id} onClick={() => {
                            setFormToggle(true);
                            setFormType("edit");
                            setCurrentProduct({id: eachProduct.id, playerName: eachProduct.playerName, jerseyNumber: eachProduct.jerseyNumber, teamName: eachProduct.teamName, division: eachProduct.division, price: eachProduct.price, image: eachProduct.image})
                        }} className={teamColors.buttonB}>Edit Product</button>
                    </div>
                })}</div>: null
            }
            {
                currentUser.admin && !formToggle && teamFilter !== "All" ?
                <div className="admin_main">{holdAllProducts.map((eachProduct,idx)=>{
                    let teamColors = getTeamColors(eachProduct.teamName);
             
                    return <div key={idx} className={teamColors.background}>
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
                        <br />
                        <button value={eachProduct.id} onClick={() => {
                            setFormToggle(true);
                            setFormType("edit");
                            setCurrentProduct({id: eachProduct.id, playerName: eachProduct.playerName, jerseyNumber: eachProduct.jerseyNumber, teamName: eachProduct.teamName, division: eachProduct.division, price: eachProduct.price, image: eachProduct.image})
                        }} className={teamColors.buttonB}>Edit Product</button>
                    </div>
                })}</div>: null
            }
        </div>
    )
}

export default Admin; 