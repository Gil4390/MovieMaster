import React from 'react';

const MovieListHeading = (props) => {
	return (
		<div className='col'>
			<h1>{props.heading}</h1>
			
			<img src='./assets/popcorn.png' alt='popcorn'></img>
		</div>
	);
};

export default MovieListHeading;
