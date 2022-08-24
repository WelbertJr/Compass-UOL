import styled from "styled-components";

export const ContainerPeso = styled.div`
  width: 35rem;
  height: 9.9rem;
  align-items: flex-start;
  @media (max-width: 350px){
 width:22rem;
}
  
`;

export const ContainerLabelOutput = styled.div`
  display: flex;
  justify-content: space-between;
  width: 35rem;
  @media (max-width: 350px){
 width:22rem;
}
`;

export const Label = styled.label`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 2.4rem;
  line-height: 3.6rem;
  color: #000000;
  margin-top: 0.8rem;
`;

export const Output = styled.output`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 4rem;
  line-height: 6rem;
  color: #f7b718;
`;

export const InputStylePeso = styled.input`
  -webkit-appearance: none;
  width: 35rem;
  height: 2.5rem;
  background: #ffffff;
  border-radius: 0.4rem;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 4.5rem;
    height: 4.5rem;
    background: #f7b718;
    border-radius: 50%;
    cursor: pointer;
  }
  @media (max-width: 350px){
 width:22rem;
}
`;

export const ContainerAltura = styled(ContainerPeso)`
  margin: 3rem 0 3rem 0;
`;

export const InputStyleAltura = styled(InputStylePeso)``;
