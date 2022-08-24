import React from "react";
import { GroupButton } from "./Button.styled";

const Button = ({ name, type, weight, height, setResult }) => {
  const handleClick = () => {
    const imcResult = weight / (height * height);
    const mesage = textIMC(imcResult);
    if (weight && height)
      setResult(
        "IMC: " + imcResult.toFixed(2) + " " + "(" + mesage + ")" + "."
      );
  };
  const textIMC = (imcResult) => {
    if (imcResult < 18.5) {
      return "Abaixo do peso";
    } else if (imcResult >= 18.5 && imcResult <= 24.9) {
      return "Peso normal";
    } else if (imcResult >= 25 && imcResult <= 29.9) {
      return "Sobrepeso";
    } else if (imcResult >= 30 && imcResult <= 34.9) {
      return "Obesidade grau |";
    } else if (imcResult >= 35 && imcResult <= 39.9) {
      return "Obesidade grau ||";
    } else if (imcResult >= 40) {
      return "Obesidade grau |||";
    }
  };
  return (
    <GroupButton>
      <button type={type} onClick={handleClick}>
        {name}
      </button>
    </GroupButton>
  );
};

export default Button;
