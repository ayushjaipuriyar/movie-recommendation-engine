import React, { useEffect, useState } from 'react';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import RatingSlider from './MobRatingSlider';
import RatingSave from './MobRatingSaveButton';

export default function TextMobileStepper(props) {
	const [activeStep, setActiveStep] = React.useState(0);
	const [ratingValue, setRating] = useState([]);
	const [movieArr, setMovarr] = useState([]);
	function setRatingarr(inptval) {
		if (movieArr.includes(inptval.movieId)) {
			setRating((oldval) => [
				oldval.filter((val) => inptval.movieId !== val.movieId),
			]);
			setRating((oldval) => [...oldval, inptval]);
		} else {
			setRating((oldval) => [...oldval, inptval]);
			setMovarr((oldval) => [...oldval, inptval.movieId]);
		}
	}
	const [resetSlider, setSlider] = React.useState(false);

	const [tutorialSteps, setImages] = useState([
		{
			label: 'Loading',
			imgPath:
				'https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47on878hh6llipvahqvp3lran935mv99dsn3oew9k4&rid=giphy.gif&ct=g',
		},
	]);
	const [maxSteps, setMaxsteps] = useState(tutorialSteps.length);

	useEffect(() => {
		const getMovies = async () => {
			try {
				const apiurl = 'http://127.0.0.1:5000/getrandom?count=10';
				const apiresp = await fetch(apiurl);
				// console.log(apiresp);
				const apidata = await apiresp.json();
				// console.log(apidata.ids);
				let tmpdata = [];
				apidata.ids.forEach((rw) => {
					let tmpdict = {};
					tmpdict.label = rw.title;
					tmpdict.imgPath = rw.imageurl;
					tmpdict.movieId = rw.movieId;
					tmpdata.push(tmpdict);
					// setImages((oldval)=>[...oldval,tmpdict])
					setMaxsteps((old) => old + 1);
				});
				setMaxsteps((old) => old - 1);
				setImages(tmpdata);
			} catch (e) {
				alert(
					'Error in getting the movies. Please try to refresh the page and try again!!!',
				);
			}
		};
		getMovies();
	}, []);

	function toggleSlider() {
		setSlider(!resetSlider);
	}

	const handleNext = () => {
		// console.log(ratingValue);
		if (!movieArr.includes(tutorialSteps[activeStep].movieId)) {
			alert('Please select a rating!!');
			return;
		}
		toggleSlider();
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		toggleSlider();
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	return (
		<>
			<div className='root'>
				<Paper square elevation={0} className='header'>
					<Typography>{tutorialSteps[activeStep].label}</Typography>
				</Paper>
				<img
					className='image'
					src={tutorialSteps[activeStep].imgPath}
					alt={tutorialSteps[activeStep].label}
				/>
				<MobileStepper
					steps={maxSteps}
					position='static'
					variant='text'
					activeStep={activeStep}
					nextButton={
						<Button
							size='small'
							onClick={handleNext}
							disabled={activeStep === maxSteps - 1}
						>
							Next
							<KeyboardArrowLeftIcon />
							<KeyboardArrowRightIcon />
						</Button>
					}
				/>
			</div>
			<RatingSlider
				resetSlider={resetSlider}
				ratingFunc={setRatingarr}
				selmovieid={tutorialSteps[activeStep].movieId}
				selmoviename={tutorialSteps[activeStep].label}
			/>
			{activeStep === tutorialSteps.length - 1 && (
				<RatingSave
					allMovieArry={movieArr}
					currntSelctdMovie={tutorialSteps[activeStep].movieId}
					saveRatingval={ratingValue}
					getResults={props.setResults}
					showRsultspage={props.setShowResults}
				/>
			)}
		</>
	);
}
