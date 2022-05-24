import React, { useState } from 'react';
// import { makeStyles } from '@mui/styles';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardCntnt from '../web/ResultsGridCard';

// const useStyles = makeStyles((theme) => ({
// 	paper: {
// 		padding: theme.spacing(1),
// 		textAlign: 'center',
// 		color: theme.palette.text.secondary,
// 		backgroundColor: 'transparent',
// 		border: 'none',
// 		borderColor: 'transparent',
// 		paddingLeft: '10%',
// 	},
// }));

export default function NestedGrid(props) {
	// const classes = useStyles();
	// const data=[1,2,3,4]
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
