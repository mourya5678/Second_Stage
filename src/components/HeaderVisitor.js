import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function HeaderVisitor(props) {
  const navigate = useNavigate();
  const [ishome, setIsHome] = useState(false);
  const [accessToken, setAccessToken] = useState();
  const [isdropdown, setDropdown] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  const homeDropdown = () => {
    // navigate("/")
    setIsHome(!ishome);
  };
  const handleHome = () => {
    navigate("/");
  };
  const handleLoginRegister = () => {
    navigate("/login");
  };
  const handleSell = () => {
    navigate("/sell");
  };
  return (
    <>
      <header id="header" className="header header_sticky ">
        <div className="container-fluid ct_px_60">
          <div className="header-desk header-desk_type_1">
            <div className="logo">
              <a>
                <img
                  src="/images/logo.png"
                  alt="Second Stage"
                  className="logo__image d-block"
                />
              </a>
            </div>
            <nav className="navigation">
              <ul className="navigation__list list-unstyled d-flex">
                <div className="ct_close_btn" onClick={() => setIsMenu(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="12"
                    viewBox="0 0 384 512"
                  >
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                  </svg>
                </div>
                <li className="navigation__item position-relative">
                  <a
                    className={
                      props.data == "home"
                        ? "navigation__link ct_active"
                        : "navigation__link"
                    }
                    onClick={() => handleHome()}
                  >
                    Home{" "}
                    <span onClick={() => homeDropdown()}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                      </svg>
                    </span>
                  </a>
                  {ishome == true && (
                    <div
                      className={
                        ishome == false ? "box-menu" : "box-menu ct_active"
                      }
                      style={{ width: "400px" }}
                    >
                      <ul className="sub-menu__list list-unstyled">
                        <li className="sub-menu__item">
                          <a className="menu-link menu-link_us-s">Search</a>
                        </li>
                        <li
                          className="sub-menu__item"
                          onClick={() => handleLoginRegister()}
                        >
                          <a className="menu-link menu-link_us-s">
                            Registration
                          </a>
                        </li>
                        <li className="sub-menu__item">
                          <a className="menu-link menu-link_us-s">FAQs </a>
                        </li>
                        <li className="sub-menu__item">
                          <a className="menu-link menu-link_us-s">Contact</a>
                        </li>
                        <li className="sub-menu__item">
                          <a className="sub-menu__item">Cart</a>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>

                <li className="navigation__item">
                  <a className="navigation__link">Bikinis</a>
                </li>
                <li className="navigation__item">
                  <a className="navigation__link">Figure</a>
                </li>
                <li className="navigation__item">
                  <a className="navigation__link">Swimsuit</a>
                </li>
                <li className="navigation__item">
                  <a className="navigation__link">FMG/WBFF</a>
                </li>
                <li className="navigation__item">
                  <a className="navigation__link">Themewear</a>
                </li>
                <li className="navigation__item">
                  <a className="navigation__link">Accessories</a>
                </li>
                <div
                  className="header-tools__item hover-container ct_mobile_login"
                  onClick={() => handleLoginRegister()}
                >
                  <a className="ct_mobile_fs14 text-white">Login / Register</a>
                </div>
              </ul>
            </nav>

            <div className="header-tools d-flex align-items-center">
              <div className="header-tools__item hover-container">
                <div className="js-hover__open position-relative">
                  <a className="js-search-popup search-field__actor">
                    <svg
                      className="d-block"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use href="#icon_search" />
                    </svg>
                    <i className="btn-icon btn-close-lg"></i>
                  </a>
                </div>

                <div className="search-popup js-hidden-content">
                  <form
                    action="#"
                    method="GET"
                    className="search-field container"
                  >
                    <p className="text-uppercase text-secondary fw-medium mb-4">
                      What are you looking for?
                    </p>
                    <div className="position-relative">
                      <input
                        className="search-field__input search-popup__input w-100 fw-medium"
                        type="text"
                        name="search-keyword"
                        placeholder="Search products"
                      />
                      <button
                        className="btn-icon search-popup__submit"
                        type="submit"
                      >
                        <svg
                          className="d-block"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use href="#icon_search" />
                        </svg>
                      </button>
                      <button
                        className="btn-icon btn-close-lg search-popup__reset"
                        type="reset"
                      ></button>
                    </div>

                    <div className="search-popup__results">
                      <div className="sub-menu search-suggestion">
                        <h6 className="sub-menu__title fs-base">Quicklinks</h6>
                        <div className="">
                          <ul className="sub-menu__list list-unstyled">
                            <li className="sub-menu__item">
                              <a className="menu-link menu-link_us-s">Bikini</a>
                            </li>
                            <li className="sub-menu__item">
                              <a className="menu-link menu-link_us-s">Figure</a>
                            </li>
                            <li className="sub-menu__item">
                              <a className="menu-link menu-link_us-s">
                                Swimsuit
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <a className="menu-link menu-link_us-s">
                                FMG/WBFF
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <a className="menu-link menu-link_us-s">
                                Themewear
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <a className="menu-link menu-link_us-s">
                                Accessories
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="search-result row row-cols-5"></div>
                    </div>
                  </form>
                </div>
              </div>

              <a className="header-tools__item">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_heart"></use>
                </svg>
              </a>
              <a
                className="header-tools__item header-tools__cart js-open-aside"
                data-aside="cartDrawer"
              >
                <svg
                  className="d-block"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_cart"></use>
                </svg>
              </a>

              {accessToken && (
                <div className="ct_mobile_fs14 text-white  ct_buyer_profile mx-2">
                  <div className="ct_main_dropdown">
                    <div className="ct_click_dropdown   ">
                      <img src="/images/buyer_profile.png" />
                      <p className="mb-0">Mia Toretto</p>
                    </div>
                    {isdropdown && (
                      <ul className="ct_dropdown-menu">
                        <li>
                          <a className="dropdown-item">Profile</a>
                        </li>
                        <li onClick={handleLogout}>
                          <a className="dropdown-item">Log Out</a>
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              )}
              <div className="header-tools__item hover-container ct_desktop_login align-items-center">
                {!accessToken && (
                  <a
                    onClick={() => handleLoginRegister()}
                    className="ct_mobile_fs14 text-white"
                  >
                    Login / Register
                  </a>
                )}
                <a
                  onClick={() => handleSell()}
                  className="ct_mobile_fs14 text-white ct_sell_btn ms-3"
                >
                  Sell/Lend
                </a>
              </div>
              <div className="ct_menu_bar ms-3" onClick={() => setIsMenu(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fff"
                  height="16"
                  width="14"
                  viewBox="0 0 448 512"
                >
                  <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderVisitor;
