import React from 'react';
import ReactDOM from 'react-dom/client';
import ContextProvider from './GlobalState/provider';
import './index.css';
import App from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ContextProvider>
		<App />
	</ContextProvider>
);
