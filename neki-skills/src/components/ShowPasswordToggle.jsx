import React, { useState } from "react";
import EyeIcon from "../assets/eye-svgrepo-com.svg"
import SlashEyeIcon from "../assets/eye-slash-svgrepo-com.svg"

export default function ShowPasswordToggle(){
    const[showPassword, setShowPassowrd] = useState(false);
    const[showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

    const TogglePasswordVisibilityIcon =  <img src={showPassword ? EyeIcon : SlashEyeIcon} alt="" width="20px" 
    onClick={() => setShowPassowrd(visibility => !visibility)}/>;
    const ToggleConfirmPasswordVisibilityIcon = <img src={showPasswordConfirmation ? EyeIcon : SlashEyeIcon} alt="" width="20px"
    onClick={() => setShowPasswordConfirmation(visibility => !visibility)}/>;

    const passwordInputType = showPassword ? "text" : "password";
    const confirmPasswordInputType = showPasswordConfirmation ? "text" : "password";
    
    return[passwordInputType, confirmPasswordInputType, TogglePasswordVisibilityIcon, ToggleConfirmPasswordVisibilityIcon];
}