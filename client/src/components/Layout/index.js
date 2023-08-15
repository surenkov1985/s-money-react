import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Outlet } from "react-router-dom";
import { authToggle } from "../../stores/dataReducer";

export const Layout = () => {
	const isAuth = useSelector((state) => state.data.isAuth);
	const dispatch = useDispatch();

	const signOutHandler = () => {
		localStorage.removeItem("restPadUser");
		dispatch(authToggle(false));
	};

	return (
		<>
			<HeaderBlock>
				<Container>
					{isAuth && (
						<>
							<AuthLinks>
								<NavLink to="addOrder">Новый заказ</NavLink>
								<NavLink to="orders">Заказы</NavLink>
								<NavLink to="products">Товары</NavLink>
								<NavLink to="admin">Личный кабинет</NavLink>
							</AuthLinks>
							<AuthLinks>
								<Link onClick={() => signOutHandler()} to="login">
									Выход
								</Link>
							</AuthLinks>
						</>
					)}
					{!isAuth && (
						<AuthLinks>
							<Link to="register">Регистрация</Link>
							<Link to="login">Вход</Link>
						</AuthLinks>
					)}
				</Container>
			</HeaderBlock>
			<MainBlock>
				<MainContainer>
					<Outlet />
				</MainContainer>
			</MainBlock>
		</>
	);
};
