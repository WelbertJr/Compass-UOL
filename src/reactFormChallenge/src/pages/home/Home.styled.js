import styled from "styled-components";

export const Form = styled.form`
    font-family: 'Nunito';
    font-style: normal;
    align-items: center;
    font-weight: 400;
    color: #767676;
    background: #FFFFFF;
    margin: 7% 7% 0 7%;
	width: 85%;

    @media (max-width: 768px){
    margin: 4% 7% 0 7%;
	width: 80%;
    }
`;

export const Displayed = styled.img`
	margin-left: auto;
	margin-right: auto;
	align-items: center;
	max-width: 213px;
	height: 16vh;
`;

export const Title = styled.h1`
    font-family: "Inter";
    font-style: normal;
    font-weight: 200;
    font-size: 2em;
    line-height: 1.2vh;
    color: #111111;
    text-align: center;
    margin-top: 4vh;
`;

export const InputInvalid = styled.span`
font-family: 'Nunito';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #FF4B4B;
margin-top: 1%;

@media (max-width: 768px){
font-size:14px;
margin-top: 0;
}
`;

export const DivLine2 = styled.div`
    display:grid;
    grid-template-columns: 4fr 1fr;
	margin-top: 5vh;
	row-gap: 4vh;
    justify-items: end;

    @media (max-width: 768px){
    display: grid;
	grid-template-areas: 
	"group-email group-email"
	"group-password group-password"
    "group-phone group-birthday";
	margin-top: 1vh;
	row-gap: 4vh;
    grid-template-columns: 1fr 1fr; 
    }
`;
export const DivEmail = styled.div`
    width:100%;
    @media (max-width: 768px){
    grid-area: group-email;
	margin-top: 3vh;
    }
`;
export const DivPhone = styled.div`
    width: 85%;
    @media (max-width: 768px){
    grid-area: group-phone;
    justify-self: start;
    width: 97%;
    }
`;
export const DivPassword = styled.div`
    width: 100%;
    @media (max-width: 768px){
    grid-area: group-password;
    }
`;
export const DivBirthday = styled.div`
    width: 85%;
    @media (max-width: 768px){
    grid-area: group-birthday;
	width: 97%;
    }
`;
export const DivLine3 = styled.div`
    display: flex;
	justify-content: space-between;
	margin-top: 8vh;
    
    @media (max-width: 768px){
    display: block;
    margin-top: 3vh;

    button{
    margin-top: 3vh;
	height: 6vh;
	font-size: 1em;
    }
    }
`;
