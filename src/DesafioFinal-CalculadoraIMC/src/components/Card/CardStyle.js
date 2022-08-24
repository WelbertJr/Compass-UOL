import styled from "styled-components";

export const Card = styled.div`
  width: 83.4rem;
  height: 53.5rem;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 830px){
    width:100%;
    heigth: 100%;
}
`;

export const Container = styled.div`
  min-height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(
    116.82deg,
    rgba(247, 183, 24, 0.7) 0%,
    rgba(245, 197, 78, 0.6) 100%
  );
`;
