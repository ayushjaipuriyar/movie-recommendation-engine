import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import CardCntnt from '../web/ResultsGridCard';
export default function NestedGrid(props) {
	const [data, setData] = useState(props.resultsData);

	function FormRow() {
		let i = 0;
		return (
			<React.Fragment>
				{data.map((rw) => (
					<Grid item xs={3} key={i++}>
						<CardCntnt inptdata={rw} />
					</Grid>
				))}
			</React.Fragment>
		);
	}

	return (
		<div className='resultRoot'>
			<Grid container spacing={1}>
				<Grid container item xs={12} spacing={3}>
					<FormRow />
				</Grid>
			</Grid>
		</div>
	);
}
