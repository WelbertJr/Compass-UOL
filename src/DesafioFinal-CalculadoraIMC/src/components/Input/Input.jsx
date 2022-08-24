import React, { useState } from "react";
import {
  ContainerPeso,
  InputStylePeso,
  InputStyleAltura,
  Label,
  Output,
  ContainerLabelOutput,
  ContainerAltura,
} from "./InputStyled";

const Input = ({
  name,
  type,
  minValue,
  maxValue,
  step,
  setHeight,
  setWeight,
  defaultValue,
}) => {
  const [elipseValueP, setElipseValueP] = useState(defaultValue);
  const [elipseValueA, setElipseValueA] = useState(defaultValue);

  if (name === "Peso")
    return (
      <ContainerPeso>
        <ContainerLabelOutput>
          <Label>Peso</Label>
          <Output>{elipseValueP}</Output>
        </ContainerLabelOutput>
        <InputStylePeso
          type={type}
          min={minValue}
          max={maxValue}
          step={step}
          defautlValue={defaultValue}
          onChange={(event) => {
            setElipseValueP(event.target.value);
            setWeight(event.target.value);
          }}
        />
      </ContainerPeso>
    );

  if (name === "Altura")
    return (
      <ContainerAltura>
        <ContainerLabelOutput>
          <Label>Altura</Label>
          <Output>{elipseValueA}</Output>
        </ContainerLabelOutput>
        <InputStyleAltura
          type={type}
          min={minValue}
          max={maxValue}
          step={step}
          defautlValue={defaultValue}
          onChange={(event) => {
            setElipseValueA(event.target.value);
            setHeight(event.target.value);
          }}
        />
      </ContainerAltura>
    );
};

export default Input;
