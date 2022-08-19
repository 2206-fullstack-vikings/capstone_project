import React, { useEffect, useState } from "react";
import "../style/Admin.css"
import axios from "axios";

const EditProduct = ({ formToggle, setFormToggle, formType, currentProduct, setCurrentProduct, allProducts, setAllProducts }) => {
         console.log("formType")
                        console.log(formType)
    const [playerNameForm, setPlayerNameForm]= useState(currentProduct.playerName);
    const [teamNameForm, setTeamNameForm]= useState(currentProduct.teamName);
    const [divisionForm, setDivisionForm]= useState(currentProduct.division);
    const [jerseyNumberForm, setJerseyNumberForm]= useState(currentProduct.jerseyNumber);
    const [priceForm, setPriceForm]= useState(currentProduct.price);
    const [imageForm, setImageForm]= useState(currentProduct.image);

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

    async function addProduct(object) {
        try {
                const response = await axios.post("http://localhost:3000/api/products",
                {
                    newProduct: object
                }
            )
        } catch(error) {
            console.log(error)
        }
    }

 
    

    return (
        <div>
            {
                formType === "edit" ? <div className="formContainer">
                    <form className='editProductForm'>placeholder
                        <h3>Edit Product</h3>
                        <label>Player Name</label>
                        <br />
                        <input
                            type="text"
                            value={playerNameForm}
                            onChange={(event) => setPlayerNameForm(event.target.value)}
                        ></input>
                        <br />
                        <label>Team Name</label>
                        <br />
                        <input
                            type="text"
                            value={teamNameForm}
                            required
                            onChange={(event) => setTeamNameForm(event.target.value)}
                        ></input>
                        <br />
                        <label>Divison</label>
                        <br />
                        <input
                            type="text"
                            value={divisionForm}
                            required
                            onChange={(event) => setDivisionForm(event.target.value)}
                        ></input>
                        <br />
                        <label>Jersey Number</label>
                        <br />
                        <input
                            type="text"
                            value={jerseyNumberForm}
                            required
                            onChange={(event) => setJerseyNumberForm(event.target.value)}
                        ></input>
                        <br />
                        <label>Price</label>
                        <br />
                        <input
                            type="text"
                            value={priceForm}
                            required
                            onChange={(event) => setPriceForm(event.target.value)}
                        ></input>
                        <br />
                          <label>Image</label>
                        <br />
                        <input
                            type="text"
                            value={imageForm}
                            required
                            onChange={(event) => setImageForm(event.target.value)}
                        ></input>
                        <br />
                        <button typeof="submit" onClick={async (event)=>{
                            event.preventDefault();
                                let modifiedProduct = {
                                    id: currentProduct.id,
                                    playerName: playerNameForm,
                                    jerseyNumber: jerseyNumberForm,
                                    teamName: teamNameForm,
                                    division: divisionForm,
                                    price: priceForm,
                                    image: imageForm
                                }
                            console.log("This is the currrent product below");
                            console.log(modifiedProduct);
                            const modProduct = await axios.patch(`http://localhost:3000/api/products/${currentProduct.id}`,
                            {
                                product: modifiedProduct
                            })
                            console.log("modProduct");
                            console.log(modProduct.data);
                            fetchProducts();
                            }
                                    }>Edit Current Product</button>
                    </form>
                </div>: null
            }
            {
                formType === "new" ? <div>
                     <form className='edit_product'>placeholder
                        <h3>Make New Product</h3>
                        <label>Player Name</label>
                        <br />
                        <input
                            type="text"
                            value={playerNameForm}
                            onChange={(event) => setPlayerNameForm(event.target.value)}
                        ></input>
                        <br />
                        <label>Team Name</label>
                        <br />
                        <input
                            type="text"
                            value={teamNameForm}
                            required
                            onChange={(event) => setTeamNameForm(event.target.value)}
                        ></input>
                        <br />
                        <label>Divison</label>
                        <br />
                        <input
                            type="text"
                            value={divisionForm}
                            required
                            onChange={(event) => setDivisionForm(event.target.value)}
                        ></input>
                        <br />
                        <label>Jersey Number</label>
                        <br />
                        <input
                            type="text"
                            value={jerseyNumberForm}
                            required
                            onChange={(event) => setJerseyNumberForm(event.target.value)}
                        ></input>
                        <br />
                        <label>Price</label>
                        <br />
                        <input
                            type="text"
                            value={priceForm}
                            required
                            onChange={(event) => setPriceForm(event.target.value)}
                        ></input>
                        <br />
                          <label>Image</label>
                        <br />
                        <input
                            type="text"
                            value={imageForm}
                            required
                            onChange={(event) => setImageForm(event.target.value)}
                        ></input>
                        <br />
                        <button typeof="submit" onClick={()=>{
                               event.preventDefault();
                                let modifiedProduct = {
                                    id: currentProduct.id,
                                    playerName: playerNameForm,
                                    jerseyNumber: jerseyNumberForm,
                                    teamName: teamNameForm,
                                    division: divisionForm,
                                    price: priceForm,
                                    image: imageForm
                                }
                                addProduct(modifiedProduct);
                                fetchProducts();

                        }}>Make New Product</button>
                    </form>
                </div>: null
            }
        </div>
    )
}

export default EditProduct;