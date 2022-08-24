import React from 'react';

const SearchBox = (props) => {
	return (
		<div className='search-box col-sm-5'>
			<input
				className='form-control'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Enter movie name...'
			></input>
		</div>
	);
};

export default SearchBox;
