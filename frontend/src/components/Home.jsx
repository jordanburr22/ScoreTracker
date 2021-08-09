import { Button } from '@material-ui/core';
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
		<>
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
		</>
	);
};

export default Home;
