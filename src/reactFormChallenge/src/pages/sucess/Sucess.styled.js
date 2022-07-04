import styled from "styled-components";

export const Displayed2 = styled.img`
    display: block;
	margin-left: auto;
	margin-right: auto;
    min-width: 217px;
	height: 16vh;
	margin-top: 20%;

    @media (max-width: 768px){
	margin-top: 20vh;
    }
`;

export const Title2 = styled.h1`
    font-family: "Inter";
    font-style: normal;
    font-weight: 200;
    font-size: 1.8em;
    line-height: 1.2vh;
    color: #111111;
    text-align: center;
    height: 20%;
	margin-top: 8%;

    @media (max-width: 768px){
    margin-top:7vh;
	height: 10%;
	font-size: 2.8em;
    }
`;