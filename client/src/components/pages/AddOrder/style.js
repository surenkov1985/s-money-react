import styled from "styled-components";
import { FormContainer } from "../AddProduct/style";
import { CategoryItem } from "../Produts/style";

export const AddOrderContainer = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: 430px 130px auto;
	grid-gap: 5px;
`;

export const OrderBlock = styled.div`
	background-color: #ffffff;
	border-radius: 8px 0 0 8px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const CategoriesBlock = styled.div`
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
	gap: 5px;
	padding: 5px;
`;

export const ProductsBlock = styled.div`
	background-color: #ffffff;
	border-radius: 0 8px 8px 0;
	display: grid;
	grid-template-columns: repeat(auto-fill, 120px);
	grid-gap: 5px;
	padding: 5px;
`;

export const CategoryBtn = styled(CategoryItem)`
	width: 100%;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;

	&.active {
		background: #c4c3c3;
		color: #ffffff;
	}
`;

export const ProductBtn = styled(CategoryBtn)`
	padding: 5px 10px;
	flex-direction: column;
	justify-content: space-between;

	& > span {
		font-size: 14px;
	}
`;

export const OrderControl = styled.div`
	padding: 15px 10px;
	border-top: 1px solid #b4b4b4;
	display: flex;
	flex-direction: column;
	gap: 15px;
`;

export const TotalSum = styled.p`
	font-size: 18px;
	font-weight: 400;
	text-align: end;
`;
export const Sum = styled.span`
	font-size: 18px;
	font-weight: 600;
`;

export const TotalControl = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	column-gap: 10px;
`;

export const DiscountBtn = styled.button`
	background: #e2e2e2;
	border: 1px solid #d0d0d0;
	border-radius: 3px;
	padding: 7px 20px;
	color: #444444;
	font-weight: 600;
	font-size: 16px;
	cursor: pointer;
	height: 35px;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		opacity: 0.7;
	}
`;

export const SubmitButton = styled.button`
	border-radius: 3px;
	padding: 8px 20px;
	min-width: 100px;
	background: #6ed06e;
	color: #ffffff;
	cursor: pointer;
	-webkit-transition: all 0.1s;
	transition: all 0.1s;

	&:hover {
		background: #62b662;
	}
`;

export const DiscCont = styled.div`
	position: absolute;
	box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
	background: #fafafa;
	bottom: 120%;
	display: flex;
	flex-direction: column;
	row-gap: 2px;
`;

export const DiscItem = styled.button`
	padding: 10px 30px;
	cursor: pointer;
	color: #444444;
	font-weight: 600;
	font-size: 16px;

	&:hover {
		opacity: 0.7;
	}
`;

export const OrderItem = styled.div`
	display: grid;
	grid-template-columns: 4fr 1.5fr 1.5fr 1.5fr;
	padding: 10px;
	border-bottom: 1px solid #b4b4b4;
	font-size: 14px;
	font-weight: 600;
	align-items: center;
`;

export const NumbItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const PriceItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const SumItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const Form = styled(FormContainer)`
	border-radius: none;
	box-shadow: none;
	row-gap: 7px;
	padding: 20px 30px;
`;
