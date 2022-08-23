// NOTE: THIS COMPONENT IS NOT PART OF CURRENT APPLICATION AND
// IS AN ONGOING FEATURE STILL BEING BUILT OUT.

import React from "react";
import "../style/Selector.css";

const Selector = (props) => {
  const { allProducts } = props;

  return (
    <div className="item_selector">
      <select name="Select a team">
        {allProducts.map((eachProduct, idx) => {
          return (
            <option key={idx} value={eachProduct.teamName}>
              {eachProduct.teamName}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Selector;
