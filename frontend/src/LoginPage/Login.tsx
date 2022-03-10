import React from "react";
import "./Login.css";
import Lisboa from "./Components/LoginPage_Lisboa.png";
import Amesterdao from "./Components/LoginPage_Amesterdao.png";
import SaoFrancisco from "./Components/LoginPage_SaoFrancisco.png";
import Londres from "./Components/LoginPage_Londres.png";
import TextFieldWithLogo from "../Components/TextFieldWithLogo";

function Login() {
  return (
    <div className='Login'>
      <div className='TopGrid'>
        <img src={Lisboa} alt='Lisboa' />
        <img src={SaoFrancisco} alt='Sao Francisco' />
      </div>
      <div>
        <TextFieldWithLogo name='Rui'></TextFieldWithLogo>
      </div>
      <div className='BottomGrid'>
        <img src={Londres} alt='Londres' />
        <img src={Amesterdao} alt='Amesterdão' />
      </div>
    </div>
  );
}

export default Login;
