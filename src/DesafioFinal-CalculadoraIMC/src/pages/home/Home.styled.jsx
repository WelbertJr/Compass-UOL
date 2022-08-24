import styled from "styled-components";

export const Title = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 4rem;
  line-height: 6rem;
  margin-bottom: 4.2rem;
`;

export const Result = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 3rem;
  line-height: 4.5rem;
  @media (max-width: 389px) {
    font-size: 1.3rem;
    margin-top: 0.2rem;
  }
`;
