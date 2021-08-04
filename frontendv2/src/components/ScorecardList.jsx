import {
	Box,
	Card,
	CardContent,
	Grid,
	Typography,
} from '@material-ui/core';
import React from 'react';
import useScorecards from '../hooks/useScorecards';

const Scorecard = ({ scorecard }) => (
	<Card key={scorecard._id} className='my-3 bg-gray-300'>
		<CardContent>
			<Grid container spacing={2}>
				<Grid container>
					<Grid item xs={6}>
						<Typography variant='h5'>{scorecard.awayTeam.name}</Typography>
					</Grid>
					<Grid item xs={2}>
						<Typography variant='h6'>{scorecard.awayTeam.runs}</Typography>
					</Grid>
					<Grid item xs={2}>
						<Typography variant='h6'>{scorecard.awayTeam.hits}</Typography>
					</Grid>
					<Grid item xs={2}>
						<Typography variant='h6'>{scorecard.awayTeam.errors}</Typography>
					</Grid>
				</Grid>
				<Grid container>
					<Grid item xs={6}>
						<Typography variant='h5'>{scorecard.homeTeam.name}</Typography>
					</Grid>
					<Grid item xs={2}>
						<Typography variant='h6'>{scorecard.homeTeam.runs}</Typography>
					</Grid>
					<Grid item xs={2}>
						<Typography variant='h6'>{scorecard.homeTeam.hits}</Typography>
					</Grid>
					<Grid item xs={2}>
						<Typography variant='h6'>{scorecard.homeTeam.errors}</Typography>
					</Grid>
				</Grid>
			</Grid>
		</CardContent>
	</Card>
);

const ScorecardList = () => {
	const { data } = useScorecards();

	const scorecardItems = data?.map((scorecard) => (
		<Scorecard key={scorecard._id} scorecard={scorecard} />
	));

	return <Box>{scorecardItems}</Box>;
};

export default ScorecardList;
