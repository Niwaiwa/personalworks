import { Card, CardMedia, CardContent, Typography, CardActions, Button, Grid, Box, Container } from '@mui/material';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import portfolioData from '../portfolioData.json';
import React, { useState } from 'react';


function Portfolio() {

  const [filterPortfolioData, setFilterPortfolioData] = useState(portfolioData)
  const tagList = ["Python", "Flask", "Django", "FastAPI", "Backend", "Frontend", "Typescript", "React", "Next.js", "Go", "Echo", "Gin", "Streamlit"]
  const [selectTags, setSelectTags] = useState<string[]>([])

  const tagFilter = (tag: string) => {
    if (selectTags.includes(tag)) {
      const newTags = selectTags.filter(item => item !== tag)
      setSelectTags(newTags)
      if (newTags.length === 0) {
        setFilterPortfolioData(portfolioData)
      } else {
        const newFilterData = portfolioData.filter(item => {
          return item.tags.some(tag => newTags.includes(tag))
        })
        setFilterPortfolioData(newFilterData)
      }
    } else {
      const newTags = [...selectTags, tag]
      setSelectTags(newTags)
      const newFilterData = portfolioData.filter(item => {
        return item.tags.some(tag => newTags.includes(tag))
      })
      setFilterPortfolioData(newFilterData)
    }
  }

  return (
    <Container>
        <Grid container spacing={3} sx={{ marginTop: 5 }}>
          <Grid item xs={12} sm={12} md={12} sx={{ marginBottom: 3 }}>
              <Box sx={{ marginTop: 2 }} >
                  {tagList.map((tag, index) => {
                      return (
                          <Chip
                              key={index}
                              label={tag}
                              size="small"
                              color="primary"
                              variant={selectTags.includes(tag) ? "filled" : "outlined"}
                              sx={{ 
                                marginRight: '5px', 
                                marginTop: '5px',
                                height: 'auto',
                                borderRadius: '5px',
                                padding: '2px',
                              }}
                              onClick={() => tagFilter(tag)}
                          />
                      );
                  })}
              </Box>
          </Grid>
          {filterPortfolioData.map((project, index) => {
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