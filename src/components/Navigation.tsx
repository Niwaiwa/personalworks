import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export default function Navigation() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Niwa Garden
        </Typography>
        <Link href="/" passHref>
          <Button color="primary" sx={{ marginRight: 2, color: 'black' }}>Home</Button>
        </Link>
        <Link href="/profile" passHref>
          <Button color="primary" sx={{ marginRight: 2, color: 'black' }}>Profile</Button>
        </Link>
        <Button color="inherit" sx={{ marginRight: 2 }}>Portfolio</Button>
        <Button color="inherit" sx={{ marginRight: 2 }}>Tech note</Button>
        <Button color="primary" variant="contained">Github</Button>
        {/* Add more navigation buttons as needed */}
      </Toolbar>
    </AppBar>
  );
}