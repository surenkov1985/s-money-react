import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authToggle } from "../../../stores/dataReducer";

export const AdminPage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (localStorage.hasOwnProperty("restPadUser")) {
			navigate("../admin", { replace: true });
			dispatch(authToggle(true));
		}
	}, []);
	return (
    
    <div>
        ADMIN
    </div>);
};
