import { Button, Container } from '@material-ui/core';
import React from 'react';
import ScorecardList from './ScorecardList';
import { useHistory } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';

const Home = () => {
	const history = useHistory();
	const onNewScorecard = () => {
		history.push('/new');
	};

	return (
		<Container className='pt-2'>
			<Button
				className='my-2'
				variant='contained'
				color='primary'
				onClick={onNewScorecard}
				startIcon={<AddIcon />}
			>
				New Scorecard
			</Button>
			<ScorecardList />
		</Container>
	);
};

export default Home;
