import React from "react";
import {ContainerInput, InputStyled, Label, ErrorMessage} from "./InputStyled";

const Input = ({type, id, placeholder, label, errorMessage})=>{
    return(
        <ContainerInput>
        <Label htmlFor={id}>{label}</Label>
        <InputStyled type={type} id={id} placeholder={placeholder} />
        <ErrorMessage name={errorMessage}>{id} Invalid</ErrorMessage> 
       </ContainerInput>
    )
};

export default Input
