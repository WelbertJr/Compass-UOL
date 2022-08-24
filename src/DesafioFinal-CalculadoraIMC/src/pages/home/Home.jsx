import React, { useState } from "react";
import { Card, Container } from "../../components/Card/CardStyle";
import Input from "../../components/Input/Input";
import { Title, Result } from "./Home.styled";
import Button from "../../components/button/Button";

function Home() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [result, setResult] = useState();
  return (
    <Container>
      <Card>
        <Title>Calcule seu IMC</Title>

        <Input
          type="range"
          minValue="0"
          maxValue="150"
          name="Peso"
          defaultValue="65"
          step="1"
          setWeight={setWeight}
        />

        <Input
          type="range"
          minValue="0"
          maxValue="2.10"
          name="Altura"
          defaultValue="1.64"
          step="0.01"
          setHeight={setHeight}
        />

        <Button
          name="Calcular"
          weight={weight}
          height={height}
          setResult={setResult}
          type="button"
        />
        <Result>{result ? result : 'IMC: 24.17 (Peso normal).'}</Result>
      </Card>
    </Container>
  );
}

export default Home;
