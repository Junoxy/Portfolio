import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import ProjectsSlider from '../components/ProjectsSlider';
import { projects } from '../mockData';

const ProjectsPage = ({ theme }) => {
    
	return (
		<Box id='projects'
			sx={{
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				gap: '50px',
				alignItems: 'center',
				marginTop: '200px'
			}}
		>
			<Typography sx={{ fontSize: '36px', color: theme.accent }}>Projects</Typography>
			<ProjectsSlider theme={theme} projects={projects}/>
		</Box>
	);
};

export default ProjectsPage;
