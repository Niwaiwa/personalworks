import { Container, Box, Typography, Avatar, Grid, Table, TableBody, TableRow, TableCell } from '@mui/material';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function ProfilePage() {
  return (
    <Container>
      <Navigation />
      <Box sx={{ marginTop: 4, marginBottom: 12 }}>
        <Grid container spacing={2} marginLeft={5}>
          <Grid item xs={12} sm={4} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Avatar alt="Profile picture" src="/path/to/profile/picture" sx={{ width: 200, height: 200 }} />
          </Grid>
          <Grid item xs={12} sm={8} display="flex" flexDirection="column" justifyContent="center" alignItems="right">
            <Typography variant="h4" gutterBottom>
              LIU ALAN
            </Typography>
            <Typography variant="subtitle1">
              7+ years Software engineer
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ marginTop: 4, marginBottom: 4, marginLeft: 15, marginRight: 5 }}>
        <Typography variant="h5" gutterBottom marginLeft={2}>
          Skills
        </Typography>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell variant="head">Programming language</TableCell>
              <TableCell>Python, PHP, Javascript, Go</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">Framework</TableCell>
              <TableCell>Flask, Django, FastAPI, Laravel, React</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">Database</TableCell>
              <TableCell>MongoDB, MariaDB, PostgreSQL, SQLite, Redis</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">Others</TableCell>
              <TableCell>Linux(Ubuntu, CentOS), AWS, EFK stack, Docker, Gitlab CI, Jmeter, RabbitMQ, Nginx, Apache, PMM(Percona Monitoring and Management)</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
      <Footer />
    </Container>
  );
}