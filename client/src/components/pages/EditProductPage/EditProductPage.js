import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useEditProductMutation } from "../../../stores/apiReducer";
import { ColorBlock } from "../../ColorsBlock/ColorsBlock";
import { InputBlock } from "../../InputElem/InputElem";
import { SelectBlock } from "../../SelectBlock/SelectBlock";
import { ButtonElem, ErrorElem, FormContainer, FormHead, FormTitle, InputContainer, SubmitElem } from "../AddProduct/style";

export const EditProductPage = () => {
	const location = useLocation();
	const props = location.state.props;
	const { handleSubmit, register } = useForm({ mode: "all" });
	const [userData, setUserData] = useState(null);
	const navigate = useNavigate();
	const [error, setError] = useState("");

	const { categories, vat, units,colors } = useSelector((state) => state.data);
	const userId = JSON.parse(localStorage.getItem("restPadUser")).id;

	const [editProduct] = useEditProductMutation();

	useEffect(() => {
		setUserData(JSON.parse(localStorage.getItem("restPadUser")));
	}, []);

	const submitHandler = (data) => {
		const fetchData = { ...props, ...data };
		editProduct(fetchData)
			.unwrap()
			.then((data) => navigate("../products"))
			.catch((err) => {
				setError(err.data.message);
				setTimeout(() => {
					setError("");
				}, 1500);
			});
	};

	const closeHandle = (e) => {
		e.preventDefault();

		navigate("../products");
	};

	return (
		<>
			{error && <ErrorElem>{error}</ErrorElem>}
			<FormContainer onSubmit={handleSubmit(submitHandler)}>
				<FormHead>
					<FormTitle>{props.title}</FormTitle>
					<div>
						<SubmitElem type="submit" value="Сохранить" />
						<ButtonElem onClick={closeHandle}>Закрыть</ButtonElem>
					</div>
				</FormHead>
				<InputContainer>
					<SelectBlock name="category" title="Категория" regHandler={register} defaultVal={props.category} options={categories} />
					<InputBlock required={true} text="Название" formRegister={register} name="title" val={props.title} />
					<InputBlock required={false} text="Артикул" formRegister={register} name="article" val={props.article} />
					<InputBlock required={true} text="Цена" formRegister={register} name="price" val={props.price} />
					<InputBlock required={true} text="Количество" formRegister={register} name="amount" val={props.amount} />
					<SelectBlock name="unit" title="Единица измерения" regHandler={register} defaultVal={units[0].val} options={units} />
					<SelectBlock name="vat" title="НДС" regHandler={register} defaultVal={vat[0].val} options={vat} />

					<ColorBlock regHandler={register} title="Цвет кнопки" name="color" options={colors}/>

					<InputBlock required={false} text="Описание" formRegister={register} name="description" val={props.description} />
				</InputContainer>
			</FormContainer>
		</>
	);
};
