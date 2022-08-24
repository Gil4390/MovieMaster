import React from 'react';

const MovieList = (props) => {
	const WatchListComponent = props.watchListComponent;

	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container'>
					<img src={movie.Poster} alt='movie'></img>
					<div
						onClick={() => props.handleWatchListClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'
					>
						<WatchListComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;
