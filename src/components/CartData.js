// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// export const configJSON = require("../components/config");

// function CartData(props) {
//     const [isCartSidebar, setIsCartSidebar] = useState(false);
//     const [allProduct, setAllProduct] = useState([])
//     const [isLoader, setIsLoader] = useState(false)
//     const navigate = useNavigate()


//     useEffect(()=>{
//         const token = JSON.parse(localStorage.getItem("token"))
//         if (token == null) {
//             navigate('/login-register')
//         } else {
//             // getCartData(token)
//         }
//         setIsCartSidebar(props?.cart)
//     },[props?.cart])
//     const getCartData = (val) => {
//         axios({
//             url: configJSON.baseUrl + configJSON.getCartData,
//             method: "get",
//             headers: {
//                 'Authorization': `Bearer ${val}`
//             },
//         }).then((res) => {
//             setIsLoader(false)
//             if (res?.data?.success == true) {
//                 setAllProduct(res?.data?.cart)
//             }
//             else {
//                 setAllProduct([])
//             }
//         }).catch((error) => {
//             setIsLoader(false)
//             console.log(error)
//         })
//     }
//     const handleShopCheckout = () => {
//         navigate("/shop-checkout")
//     }
//     const handleShopCart = () => {
//         navigate("/shop-cart")
//     }
//   return (
//     <>
//      <div className={isCartSidebar == false ? "aside aside_right overflow-hidden cart-drawer" : "aside aside_right overflow-hidden cart-drawer aside_visible"} id="cartDrawer">
//                 <div className="aside-header d-flex align-items-center">
//                     <h3 className="text-uppercase fs-6 mb-0">SHOPPING BAG ( <span className="cart-amount js-cart-items-count">1</span> ) </h3>
//                     <button className="btn-close-lg js-close-aside btn-close-aside ms-auto" onClick={() => setIsCartSidebar(false)}></button>
//                 </div>

//                 <div className="aside-content cart-drawer-items-list">
//                     {

//                         isLoader == true ?
//                             <div className="custom-loader"></div> :
//                             allProduct?.length != 0 ?
//                                 allProduct?.map((item) => (
//                                     <>
//                                         <div className="cart-drawer-item d-flex position-relative">
//                                             <div className="position-relative">
//                                                 <img loading="lazy" className="cart-drawer-item__img" src={item?.product_images[0]} />
//                                             </div>
//                                             <div className="cart-drawer-item__info flex-grow-1">
//                                                 <h6 className="cart-drawer-item__title fw-normal mb-2">Georgia Rose</h6>
//                                                 <p className="cart-drawer-item__option text-secondary"  style={{marginBottom:"4px"}}>
//                                                 <label>Color:</label>
//                                                     <select className='form-control ct_cart_select'>
//                                                         {
//                                                             item?.product_colors?.map((item)=>(
//                                                                 <option>{item}</option>
//                                                             ))
//                                                         }
                                                     
//                                                     </select>
//                                                  </p>
//                                                 <p className="cart-drawer-item__option text-secondary " style={{marginBottom:"4px"}}>
//                                                     <label>Size</label>
//                                                     <select className='form-control ct_cart_select'>
//                                                         <option>M</option>
//                                                         <option>L</option>
//                                                         <option>Xl</option>
//                                                         <option>XXl</option>
//                                                     </select>
//                                                 </p>
//                                                 <div className="d-flex align-items-center justify-content-between mt-1">
//                                                     <div className="qty-control position-relative">
//                                                         <input type="number" name="quantity" value={item?.cart_quantity} min="1" className="qty-control__number border-0 text-center" />
//                                                         <div className="qty-control__reduce text-start">-</div>
//                                                         <div className="qty-control__increase text-end">+</div>
//                                                     </div>
//                                                     <span className="cart-drawer-item__price money price">${item?.price_sale_lend_price}</span>
//                                                 </div>
//                                             </div>

//                                             <button className="btn-close-xs position-absolute top-0 end-0 js-cart-item-remove"></button>
//                                         </div>

//                                         <hr className="cart-drawer-divider" />
//                                     </>
//                                 ))
//                                 : <h3>Empty Cart !!!</h3>
//                     }

//                 </div>

//                 <div className="cart-drawer-actions position-absolute start-0 bottom-0 w-100">
//                     <hr className="cart-drawer-divider" />
//                     <div className="d-flex justify-content-between">
//                         <h6 className="fs-base fw-medium">SUBTOTAL:</h6>
//                         <span className="cart-subtotal fw-medium">$176.00</span>
//                     </div>
//                     <a onClick={() => handleShopCart()} className="btn btn-light mt-3 d-block">View Cart</a>
//                     <a onClick={() => handleShopCheckout()} className="btn btn-primary mt-3 d-block">Checkout</a>
//                 </div>
//             </div>
//     </>
//   )
// }

// export default CartData