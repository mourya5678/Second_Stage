import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { message, message as MESSAGE } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Cookies from 'js-cookie';
export const configJSON = require("../components/config");
function Content(props) {
  const [isLoader, setIsLoader] = useState(false);
  const [allProduct, setAllProduct] = useState([]);
  const [accessToken, setAccessToken] = useState();
  const [show, setShow] = useState("buy")
  const navigate = useNavigate();
  const handleProduct1Simple = (productId) => {
    localStorage.setItem("productID", productId)
    navigate("/product1-simple");
  };
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    setAccessToken(token);
    setTimeout(() => {
      getAllProduct();
    }, 1000);
  }, []);

  const getAllProduct = () => {
    setIsLoader(true);
    const randomeUserId = Cookies.get('RandomUserId');
    const token = JSON.parse(localStorage.getItem("token"))
    const user_id = JSON.parse(localStorage.getItem("user_id"));
    const data = {
      user_id: token && user_id ? user_id : parseInt(randomeUserId),
      sort: "4"
    }
    axios({
      url: configJSON.baseUrl + configJSON.getAllProduct,
      method: "post",
      data: data
    })
      .then((res) => {
        setIsLoader(false);
        if (res?.data?.success == true) {
          setAllProduct(res?.data?.products);
        } else {
          setAllProduct([]);
        }
      })
      .catch((error) => {
        console.log(error);
        setIsLoader(false);
      });
  };


  const addToWishlist = (productId) => {
    setIsLoader(true)
    const randomeUserId = Cookies.get('RandomUserId');
    const userID = localStorage.getItem("user_id")
    const token = JSON.parse(localStorage.getItem("token"))
    const data = {
      product_id: productId,
      userId: token && userID ? userID : parseInt(randomeUserId),
    };

    axios({
      method: "post",
      url: configJSON.baseUrl + configJSON.add_wishlist,
      data: data
    }).then((res) => {
      setIsLoader(false)
      if (res.data.success == true) {
        MESSAGE.success(res?.data?.message)
        getAllProduct()
      } else {
        MESSAGE.error(res?.data?.message)
      }
    }).catch((err) => {
      setIsLoader(false)
      console.log(err)
    })
  };
  return (
    <div>
      <div className="tab-content pt-2" id="collections-tab-content">
        {isLoader == true ? (
          <div className="custom-loader"></div>
        ) : allProduct?.length != 0 ? (

          <>
            <ul className="nav nav-tabs mb-3 text-uppercase justify-content-center gap-3 mb-5" id="collections-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <a className="nav-link nav-link_underscore ct_sell_btn ct_btn_large  text-white" id="collections-tab-2-trigger" data-bs-toggle="tab" href="#collections-tab-2" role="tab" aria-controls="collections-tab-2" aria-selected="true" onClick={() => setShow("buy")}>Buy</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link nav-link_underscore ct_sell_btn text-white ct_btn_large" id="collections-tab-3-trigger" data-bs-toggle="tab" href="#collections-tab-3" role="tab" aria-controls="collections-tab-3" aria-selected="true" onClick={() => setShow("rent")}>Rent</a>
              </li>

            </ul>

            <h2 className="section-title  text-center mb-1 mb-md-3 pb-xl-2 mb-xl-4">Featured <strong>Products</strong></h2>

            <div
              className="tab-pane fade show active"
              id="collections-tab-1"
              role="tabpanel"
              aria-labelledby="collections-tab-1-trigger"
            >
              <div
                className="products-grid row row-cols-2 row-cols-md-4"
                id="products-grid"
              >
                {
                  allProduct?.map((item) => (
                    item?.product_buy_rent == show &&
                    <div className="product-card-wrapper">
                      <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                        <div className="pc__img-wrapper">
                          <div
                            className="swiper-container background-img js-swiper-slider"
                            data-settings='{"resizeObserver": true}'
                          >
                            <Swiper
                              spaceBetween={30}
                              centeredSlides={true}
                              autoplay={{
                                delay: 30000,
                                disableOnInteraction: false,
                              }}
                              pagination={{
                                clickable: true,
                              }}
                              navigation={true}
                              modules={[Autoplay, Pagination, Navigation]}
                              className="mySwiper"
                            >
                              {item?.product_images?.map((obj, i) => (
                                <SwiperSlide>
                                  <a onClick={() => handleProduct1Simple(item?.id)}>
                                    <img src={obj} />
                                  </a>
                                </SwiperSlide>
                              ))}
                            </Swiper>
                          </div>
                          {/* <div className="ct_buy_rent_tag">
                            <h4 className="mb-0">{item.product_buy_rent.charAt(0).toUpperCase() + item.product_buy_rent.slice(1)}</h4>
                          </div> */}
                          {/* <button
                          onClick={() => addToCart(item?.id)}
                          className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                          data-aside="cartDrawer"
                          title="Add To Cart"
                        >
                          Add To Cart
                        </button> */}
                        </div>
                        <div className="pc__info position-relative">
                          <p className="pc__category">{item?.product_brand ? item?.product_brand : "Featured Products"}</p>
                          <h6 className="pc__title">
                            <a onClick={() => handleProduct1Simple(item?.id)}>
                              {/* {item?.product_description}
                               */}
                              Size Top :
                              {
                                item?.product_size?.map((obj) => (
                                  <span>{obj?.size_top}</span>
                                ))
                              }
                            </a>
                            <br />
                            <a onClick={() => handleProduct1Simple(item?.id)}>
                              {/* {item?.product_description}
                               */}
                              Size Top :
                              {
                                item?.product_size?.map((obj) => (
                                  <span>{obj?.size_bottom}</span>
                                ))
                              }
                            </a>
                          </h6>
                          <div className="product-card__price d-flex">
                            <span className="money price">
                              ${item?.price_sale_lend_price}
                            </span>
                          </div>

                          {
                            item?.wishlist_like == 0 ? (
                              <button
                                onClick={() => addToWishlist(item?.id)}
                                className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                                title="Add To Wishlist"
                              >
                                <i
                                  className="fa-regular fa-heart"

                                ></i>{" "}
                              </button>
                            ) : (
                              <button
                                onClick={() => addToWishlist(item?.id)}
                                className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                                title="Add To Wishlist"
                              >
                                <i
                                  className="fa-solid fa-heart"
                                  style={{ color: "red" }}

                                ></i>
                              </button>
                            )}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </>
        ) : (
          <h3 className="text-center mt-4">There is no product !!!</h3>
        )}
      </div>
    </div>
  );
}

export default Content;
