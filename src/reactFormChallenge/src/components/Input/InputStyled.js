import styled from "styled-components"

export const InputStyled = styled.input`
    background: #FFFFFF;
	border: 2px solid #AAAAAA;
    border-radius: 4px;
	height: 5vh;
	left: 238px;
    top: 533px;
	padding-left: 2.5%;	
`;

export const ContainerInput = styled.div`
	display: flex;
	flex-direction: column;	
	height: 70px;
	width:100%;
`;
export const Label = styled.label`
	font-family: 'Nunito';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 16px;
`;

	export const ErrorMessage = styled.p`
	font-family: 'Nunito';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 16px;
	color: #FF4B4B;
	margin-top: 1%;
	display: block;

	@media (max-width: 768px){
	display: none;
}
`;