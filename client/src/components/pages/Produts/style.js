import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductsCont = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	border-radius: 8px;
	box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
	background: #ffffff;
	position: relative;
`;

export const ProductHead = styled.div`
	display: flex;
	align-items: center;
	column-gap: 50px;
	padding: 10px 20px;
	background: #e0e0e0;
	border-radius: 8px 8px 0 0;
`;

export const ProductsContent = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	padding: 10px 20px;
`;

export const CategoriesBlock = styled.div`
	width: 250px;
`;

export const CategoryList = styled.ul`
	display: flex;
	flex-direction: column;
	row-gap: 2px;
`;

export const CategoryItem = styled.li`
	width: 100%;
	padding: 10px;
	background: #e0e0e0;
	cursor: pointer;

	&:hover {
		opacity: 0.8;
	}

	&.active {
		background: #ffffff;
	}
`;

export const ProductBlock = styled.div`
	width: 100%;
`;

export const ProductList = styled.div`
	width: 100%;
	padding: 10px 20px;
`;

export const ProductItem = styled.li`
	padding: 5px 20px;
	width: 100%;
	display: grid;
	grid-template-columns: 5fr repeat(4, 1fr) 11fr 0.5fr;
	align-items: center;
`;

export const ItemCell = styled.div`
	padding: 5px;
`;

export const DeletedButton = styled(ItemCell)`
	cursor: pointer;

	&:hover {
		opacity: 0.7;
	}
`;
export const ColorCell = styled.div.attrs((props) => ({
	background: props.color,
}))`
	width: 15px;
	height: 15px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
`;

export const EditLink = styled(Link)`
	color: #6081f9;
	cursor: pointer;
	padding: 5px;
	&:hover {
		color: #5166b5;
	}
`;

export const ListHead = styled(ProductItem)`
	background: #e0e0e0;
`;
