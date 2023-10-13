import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Context from '../../GlobalState/state';
import './StartPage.css';
import img from './cloud.svg';

function StartPage() {
	const navigate = useNavigate();
	const { sessionId } = useContext(Context);


	useEffect(() => {
		if (sessionId) {
			navigate('/my-cloud/');
		}
	}, [sessionId]);

	return !sessionId ? (
		<section className='start-page'>
			<div className='start-page--welcome'>
				<h1 className='start-page--welcome--subtitle'>
					<Link to='/registr'>Зарегистрируйтесь, чтобы продолжить.</Link>
				</h1>
			</div>
			<img
				className='start-page--image'
				src={img}
			/>
		</section>
	) : null;
}

export default StartPage;
