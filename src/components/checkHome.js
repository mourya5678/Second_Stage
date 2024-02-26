// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import Index from './index'
// import Home from './home'
// import Header from './header'

// function CheckHome() {
//     const navigate = useNavigate()
//     const [isHome,setIsHome] = useState(false)
//     useEffect(() => {
//         const token = JSON.parse(localStorage.getItem("token"))
//         if (token == null) {
            
//         } else {
//           setIsHome(true)
//         }
//       }, [])
//   return (
//     <>
//     {
//       isHome == true ?
//       <Index/> :
//       <>
//       <Home/>

//       </>
//     }
//     </>
//   )
// }

// export default CheckHome