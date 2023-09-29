import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WProofreaderSDK from '@webspellchecker/wproofreader-sdk-js';
import Editor from './Editor';

WProofreaderSDK.configure({
	autoSearch: true,
	autoDestroy: true,
	enforceAI: true,
	serviceId: 'your-service-id'
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Editor />
	</React.StrictMode>
);
