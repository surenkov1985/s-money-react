import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation, useRegisterMutation } from "../../../stores/apiReducer";
import { authToggle } from "../../../stores/dataReducer";
import { ErrorEl, Form, FormContainer, FormPage, Input, InputTitle, Label, NavigateBtn, NavigateEl, Submit, Title } from "./style";

export const Register = () => {
	const { register, handleSubmit } = useForm({
		mode: "onChange",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const isAuth = useSelector((state) => state.data.isAuth);

	const [registerFetch] = useRegisterMutation();
	const [loginFetch] = useLoginMutation();

	// Если авторизован, перенаправляем на страницу создания заказа

	useEffect(() => {
		if (isAuth) {
			navigate("../addOrder", { replace: true });
		}
	}, [isAuth]);

	// Отправка формы(регистрация)

	const submitHandler = (data) => {
		registerFetch(data)
			.unwrap()
			.then((data) => {
				if (data.email) {
					loginFetch(data)
						.unwrap()
						.then((loginData) => {
							localStorage.setItem("restPadUser", JSON.stringify(loginData));
							dispatch(authToggle(true));
							navigate("../addOrder", { replace: true });
						})
						.catch((err) => {
							setError(err.data.message);
							setTimeout(() => {
								setError("");
							}, 1000);
						});
				}
			})
			.catch((err) => {
				setError(err.data.message);
				setTimeout(() => {
					setError("");
				}, 1000);
			});
	};

	return (
		<FormPage>
			<FormContainer>
				<Title>Регистрация</Title>
				<Form onSubmit={handleSubmit(submitHandler)}>
					{error && <ErrorEl>{error}</ErrorEl>}
					<Label>
						<InputTitle>Email</InputTitle>
						<Input type="text" placeholder="Введите email" {...register("email")} />
					</Label>

					<Submit type="submit" value="Зарегистрироваться" />
				</Form>
			</FormContainer>
			<NavigateEl>
				Есть аккаунт?
				<NavigateBtn
					onClick={() => {
						navigate("../login", { replace: true });
					}}
				>
					Войти
				</NavigateBtn>
			</NavigateEl>
		</FormPage>
	);
};
