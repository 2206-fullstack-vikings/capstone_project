
# Truthy Jerseyz Outlet
## A fully deployed e-commerce application devoted to TRUE football fans!
[Click here to open application](http://truthy-jerseyz-outlet.herokuapp.com/)

![](https://user-images.githubusercontent.com/106874888/186734195-77920e4f-0c34-47ad-83a6-04ce6bad2c27.png)

## Technologies
- HTML5
- CSS
- JavaScript
- React
- Express
- Node.js
- PostgreSQL

## Features

## Shopping Cart
### User is able to select and add items to cart for purchase.  Cart has added feature of maintaining and remembering items so users can come back at a later time and still view items.  Works also with guest users.

![](https://user-images.githubusercontent.com/106874888/186735421-0174d742-df5d-48f3-a3ca-f9e7af549c34.gif)

## Admin Dashboard
### Gives users with admin rights the ability to add, edit, and delete products from application.  Also has an admin verification to prevent non-admins from changing products.  

## Code Preview
```

{currentUser.admin && !formToggle && teamFilter === "All" ? (
        <div className="admin_main">
          {allProducts.map((eachProduct, idx) => {
            let teamColors = getTeamColors(eachProduct.teamName);

            return (
              <div key={idx} className={teamColors.background}>
                <div className="image_container">
                  <img
                    src={eachProduct.image}
                    alt="NFL Property"
                    className="admin_image"
                  />
                </div>
                <p>{eachProduct.playerName}</p>
                <p>#{eachProduct.jerseyNumber}</p>
                <p>{eachProduct.teamName}</p>
                <p>{eachProduct.division}</p>
                <p>${eachProduct.price}</p>
```
### The code above is from our Admin component that checks for admin status, our edit toggle, and filter to display products for admin users.

## Installation 
### To install and add on to the application and make it your own 
- Clone repository:
```
https://github.com/2206-fullstack-vikings/capstone_project
```
- Install packages:
```
npm install
```
- Seed the database:
```
npm run db:build
```
- Run app in developement mode:
```
npm run start:dev
```
- Open http://localhost:3000 to view it in your browser.

## Authors:

- Galen Montrone - [https://github.com/GalenM-7](https://github.com/GalenM-7)
- Mark Zimmerman - [https://github.com/mark-zimmerman](https://github.com/mark-zimmerman)
- Dustin Broussard - [https://github.com/da-broussard](https://github.com/da-broussard)
