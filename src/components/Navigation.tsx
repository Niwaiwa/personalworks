import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Icon, Avatar } from '@mui/material';


const buttonCusStyle = {
    marginRight: 2,
    color: 'black',
    textTransform: 'capitalize'
}

export default function Navigation() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Niwaiwa Personal Works
        </Typography>
        <Link href="/" passHref>
          <Button color="primary" sx={buttonCusStyle}>Home</Button>
        </Link>
        <Link href="/profile" passHref>
          <Button color="primary" sx={buttonCusStyle}>Profile</Button>
        </Link>
        <Link href="/portfolio" passHref>
            <Button color="inherit" sx={buttonCusStyle}>Portfolio</Button>
        </Link>
        {/* <Button color="inherit" sx={buttonCusStyle}>Tech note</Button> */}
        <Button 
          color="primary" 
          variant="contained" 
          sx={{ textTransform: 'capitalize' }} 
          href="https://github.com/Niwaiwa"
          startIcon={<Avatar src="/github-mark-white.png" sx={{ width: 20, height: 20 }} />}
        >
          Github
        </Button>
        {/* Add more navigation buttons as needed */}
      </Toolbar>
    </AppBar>
  );
}