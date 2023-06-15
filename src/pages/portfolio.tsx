import { Card, CardMedia, CardContent, Typography, CardActions, Button, Grid, Box, Container, Avatar } from '@mui/material';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const portfolioData = [
    {
        title: "Project 1",
        description: "This is a description of Project 1. It is a very interesting project that involves a lot of cool technologies and techniques.",
        image: "https://example.com/image1.jpg",
        browseUrl: "https://example.com/project1",
        githubUrl: "https://github.com/user/project1",
    },
    {
      title: "Project 2",
      description: "This is a description of Project 2. It is a very interesting project that involves a lot of cool technologies and techniques.",
      image: "https://example.com/image2.jpg",
      browseUrl: "https://example.com/project2",
      githubUrl: "https://github.com/user/project2",
    },
    {
      title: "Project 3",
      description: "This is a description of Project 3. This project is even more interesting than Project 1, and it uses some really advanced technologies.",
      image: "https://example.com/image3.jpg",
      browseUrl: "https://example.com/project3",
      githubUrl: "https://github.com/user/project3",
    },
    {
        title: "Project 4",
        description: "This is a description of Project 4. This project is even more interesting than Project 1, and it uses some really advanced technologies.",
        image: "https://example.com/image4.jpg",
        browseUrl: "https://example.com/project4",
        githubUrl: "https://github.com/user/project4",
      },
    // More projects...
  ];

function Portfolio() {
  return (
    <Container>
        <Navigation />
        <Grid container spacing={3} sx={{ marginTop: 5 }}>
        {portfolioData.map((project, index) => {
            return (
            <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={project.image}
                        title={project.title}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {project.description}
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small" color="primary" href={project.browseUrl}>
                        Browse
                    </Button>
                    <Button size="small" color="primary" href={project.githubUrl}>
                        GitHub
                    </Button>
                    </CardActions>
                </Card>
            </Grid>
            );
        })}
        </Grid>
      <Footer />
    </Container>
  );
}

export default Portfolio;