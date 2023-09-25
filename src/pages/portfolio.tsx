import { Card, CardMedia, CardContent, Typography, CardActions, Button, Grid, Box, Container, Avatar } from '@mui/material';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

const portfolioData = [
    {
      title: "SQL convert app",
      description: "SQL convert app practice. Convert SQL query column to hashed value.",
      image: "https://example.com/image1.jpg",
      browseUrl: "",
      githubUrl: "https://github.com/Niwaiwa/sql_convert_app",
      tags: ["Python", "Typescript", "FastAPI", "Next.js", "Backend", "Frontend"],
    },
    {
      title: "Vara backend fastapi",
      description: "A video site backend use fastapi.",
      image: "https://example.com/image2.jpg",
      browseUrl: "",
      githubUrl: "https://github.com/Niwaiwa/vara_backend_fastapi",
      tags: ["Python", "Backend", "FastAPI"],
    },
    {
      title: "Vara frontend",
      description: "A video site frontend. Use react and material-ui to build it.",
      image: "https://example.com/image3.jpg",
      browseUrl: "",
      githubUrl: "https://github.com/Niwaiwa/Vara_frontend",
      tags: ["React", "Next.js", "Frontend"],
    },
    {
      title: "Vara backend django",
      description: "A video site backend use django.",
      image: "https://example.com/image4.jpg",
      browseUrl: "",
      githubUrl: "https://github.com/Niwaiwa/Vara_backend_django",
      tags: ["Python", "Backend", "Django"],
    },
    {
      title: "Vara backend go",
      description: "A video site backend use golang.",
      image: "https://example.com/image4.jpg",
      browseUrl: "",
      githubUrl: "https://github.com/Niwaiwa/Vara_backend_go",
      tags: ["Go", "Echo", "Backend"],
    },
    {
      title: "Vara",
      description: "A video streaming site practice. Use django and django-template to build it.",
      image: "https://example.com/image4.jpg",
      browseUrl: "",
      githubUrl: "https://github.com/Niwaiwa/Vara",
      tags: ["Python", "Django", "Backend"],
    },
    {
      title: "Linebot content rank",
      description: "A linebot practice for web scraping. Get content rank from pixiv and niconico.",
      image: "https://example.com/image4.jpg",
      browseUrl: "",
      githubUrl: "https://github.com/Niwaiwa/Linebot_content_rank",
      tags: ["Python", "Flask", "Backend"],
    },
    {
      title: "Go blog",
      description: "A blog project with go.",
      image: "https://example.com/image4.jpg",
      browseUrl: "",
      githubUrl: "https://github.com/Niwaiwa/go_blog",
      tags: ["Go", "Backend", "Gin"],
    },
    {
      title: "IP location go",
      description: "A ip location lookup project used golang.",
      image: "https://example.com/image4.jpg",
      browseUrl: "",
      githubUrl: "https://github.com/Niwaiwa/ip-location-go",
      tags: ["Go", "Backend", "Gin"],
    },
    {
      title: "Shorturl backend",
      description: "A shorturl backend project used python.",
      image: "https://example.com/image4.jpg",
      browseUrl: "",
      githubUrl: "https://github.com/Niwaiwa/shorturl_backend",
      tags: ["Python", "Backend", "Flask"],
    },
    {
      title: "React vite tailwind todo app",
      description: "A todo list practice with react, vite, tailwind and typescript.",
      image: "https://example.com/image4.jpg",
      browseUrl: "",
      githubUrl: "https://github.com/Niwaiwa/react-vite-tailwind-todo-app",
      tags: ["React", "Typescript", "Frontend"],
    },
    {
      title: "Bitly backend",
      description: "A bitly backend practice project used python.",
      image: "https://example.com/image4.jpg",
      browseUrl: "",
      githubUrl: "https://github.com/Niwaiwa/bitly-backend",
      tags: ["Python", "Backend", "FastAPI"],
    },
    {
      title: "Chatbot app",
      description: "A chatbot demo app with streamlit.",
      image: "https://example.com/image4.jpg",
      browseUrl: "",
      githubUrl: "https://github.com/Niwaiwa/chatbot_app",
      tags: ["Python", "Streamlit", "Backend"],
    },
    {
      title: "AI message",
      description: "AI message chat app demo with line api.",
      image: "https://example.com/image4.jpg",
      browseUrl: "",
      githubUrl: "https://github.com/Niwaiwa/AI_message",
      tags: ["Python", "Flask", "Backend"],
    },
  ];

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