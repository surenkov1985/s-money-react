import React, { useState } from "react";

export const SelectBlock = (props) => {
	const { arr, defaultValue, onChangeHandler } = props;
	const [value, setValue] = useState(defaultValue);
	const [choice, setChoise] = useState(false)
	const changeHandler = (e) => {
		setValue(e.target.value);
	};

	return (
		<label style={{position: "relative"}}>
			<select
			
				value={value}
				onChange={(e) => {
					changeHandler(e);

					if (onChangeHandler) {
						onChangeHandler(e.target.value);
					}
				}}
			>
				{arr.map((opt, index) => {
					return (
						<option key={index} value={opt.val}>
							{opt.text}
						</option>
					);
				})}
				
			</select>
			{choice && <div></div>}
		</label>
		
	);
};
