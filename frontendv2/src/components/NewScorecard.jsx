import React from 'react';
import { Grid, TextField } from '@material-ui/core';

const NewScorecard = () => {
	return (
		<Grid container direction='row' spacing={4}>
			<Grid item direction='column' xs={6}>
				<TextField required label='Away Team' />
				<TextField required label='1' />
				<TextField required label='2' />
				<TextField required label='3' />
				<TextField required label='4' />
				<TextField required label='5' />
				<TextField required label='6' />
				<TextField required label='7' />
				<TextField required label='8' />
				<TextField required label='9' />
			</Grid>
			<Grid item direction='column' xs={6}>
				<TextField required label='Home Team' />
				<TextField required label='1' />
				<TextField required label='2' />
				<TextField required label='3' />
				<TextField required label='4' />
				<TextField required label='5' />
				<TextField required label='6' />
				<TextField required label='7' />
				<TextField required label='8' />
				<TextField required label='9' />
			</Grid>
		</Grid>
	);
};

export default NewScorecard;
