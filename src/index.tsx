import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './i18n';
import WebFont from 'webfontloader';
import App from './App';
import reportWebVitals from './reportWebVitals';

WebFont.load({
	google: {
		families: ['Oswald:400', 'Roboto:400', 'Fredoka One:400'],
	},
});

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
