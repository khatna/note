import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function Navbar() {
  return (
		<AppBar position='static' className='navbar'>
			<Toolbar>
				<Typography variant='h5' color='inherit'>
					Note v1.0
				</Typography>
			</Toolbar>
		</AppBar>	
  );
}