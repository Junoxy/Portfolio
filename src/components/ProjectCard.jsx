import { Avatar, Box, Divider, IconButton, Typography } from '@mui/material';
import DevicesIcon from '@mui/icons-material/Devices';
import { useIntersectionObserverProjects } from '../useIntersectionObserverProjects';
import {  useRef } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

const ProjectCard = ({ theme, project, index }) => {
	const projectRef = useRef(null);
	const isVisible = useIntersectionObserverProjects(projectRef);
	const goToDemo = (link) => {
		window.location.href = link;
	};
	const goToGitHub = (link) => {
		window.location.href = link;
	};

	return (
		<Box
			ref={projectRef}
			key={index}
			sx={{
				display: 'flex',
				flexDirection: { xs: 'column', md: 'row' },
				width: '90%',
				height: { xs: 'auto', md: '400px' },
				bgcolor:theme.secondary,
				borderRadius: '20px',
				alignItems: 'center',
				padding:'20px',
				transition: 'transform 0.3s ease, opacity 0.3s ease',
				transform: {xs:'none', md: isVisible ? 'scale(1.1)' : 'scale(1)' },
				opacity: {xs:'none', md: isVisible ? 1 : 0.5  },
			}}
		>
			<Box
				sx={{
					width: { xs: '100%', md: '50%' },
					height: { xs: '100%', md: '100%' },
					display: 'flex',
					flexDirection: 'column',
					
					alignItems: 'center',
					zIndex: '10'
				}}
			>
				<Box
					sx={{
						width: { xs: '90%', md: '80%' },
						height: { xs: '85%', md: '100%' },
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent:'space-between'
					}}
				>
					<Typography
						p={{ xs: 1, md: 0 }}
						sx={{ textAlign: 'center', fontSize: '1.5rem', color: theme.text }}
					>
						{project.name}
					</Typography>
					
					<Typography
						
						sx={{ textAlign: 'center', overflowY: 'auto', color: theme.text, fontSize: '0.9rem', paddingTop:{xs:'16px',md:'0px'} }}
					>
						{project.text}
					</Typography>
					<Box sx={{display:'flex', gap:'8px'}}>
					<IconButton onClick={() => goToDemo(project.demo)} sx={{ color: theme.text}}>
						<DevicesIcon sx={{ width: '35px', height: '35px' }} />
						
					</IconButton>
					<IconButton onClick={() => goToGitHub(project.github)} sx={{ color: theme.text}}>
						<GitHubIcon sx={{ width: '35px', height: '35px' }} />
						
					</IconButton>
					</Box>
					
				</Box>
				<Typography
					py={{ xs: 1, md: 2 }}
					sx={{
						width: '90%',
						textAlign: 'center',
						fontSize: '1.1rem',
						fontWeight: '600',
						color: theme.text,
						
					}}
				>
					{' '}
					{project.tech}{' '}
				</Typography>
			</Box>

			<Box sx={{ width: { xs: '100%', md: '50%' }, height: { xs: '50%', md: '100%' } }}>
				<Box sx={{ width: '100%', height: '100%', borderRadius: '20px' }}>
					<Avatar
						variant="square"
						src={project.img}
						sx={{
							width: '100%',
							height: '100%',
							overflow: 'hidden',
							borderRadius: '20px',
							objectFit: 'cover'
						}}
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default ProjectCard;
