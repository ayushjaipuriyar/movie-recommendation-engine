import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import MainImgSlider from '../web/MainImageSlider';
import ResultsGrid from '../web/ResultsGrid';
import Typography from '@mui/material/Typography';

function MainBody() {
	const [showResults, setResults] = useState(false);
	const [resultsArray, setResultsarr] = useState([]);

	return (
		<>
			<Grid container spacing={2}>
				<div className='mainContainer'>
					{!showResults && (
						<>
							<br></br>
							<Grid container spacing={2}>
								<Grid item xs></Grid>
								<Grid item xs={4}>
									<Typography
										variant='h2'
										component='h2'
										className='webmainlabel'
									>
										Please Rate these movies
									</Typography>
								</Grid>
								<Grid item xs></Grid>
							</Grid>
							<br></br>
						</>
					)}
					{showResults && (
						<>
							<br></br>
							<Grid container spacing={2}>
								<Grid item xs></Grid>
								<Grid item xs={6}>
									<Typography
										variant='h2'
										component='h2'
										className='webmainlabel'
									>
										Your Recommendations
									</Typography>
								</Grid>
								<Grid item xs></Grid>
							</Grid>
						</>
					)}
					{showResults && (
						<>
							<Grid container spacing={2}>
								<Grid item xs></Grid>
								<Grid item xs={10}>
									<div className='resultscontainer'>
										<ResultsGrid resultsData={resultsArray} />
									</div>
								</Grid>
								<Grid item xs></Grid>
							</Grid>
						</>
					)}
					{!showResults && (
						<>
							<Grid container spacing={2}>
								<Grid item xs></Grid>
								<Grid item xs={2}>
									<div className='slidercontainer'>
										<MainImgSlider
											setResults={setResultsarr}
											setShowResults={setResults}
										/>
									</div>
								</Grid>
								<Grid item xs></Grid>
							</Grid>
						</>
					)}
				</div>
			</Grid>
		</>
	);
}

export default MainBody;
