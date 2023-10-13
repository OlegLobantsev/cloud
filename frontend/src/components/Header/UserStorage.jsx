import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../../GlobalState/state';

function UserStorage({ storageUserId }) {
	const { setCurrentStorageUser, setCurrentNameStorage, currentNameStorage } = useContext(Context);

	const navigate = useNavigate();

	const onClickHandler = () => {
		setCurrentStorageUser(), setCurrentNameStorage();
		navigate('/admin');
	};

	return (
		<div className='storage-user'>
			<span className='storage-user-id'>
				{`Облако пользователя с логином: "${currentNameStorage}" и id: ${storageUserId}`}
			</span>
			<button
				className='storage-user--exit-btn'
				type='button'
				onClick={onClickHandler}
			>
				Вернуться в панель управления
			</button>
		</div>
	);
}

UserStorage.propTypes = {
	storageUserId: PropTypes.number.isRequired,
	storageUserName: PropTypes.string,
};

export default UserStorage;
