import React from "react"
import { GroupCheckbox } from "./Checkbox.styled"
import { ErrorMessage } from "../Input/InputStyled"

const Checkbox = ()=>{
    
  return(
    
        <GroupCheckbox>
        <input id="input-checkbox" type="checkbox"/>
        <label id="label-chekbox" for="input-checkbox"><span id="term-accept">I accept the terms and privacy</span></label>
        <ErrorMessage>You must accept the terms</ErrorMessage>
      </GroupCheckbox>
      
    )
}

export default Checkbox