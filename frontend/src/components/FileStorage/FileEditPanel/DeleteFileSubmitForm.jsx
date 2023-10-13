import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import state from '../../../GlobalState/state';
import { deleteFile } from '../../../api/requests';
import '../../formStyle/Form.css';
import img from '../../formStyle/close.svg';

function DeleteFileSubmitForm({
	currentFile,
	setForm,
	setFiles,
	setCurrentFile,
}) {
	const { currentStorageUser } = useContext(state);

	const onSubmitHandler = async (e) => {
		e.preventDefault();

		let response;

		if (currentStorageUser) {
			response = await deleteFile(currentFile.id, currentStorageUser);
		} else {
			response = await deleteFile(currentFile.id);
		}

		const data = await response.json();

		if (response.ok) {
			setFiles(data);
			setCurrentFile();
			setForm();
		}
	};

	const onCloseHandler = () => {
		setForm();
	};

	return (
		<form
			className='form'
			onSubmit={onSubmitHandler}
		>
			<h2 className='form--title'>Удалить файл:  {currentFile.file_name}  ?</h2>
			<input
				type='submit'
				value='Да'
				required
			/>
			<button
				className='close'
				onClick={onCloseHandler}
				onKeyDown={onCloseHandler}
				type='button'
				aria-label='Close'
			>
				<img
					src={img}
					alt='close'
				/>
			</button>
			<div
				className='no'
				onClick={onCloseHandler}
				onKeyDown={onCloseHandler}
				role='button'
				tabIndex={0}
			>
				Отмена
			</div>
		</form>
	);
}

DeleteFileSubmitForm.propTypes = {
	currentFile: PropTypes.instanceOf(Object).isRequired,
	setForm: PropTypes.func.isRequired,
	setFiles: PropTypes.func.isRequired,
	setCurrentFile: PropTypes.func.isRequired,
};

export default DeleteFileSubmitForm;
