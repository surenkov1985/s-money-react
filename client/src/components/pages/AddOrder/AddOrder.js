import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAddOrderMutation, useLazyGetProductsQuery } from "../../../stores/apiReducer";
import { categoryToggle, setCategory, setProducts } from "../../../stores/dataReducer";
import { NumbInputElem } from "../../numbInput/NumbInputElem";
import { RiArrowGoBackFill, RiDeleteBin5Line } from "react-icons/ri";
import {
	AddOrderContainer,
	CategoriesBlock,
	CategoryBtn,
	DiscCont,
	DiscItem,
	DiscountBtn,
	Form,
	NumbItem,
	OrderBlock,
	OrderControl,
	OrderItem,
	PriceItem,
	ProductBtn,
	ProductsBlock,
	SubmitButton,
	Sum,
	SumItem,
	TotalControl,
	TotalSum,
} from "./style";
import { useForm } from "react-hook-form";
import { InputBlock } from "../../InputElem/InputElem";
import { SelectBlock } from "../../SelectBlock/SelectBlock";

export const AddOrder = () => {
	const { categories, products, categoryProduct } = useSelector((state) => state.data);
	const dispatch = useDispatch();
	const [orderProducts, setOrderProducts] = useState([]);
	const discounts = [0, 5, 7, 10, 15, 20];
	const [discount, setDiscount] = useState(0);
	const [discActive, setDiscActive] = useState(false);
	const [isProducts, setIsProducts] = useState(true);
	const [isDetails, setIsDetails] = useState(false);
	const [getProducts] = useLazyGetProductsQuery();
	const [orderSum, setOrderSum] = useState(0);

	const { register, handleSubmit, reset } = useForm({ mode: "all" });
	const user = JSON.parse(localStorage.getItem("restPadUser"));

	const [addOrder] = useAddOrderMutation();

	useEffect(() => {
		const url = new URLSearchParams({ category: categoryProduct, userId: user.id });
		getProducts(url.toString())
			.unwrap()
			.then((data) => {
				dispatch(setProducts(data));
			})
			.catch((err) => {
				console.log(err);
			});
	}, [categoryProduct]);

	useEffect(() => {
		let totalSum = orderProducts.reduce((a, b) => a + b.numb * b.price, 0);
		setOrderSum(totalSum - (totalSum * discount) / 100);
	}, [orderProducts, discount]);

	const productHandler = (obj) => {
		const product = orderProducts.find((item) => {
			return item.product == obj.title;
		});
		if (product) {
			setOrderProducts(
				orderProducts.map((item) => {
					if (item.product === obj.title) {
						return { ...item, numb: (item.numb += 1) };
					} else {
						return item;
					}
				})
			);
		} else {
			setOrderProducts([...orderProducts, { product: obj.title, numb: 1, price: obj.price }]);
		}
	};

	const decProductHandler = (obj) => {
		if (obj.numb == 1) {
			let ind = orderProducts.findIndex((item) => item.product === obj.product);
			orderProducts.splice(ind, 1);
			setOrderProducts(orderProducts);
		} else {
			setOrderProducts(
				orderProducts.map((item) => {
					if (item.product === obj.title) {
						return { ...item, numb: (item.numb -= 1) };
					} else {
						return item;
					}
				})
			);
		}
	};

	const incProductHandler = (obj) => {
		setOrderProducts(
			orderProducts.map((item) => {
				if (item.product === obj.title) {
					return { ...item, numb: (item.numb += 1) };
				} else {
					return item;
				}
			})
		);
	};

	const numbChangeHandler = (obj, value) => {
		setOrderProducts(
			orderProducts.map((item) => {
				if (item.product === obj.product) {
					return { ...item, numb: value === "" ? 0 : +value };
				} else {
					return item;
				}
			})
		);
	};

	const categoryHandler = (e) => {
		const newCategories = categories.map((item) => {
			if (e.target.textContent === item.val) {
				dispatch(setCategory(item.val));
				return { ...item, activeClass: "active" };
			} else {
				return { ...item, activeClass: "" };
			}
		});
		dispatch(categoryToggle(newCategories));
	};

	const formSubmitHandler = (data) => {
		let date = new Date();
		let orderDate = data.order_date.replace(/T/, " ");
		console.log(orderDate);
		const fetchData = {
			...data,
			order: orderProducts,
			orderSum: orderSum,
			user_id: user.id,
			date: !data.order_date ? null : orderDate,
			discount: discount,
		};

		addOrder(fetchData)
			.unwrap()
			.then((res) => {
				reset();
				setOrderProducts([]);
				setIsProducts(true);
				setIsDetails(false);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<AddOrderContainer>
			<OrderBlock>
				{isProducts && (
					<div>
						<OrderItem>
							<div>Наименование</div>
							<NumbItem>Кол.</NumbItem>
							<PriceItem>Цена</PriceItem>
							<SumItem>Стоимость</SumItem>
						</OrderItem>
						{orderProducts.map((item) => {
							return (
								<OrderItem key={item.product}>
									<div>{item.product}</div>
									<NumbItem>
										<NumbInputElem val={item} change={numbChangeHandler} incVal={incProductHandler} decVal={decProductHandler} />
									</NumbItem>

									<PriceItem>{item.price} р.</PriceItem>
									<SumItem>{item.price * item.numb} р.</SumItem>
								</OrderItem>
							);
						})}
					</div>
				)}
				{isDetails && (
					<div>
						<Form onSubmit={handleSubmit(formSubmitHandler)}>
							<InputBlock required={true} text="Имя" formRegister={register} name="name" val="" />
							<InputBlock required={true} text="Телефон" formRegister={register} name="phone" val="" />
							<InputBlock required={false} text="Улица" formRegister={register} name="street" val="" />
							<InputBlock required={false} text="Дом" formRegister={register} name="house" val="" />
							<InputBlock required={false} text="Квартира" formRegister={register} name="apart" val="" />
							<InputBlock required={false} text="Подъезд" formRegister={register} name="front_door" val="" />
							<InputBlock required={false} text="Этаж" formRegister={register} name="floor" val="" />
							<InputBlock required={false} text="Комментарии" formRegister={register} name="comments" val="" />
							<SelectBlock
								name="pay_type"
								title="Оплата"
								regHandler={register}
								defaultVal={""}
								options={[{ val: "нал." }, { val: "безнал." }]}
							/>

							<InputBlock required={false} text="Предзаказ" formRegister={register} name="order_date" val="" type="datetime-local" />
						</Form>
					</div>
				)}
				{orderProducts.length && (
					<OrderControl>
						<TotalSum>
							К оплате <Sum>{orderSum}</Sum> руб
						</TotalSum>
						<TotalControl>
							<DiscountBtn onClick={(e) => setDiscActive(!discActive)}>%</DiscountBtn>
							{discActive && (
								<DiscCont>
									{discounts.map((disc) => {
										return (
											<DiscItem
												onClick={(e) => {
													setDiscount(disc);
													setDiscActive(false);
												}}
												key={disc}
											>
												{disc}%
											</DiscItem>
										);
									})}
								</DiscCont>
							)}
							<TotalControl>
								<DiscountBtn
									onClick={(e) => {
										setOrderProducts([]);
										setIsProducts(true);
										setIsDetails(false);
									}}
								>
									<RiDeleteBin5Line size={18} />
								</DiscountBtn>
								{isProducts && (
									<SubmitButton
										onClick={(e) => {
											setIsProducts(false);
											setIsDetails(true);
										}}
									>
										Дальше
									</SubmitButton>
								)}
								{isDetails && (
									<TotalControl>
										<DiscountBtn
											onClick={(e) => {
												setIsProducts(true);
												setIsDetails(false);
											}}
										>
											<RiArrowGoBackFill size={18} />
										</DiscountBtn>
										<SubmitButton onClick={handleSubmit(formSubmitHandler)}>Сохранить</SubmitButton>
									</TotalControl>
								)}
							</TotalControl>
						</TotalControl>
					</OrderControl>
				)}
			</OrderBlock>
			<CategoriesBlock>
				{categories.map((cat) => {
					return (
						<CategoryBtn
							key={cat.val}
							className={cat.activeClass}
							onClick={(e) => {
								categoryHandler(e);
							}}
						>
							<span>{cat.val}</span>
						</CategoryBtn>
					);
				})}
			</CategoriesBlock>
			<ProductsBlock>
				{products.map((res) => {
					return (
						<ProductBtn
							key={res.id}
							onClick={(e) => {
								productHandler(res);
								setIsProducts(true);
								setIsDetails(false);
							}}
						>
							<span>{res.title}</span>
							<span>{res.price} руб.</span>
						</ProductBtn>
					);
				})}
			</ProductsBlock>
		</AddOrderContainer>
	);
};
