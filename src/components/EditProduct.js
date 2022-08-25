import React, { useEffect, useState } from "react";
import "../style/Admin.css";
import axios from "axios";

const EditProduct = ({
  formToggle,
  setFormToggle,
  formType,
  currentProduct,
  setCurrentProduct,
  allProducts,
  setAllProducts,
}) => {
  console.log("formType");
  console.log(formType);
  const [playerNameForm, setPlayerNameForm] = useState(
    currentProduct.playerName
  );
  const [teamNameForm, setTeamNameForm] = useState(currentProduct.teamName);
  const [divisionForm, setDivisionForm] = useState(currentProduct.division);
  const [jerseyNumberForm, setJerseyNumberForm] = useState(
    currentProduct.jerseyNumber
  );
  const [priceForm, setPriceForm] = useState(currentProduct.price);
  const [imageForm, setImageForm] = useState(currentProduct.image);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/api/products");
      const result = response.data;
      setAllProducts(result);
      console.log("result Edit Product line 20 /////////////////////");

      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  async function addProduct(object) {
    try {
      const response = await axios.post("/api/products", {
        newProduct: object,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="login_page">
      {formType === "edit" ? (
        <div className= "admin_form_page">
          <form className='editProductForm'>
            <h3>Edit Product</h3>
            <label>Player Name</label>
            <input
              type="text"
              value={playerNameForm}
              onChange={(event) => setPlayerNameForm(event.target.value)}
            ></input>
            <label>Team Name</label>
            <input
              type="text"
              value={teamNameForm}
              required
              onChange={(event) => setTeamNameForm(event.target.value)}
            ></input>
            <label>Divison</label>
            <input
              type="text"
              value={divisionForm}
              required
              onChange={(event) => setDivisionForm(event.target.value)}
            ></input>
            <label>Jersey Number</label>
            <input
              type="text"
              value={jerseyNumberForm}
              required
              onChange={(event) => setJerseyNumberForm(event.target.value)}
            ></input>
            <label>Price</label>
            <input
              type="text"
              value={priceForm}
              required
              onChange={(event) => setPriceForm(event.target.value)}
            ></input>
            <label>Image</label>
            <textarea
              type="text"
              value={imageForm}
              rows="5"
              cols="40"
              required
              onChange={(event) => setImageForm(event.target.value)}
            ></textarea>
            <button
              typeof="submit"
              className="buttonFormSubmit"
              onClick={async (event) => {
                event.preventDefault();
                let modifiedProduct = {
                  id: currentProduct.id,
                  playerName: playerNameForm,
                  jerseyNumber: jerseyNumberForm,
                  teamName: teamNameForm,
                  division: divisionForm,
                  price: priceForm,
                  image: imageForm,
                };
                console.log("This is the currrent product below");
                console.log(modifiedProduct);
                const modProduct = await axios.patch(
                  `/api/products/${currentProduct.id}`,
                  {
                    product: modifiedProduct,
                  }
                );
                console.log("modProduct");
                console.log(modProduct.data);
                fetchProducts();
              }}
            >
              Edit Current Product
            </button>
          </form>
           <div className="backButtonDiv">
              <button className="buttonBackButton" onClick={()=> setFormToggle(false)} >Back To Admin Page</button>
          </div>
        </div>
        
      ) : null}
      {formType === "new" ? (
        <div className="admin_form_page">
          <form className='editProductForm'>
            <h3>Make New Product</h3>
            <label>Player Name</label>
            <br />
            <input
              type="text"
              value={playerNameForm}
              onChange={(event) => setPlayerNameForm(event.target.value)}
            ></input>
            <label>Team Name</label>
            <input
              type="text"
              value={teamNameForm}
              required
              onChange={(event) => setTeamNameForm(event.target.value)}
            ></input>
            <label>Divison</label>
            <input
              type="text"
              value={divisionForm}
              required
              onChange={(event) => setDivisionForm(event.target.value)}
            ></input>
            <label>Jersey Number</label>
            <input
              type="text"
              value={jerseyNumberForm}
              required
              onChange={(event) => setJerseyNumberForm(event.target.value)}
            ></input>
            <label>Price</label>
            <input
              type="text"
              value={priceForm}
              required
              onChange={(event) => setPriceForm(event.target.value)}
            ></input>
            <label>Image</label>
            <textarea
              type="text"
              rows="5"
              cols="40"
              value={imageForm}
              required
              onChange={(event) => setImageForm(event.target.value)}
            ></textarea>
            <button
              typeof="submit"
              className="buttonFormSubmit"
              onClick={() => {
                event.preventDefault();
                let modifiedProduct = {
                  id: currentProduct.id,
                  playerName: playerNameForm,
                  jerseyNumber: jerseyNumberForm,
                  teamName: teamNameForm,
                  division: divisionForm,
                  price: priceForm,
                  image: imageForm,
                };
                addProduct(modifiedProduct);
                fetchProducts();
              }}
            >
              Make New Product
            </button>
          </form>
            <div className="backButtonDiv">
              <button className="buttonBackButton" onClick={()=> setFormToggle(false) }>Back To Admin Page</button>
            </div>
        </div>
      ) : null}
    
    </div>
  );
};

export default EditProduct;
