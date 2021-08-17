import React, { useState } from 'react';
import {
	Grid,
	MenuItem,
	TextField,
	Select,
	Button,
	Checkbox,
	FormControlLabel,
} from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const NewScorecard = () => {
	const history = useHistory();
	const { control, handleSubmit } = useForm();
	const [hasDH, setHasDH] = useState(false);

	const positionOptions = [
		'P',
		'C',
		'1B',
		'2B',
		'3B',
		'SS',
		'LF',
		'CF',
		'RF',
		'DH',
	].map((position) => <MenuItem value={position}>{position}</MenuItem>);

	const awayPlayerInputs = Array.from({ length: 9 }, (_, i) => i + 1).map(
		(player) => (
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<Controller
						name={`away-${player}-name`}
						control={control}
						render={({ field }) => (
							<TextField {...field} required label={player} />
						)}
					/>
				</Grid>
				<Grid item xs={6}>
					<Controller
						name={`away-${player}-position`}
						control={control}
						render={({ field }) => (
							<Select {...field} required>
								{positionOptions}
							</Select>
						)}
					/>
				</Grid>
			</Grid>
		)
	);

	const homePlayerInputs = Array.from({ length: 9 }, (_, i) => i + 1).map(
		(player) => (
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<Controller
						name={`home-${player}-name`}
						control={control}
						render={({ field }) => (
							<TextField {...field} required label={player} />
						)}
					/>
				</Grid>
				<Grid item xs={6}>
					<Controller
						name={`home-${player}-position`}
						control={control}
						render={({ field }) => (
							<Select {...field} required >
								{positionOptions}
							</Select>
						)}
					/>
				</Grid>
			</Grid>
		)
	);

	const onSubmit = (values) => history.push('/game');

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='p-3'>
			<Grid container spacing={2}>
				<Grid item container spacing={4} className='text-center'>
					<Grid item xs={12} sm={4}>
						<Controller
							name='location'
							control={control}
							render={({ field }) => (
								<TextField {...field} required label='Location' />
							)}
						/>
					</Grid>
					<Grid item xs={12} sm={4} className='text-center'>
						<Controller
							name='firstPitch'
							control={control}
							render={({ field }) => (
								<TextField
									{...field}
									label='Scheduled First Pitch'
									required
									type='datetime-local'
									InputLabelProps={{ shrink: true }}
								/>
							)}
						/>
					</Grid>
					<Grid item xs={12} sm={4} className='text-center'>
						<FormControlLabel
							control={
								<Checkbox onChange={(e) => setHasDH(e.target.checked)} />
							}
							label='Enable DH?'
						/>
					</Grid>
				</Grid>
				<Grid container item xs={12} spacing={4} className='justify-center'>
					<Grid item direction='column' xs={5} className='text-center'>
						<Controller
							name='awayTeamName'
							control={control}
							render={({ field }) => (
								<TextField {...field} required label='Away Team' fullWidth />
							)}
						/>
						{awayPlayerInputs}
					</Grid>
					<Grid item direction='column' xs={5} className='text-center'>
						<Controller
							name='homeTeamName'
							control={control}
							render={({ field }) => (
								<TextField {...field} required label='Home Team' fullWidth />
							)}
						/>
						{homePlayerInputs}
					</Grid>
				</Grid>
				{!hasDH && (
					<Grid container item xs={12} spacing={4} className='justify-center'>
						<Grid item direction='column' xs={5} className='text-center'>
							<Controller
								name='awayPitcher'
								control={control}
								render={({ field }) => (
									<TextField
										{...field}
										required
										label='Away Pitcher'
										fullWidth
									/>
								)}
							/>
						</Grid>
						<Grid item direction='column' xs={5} className='text-center'>
							<Controller
								name='homePitcher'
								control={control}
								render={({ field }) => (
									<TextField
										{...field}
										required
										label='Home Pitcher'
										fullWidth
									/>
								)}
							/>
						</Grid>
					</Grid>
				)}
				<Grid contianer item xs={12}>
					<Button variant='contained' color='primary' type='submit'>
						Start Game
					</Button>
				</Grid>
			</Grid>
		</form>
	);
};

export default NewScorecard;
