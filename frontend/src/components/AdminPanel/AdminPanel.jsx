import React, { useContext } from 'react';
import Context from '../../GlobalState/state';
import './AdminPanel.css';
import UsersList from './UsersList';

function AdminPanel() {
	const { isAdmin } = useContext(Context);

	if (!isAdmin) {
		return (
			<div className='admin-panel--access-denied'>
				<span className='content'>У вас нет доступа к панели</span>
			</div>
		);
	}

	return <UsersList />;
}

export default AdminPanel;
