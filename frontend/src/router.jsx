import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AdminPanel from './components/AdminPanel/AdminPanel';
import SignInForm from './components/AuthForms/SignInForm';
import SignUpForm from './components/AuthForms/SignUpForm';
import FileStorage from './components/FileStorage/FileStorage';
import Header from './components/Header/Header';
import Page404 from './components/Page404/Page404';
import StartPage from './components/StartPage/StartPage';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route
					path='/'
					element={<StartPage />}
				/>
				<Route
					path='/registr'
					element={<SignUpForm />}
				/>
				<Route
					path='/sign-in'
					element={<SignInForm />}
				/>
				<Route
					path='/admin'
					element={<AdminPanel />}
				/>
				<Route
					path='/my-cloud'
					element={<FileStorage />}
				/>
				<Route
					path='*'
					element={<Page404 />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
