"use client";

import { Container } from '@mui/material';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <Container>
      <Navigation />
      {/* Your body content here */}
      <Footer />
    </Container>
  );
}