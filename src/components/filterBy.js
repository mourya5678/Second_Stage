import { Slider } from "antd";
import Cookies from 'js-cookie';
import React, { useEffect, useState } from "react";
import axios from "axios";
export const configJSON = require("../components/config");
function FilterBy(props) {
  const [filterContent, setFilterContent] = useState([])
  const [isLoader, setIsLoader] = useState(false);
  const [buyPrice, setBuyPrice] = useState([]);
  const [rentPrice, setRentPrice] = useState([]);
  const [styleTop, setStyleTop] = useState([])
  const [styleBottom, setStyleBottom] = useState([])
  const [category, setCategory] = useState([])
  const [brand, setBrand] = useState([])
  const [color, setColor] = useState([])
  const [sizeStandard, setSizeStandard] = useState([])
  const [sizeTop, setSizeTop] = useState([])
  const [sizeBottom, setSizeBottom] = useState([])
  const [bilingLevel, setBilingLevel] = useState([])
  const [bilingType, setBilingType] = useState([])
  const [bilingCondition, setBilingCondition] = useState([])
  const [padding, setPadding] = useState([])
  const [location, setLocation] = useState([])

  useEffect(() => {
    getFilterContent()
  }, [])
  const handleBuyPrice = (e) => {
    setBuyPrice(e);
  };
  const handleRentPrice = (e) => {
    setRentPrice(e);
  };
  const getFilterContent = () => {
    setIsLoader(true);
    axios({
      url: configJSON.baseUrl + configJSON.fetch_categories,
      method: "post",
    })
      .then((res) => {
        setIsLoader(false);
        if (res?.data?.success == true) {
          setFilterContent(res?.data?.data);
        } else {
          setFilterContent([]);
        }
      })
      .catch((error) => {
        console.log(error);
        setIsLoader(false);
      });
  };

  const handleStyleTop = (val) => {
    if (styleTop.includes(val)) {
      setStyleTop(styleTop => styleTop.filter(item => item != val));
    } else {
      setStyleTop([...styleTop, val]);
    }
  }
  const handleStyleBottom = (val) => {
    if (styleBottom.includes(val)) {
      setStyleBottom(styleBottom => styleBottom.filter(item => item != val));
    } else {
      setStyleBottom([...styleBottom, val]);
    }
  }
  const handleCategory = (val) => {
    if (category.includes(val)) {
      setCategory(category => category.filter(item => item != val));
    } else {
      setCategory([...category, val])
    }
  }
  const handleBrand = (val) => {
    if (brand.includes(val)) {
      setBrand(brand => brand.filter(item => item != val));
    } else {
      setBrand([...brand, val])
    }
  }
  const handleColor = (val) => {
    if (color.includes(val)) {
      setColor(color => color.filter(item => item != val));
    } else {
      setColor([...color, val])
    }
  }
  const handleSizeStandard = (val) => {
    if (sizeStandard.includes(val)) {
      setSizeStandard(sizeStandard => sizeStandard.filter(item => item != val));
    } else {
      setSizeStandard([...sizeStandard, val])
    }
  }
  const handleSizeTop = (val) => {
    if (sizeTop.includes(val)) {
      setSizeTop(sizeTop => sizeTop.filter(item => item != val));
    } else {
      setSizeTop([...sizeTop, val])
    }
  }
  const handleSizeBottom = (val) => {
    if (sizeBottom.includes(val)) {
      setSizeBottom(sizeBottom => sizeBottom.filter(item => item != val));
    } else {
      setSizeBottom([...sizeBottom, val])
    }
  }
  const handleBilingLevel = (val) => {
    if (bilingLevel.includes(val)) {
      setBilingLevel(bilingLevel => bilingLevel.filter(item => item != val));
    } else {
      setBilingLevel([...bilingLevel, val])
    }
  }
  const handleBilingType = (val) => {
    if (bilingType.includes(val)) {
      setBilingType(bilingType => bilingType.filter(item => item != val));
    } else {
      setBilingType([...bilingType, val])
    }
  }
  const handleBilingCondition = (val) => {
    if (bilingCondition.includes(val)) {
      setBilingCondition(bilingCondition => bilingCondition.filter(item => item != val));
    } else {
      setBilingCondition([...bilingCondition, val])
    }
  }
  const handlePadding = (val) => {
    if (padding.includes(val)) {
      setPadding(padding => padding.filter(item => item != val));
    } else {
      setPadding([...padding, val])
    }
  }
  const handleLocation = (val) => {
    if (location.includes(val)) {
      setLocation(location => location.filter(item => item != val));
    } else {
      setLocation([...location, val])
    }
  }
  const filter = () => {
    const userID = localStorage.getItem("user_id")
const randomeUserId = Cookies.get('RandomUserId');
const token = JSON.parse(localStorage.getItem("token"))
    const data = {
      userId: token && userID ? userID : parseInt(randomeUserId),
      style_top: styleTop,
      style_bottom: styleBottom,
      product_category: category,
      product_brand: brand,
      product_color: color,
      size_standard: sizeStandard,
      size_top: sizeTop,
      size_bottom: sizeBottom,
      billing_level: bilingLevel,
      billing_type: bilingType,
      billing_condition: bilingCondition,
      price_sale_lend_price_min: buyPrice?.length !=0 ? [buyPrice[0]] : [],
      price_sale_lend_price_max: buyPrice?.length !=0 ? [buyPrice[1]] : [],
      price_sale_lend_price_min_rent: rentPrice?.length !=0 ? [rentPrice[0]] : [],
      price_sale_lend_price_max_rent: rentPrice?.length !=0 ? [rentPrice[1]] : [],
      product_padding: padding,
      location: location,
  }
    props.handlefilter(data)
  }
  return (
    <>
      {
        isLoader == true ? <div className="custom-loader"></div> :
          filterContent?.length != 0 ?
            <>
              <div className="pt-4 pt-lg-0"></div>
              <div className="search-field__input-wrapper mb-3">
                <input
                  type="text"
                  className="search-field__input form-control form-control-sm border-light border-2"
                  placeholder="Search"
                />
              </div>
              <div className="accordion" id="brand-filters">
                <div className="accordion-item mb-4 ">
                  <h5 className="accordion-header" id="accordion-heading-brand">
                    <button
                      className="accordion-button p-0 border-0 fs-5 text-uppercase collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-filter-brand"
                      aria-expanded="true"
                      aria-controls="accordion-filter-brand"
                    >
                      Brands
                      <svg
                        className="accordion-button__icon type2"
                        viewBox="0 0 10 6"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g aria-hidden="true" stroke="none" fill-rule="evenodd">
                          <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z" />
                        </g>
                      </svg>
                    </button>
                  </h5>
                  <div
                    id="accordion-filter-brand"
                    className="accordion-collapse collapse border-0"
                    aria-labelledby="accordion-heading-brand"
                    data-bs-parent="#brand-filters"
                  >
                    <div className="search-field multi-select accordion-body ps-3 pe-0 pb-0">
                      <select className="d-none" multiple name="total-numbers-list">
                        <option value="1">Adidas</option>
                        <option value="2">Balmain</option>
                        <option value="3">Balenciaga</option>
                        <option value="4">Burberry</option>
                        <option value="5">Kenzo</option>
                        <option value="5">Givenchy</option>
                        <option value="5">Zara</option>
                      </select>
                      <div className="search-field__input-wrapper mb-3">
                        <input
                          type="text"
                          className="search-field__input form-control form-control-sm border-light border-2"
                          placeholder="Search"
                        />
                      </div>
                      <ul className="search-suggestion list-unstyled">
                        {
                          filterContent?.product_brand?.map((item) => (
                            <li className="search-suggestion__item js-search-select d-flex align-items-center py-0">
                              <label className="cyberpunk-checkbox-label">
                                <input type="checkbox" className="cyberpunk-checkbox" onChange={() => handleBrand(item)} />
                              </label>
                              <span className="me-auto">{item}</span>
                              <span className="text-secondary">2</span>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion" id="category_list_drop">
                <div className="accordion-item mb-4 ">
                  <h5 className="accordion-header" id="accordion-heading-category1">
                    <button
                      className="accordion-button p-0 border-0 fs-5 text-uppercase collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-filter-category_12"
                      aria-expanded="true"
                      aria-controls="accordion-filter-category_12"
                    >
                      Category
                      <svg
                        className="accordion-button__icon type2"
                        viewBox="0 0 10 6"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g aria-hidden="true" stroke="none" fill-rule="evenodd">
                          <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z" />
                        </g>
                      </svg>
                    </button>
                  </h5>
                  <div
                    id="accordion-filter-category_12"
                    className="accordion-collapse collapse  border-0"
                    aria-labelledby="accordion-heading-category1"
                    data-bs-parent="#category_list_drop"
                  >
                    <div className="accordion-body px-0 pb-0 pt-3">
                      <ul className="list list-inline mb-0 ps-3">
                        {
                          filterContent?.product_categories?.map((item) => (
                            <li className="list-item d-flex align-items-center">
                              <label className="cyberpunk-checkbox-label">
                                <input type="checkbox" className="cyberpunk-checkbox" onChange={() => handleCategory(item)} />
                              </label>
                              {item}
                              {/* <a  className="menu-link py-1"><h5>Bikini/Fitness</h5></a> */}
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion" id="price-filters">
                <div className="accordion-item mb-4 ">
                  <h5 className="accordion-header mb-2" id="accordion-heading-price">
                    <button
                      className="accordion-button p-0 border-0 fs-5 text-uppercase collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-filter-price"
                      aria-expanded="true"
                      aria-controls="accordion-filter-price"
                    >
                      Price
                      <svg
                        className="accordion-button__icon type2"
                        viewBox="0 0 10 6"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g aria-hidden="true" stroke="none" fill-rule="evenodd">
                          <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z" />
                        </g>
                      </svg>
                    </button>
                  </h5>
                  <div
                    id="accordion-filter-price"
                    className="accordion-collapse collapse border-0 mt-3"
                    aria-labelledby="accordion-heading-price"
                    data-bs-parent="#price-filters"
                  >
                    <div className="accordion" id="price-filters_buy">
                      <div className="accordion-item mb-4 ">
                        <h5
                          className="accordion-header mb-2"
                          id="accordion-heading-price_buy"
                        >
                          <button
                            className="accordion-button p-0 border-0 ct_fs_14 fs-5 text-uppercase collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#accordion-filter-price_buy"
                            aria-expanded="true"
                            aria-controls="accordion-filter-price_buy"
                          >
                            Buy
                            <svg
                              className="accordion-button__icon type2"
                              viewBox="0 0 10 6"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g aria-hidden="true" stroke="none" fill-rule="evenodd">
                                <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z" />
                              </g>
                            </svg>
                          </button>
                        </h5>
                        <div
                          id="accordion-filter-price_buy"
                          className="accordion-collapse collapse border-0"
                          aria-labelledby="accordion-heading-price_buy"
                          data-bs-parent="#price-filters_buy"
                        >
                          {/* <input className="price-range-slider" type="text" value="" data-slider-min="10" data-slider-max="1000" data-slider-step="5" data-slider-value="[250,450]" data-currency="$" /> */}
                          <Slider
                            range
                            defaultValue={[0, 500]}
                            min={0}
                            max={1000}
                            onChange={(e) => handleBuyPrice(e)}
                          />

                          <div className="price-range__info d-flex align-items-center mt-2">
                            <div className="me-auto">
                              <span className="text-secondary">Min Price: </span>
                              <span className="price-range__min">${buyPrice?.length !=0 ? buyPrice[0] : 0}</span>
                            </div>
                            <div>
                              <span className="text-secondary">Max Price: </span>
                              <span className="price-range__max">${buyPrice?.length !=0 ? buyPrice[1] : 0}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion" id="price-filters2">
                      <div className="accordion-item mb-4 ">
                        <h5 className="accordion-header mb-2" id="accordion-heading-price2">
                          <button
                            className="accordion-button p-0 ct_fs_14 border-0 fs-5 text-uppercase collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#accordion-filter-price2"
                            aria-expanded="true"
                            aria-controls="accordion-filter-price2"
                          >
                            Rent
                            <svg
                              className="accordion-button__icon type2"
                              viewBox="0 0 10 6"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g aria-hidden="true" stroke="none" fill-rule="evenodd">
                                <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z" />
                              </g>
                            </svg>
                          </button>
                        </h5>
                        <div
                          id="accordion-filter-price2"
                          className="accordion-collapse collapse border-0"
                          aria-labelledby="accordion-heading-price2"
                          data-bs-parent="#price-filters2"
                        >
                          <Slider
                            range
                            defaultValue={[0, 500]}
                            min={0}
                            max={1000}
                            onChange={(e) => handleRentPrice(e)}
                          />
                          <div className="price-range__info d-flex align-items-center mt-2">
                            <div className="me-auto">
                              <span className="text-secondary">Min Price: </span>
                              <span className="price-range__min">${rentPrice?.length !=0 ? rentPrice[0] : 0}</span>
                            </div>
                            <div>
                              <span className="text-secondary">Max Price: </span>
                              <span className="price-range__max">${rentPrice?.length !=0 ? rentPrice[1] : 0}</span>
                            </div>
                          </div>
                          <small>(Per week/month or season)</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion" id="main_size">
                <div className="accordion-item mb-4 ">
                  <h5 className="accordion-header" id="accordion-color-main_size_1">
                    <button
                      className="accordion-button p-0 border-0 fs-5 text-uppercase collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-color_main_size_2"
                      aria-expanded="true"
                      aria-controls="accordion-color_main_size_2"
                    >
                      Size
                      <svg
                        className="accordion-button__icon type2"
                        viewBox="0 0 10 6"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g aria-hidden="true" stroke="none" fill-rule="evenodd">
                          <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z" />
                        </g>
                      </svg>
                    </button>
                  </h5>
                  <div
                    id="accordion-color_main_size_2"
                    className="accordion-collapse collapse border-0 mt-3"
                    aria-labelledby="accordion-color-main_size_1"
                    data-bs-parent="#main_size"
                  >
                    <div className="accordion" id="size-filters">
                      <div className="accordion-item mb-4 ">
                        <h5 className="accordion-header" id="accordion-heading-size">
                          <button
                            className="accordion-button ct_fs_14 p-0 border-0 fs-5 text-uppercase collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#accordion-filter-size"
                            aria-expanded="true"
                            aria-controls="accordion-filter-size"
                          >
                            Standard
                            <svg
                              className="accordion-button__icon type2"
                              viewBox="0 0 10 6"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g aria-hidden="true" stroke="none" fill-rule="evenodd">
                                <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z" />
                              </g>
                            </svg>
                          </button>
                        </h5>
                        <div
                          id="accordion-filter-size"
                          className="accordion-collapse collapse border-0"
                          aria-labelledby="accordion-heading-size"
                          data-bs-parent="#size-filters"
                        >
                          <div className="accordion-body px-0 pb-0">
                            <ul className="d-flex flex-wrap ct_list_style_none ps-2">
                              {
                                filterContent?.sizeStandard?.map((item) => (
                                  <li className="list-item d-flex align-items-center">
                                    <label className="cyberpunk-checkbox-label">
                                      <input type="checkbox" className="cyberpunk-checkbox" onChange={() => handleSizeStandard(item)} />
                                    </label>
                                    {item}
                                    {/* <a  className="menu-link py-1"><h5>Bikini/Fitness</h5></a> */}
                                  </li>
                                  // <a
                                  //   onClick={() => handleSizeStandard(item)}
                                  //   className="swatch-size btn btn-sm btn-outline-light mb-3 me-3 js-filter"
                                  // >
                                  //   {item}
                                  // </a>
                                ))
                              }

                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion" id="categories-list6">
                      <div className="accordion-item mb-4 ">
                        <h5 className="accordion-header" id="accordion-heading-6">
                          <button
                            className="accordion-button p-0 border-0 ct_fs_14 fs-5 text-uppercase collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#accordion-filter-6"
                            aria-expanded="true"
                            aria-controls="accordion-filter-6"
                          >
                            Size Top
                            <svg
                              className="accordion-button__icon type2"
                              viewBox="0 0 10 6"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g aria-hidden="true" stroke="none" fill-rule="evenodd">
                                <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z" />
                              </g>
                            </svg>
                          </button>
                        </h5>
                        <div
                          id="accordion-filter-6"
                          className="accordion-collapse collapse border-0"
                          aria-labelledby="accordion-heading-6"
                          data-bs-parent="#categories-list6"
                        >
                          <div className="accordion-body px-0 pb-0 pt-3">
                            <ul className="list list-inline mb-0 ct_list_style_none ps-2">
                              {
                                filterContent?.sizeTop?.map((item) => (
                                  <li className="list-item d-flex align-items-center">
                                    <label className="cyberpunk-checkbox-label">
                                      <input type="checkbox" className="cyberpunk-checkbox" onChange={() => handleSizeTop(item)} />
                                    </label>
                                    {item}
                                    {/* <a  className="menu-link py-1"><h5>Bikini/Fitness</h5></a> */}
                                  </li>

                                ))
                              }


                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion" id="categories-list7">
                      <div className="accordion-item mb-4 ">
                        <h5 className="accordion-header" id="accordion-heading-7">
                          <button
                            className="accordion-button ct_fs_14 p-0 border-0 fs-5 text-uppercase collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#accordion-filter-7"
                            aria-expanded="true"
                            aria-controls="accordion-filter-7"
                          >
                            Size Bottom
                            <svg
                              className="accordion-button__icon type2"
                              viewBox="0 0 10 6"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g aria-hidden="true" stroke="none" fill-rule="evenodd">
                                <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z" />
                              </g>
                            </svg>
                          </button>
                        </h5>
                        <div
                          id="accordion-filter-7"
                          className="accordion-collapse collapse  border-0"
                          aria-labelledby="accordion-heading-7"
                          data-bs-parent="#categories-list7"
                        >
                          <div className="accordion-body px-0 pb-0 pt-3">
                            <ul className="list list-inline mb-0 ct_list_style_none ps-2">
                              {
                                filterContent?.sizeBottom?.map((item) => (
                                  <li className="list-item d-flex align-items-center">
                                    <label className="cyberpunk-checkbox-label">
                                      <input type="checkbox" className="cyberpunk-checkbox" onChange={() => handleSizeBottom(item)} />
                                    </label>
                                    {item}
                                    {/* <a  className="menu-link py-1"><h5>Bikini/Fitness</h5></a> */}
                                  </li>

                                ))
                              }
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             
              <div className="accordion" id="color-filters">
                <div className="accordion-item mb-4 ">
                  <h5 className="accordion-header" id="accordion-color-1">
                    <button
                      className="accordion-button p-0 border-0 fs-5 text-uppercase collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-color-2"
                      aria-expanded="true"
                      aria-controls="accordion-color-2"
                    >
                      Color
                      <svg
                        className="accordion-button__icon type2"
                        viewBox="0 0 10 6"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g aria-hidden="true" stroke="none" fill-rule="evenodd">
                          <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z" />
                        </g>
                      </svg>
                    </button>
                  </h5>
                  <div
                    id="accordion-color-2"
                    className="accordion-collapse collapse border-0"
                    aria-labelledby="accordion-color-1"
                    data-bs-parent="#color-filters"
                  >
                    <div className="accordion-body px-0 pb-0">
                      <div className="d-flex flex-wrap">
                        {
                          filterContent?.productColor?.map((item) => (

                            <a
                              onClick={() => handleColor(item)}
                              className={color.includes(item) == true ? "swatch-color js-filter ct_select_clr_active" : "swatch-color js-filter"}
                              style={{ color: `${item}` }}
                            >
                            </a>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion" id="Bling">
                <div className="accordion-item mb-4 ">
                  <h5 className="accordion-header" id="accordion-color-bling">
                    <button
                      className="accordion-button p-0 border-0 fs-5 text-uppercase collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-color-biling"
                      aria-expanded="true"
                      aria-controls="accordion-color-biling"
                    >
                      Bling
                      <svg
                        className="accordion-button__icon type2"
                        viewBox="0 0 10 6"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g aria-hidden="true" stroke="none" fill-rule="evenodd">
                          <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z" />
                        </g>
                      </svg>
                    </button>
                  </h5>
                  <div
                    id="accordion-color-biling"
                    className="accordion-collapse collapse border-0 mt-3"
                    aria-labelledby="accordion-color-bling"
                    data-bs-parent="#Bling"
                  >
                    <div className="accordion" id="categories-list3">
                      <div className="accordion-item mb-4 ">
                        <h5 className="accordion-header" id="accordion-heading-3">
                          <button
                            className="accordion-button ct_fs_14 p-0 border-0 fs-5 text-uppercase collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#accordion-filter-3"
                            aria-expanded="true"
                            aria-controls="accordion-filter-3"
                          >
                            Level
                            <svg
                              className="accordion-button__icon type2"
                              viewBox="0 0 10 6"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g aria-hidden="true" stroke="none" fill-rule="evenodd">
                                <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z" />
                              </g>
                            </svg>
                          </button>
                        </h5>
                        <div
                          id="accordion-filter-3"
                          className="accordion-collapse collapse  border-0"
                          aria-labelledby="accordion-heading-3"
                          data-bs-parent="#categories-list"
                        >
                          <div className="accordion-body px-0 pb-0 pt-3">
                            <ul className="list list-inline mb-0 ct_list_style_none ps-2">
                              {
                                filterContent?.billingLevel?.map((item) => (
                                  <li className="list-item d-flex align-items-center">
                                    <label className="cyberpunk-checkbox-label">
                                      <input type="checkbox" className="cyberpunk-checkbox" onChange={() => handleBilingLevel(item)} />
                                    </label>
                                    {item}
                                    {/* <a  className="menu-link py-1"><h5>Bikini/Fitness</h5></a> */}
                                  </li>

                                ))
                              }
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion" id="categories-list4">
                      <div className="accordion-item mb-4 ">
                        <h5 className="accordion-header" id="accordion-heading-4">
                          <button
                            className="accordion-button p-0 border-0 ct_fs_14 fs-5 text-uppercase collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#accordion-filter-4"
                            aria-expanded="true"
                            aria-controls="accordion-filter-4"
                          >
                            Type
                            <svg
                              className="accordion-button__icon type2"
                              viewBox="0 0 10 6"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g aria-hidden="true" stroke="none" fill-rule="evenodd">
                                <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z" />
                              </g>
                            </svg>
                          </button>
                        </h5>
                        <div
                          id="accordion-filter-4"
                          className="accordion-collapse collapse  border-0"
                          aria-labelledby="accordion-heading-4"
                          data-bs-parent="#categories-list4"
                        >
                          <div className="accordion-body px-0 pb-0 pt-3">
                            <ul className="list list-inline mb-0 ct_list_style_none ps-2">
                              {
                                filterContent?.billingType?.map((item) => (
                                  <li className="list-item d-flex align-items-center">
                                    <label className="cyberpunk-checkbox-label">
                                      <input type="checkbox" className="cyberpunk-checkbox" onChange={() => handleBilingType(item)} />
                                    </label>
                                    {item}
                                    {/* <a  className="menu-link py-1"><h5>Bikini/Fitness</h5></a> */}
                                  </li>

                                ))
                              }


                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion" id="categories-list5">
                <div className="accordion-item mb-4 ">
                  <h5 className="accordion-header" id="accordion-heading-5">
                    <button
                      className="accordion-button p-0 border-0 fs-5 text-uppercase collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-filter-5"
                      aria-expanded="true"
                      aria-controls="accordion-filter-5"
                    >
                      Condition
                      <svg
                        className="accordion-button__icon type2"
                        viewBox="0 0 10 6"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g aria-hidden="true" stroke="none" fill-rule="evenodd">
                          <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z" />
                        </g>
                      </svg>
                    </button>
                  </h5>
                  <div
                    id="accordion-filter-5"
                    className="accordion-collapse collapse  border-0"
                    aria-labelledby="accordion-heading-5"
                    data-bs-parent="#categories-list5"
                  >
                    <div className="accordion-body pe-0 ps-3 pb-0 pt-3">
                      <ul className="list list-inline mb-0 ct_list_style_none ps-0">
                        {
                          filterContent?.billingCondition?.map((item) => (
                            <li className="list-item d-flex align-items-center">
                              <label className="cyberpunk-checkbox-label">
                                <input type="checkbox" className="cyberpunk-checkbox" onChange={() => handleBilingCondition(item)} />
                              </label>
                              {item}
                              {/* <a  className="menu-link py-1"><h5>Bikini/Fitness</h5></a> */}
                            </li>

                          ))
                        }
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="accordion" id="categories-list8">
                <div className="accordion-item mb-4 ">
                  <h5 className="accordion-header" id="accordion-heading-8">
                    <button
                      className="accordion-button p-0 border-0 fs-5 text-uppercase collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-filter-8"
                      aria-expanded="true"
                      aria-controls="accordion-filter-8"
                    >
                      Style
                      <svg
                        className="accordion-button__icon type2"
                        viewBox="0 0 10 6"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g aria-hidden="true" stroke="none" fill-rule="evenodd">
                          <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z" />
                        </g>
                      </svg>
                    </button>
                  </h5>
                  <div
                    id="accordion-filter-8"
                    className="accordion-collapse collapse  border-0"
                    aria-labelledby="accordion-heading-8"
                    data-bs-parent="#categories-list8"
                  >
                    <div className="accordion-body px-0 pb-0 pt-3">
                      <ul className="list list-inline mb-0 ps-3">
                        <li className="list-item">
                          {/* <a  className="menu-link py-1"><h5>Bikini/Fitness</h5></a> */}
                          <ul className="mb-3 ps-0">
                            <h6>Top</h6>
                            <ul className="ct_list_style_none">
                              {
                                filterContent?.styleTop?.map((item) => (
                                  <li >
                                    <label className="cyberpunk-checkbox-label">
                                      <input
                                        type="checkbox"
                                        className="cyberpunk-checkbox"
                                        onChange={() => handleStyleTop(item)}
                                      />
                                    </label>
                                    {item}
                                  </li>
                                ))
                              }


                            </ul>
                          </ul>
                          <ul className="ps-0">
                            <h6>Bottom</h6>
                            <ul className="ct_list_style_none">
                              {
                                filterContent?.styleBottom?.map((item) => (
                                  <li>
                                    <label className="cyberpunk-checkbox-label">
                                      <input
                                        type="checkbox"
                                        className="cyberpunk-checkbox"
                                        onChange={() => handleStyleBottom(item)}
                                      />
                                    </label>
                                    {item}
                                  </li>
                                ))
                              }
                            </ul>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              
              
             
             
              <div className="accordion" id="categories-list2">
                <div className="accordion-item mb-4 ">
                  <h5 className="accordion-header" id="accordion-heading-2">
                    <button
                      className="accordion-button p-0 border-0 fs-5 text-uppercase collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-filter-2"
                      aria-expanded="true"
                      aria-controls="accordion-filter-1"
                    >
                      Padding
                      <svg
                        className="accordion-button__icon type2"
                        viewBox="0 0 10 6"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g aria-hidden="true" stroke="none" fill-rule="evenodd">
                          <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z" />
                        </g>
                      </svg>
                    </button>
                  </h5>
                  <div
                    id="accordion-filter-2"
                    className="accordion-collapse collapse  border-0"
                    aria-labelledby="accordion-heading-2"
                    data-bs-parent="#categories-list2"
                  >
                    <div className="accordion-body px-0 pb-0 pt-3">
                      <ul className="list list-inline mb-0 ps-2">
                        {
                          filterContent?.padding?.map((item) => (
                            <li className="list-item py-0">
                              <a className="menu-link py-1">
                                <label className="cyberpunk-checkbox-label">
                                  <input type="checkbox" className="cyberpunk-checkbox" onChange={() => handlePadding(item)} />
                                </label>
                                {item}
                              </a>
                            </li>
                          ))
                        }


                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion" id="location">
                <div className="accordion-item mb-4 ">
                  <h5 className="accordion-header mb-2" id="accordion-heading_location">
                    <button
                      className="accordion-button p-0 border-0 fs-5 text-uppercase collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-filter-location"
                      aria-expanded="true"
                      aria-controls="accordion-filter-location"
                    >
                      Location
                      <svg
                        className="accordion-button__icon type2"
                        viewBox="0 0 10 6"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g aria-hidden="true" stroke="none" fill-rule="evenodd">
                          <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z" />
                        </g>
                      </svg>
                    </button>
                  </h5>
                  <div
                    id="accordion-filter-location"
                    className="accordion-collapse collapse border-0"
                    aria-labelledby="accordion-heading_location"
                    data-bs-parent="#location"
                  >
                    <div className="accordion-body ps-0 pt-2">
                      <ul className="ct_list_style_none ps-2">
                        {
                          filterContent?.location?.map((item) => (
                            <li className="list-item py-0">
                              <a className="menu-link py-1">
                                <label className="cyberpunk-checkbox-label">
                                  <input type="checkbox" className="cyberpunk-checkbox" onChange={() => handleLocation(item)} />
                                </label>
                                {item}
                              </a>
                            </li>

                          ))
                        }
                      </ul>

                    </div>
                  </div>
                </div>
              </div>
              <button type='button'className="btn btn-primary w-100 text-uppercase" onClick={filter}>Apply</button>

            </> : <h3>Please try after some time !!!</h3>
      }

    </>
  );
}

export default FilterBy;
