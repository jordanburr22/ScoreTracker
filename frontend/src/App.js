import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Appbar from './components/Appbar';
import NewScorecard from './components/NewScorecard';
import { Container } from '@material-ui/core';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Appbar />
			<Container>
				<Router>
					<Switch>
						<Route path='/' exact component={Home} />
						<Route path='/new' exact component={NewScorecard} />
					</Switch>
				</Router>
			</Container>
		</QueryClientProvider>
	);
}

export default App;
