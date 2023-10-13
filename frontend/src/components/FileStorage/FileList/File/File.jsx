import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './File.css';
import FileDescription from './FileDescription';
import img from './file.svg';

function File({
	id,
	name,
	comment,
	size,
	upload,
	download,
	currentFile,
	setCurrentFile,
}) {
	const [showComment, setShowComment] = useState(false);

	const onClickHandler = () => {
		if (currentFile && currentFile.id === id) {
			setCurrentFile();
			return;
		}

		setCurrentFile({
			id,
			file_name: name,
			comment,
		});
	};

	const onMouseOverHandler = () => {
		setShowComment(true);
	};

	const onMouseLeaveHandler = () => {
		setShowComment(false);
	};

	return (
		<div
			className='file'
			onKeyDown={onClickHandler}
			onClick={onClickHandler}
			onMouseOver={onMouseOverHandler}
			onFocus={onMouseOverHandler}
			onMouseLeave={onMouseLeaveHandler}
			role='button'
			tabIndex={0}
		>
			<img
				src={img}
				alt='file'
			/>
			<div
				className={`file-name ${
					currentFile && currentFile.id === id ? 'current' : ''
				}`}
			>
				{name}
			</div>
			{showComment ? (
				<FileDescription
					name={name}
					upload={upload}
					download={download}
					size={size}
					comment={comment}
				/>
			) : null}
		</div>
	);
}

File.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	// eslint-disable-next-line react/require-default-props
	comment: PropTypes.string,
	size: PropTypes.number.isRequired,
	upload: PropTypes.string.isRequired,
	download: PropTypes.string,
	currentFile: PropTypes.instanceOf(Object),
	setCurrentFile: PropTypes.func.isRequired,
};

File.defaultProps = {
	currentFile: undefined,
	download: '-',
};

export default File;
