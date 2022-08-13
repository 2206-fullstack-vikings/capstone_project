import React from "react";


const Admin = ({testState})=>{


    return(
        <div className='admin_page'>
            <form className='add_product'>{testState}</form>
            <form className='edit_product'>placeholder</form>
            <form className="remove_product">placeholder</form>
        </div>
    )
}

export default Admin; 