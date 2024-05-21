import { Avatar, Box, Divider, Typography } from '@mui/material';
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../mockData';

const ProjectsPage = ({ theme }) => {
    
	return (
		<Box id='projects'
			sx={{
				width: '100%',
				height:'100%',
				display: 'flex',
				flexDirection: 'column',
				gap: '80px',
				alignItems: 'center'
			}}
		>
			<Typography sx={{ fontSize: '46px', color: theme.text,
				paddingTop:'100px'}}>Projects</Typography>
			{projects.map((project, index) => (
            <Box key={index} className={'slide'}>
              <ProjectCard theme={theme} project={project} index={index}/>
            </Box>
          ))}
		</Box>
	);
};

export default ProjectsPage;
