import React, {useState, useEffect} from "react";
import axios from "axios";

const Admin = (props)=>{
const {setCurrentUser, currentUser, allProducts, setAllProducts} = props;

const [playerName, setPlayerName]= useState("");
const [teamName, setTeamName]= useState("");
const [division, setDivision]= useState("");
const [jerseyNumber, setJerseyNumber]= useState("");
const [price, setPrice]= useState("");
const [image, setImage]= useState("");






    return(
        <div className='admin_page'>
            {currentUser.admin ? 
            <div>  
                <form className='edit_product' onSubmit={editProduct}>placeholder
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
                <form className="add_product">placeholder</form>
            </div> : 
            <h1>You need to be an admin to view</h1>
            }   
        </div>
    )
}

export default Admin; 