import { createSlice } from "@reduxjs/toolkit";

export const calendarSlise = createSlice({
	name: "calendar",
	initialState: {
		calendarDays: [],
		months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
		weekDays: [
			{ weekDay: "Пн" },
			{ weekDay: "Вт" },
			{ weekDay: "Ср" },
			{ weekDay: "Чт" },
			{ weekDay: "Пт" },
			{ weekDay: "Сб" },
			{ weekDay: "Вс" },
		],
	},
	reducers: {
        setCalendar(state, actions) {
            state.calendarDays = actions.payload
        },
		replaceItem(state, actions) {
			state.calendarDays = state.calendarDays.map((item) => {
				if (item.id === actions.payload.id) {
					return actions.payload;
				}
				return item;
			});
		},
	},
});

export const { replaceItem, setCalendar } = calendarSlise.actions;
export default calendarSlise.reducer;
