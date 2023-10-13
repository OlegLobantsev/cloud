import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import state from '../../GlobalState/state';

function ToStorageBtn({ userId, nameStorage }) {
	const { setCurrentStorageUser, setCurrentNameStorage } = useContext(state);

	const onClickHandler = () => {
		setCurrentStorageUser(userId), setCurrentNameStorage(nameStorage);
	};

	return (
		<Link
			to={{
				pathname: '/my-cloud',
			}}
			onClick={onClickHandler}
			className='to-storage-btn'
		>
			Открыть
		</Link>
	);
}

ToStorageBtn.propTypes = {
	userId: PropTypes.number.isRequired,
	nameStorage: PropTypes.string.isRequired,
};

export default ToStorageBtn;
