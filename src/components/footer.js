import React from 'react'
import { useNavigate } from 'react-router-dom'

function Footer() {
  const navigate = useNavigate()
  const handleHome = ()=>{
    navigate("/")
  }
  const handleAccountDashboard = ()=>{
    navigate('/account-dashboard')
}
const handleAbout = ()=>{
  navigate("/about")
}
const handleFaq=()=>{
  navigate("/faq")
}
const handleTerms=()=>{
  navigate("/terms")
}
const handleContact=()=>{
  navigate("/contact")
}
const handleBikinis=()=>{
  navigate("/bikinis")
}
const handleFigure=()=>{
  navigate("/figure")
}
const handleSwimsuit=()=>{
  navigate("/swimsuit")
}
const handleThemewear=()=>{
  navigate("/themewear")
}
const handleAccessories=()=>{
  navigate("/accessories")
}
const handlePrivacy=()=>{
  navigate("/privacy")
}
const HandleWbff=()=>{
  navigate("/wbff")
}

  return (
    <>
    <footer className="footer footer_type_1">
    
    <div className="footer-middle container">
      <div className="block-newsletter pb-5 mb-5">
  
     
      </div>
      <div className="row row-cols-lg-5 row-cols-2">
        <div className="footer-column footer-store-info mb-4 mb-lg-0">
          <div className="logo">
            <a onClick={()=>handleHome()}>
              <img src="images/logo.png" alt="Second Stage" className="logo__image d-block" />
            </a>
          </div>
          <p className="m-0">
            <strong className="fw-medium"><a href="mailto:Support@secondstagebikini.com">Support@secondstagebikini.com</a></strong>
          </p>
          <p className="m-0">
            <strong className="fw-medium"><a href="mailto:Cley@secondstagebikini.com">Cley@secondstagebikini.com</a></strong>
          </p>
          <ul className="social-links list-unstyled d-flex flex-wrap mb-0">
            <li>
              <a  className="footer__social-link d-block">
                <svg className="svg-icon svg-icon_facebook" width="9" height="15" viewBox="0 0 9 15" xmlns="http://www.w3.org/2000/svg"><use href="#icon_facebook" /></svg>
              </a>
            </li>
            <li>
              <a  className="footer__social-link d-block">
                <svg className="svg-icon svg-icon_twitter" width="14" height="13" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg"><use href="#icon_twitter" /></svg>
              </a>
            </li>
            <li>
              <a  className="footer__social-link d-block">
                <svg className="svg-icon svg-icon_instagram" width="14" height="13" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg"><use href="#icon_instagram" /></svg>
              </a>
            </li>
            <li>
              <a  className="footer__social-link d-block">
                <svg className="svg-icon svg-icon_youtube" width="16" height="11" viewBox="0 0 16 11" xmlns="http://www.w3.org/2000/svg"><path d="M15.0117 1.8584C14.8477 1.20215 14.3281 0.682617 13.6992 0.518555C12.5234 0.19043 7.875 0.19043 7.875 0.19043C7.875 0.19043 3.19922 0.19043 2.02344 0.518555C1.39453 0.682617 0.875 1.20215 0.710938 1.8584C0.382812 3.00684 0.382812 5.46777 0.382812 5.46777C0.382812 5.46777 0.382812 7.90137 0.710938 9.07715C0.875 9.7334 1.39453 10.2256 2.02344 10.3896C3.19922 10.6904 7.875 10.6904 7.875 10.6904C7.875 10.6904 12.5234 10.6904 13.6992 10.3896C14.3281 10.2256 14.8477 9.7334 15.0117 9.07715C15.3398 7.90137 15.3398 5.46777 15.3398 5.46777C15.3398 5.46777 15.3398 3.00684 15.0117 1.8584ZM6.34375 7.68262V3.25293L10.2266 5.46777L6.34375 7.68262Z"/></svg>
              </a>
            </li>
            <li>
              <a  className="footer__social-link d-block">
                <svg className="svg-icon svg-icon_pinterest" width="14" height="15" viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg"><use href="#icon_pinterest" /></svg>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-column footer-menu mb-4 mb-lg-0">
          <h5 className="sub-menu__title text-uppercase">Company</h5>
          <ul className="sub-menu__list list-unstyled">
            <li className="sub-menu__item"><a onClick={()=>handleAbout()} className="menu-link menu-link_us-s">About Us</a></li>
            <li className="sub-menu__item"><a onClick={()=>handleFaq()} className="menu-link menu-link_us-s">FAQ</a></li>
            <li className="sub-menu__item"><a onClick={()=>handleTerms()} className="menu-link menu-link_us-s">Terms and Conditions</a></li>
            <li className="sub-menu__item"><a onClick={()=>handleContact()} className="menu-link menu-link_us-s">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-column footer-menu mb-4 mb-lg-0">
          <h5 className="sub-menu__title text-uppercase">Shop</h5>
          <ul className="sub-menu__list list-unstyled">
            <li className="sub-menu__item"><a onClick={()=>handleBikinis()} className="menu-link menu-link_us-s">Bikini</a></li>
            <li className="sub-menu__item"><a onClick={()=>handleFigure()} className="menu-link menu-link_us-s">Figure</a></li>
            <li className="sub-menu__item"><a onClick={()=>handleSwimsuit()} className="menu-link menu-link_us-s">Swimsuit</a></li>
            <li className="sub-menu__item"><a onClick={()=>HandleWbff()} className="menu-link menu-link_us-s">FMG/WBFF</a></li>
            <li className="sub-menu__item"><a onClick={()=>handleThemewear()} className="menu-link menu-link_us-s">Themewear</a></li>
            <li className="sub-menu__item"><a onClick={()=>handleAccessories()} className="menu-link menu-link_us-s">Accessories</a></li>
          </ul>
        </div>
        <div className="footer-column footer-menu mb-4 mb-lg-0">
          <h5 className="sub-menu__title text-uppercase">Help</h5>
          <ul className="sub-menu__list list-unstyled">
            <li className="sub-menu__item"><a onClick={()=>handleAccountDashboard()} className="menu-link menu-link_us-s">My Account</a></li>
            <li className="sub-menu__item"><a  className="menu-link menu-link_us-s">Log an Issue </a></li>
            <li className="sub-menu__item"><a onClick={()=>handleContact()} className="menu-link menu-link_us-s">Contact</a></li>
            <li className="sub-menu__item"><a onClick={()=>handlePrivacy()} className="menu-link menu-link_us-s">Legal/Privacy</a></li>
          </ul>
        </div>
        <div className="footer-column footer-newsletter mb-4 mb-lg-0">
          <h5 className="sub-menu__title text-uppercase">News and Highlights</h5>
          <p>Be the first to get the latest news about trends, promotions, and much more!</p>
          <form action="#" className="footer-newsletter__form position-relative bg-body">
            <input className="form-control border-white" type="email" name="email" placeholder="Your email address" />
            <input className="btn-link fw-medium bg-white position-absolute top-0 end-0 h-100" type="submit" value="JOIN" />
          </form>

          <div className="mt-4 pt-3">
            <strong className="fw-medium">Secure payments</strong>
            <p className="mt-2">
              <img loading="lazy" src="images/payment-options.png" alt="Acceptable payment gateways" className="mw-100"/>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="footer-bottom container">
      <div className="d-block d-md-flex align-items-center">
        <span className="footer-copyright mx-auto">©2024 Second Stage</span>
       
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer