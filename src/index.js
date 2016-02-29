import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDp5YooPHcCI_gG0Usmi8Y4_DdomzKokr0';

// create a new component.  this component should produce some html

const App = () => { // 1. create a factory // 2. create a virtual dom element
	return (
		<div>
			<SearchBar />
		</div>
	);
}

// take this component's html and put it on the page(in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
				//3. call and create actual DOM element   &   4. put it in a specific location