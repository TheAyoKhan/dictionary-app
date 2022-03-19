import 'preact/debug';
import React from 'react';
import ReactDOM from 'react-dom';
import AppWrapper from './components/AppWrapper';

ReactDOM.render(
	<React.StrictMode>
		<AppWrapper />
	</React.StrictMode>,
	document.getElementById('root')
);
