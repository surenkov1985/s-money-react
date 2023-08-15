import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const apiReducer = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
	endpoints: (build) => ({
		login: build.mutation({
			query: (data) => ({
				url: "/login",
				method: "POST",
				body: data,
				headers: {
					"Content-type": "application/json",
				},
			}),
		}),
		register: build.mutation({
			query: (data) => ({
				url: "/register",
				method: "POST",
				body: data,
				headers: {
					"Content-type": "application/json",
				},
			}),
		}),
		addProduct: build.mutation({
			query: (data) => ({
				url: "/addProducts",
				method: "POST",
				body: data,
				headers: {
					"Content-Type": "application/json",
				},
			}),
		}),
		getProducts: build.query({
			query: (url) => ({
				url: `/getProducts?${url}`,
				method: "GET",
			}),
		}),
		deleteProduct: build.mutation({
			query: (data) => ({
				url: "/deleteProduct",
				body: data,
				method: "DELETE",
				headers: {
					"Content-type": "application/json",
				},
			}),
		}),
		editProduct: build.mutation({
			query: (data) => ({
				url: "/editProduct",
				method: "PUT",
				body: data,
				headers: {
					"Content-Type": "application/json",
				},
			}),
		}),
		addOrder: build.mutation({
			query: (data) => ({
				url: "/addOrder",
				method: "POST",
				body: data,
				headers: {
					"Content-type": "application/json",
				},
			}),
		}),
		getOrders: build.query({
			query: ({ date, endDate, user_id }) => ({
				url: `/getOrders?date=${date}&endDate=${endDate}&user_id=${user_id}`,
			}),
		}),
	}),
});

export const {
	useLoginMutation,
	useRegisterMutation,
	useAddProductMutation,
	useLazyGetProductsQuery,
	useDeleteProductMutation,
	useEditProductMutation,
	useAddOrderMutation,
	useGetOrdersQuery,
	useLazyGetOrdersQuery,
} = apiReducer;
