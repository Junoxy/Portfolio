import { Avatar, Box, IconButton, Typography } from '@mui/material';
import DevicesIcon from '@mui/icons-material/Devices';
import { useMediaQuery } from '@mui/material';

const ProjectCard = ({ theme, project, index }) => {
	const goToDemo = (link) => {
		window.location.href = link;
	};

	return (
		<Box
			key={index}
			sx={{
				display: 'flex',
				flexDirection: { xs: 'column', md: 'row' },
				width: '100%',
				height: { xs: '700px', md: '650px' },
				background:`linear-gradient(to top, ${theme.accentO}, ${theme.secondary}, ${theme.background})`,
				borderRadius: '20px',
				alignItems: 'center'
			}}
		>
			<Box
				sx={{
					width: { xs: '100%', md: '50%' },
					height: { xs: '50%', md: '100%' },
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					alignItems: 'center',
					position: 'relative',
					zIndex: '10'
				}}
			>
				<Box
					sx={{
						width: { xs: '90%', md: '80%' },
						height: { xs: '80%', md: '100%' },
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center'
					}}
				>
					<Typography
						p={{ xs: 1, md: 2 }}
						sx={{ textAlign: 'center', fontSize: '1.5rem', color: theme.text }}
					>
						{project.name}
					</Typography>
					<Typography
						px={4}
						sx={{ textAlign: 'center', overflowY: 'auto', color: theme.text, fontSize: '1rem' }}
					>
						{project.text}
					</Typography>
					<IconButton onClick={() => goToDemo(project.demo)} sx={{ color: theme.text }}>
						<DevicesIcon sx={{ width: '35px', height: '35px' }} />
					</IconButton>
				</Box>
				<Typography
					py={{ xs: 1, md: 2 }}
					sx={{ width: '80%', textAlign: 'center', fontSize: '1.2rem', fontWeight: '600', color: theme.text }}
				>
					{' '}
					{project.tech}{' '}
				</Typography>
			</Box>

			<Box sx={{ width: { xs: '100%', md: '100%' }, height: { xs: '100%', md: '100%' }, position: 'relative' }}>
				<Box sx={{ width: '100%', height: '100%', borderRadius: '20px' }}>
				<Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 1)', 
          borderRadius:'20px',
          overflow: 'hidden',
        }}
      >
					<Avatar
						variant="square"
						src={project.img}
						sx={{
							width: '100%',
							height: '100%',
							overflow: 'hidden',
							borderRadius:'20px',
							objectFit: 'cover'
						}}
					/>
					</Box>
				</Box>
			</Box>

		</Box>
	);
};

export default ProjectCard;
