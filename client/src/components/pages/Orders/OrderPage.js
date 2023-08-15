import React, { useEffect, useState } from "react";
import { AiOutlineCalendar, AiOutlineClose } from "react-icons/ai";

import { useGetOrdersQuery, useLazyGetOrdersQuery } from "../../../stores/apiReducer";
import { SelectBlock } from "./SelectBlock";
import { dateOptions, payValues, statusValues, workerValues } from "../../../utils/variables";
import {
	DateBlock,
	DeleteButton,
	OrderButton,
	OrderDate,
	OrderHead,
	OrderItem,
	OrderItemDesc,
	OrderItemHead,
	OrdersCont,
	OrderTime,
	OrderDesc,
	ProductsList,
	PayTypeBlock,
	DatesBlock,
	CalendarIcon,
} from "./style";
import { Calendar } from "../../Calendar/Calendar";

export const OrderPage = () => {
	const date = new Date();
	const [data, setData] = useState([]);
	const [orderData, setOrderData] = useState()
	let [getData] = useLazyGetOrdersQuery();
	const user_id = JSON.parse(localStorage.getItem("restPadUser")).id;
	const [isPeriod, setIsPeriod] = useState(false);

	useEffect(() => {
		getData({ date: date.toISOString().slice(0, 10), endDate: "", user_id: user_id })
			.unwrap()
			.then((data) => {
				setData(data);
			})
			.catch((error) => {
				console.log(error.message);
			});
	}, []);

	const onDateSelect = (value) => {
		let obj = dateOptions.find((item) => item.val === value);

		if (obj.val === "period") {
			setIsPeriod(true);
		} else {
			getData({ date: obj.dates.date, endDate: obj.dates.endDate, user_id: user_id })
				.unwrap()
				.then((data) => {
					setData(data);
					setOrderData(data)
				})
				.catch((error) => {
					console.log(error.message);
				});
		}
	};

	const periodSelect = (obj) => {
		setIsPeriod(false);
		if (obj.date && obj.endDate) {
			getData({ date: obj.date.toISOString(), endDate: obj.endDate.toISOString(), user_id: user_id })
				.unwrap()
				.then((data) => {
					setData(data);
					setOrderData(data)
				})
				.catch((error) => {
					console.log(error.message);
				});
		}
	};

	const orderDataHandler = () => {
		setOrderData()
	}

	return (
		<OrdersCont>
			{isPeriod && <Calendar datesSelect={periodSelect} />}
			<OrderHead>
				<DatesBlock>
					<SelectBlock arr={dateOptions} defaultValue={dateOptions[1].val} onChangeHandler={onDateSelect} />
					<CalendarIcon onClick={() => setIsPeriod(!isPeriod)} />
				</DatesBlock>
				<PayTypeBlock>Сумма</PayTypeBlock>
				<PayTypeBlock>%</PayTypeBlock>
				<div>
					<SelectBlock arr={payValues} defaultValue={payValues[0].val} />
				</div>
				<div></div>
				<div></div>
				<div>
					<SelectBlock arr={workerValues} defaultValue={workerValues[0].val} />
				</div>
				<div>
					<SelectBlock arr={statusValues} defaultValue={statusValues[0].val} />
				</div>
				<div></div>
			</OrderHead>
			{data &&
				data.map((order) => {
					let time = new Date(order.createdAt);
					let day = new Date(order.createdAt);
					let orderData = JSON.parse(order.orderProducts);
					let orderDesc =
						order.street +
						(order.house ? " д." + order.house : "") +
						(order.apart ? " кв." + order.apart : "") +
						(order.front_door ? " п." + order.front_door : "") +
						(order.floor ? " эт." + order.floor : "");

					return (
						<OrderItem key={order.id}>
							<OrderItemHead>
								<DateBlock>
									<OrderTime>{time.toLocaleTimeString().slice(0, 5)} </OrderTime>
									<OrderDate>{day.toLocaleDateString()}</OrderDate>
									<OrderButton>Изменить</OrderButton>
									<OrderButton>Печать</OrderButton>
								</DateBlock>
								<div></div>
								<div></div>
								<div></div>
								<div></div>
								<div></div>
								<div>
									<SelectBlock arr={workerValues} defaultValue={workerValues[0].val} />
								</div>
								<div>
									<SelectBlock arr={statusValues} defaultValue={statusValues[0].val} />
								</div>
								<div></div>
							</OrderItemHead>
							<OrderItemDesc>
								<div>
									{orderData.map((item, index) => {
										return (
											<ProductsList key={index}>
												<div>{item.product}</div>
												<div>{item.numb}</div>
												<div>{item.price}</div>
											</ProductsList>
										);
									})}
								</div>
								<PayTypeBlock>{order.order_sum}</PayTypeBlock>
								<PayTypeBlock>{order.discount ? order.discount : ""}</PayTypeBlock>
								<PayTypeBlock>
									<input type="checkbox" />
								</PayTypeBlock>
								<div></div>
								<OrderDesc>
									{orderDesc && (
										<span>
											<strong>адрес: </strong>
											{orderDesc}
										</span>
									)}
									{order.comments && (
										<span>
											<strong>комментарии: </strong> {order.comments}
										</span>
									)}
								</OrderDesc>
								<div></div>
								<div></div>
								<PayTypeBlock>
									<DeleteButton>
										<AiOutlineClose color="red" size={20} />
									</DeleteButton>
								</PayTypeBlock>
							</OrderItemDesc>
						</OrderItem>
					);
				})}
		</OrdersCont>
	);
};
