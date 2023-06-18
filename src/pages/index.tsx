"use client";

import Link from 'next/link';
import { Container, Box, Typography, Button, Grid, CardMedia } from '@mui/material';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <Container>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" minHeight="60vh">
        <Typography variant="h3" gutterBottom>
          My site and portfolio
        </Typography>
        <Link href="/portfolio" passHref>
            <Button variant="contained" color="primary">
            Browse my portfolio
            </Button>
        </Link>
      </Box>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={5}>
          <Box minHeight={400}>
            <CardMedia
                component="img"
                height="693"
                image="/images/tech_light.jpg"
                alt="Vertical Image"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box minHeight={200}>
            <CardMedia
                component="img"
                height="520"
                image="/images/tech_work.jpg"
                alt="Horizontal Image"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}