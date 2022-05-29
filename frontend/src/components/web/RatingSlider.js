import React, { useState, useEffect } from 'react';
import Slider from '@mui/material/Slider';

const marks = [
	{
		value: 0,
		label: '0',
	},
	{
		value: 20,
		label: '1',
	},
	{
		value: 40,
		label: '2',
	},
	{
		value: 60,
		label: '3',
	},
	{
		value: 80,
		label: '4',
	},
	{
		value: 100,
		label: '5',
	},
];

function valuetext(value) {
	return `${value}`;
}

export default function DiscreteSlider(props) {
	const [doReset, setReset] = useState(props.resetSlider);
	const [resetValue, setVal] = useState(20);
	const handleChange = (event, newValue) => {
		props.ratingFunc({
			ratingval: newValue / 20,
			movieId: props.selmovieid,
			moviename: props.selmoviename,
		});
		setVal(newValue);
	};

	useEffect(() => {
		setVal(20);
	}, [props.resetSlider]);

	return (
		<div style={{ marginTop: '4vh' }}>
			<Slider
				defaultValue={resetValue}
				getAriaValueText={valuetext}
				aria-labelledby='discrete-slider-custom'
				step={20}
				marks={marks}
				value={resetValue}
				onChange={handleChange}
			/>
		</div>
	);
}
