import React, { useState, useEffect } from 'react';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';


export default function TextMobileStepper(props) {
	const [activeStep, setActiveStep] = React.useState(0);
	//   const maxSteps = tutorialSteps.length;
	const [data, setData] = useState(props.resultsData);
	const [tutorialSteps, setImages] = useState([
		{
			label: 'Loading',
			imageurl: 'https://media.giphy.com/media/sSgvbe1m3n93G/giphy.gif',
		},
	]);
	const [maxSteps, setMaxsteps] = useState(tutorialSteps.length - 1);

	useEffect(() => {
		if (data.length > 0) {
			setMaxsteps(props.resultsData.length - 1);
			setImages(props.resultsData);
		}
		// getMovies()
	}, [props.resultsData]);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	return (
		<div className='resultSliderRoot'>
			<Paper square elevation={0} className='header'>
				<Typography>{tutorialSteps[activeStep].label}</Typography>
			</Paper>
			<img
				className='resultImg'
				src={tutorialSteps[activeStep].imageurl}
				// alt={tutorialSteps[activeStep].label}
			/>
			<MobileStepper
				// steps={maxSteps}
				steps={props.resultsData.length}
				position='static'
				variant='text'
				activeStep={activeStep}
				nextButton={
					<Button
						size='small'
						onClick={handleNext}
						disabled={activeStep === maxSteps}
					>
						Next
						<KeyboardArrowLeft />
						<KeyboardArrowRight />
					</Button>
				}
				backButton={
					<Button size='small' onClick={handleBack} disabled={activeStep === 0}>
						<KeyboardArrowRight />
						<KeyboardArrowLeft />
						Back
					</Button>
				}
			/>
		</div>
	);
}
