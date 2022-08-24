import styled from "styled-components";

export const GroupButton = styled.div`
  display: flex;
  flex-direction: column;
  width: 35rem;
  button {
    width: 100%;
    height: 6rem;
    background-color: #f7b718;
    color: #ffffff;
    border-radius: 0.4rem;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 300;
    font-size: 3rem;
    line-height: 4.5rem;
    border: none;
    :hover {
      cursor: pointer;
      background-color: rgba(20, 69, 228, 0.1);
    }  
  }
  @media (max-width: 389px){
 width:24rem;
}
`;
