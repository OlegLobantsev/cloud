import React, { Children, memo, useContext } from 'react';
import {
	Link,
	RouterProvider,
	matchPath,
	renderMatches,
	useInRouterContext,
	useLocation,
} from 'react-router-dom';
import Context from '../../GlobalState/state';
import './Header.css';
import UserStorage from './UserStorage';
import Username from './Username';

function Header() {
	const { sessionId, username, currentStorageUser, isAdmin } =
		useContext(Context);

	return (
		<section className='header'>
			{isAdmin ? (
				<>
					{currentStorageUser === undefined ? (
						<>
							<div className='header--logo'>
								<Link to='/'>Облако</Link>
							</div>
							<div className='header--admin'>
								<Link to='/admin'>Панель управения</Link>
							</div>
						</>
					) : null}
				</>
			) : (
				<div className='header--logo'>
					{sessionId !== undefined ? (
						<Link to='/'>Облако</Link>
					) : (
						<>Облако для ваших файлов.</>
					)}
				</div>
			)}
			{currentStorageUser ? (
				<UserStorage storageUserId={currentStorageUser} />
			) : null}
			<div className='header--menu-container'>
				{!sessionId ? (
					<>
						<div className='header--menu-container--item'>
							<Link to='/sign-in'>Вход</Link>
						</div>
						<div className='header--menu-container--item'>
							<Link to='/registr'>Регистрация</Link>
						</div>
					</>
				) : (
					<Username username={username} />
				)}
			</div>
		</section>
	);
}

export default Header;
