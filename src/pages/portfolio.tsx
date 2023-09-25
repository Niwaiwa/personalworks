import { Card, CardMedia, CardContent, Typography, CardActions, Button, Grid, Box, Container, Avatar } from '@mui/material';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import portfolioData from '../portforlioData.json';


function Portfolio() {
  return (
    <Container>
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
                    <Box sx={{ marginTop: 2 }}>
                      {project.tags.map((tag, index) => {
                          return (
                          <Chip
                              key={index}
                              label={tag}
                              size="small"
                              color="primary"
                              variant="outlined"
                              sx={{ 
                                marginRight: '5px', 
                                marginTop: '5px',
                                height: 'auto',
                                borderRadius: '5px',
                                padding: '2px',
                              }}
                              
                          />
                          );
                      })}
                    </Box>
                    </CardContent>
                    <Divider />
                    <CardActions>
                    <Box sx={{ marginTop: 1 }} />
                    <Button size="small" color="primary" href={project.browseUrl} {...(project.browseUrl === "" ? { disabled: true } : {}) }>
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
    </Container>
  );
}

export default Portfolio;