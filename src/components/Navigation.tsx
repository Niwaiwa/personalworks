import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export default function Navigation() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Niwa Garden
        </Typography>
        <Button color="inherit">Profile</Button>
        <Button color="inherit">Portfolio</Button>
        <Button color="inherit">Tech note</Button>
        <Button color="inherit">Github</Button>
        {/* Add more navigation buttons as needed */}
      </Toolbar>
    </AppBar>
  );
}