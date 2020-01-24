import React from 'react';
import styled from 'styled-components';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home, MovieDetails } from './scenes';
import { Nav } from './components';

const Layout = styled.section`
	width: 100%;
	height: 100vh;
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 20px;
	display: grid;
	grid-template-rows: 80px 80px 1fr;
	grid-template-areas:
    "nav"
    "."
	"content";
`;

function App() {
	const history = createBrowserHistory();
	return (
        <Router history={history}>
			<Layout>
				<Nav />
				<Route exact path='/' component={Home} />
				<Route exact path='/movie/:movieId' component={MovieDetails} />
			</Layout>
		</Router>
	);
}

export default App;
