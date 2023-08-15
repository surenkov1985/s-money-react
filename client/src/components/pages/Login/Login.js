import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../../stores/apiReducer";
import { authToggle } from "../../../stores/dataReducer";
import { ErrorEl, Form, FormContainer, FormPage, Input, InputTitle, Label, NavigateBtn, NavigateEl, Submit, Title } from "../Register/style";

export const LoginPage = () => {
	const { register, handleSubmit } = useForm({
		mode: "onChange",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const isAuth = useSelector((state) => state.data.isAuth);
	const dispatch = useDispatch();

	useEffect(() => {
		if (isAuth) {
			navigate("../addOrder", { replace: true });
		}
	}, [isAuth]);

	const [loginFetch] = useLoginMutation();

	const submitHandler = (data) => {
		loginFetch(data)
			.unwrap()
			.then((loginData) => {
				if (loginData.id) {
					localStorage.setItem("restPadUser", JSON.stringify(loginData));
					dispatch(authToggle(true));
					navigate("../addOrder", { replace: true });
				}
			})
			.catch((err) => {
				console.log(err);
				setError(err.data.message);
				setTimeout(() => {
					setError("");
				}, 1000);
			});
	};

	return (
		<FormPage>
			<FormContainer>
				<Title>Авторизация</Title>
				<Form onSubmit={handleSubmit(submitHandler)}>
					{error && <ErrorEl>{error}</ErrorEl>}
					<Label>
						<InputTitle>Email</InputTitle>
						<Input type="text" placeholder="Введите email" {...register("email")} />
					</Label>

					<Label>
						<InputTitle>Пароль</InputTitle>
						<Input type="password" placeholder="Введите пароль" {...register("password")} />
					</Label>

					<Submit type="submit" value="Войти" />
				</Form>
			</FormContainer>
			<NavigateEl>
				Нет аккаунта?
				<NavigateBtn
					onClick={() => {
						navigate("../register", { replace: true });
					}}
					// disabled={isLoading}
				>
					Зарегистрироваться
				</NavigateBtn>
			</NavigateEl>
		</FormPage>
	);
};
