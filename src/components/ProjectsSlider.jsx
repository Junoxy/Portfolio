import React, { useRef, useState } from 'react';
import './ProjectsSlider.css';
import { Box, IconButton, Typography } from '@mui/material';
import ProjectCard from './ProjectCard';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { useIntersectionObserver } from '../useIntersectionObserver';

const ProjectsSlider = ({ projects, theme }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const slideRef = useRef(null);
	const isVisible = useIntersectionObserver(slideRef);

    const nextSlide = () => {
        setCurrentIndex(currentIndex === projects.length - 1 ? 0 : currentIndex + 1);
      };
    
      const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? projects.length - 1 : currentIndex - 1);
      };
    return (
        <Box ref={slideRef} className="carousel" sx={{opacity: isVisible ? 1 : 0,
					transition: 'opacity 1.5s'}}>
        <Box className="slides" sx={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {projects.map((project, index) => (
            <Box key={index} className={'slide'}>
              <ProjectCard theme={theme} project={project} index={index}/>
            </Box>
          ))}
        </Box>
        <IconButton className="arrow prev" onClick={prevSlide} sx={{color:theme.primary,position: 'absolute', top: '50%',transform: 'translateY(-50%)',zIndex: '1', '&:hover':{color: theme.text}}}> <ArrowBack sx={{width:'40px', height:'40px'}}/> </IconButton>
        <IconButton className="arrow next" onClick={nextSlide} sx={{color:theme.primary,position: 'absolute', top: '50%',transform: 'translateY(-50%)',zIndex: '1', '&:hover':{color: theme.text}}}>  <ArrowForward sx={{width:'40px', height:'40px'}}/> </IconButton>
      </Box>
        )
};

export default ProjectsSlider;

