import React from 'react';

import Table from './containers/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div>
			<nav class='navbar navbar-light bg-light'>
				<a class='navbar-brand' href='./'>
					CRUD Database
				</a>
			</nav>

			<Table></Table>
		</div>
	);
}

export default App;
