
import styled from 'styled-components';

const Card = styled.div`
    background: #FFFFFF;	
	border-radius: 20px;
	width: 500px;
	height: 600px;
	align-items: center;
	flex-direction: column;
	display: flex;
	padding-top: 3%;

	@media (max-width: 768px){
	width: 100vw;
	height: 100vh;
}
`;

export default Card