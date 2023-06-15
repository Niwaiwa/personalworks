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
          <Button color="primary" sx={{ marginRight: 2, color: 'black', textTransform: 'capitalize' }}>Home</Button>
        </Link>
        <Link href="/profile" passHref>
          <Button color="primary" sx={{ marginRight: 2, color: 'black', textTransform: 'capitalize'  }}>Profile</Button>
        </Link>
        <Link href="/portfolio" passHref>
            <Button color="inherit" sx={{ marginRight: 2, color: 'black', textTransform: 'capitalize'  }}>Portfolio</Button>
        </Link>
        <Button color="inherit" sx={{ marginRight: 2, color: 'black', textTransform: 'capitalize'  }}>Tech note</Button>
        <Link href="https://github.com/Niwaiwa" passHref>
            <Button color="primary" variant="contained" sx={{ textTransform: 'capitalize' }}>Github</Button>
        </Link>
        {/* Add more navigation buttons as needed */}
      </Toolbar>
    </AppBar>
  );
}