import styled from "styled-components";
export const HeaderBody = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Poppins;
  height: 12.5vh;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  align-items: flex-start;
  padding-top: 2.5vh;
`;
export const HeaderImage = styled.img`
  width: 18vw;
  @media (max-width: 768px) {
    width: 40%;
  }
`;
export const HeaderBodyTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  #headerBodyTimeText {
    font-size: 5rem;
    font-weight: 700;
    line-height: 5rem;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const HeaderBodyWeather = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-right: 4vh;
  @media (max-width: 768px) {
    margin-right: 2vh;
  }
`;
