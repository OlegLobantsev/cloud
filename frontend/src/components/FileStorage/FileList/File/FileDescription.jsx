import PropTypes from 'prop-types';
import React from 'react';
import './File.css';

function FileDescription({ name, upload, download, size, comment }) {
	return (
		<div className='file-description'>
			<div className='file-description--item'>
				<div className='file-description--item--name'>Имя файла:</div>
				<div className='file-description--item--content'>{name}</div>
			</div>
			<div className='file-description--item'>
				<div className='file-description--item--name'>Дата загрузки:</div>
				<div className='file-description--item--content'>{upload}</div>
			</div>
			<div className='file-description--item'>
				<div className='file-description--item--name'>Дата скачивания:</div>
				<div className='file-description--item--content'>{download}</div>
			</div>
			<div className='file-description--item'>
				<div className='file-description--item--name'>Размер:</div>
				<div className='file-description--item--content'>{size}</div>
			</div>
			<div className='file-description--item'>
				<div className='file-description--item--name'>Комментарий:</div>
				<div className='file-description--item--content'>{comment}</div>
			</div>
		</div>
	);
}

FileDescription.propTypes = {
	// eslint-disable-next-line react/require-default-props
	name: PropTypes.string,
	upload: PropTypes.string.isRequired,
	download: PropTypes.string,
	size: PropTypes.number.isRequired,
	// eslint-disable-next-line react/require-default-props
	comment: PropTypes.string,
};

FileDescription.defaultProps = {
	download: '-',
};

export default FileDescription;
