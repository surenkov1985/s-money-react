import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";
import { authToggle } from "../stores/dataReducer";
import { Layout } from "./Layout";

export const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		if (localStorage.hasOwnProperty("restPadUser")) {
			dispatch(authToggle(true));
		}
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}></Route>
			</Routes>
		</BrowserRouter>
	);
};
