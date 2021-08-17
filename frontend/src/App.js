import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Appbar from './components/Appbar';
import NewScorecard from './components/NewScorecard';
import Game from './components/Game';
import { Box, createTheme, ThemeProvider } from '@material-ui/core';
import './App.css';

const queryClient = new QueryClient();

function App() {
	const theme = createTheme({
		palette: {
			type: 'light',
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<QueryClientProvider client={queryClient}>
				<Box>
					<Appbar />
					<Router>
						<Switch>
							<Route path='/' exact component={Home} />
							<Route path='/new' component={NewScorecard} />
							<Route path='/game' component={Game} />
						</Switch>
					</Router>
				</Box>
			</QueryClientProvider>
		</ThemeProvider>
	);
}

export default App;
