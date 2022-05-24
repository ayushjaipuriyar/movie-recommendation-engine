import React from 'react';
// import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const useStyles = makeStyles({
// 	root: {
// 		maxWidth: 345,
// 		boxShadow: '0px 0px 30px 1px #333333',
// 	},
// 	media: {
// 		height: 500,
// 	},
// });

export default function MediaCard(props) {
	// const classes = useStyles();

	return (
		<Card style={{ maxWidth: '345px', boxShadow: '0px 0px 30px 1px #333333' }}>
			<CardActionArea>
				<CardMedia className="media"image={props.inptdata.imageurl} title='Movie' />
			</CardActionArea>
		</Card>
	);
}
