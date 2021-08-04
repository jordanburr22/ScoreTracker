import {
	AppBar,
	Button,
	IconButton,
	Toolbar,
	Typography,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import React from 'react';

const Appbar = () => {
	return (
		<AppBar position='static'>
			<Toolbar className='justify-between'>
				<IconButton edge='start' color='inherit' aria-label='menu' className='mr-2'>
					<Menu />
				</IconButton>
				<Typography variant='h6'>Baseball Scorer</Typography>
				<Button color='inherit'>Login</Button>
			</Toolbar>
		</AppBar>
	);
};

export default Appbar;
