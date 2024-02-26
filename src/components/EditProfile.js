import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { message, message as MESSAGE } from "antd";

export const configJSON = require("../components/config");

function EditProfile(props) {
  const data = props?.data
  const navigate = useNavigate();
  const [name, setName] = useState(data?.buyer_name);
  const [userName, setUserName] = useState(data?.user_name);
  const [email, setEmail] = useState(data?.email);
  const [phone, setPhone] = useState(data?.phone_number);
  const [licenseNumber, setLicenseNumber] = useState(data?.license_number)
  const [licenseState, setLicenseState] = useState(data?.license_state)
  const [show_image, setShowImage] = useState(data?.profile_image)
  const [changeImage, setChangeImg] = useState()
  const [isLoader, setIsLoader] = useState(false);
  const [accessToken, setAccessToken] = useState()
  // editProfile_buyer
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    setAccessToken(token)
    if (token == null) {
      navigate("/login");
    }
  }, [])
  const editProfie = () => {
    
    setIsLoader(true)
    const data = new FormData()
    data.append("buyer_name", name)
    data.append("user_name", userName)
    data.append("phone_number", phone)
    data.append("license_number", licenseNumber)
    data.append("license_state", licenseState)
    if(changeImage){
      data.append("file", changeImage)
    }

    if (name && userName && phone && licenseState && licenseNumber) {
      axios({
        url: configJSON.baseUrl + configJSON.editProfile_buyer,
        method: "post",
        data: data,
        headers: {
          'Authorization': `Bearer ${accessToken}`
        },
      }).then((res) => {
        setIsLoader(false)
        if (res?.data?.success == true) {
          MESSAGE.success(res?.data?.message)
          props?.falsedata()
        }
        else {
          MESSAGE.error(res?.data?.message)
        }
      }).catch((err) => {
        console.log(err)
        setIsLoader(false)
      })
    }

  }


  const uploadImage = (e) => {
    setChangeImg(e.target.files[0])
    const blob = new Blob([e.target.files[0]], { type: e.target.files[0]?.type });
    setShowImage(URL.createObjectURL(blob))
  }
  return (

    <>
      <div className='col-md-12'>
        <div className="ct_profile_img mb-5">
          <img
            src={show_image ? show_image : "images/buyer_profile.png"} />
          <label for="ct_change_profile">
            <div className="ct_edit_img_icon">
              <i className="fa-solid fa-pencil"></i>
            </div>
            <input type='file' id='ct_change_profile' className='d-none' onChange={(e) => uploadImage(e)} />
          </label>
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-floating my-3">
          <input
            name="login_email"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control form-control_gray"
            id="customerNameEmailInput"
            placeholder="Email Name*"
            required=""
          />
          <label htmlFor="customerNameEmailInput">Name*</label>
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-floating my-3">
          <input
            name="login_email"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="form-control form-control_gray"
            id="customerNameEmailInput"
            placeholder="Email Create Username*"
            required=""
          />
          <label htmlFor="customerNameEmailInput">
            Username*
          </label>
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-floating my-3">
          <input
            name="login_email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control form-control_gray"
            id="customerNameEmailInput"
            placeholder="Email Email*"
            required=""
            readOnly={true}
          />
          <label htmlFor="customerNameEmailInput">Email*</label>
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-floating my-3">
          <input
            name="login_email"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control form-control_gray"
            id="customerNameEmailInput"
            placeholder="Email Phone*"
            required=""
          />
          <label htmlFor="customerNameEmailInput">Phone*</label>
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-floating my-3">
          <input
            name="login_email"
            type="number"
            value={licenseNumber}
            onChange={(e) => setLicenseNumber(e.target.value)}
            className="form-control form-control_gray"
            id="customerNameEmailInput"
            placeholder="Email Licence Number *"
            required=""
          />
          <label htmlFor="customerNameEmailInput">
            Licence Number *
          </label>
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-floating my-3">
          <input
            name="login_email"
            type="text"
            value={licenseState}
            onChange={(e) => setLicenseState(e.target.value)}
            className="form-control form-control_gray"
            id="customerNameEmailInput"
            placeholder="Email Licence Number *"
            required=""
          />
          <label htmlFor="customerNameEmailInput">
            Licence State *
          </label>
        </div>
      </div>
      <div className="col-md-12">
        <div className="my-3">
          <button className="btn btn-primary" type='button' onClick={() => editProfie()}>Save Changes</button>
        </div>
      </div>

    </>
  )
}

export default EditProfile