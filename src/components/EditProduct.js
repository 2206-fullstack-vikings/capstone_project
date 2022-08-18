import React, { useState } from "react";

const EditProduct = ({ formToggle, setFormToggle, formType, setFormType,  currentProduct, setCurrentProduct }) => {
    
    const [playerName, setPlayerName]= useState(currentProduct.name);
    const [teamName, setTeamName]= useState(currentProduct.team);
    const [division, setDivision]= useState(currentProduct.division);
    const [jerseyNumber, setJerseyNumber]= useState(currentProduct.jerseyNumber);
    const [price, setPrice]= useState(currentProduct.price);
    const [image, setImage]= useState(currentProduct.image);
    
    
    return (
        <div>
            {
                formType = "edit" ? <div>
                    <form className='edit_product' onSubmit={editProduct}>placeholder
                        <h3>Edit Product</h3>
                        <label>Player Name</label>
                        <br />
                        <input
                            type="text"
                            value={playerName}
                            onChange={(event) => setPlayerName(event.target.value)}
                        ></input>
                        <br />
                        <label>Team Name</label>
                        <br />
                        <input
                            type="text"
                            value={teamName}
                            required
                            onChange={(event) => setTeamName(event.target.value)}
                        ></input>
                        <br />
                        <label>Divison</label>
                        <br />
                        <input
                            type="text"
                            value={division}
                            required
                            onChange={(event) => setDivision(event.target.value)}
                        ></input>
                        <br />
                        <label>Jersey Number</label>
                        <br />
                        <input
                            type="text"
                            value={jerseyNumber}
                            required
                            onChange={(event) => setJerseyNumber(event.target.value)}
                        ></input>
                        <br />
                        <label>Price</label>
                        <br />
                        <input
                            type="text"
                            value={price}
                            required
                            onChange={(event) => setPrice(event.target.value)}
                        ></input>
                        <br />
                          <label>Image</label>
                        <br />
                        <input
                            type="text"
                            value={image}
                            required
                            onChange={(event) => setImage(event.target.value)}
                        ></input>
                        <br />
                        <button typeof="submit">Log In</button>
                    </form>
                </div>: null
            }
            {
                formType = "new" ? <div>
                     <form className='edit_product' onSubmit={editProduct}>placeholder
                        <h3>Edit Product</h3>
                        <label>Player Name</label>
                        <br />
                        <input
                            type="text"
                            value={playerName}
                            onChange={(event) => setPlayerName(event.target.value)}
                        ></input>
                        <br />
                        <label>Team Name</label>
                        <br />
                        <input
                            type="text"
                            value={teamName}
                            required
                            onChange={(event) => setTeamName(event.target.value)}
                        ></input>
                        <br />
                        <label>Divison</label>
                        <br />
                        <input
                            type="text"
                            value={division}
                            required
                            onChange={(event) => setDivision(event.target.value)}
                        ></input>
                        <br />
                        <label>Jersey Number</label>
                        <br />
                        <input
                            type="text"
                            value={jerseyNumber}
                            required
                            onChange={(event) => setJerseyNumber(event.target.value)}
                        ></input>
                        <br />
                        <label>Price</label>
                        <br />
                        <input
                            type="text"
                            value={price}
                            required
                            onChange={(event) => setPrice(event.target.value)}
                        ></input>
                        <br />
                          <label>Image</label>
                        <br />
                        <input
                            type="text"
                            value={image}
                            required
                            onChange={(event) => setImage(event.target.value)}
                        ></input>
                        <br />
                        <button typeof="submit">Log In</button>
                    </form>
                </div>: null
            }
        </div>
    )
}

export default EditProduct;