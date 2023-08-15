import styled from "styled-components";
import { ButtonElem } from "../AddProduct/style";
import { ProductsCont } from "../Produts/style";
import { AiOutlineCalendar } from "react-icons/ai";

export const OrdersCont = styled(ProductsCont)`
	overflow-y: auto;
	row-gap: 8px;
`;

export const OrderHead = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: 5fr 1.5fr 1fr 1.5fr 1fr 10fr 3fr 2fr 0.8fr;
	background: #e0e0e0;
	border-radius: 8px 8px 0 0;
	font-size: 14px;
	position: sticky;
	top: 0;

	& > div {
		padding: 7px;
	}

	& input {
		cursor: pointer;
	}

	& select {
		box-shadow: 0px 4px 8px -3px rgba(34, 60, 80, 0.2);
		border-radius: 3px;
		font-size: 14px;
		cursor: pointer;
	}
`;

export const OrderItem = styled.div`
	display: flex;
	flex-direction: column;
	opacity: 0.99;
`;

export const OrderItemHead = styled(OrderHead)`
	background: #e7707d;
	border-radius: 0 0 0 0;
	align-items: center;
`;

export const DateBlock = styled.div`
	min-width: 355px;
	display: flex;
	align-items: flex-end;
`;

export const OrderItemDesc = styled(OrderHead)`
	background: rgba(244, 149, 157, 0.8);
	border-radius: 0 0 0 0;
	align-items: center;

	& > div {
		padding: 7px;
		height: 100%;

		&:not(:last-child) {
			border-right: 1px dotted #ccc;
		}
	}
`;

export const OrderTime = styled.span`
	font-weight: 600;
	font-size: 20px;
	border-bottom: 1px dashed #000;
`;

export const OrderDate = styled.span`
	border-bottom: 1px dashed #000;
	margin-left: 3px;
`;

export const OrderButton = styled(ButtonElem)`
	padding: 5px 7px;
`;

export const DeleteButton = styled.button`
	background: none;
	cursor: pointer;
`;

export const ProductsList = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 6fr 1fr 1fr;
`;

export const OrderDesc = styled.div`
	display: grid;
	grid-template-columns: 50% 50%;

	& span {
		padding: 0 5px;
		&:not(:last-child) {
			border-right: 1px dotted #ccc;
		}
	}
`;

export const PayTypeBlock = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const DatesBlock = styled(DateBlock)`
	align-items: center;
	position: relative;
`;
export const CalendarIcon = styled(AiOutlineCalendar)`
	width: 20px;
	height: 20px;
	cursor: pointer;
	margin-left: 10px;

	&:hover {
		opacity: 0.7;
	}
`;
