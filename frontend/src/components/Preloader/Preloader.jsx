import React from 'react';
import './Preloader.css';
import preloader from './preloader.gif';

function Preloader() {
	return (
		<img
			className='preloader'
			src={preloader}
			alt='preloader'
		/>
	);
}

export default Preloader;
