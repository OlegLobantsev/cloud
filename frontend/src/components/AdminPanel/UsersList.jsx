import React, { useEffect, useState } from 'react';
import { getUserList } from '../../api/requests';
import './AdminPanel.css';
import User from './User';

function UsersList() {
	const [renderedData, setRenderedData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const response = await getUserList();
			const data = await response.json();

			if (response.ok) {
				setRenderedData(data);
			}
		};

		fetchData();
	}, []);

	const removeItem = (id) => {
		const newRenderedData = renderedData.filter((item) => item.id !== id);
		setRenderedData(newRenderedData);
	};

	return (
		<table>
			<thead>
				<tr>
					<th>Логин</th>
					<th>Имя</th>
					<th>Фамилия</th>
					<th>Почта</th>
					<th>Количество файлов</th>
					<th>Общий размер файлов (мб)</th>
					<th>Администратор</th>
					<th>Облако пользователя</th>
					<th>Удалить</th>
				</tr>
			</thead>
			<tbody>
				{renderedData
					? renderedData.map((user) => (
							<User
								key={user.id}
								id={user.id}
								username={user.username}
								firstName={user.first_name}
								lastName={user.last_name}
								email={user.email}
								numOfFiles={user.count}
								size={(user.size * 9.537 * 10 ** -7).toFixed(2)}
								isStaff={user.is_staff}
								removeItem={removeItem}
							/>
					))
					: null}
			</tbody>
		</table>
	);
}

export default UsersList;
