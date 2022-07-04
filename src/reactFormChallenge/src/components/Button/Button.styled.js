import styled from "styled-components";

export const GroupButton = styled.div`
    display:flex;
	flex-direction: column; 
    button{
    background: #0DBDBD;
    border: none;
    color: #FFFFFF;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    border-radius: 10px;
    min-width: 60px;
    min-height: 35px; 
    }
`;

    export const GroupButton2 = styled.div`
    display:flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	height: 15vh;
	margin-bottom: 15vh;

    @media (max-width: 768px){
    width:100vw;
	height: 30%;
    display:flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 13vh;
    }

    button{
    min-width: 270px;
    min-height: 160px;
	display: block;
    align-items: center;
	justify-content: center;
	font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 1.7em;
    border-radius: 10px;
	border: none;
	background-color: #0DBDBD;
	color: #FFFFFF;
    
    @media (max-width: 768px){
    width: 90vw;
	min-height: 11vh;
    margin-bottom: 11vh;
    }
}
`;
