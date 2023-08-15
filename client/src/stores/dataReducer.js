import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
	initialState: {
		isAuth: false,
		products: [],
		categories: [
			{ val: "Роллы", activeClass: "active" },
			{ val: "Пицца", activeClass: "" },
			{ val: "Салаты", activeClass: "" },
			{ val: "Напитки", activeClass: "" },
		],
		categoryProduct: "Роллы",
		vat: [{ val: "Не облагается" }, { val: "0%" }, { val: "10%" }, { val: "18%" }, { val: "20%" }],
		units: [{ val: "шт" }, { val: "кг" }, { val: "г" }, { val: "л" }],
		colors: [{ val: "#7b837b" }, { val: "#a76f8c" }, { val: "#e4ed46" }, { val: "#ff3b3b" }, { val: "#1784b4" }, { val: "#6ea16e" }],
		orderProducts: [],
		orders: [],
	},
	name: "data",
	reducers: {
		authToggle(state, actions) {
			state.isAuth = actions.payload;
		},
		setProducts(state, actions) {
			state.products = actions.payload;
		},
		categoryToggle(state, actions) {
			state.categories = actions.payload;
		},
		setCategory(state, actions) {
			state.categoryProduct = actions.payload;
		},
	},
});

export const { authToggle, setProducts, categoryToggle, setCategory } = dataSlice.actions;
export default dataSlice.reducer;
