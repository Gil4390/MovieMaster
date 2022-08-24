import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddToWatchList from './components/AddToWatchList';
import RemoveFromWatchList from './components/RemoveFromWatchList';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [watchList, setWatchList] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	useEffect(() => {
		const movieWatchList = JSON.parse(
			localStorage.getItem('react-movie-app-watch-list')
		);

		if (movieWatchList) {
			setWatchList(movieWatchList);
		}
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-watch-list', JSON.stringify(items));
	};

	const addMovieToWatchList = (movie) => {
		const newWatchList = [...watchList, movie];
		setWatchList(newWatchList);
		saveToLocalStorage(newWatchList);
	};

	const removeMovieFromWatchList = (movie) => {
		const newWatchList = watchList.filter(
			(m) => m.imdbID !== movie.imdbID
		);

		setWatchList(newWatchList);
		saveToLocalStorage(newWatchList);
	};
	

	return (
		<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Movie Master' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
				<MovieList
					movies={movies}
					handleWatchListClick={addMovieToWatchList}
					watchListComponent={AddToWatchList}
				/>
			</div>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Watch List' />
			</div>
			<div className='row'>
				<MovieList
					movies={watchList}
					handleWatchListClick={removeMovieFromWatchList}
					watchListComponent={RemoveFromWatchList}
				/>
			</div>
		</div>
	);
};

export default App;
