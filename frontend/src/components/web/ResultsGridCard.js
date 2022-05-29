import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';


export default function MediaCard(props) {

	return (
		<Card style={{ maxWidth: '345px', boxShadow: '0px 0px 30px 1px #333333' }}>
			<CardActionArea>
				<CardMedia className="media"image={props.inptdata.imageurl} title='Movie' />
			</CardActionArea>
		</Card>
	);
}
