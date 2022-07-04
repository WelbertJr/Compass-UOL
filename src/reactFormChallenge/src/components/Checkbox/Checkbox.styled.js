import styled from "styled-components";

export const GroupCheckbox = styled.div`
    input{
    display:none;
    }
    input + label:before {
	content: '';
	width: 13px;
	height: 13px;
	border-radius: 4px;
	background-color: white;
	border: 1px solid gray;
	display: inline-block;
	vertical-align: middle;
	padding: 1px;
	margin-right: 5px;
	margin-bottom: 1px;
    }
    input:checked + label:before {
	background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 10 10'%3E%3Cg class='nc-icon-wrapper' stroke-width='1' fill='%23555555'%3E%3Cpath fill='none' stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' data-cap='butt' d='M2.83 4.72l1.58 1.58 2.83-2.83'/%3E%3C/g%3E%3C/svg%3E");
	width: 13px;
	height: 13px;
	border-radius: 4px;
	background-color: #0DBDBD;;
	background-position: center;
	border: 1px solid #0DBDBD;
	display: inline-block;
	vertical-align: middle;
	padding: 1px;
	margin-right: 5px;
	margin-bottom: 1px;
}
   span{
	font-family: 'Nunito';
	font-style: bold;
	font-weight: 400;
	font-size: 2.2vh;
	color: #111111;
   }
`;
