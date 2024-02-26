import React from 'react'
import { useNavigate } from 'react-router-dom'

function List7(props) {
    const active = props.data
    const navigate = useNavigate()

    const handleAccountEdit = ()=>{
        navigate("/account-edit")
    }
    const handleAccountWishlist = ()=>{
        navigate("/account-wishlist")
    }
    const handleAccountDashboard = ()=>{
        navigate('/account-dashboard')
    }

    const handleAccountEditAddress = ()=>{
        navigate("/account-edit-address")
      }
    // const handleSellItem = ()=>{
    //     navigate("/sell-item")
    // } 
    // const handleSellLend = ()=>{
    //     navigate("/sell-lend")
    // } 
    // const handlePastOrder = ()=>{
    //     navigate('/past-order')
    // }
    //     const handleAccountOrders = ()=>{
    //       navigate("/account-orders")
    //     }

    return (
        <>  
            <div className="col-lg-3">
                <ul className="account-nav">
                    <li><a onClick={()=>handleAccountDashboard()}className={active == "account-dashboard" ?"ct_account_dash_link menu-link_active ct_border_zero" :"ct_account_dash_link " }>Dashboard</a></li>
                    <li><a onClick={()=>handleAccountEdit()} className={active == "account-edit" ?"ct_account_dash_link menu-link_active ct_border_zero" :"ct_account_dash_link" }>Account Details</a></li>
                    {/* <li><a  className="ct_account_dash_link">Messages</a></li> */}
                    <li><a onClick={()=>handleAccountWishlist()} className={active == "account-wishlist" ?"ct_account_dash_link menu-link_active ct_border_zero" :"ct_account_dash_link" }>Wishlist</a></li>

                    
                    {/* <li><a onClick={()=>handleSellItem()} className={active == "sell-item" ?"ct_account_dash_link menu-link_active ct_border_zero" :"ct_account_dash_link" }>Sell Items</a></li>
                    <li><a onClick={()=>handleSellLend()} className={active == "sell-lend" ?"ct_account_dash_link menu-link_active ct_border_zero" :"ct_account_dash_link" }>Sell/Lend</a></li>
                    <li><a onClick={()=>handleAccountOrders()} className={active == "account-orders" ?"ct_account_dash_link menu-link_active ct_border_zero" :"ct_account_dash_link" }>Current Orders</a></li>
                    <li><a  onClick={()=>handlePastOrder()} className={active == "past-order" ?"ct_account_dash_link menu-link_active ct_border_zero" :"ct_account_dash_link" }>Past Orders</a></li>*/}
                    <li><a onClick={()=>handleAccountEditAddress()} className={active == "account-edit-address" ?"ct_account_dash_link menu-link_active ct_border_zero" :"ct_account_dash_link" }>Addresses</a></li> 
                   
                </ul>
            </div>
        </>
    )
}

export default List7