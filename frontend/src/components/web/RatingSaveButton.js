import React, { useState } from 'react';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import CircularProgress from '@mui/material/CircularProgress';

export default function IconLabelButtons(props) {
	const [showLoading, setLoading] = useState(false);

	async function clickFunc() {
		if (!props.allMovieArry.includes(props.currntSelctdMovie)) {
			alert('Please select a rating!!');
			return;
		}
		try {
			const apiUrl = 'http://127.0.0.1:5000/getrecomcollab';
			const databody = [];
			props.saveRatingval.forEach((rw) => {
				let tmprw = {};
				tmprw.title = rw.moviename;
				tmprw.rating = rw.ratingval;
				databody.push(tmprw);
			});
			setLoading(true);
			const recomresp = await fetch(apiUrl, {
				method: 'POST',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(databody),
			});
			const recomjson = await recomresp.json();
			console.log(recomjson);
			setLoading(false);
			props.getResults((oldval) => [...oldval, ...recomjson]);
			props.showRsultspage(true);
		} catch (e) {
			setLoading(false);
			alert(
				'Error in getting the movies. Please try to refresh the page and try again!!!',
			);
		}
	}

	return (
		<div className='ratingsavebtn'>
			{!showLoading && (
				<Button
					className='saveButton'
					variant='contained'
					color='primary'
					size='large'
					startIcon={<SaveIcon />}
					onClick={clickFunc}
				>
					Save
				</Button>
			)}
			{showLoading && <CircularProgress color='secondary' />}
		</div>
	);
}
