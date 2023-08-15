import styled from "styled-components";

export const FormPage = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding: 30px;
	/* border: 1px solid #c5c5c5; */
	border-radius: 8px;
	width: 540px;
`;

export const Title = styled.h2`
	font-size: 26px;
	font-weight: 800;
	text-align: center;
	margin-bottom: 60px;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
	position: relative;
`;

export const Label = styled.label`
	display: flex;
	flex-direction: column;
	row-gap: 10px;
	position: relative;
`;

export const InputTitle = styled.p`
	font-size: 20px;
	font-weight: 700;
`;

export const Input = styled.input`
	align-items: center;
	padding: 10px 10px;
	border: 1px solid #c5c5c5;
	border-radius: 5px;
`;

export const Submit = styled.input`
	padding: 10px 20px;
	background: #d5d5d5;
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		background: #d5d5d5;
	}
`;
export const ErrorEl = styled.div`
	position: absolute;
	top: -60px;
	width: 100%;
	color: #ff0000;
	border: 1px solid #ff0000;
	padding: 10px 20px;
	border-radius: 5px;
	background: rgba(250, 0, 0, 0.05);
`;

export const NavigateEl = styled.div`
	font-weight: 600;
`;

export const NavigateBtn = styled.button`
	border: none;
	background: none;
	cursor: pointer;
	color: blue;
	margin-left: 10px;

	&:hover {
		color: blue;
		text-decoration: underline;
	}
`;
