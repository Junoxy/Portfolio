import { Avatar, Box, Divider, Typography } from '@mui/material';
import { useIntersectionObserver } from '../useIntersectionObserver';
import { useRef } from 'react';

const AboutPage = ({ theme }) => {
	const aboutTextRef = useRef(null);
	const isVisible = useIntersectionObserver(aboutTextRef);
	const techRef = useRef(null);
	const isVisible2 = useIntersectionObserver(techRef);
	return (
		<Box
			id="about"
			sx={{
				
				width: '100%',
				display: 'flex',
				justifyContent: {xs:'center', md:'flex-start'},
				alignItems: {xs:'flex-start', md:'center'},
				flexDirection: 'column',
				gap: '30px'
			}}
		>
			<Box
				ref={aboutTextRef}
				sx={{
					display: 'flex',
					flexDirection: { xs: 'column', md: 'row' },
					justifyContent:{ xs: 'normal', md: 'center' } ,
					alignItems:{ xs: 'center', md:'normal' },
					gap: '60px',
					opacity: isVisible ? 1 : 0,
					transition: 'opacity 1.5s'
				}}
			>
				<Box sx={{ width: '90%', height: '100%'  }}>
					<Typography sx={{ fontSize: '36px', color: theme.accent }}>Who Am I?</Typography>
					<Typography sx={{ color: theme.text, fontSize: '18px', fontWeight: '300' }}>
						Hi! My name is Juno and i am a driven individual here on this beautiful earth with a passion for
						realizing the power of my imagination, i believe that if i can imagine it, i can believe it, i
						can achieve it. Hi! My name is Juno and i am a driven individual here on this beautiful earth
						with a passion for realizing the power of my imagination, i believe that if i can imagine it, i
						can believe it, i can achieve it Hi! My name is Juno and i am a driven individual here on this
						beautiful earth with a passion for realizing the power of my imagination, i believe that if i
						can imagine it, i can believe it, i can achieve it
					</Typography>
				</Box>
				<Box sx={{ width: '90%', height: '100%' }}>
					<Typography sx={{ fontSize: '36px', color: theme.accent }}>My Goals</Typography>
					<Typography sx={{ color: theme.text, fontSize: '18px', fontWeight: '300' }}>
						Hi! My name is Juno and i am a driven individual here on this beautiful earth with a passion for
						realizing the power of my imagination, i believe that if i can imagine it, i can believe it, i
						can achieve it. Hi! My name is Juno and i am a driven individual here on this beautiful earth
						with a
					</Typography>
				</Box>
			</Box>
			<Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
				<Typography sx={{ fontSize: '26px', color: theme.accent, marginTop: '60px'}}>My Stack</Typography>

				<Box
					ref={techRef}
					sx={{
						width: '70%',
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center',
						gap: '35px',
						flexWrap:'wrap',
						transition: ' opacity 0.3s ease',
						opacity: isVisible2 ? 1 : 0
					}}
				>
					<Avatar
						variant="square"
						sx={{
							width: '55px',
							height: '55px',
							transform: isVisible2 ? 'translateX(0)' : 'translateX(-100vw)',
							transition: 'transform 1s ease',
							transitionDelay: '0.1s'
						}}
						src="src\assets\CSS3_logo.svg.png"
					/>
					<Avatar
						variant="square"
						sx={{
							width: '55px',
							height: '55px',
							transform: isVisible2 ? 'translateX(0)' : 'translateX(-100vw)',
							transition: 'transform 1s ease',
							transitionDelay: '0.2s'
						}}
						src="src\assets\HTML5_Badge.svg.png"
					/>
					<Avatar
						variant="square"
						sx={{
							width: '55px',
							height: '55px',
							transform: isVisible2 ? 'translateX(0)' : 'translateX(-100vw)',
							transition: 'transform 1s ease',
							transitionDelay: '0.3s'
						}}
						src="src\assets\Git_icon.svg.png"
					/>
					<Avatar
						variant="square"
						sx={{
							width: '55px',
							height: '55px',
							transform: isVisible2 ? 'translateX(0)' : 'translateX(-100vw)',
							transition: 'transform 1s ease',
							transitionDelay: '0.4s'
						}}
						src="src\assets\express.webp"
					/>
					<Avatar
						variant="square"
						sx={{
							width: '55px',
							height: '55px',
							transform: isVisible2 ? 'translateX(0)' : 'translateX(-100vw)',
							transition: 'transform 1s ease',
							transitionDelay: '0.5s'
						}}
						src="src\assets\js.png"
					/>
					<Avatar
						variant="square"
						sx={{
							width: '55px',
							height: '55px',
							transform: isVisible2 ? 'translateX(0)' : 'translateX(-100vw)',
							transition: 'transform 1s ease',
							transitionDelay: '0.6s'
						}}
						src="src\assets\node-js.svg"
					/>
					<Avatar
						variant="square"
						sx={{
							width: '55px',
							height: '55px',
							transform: isVisible2 ? 'translateX(0)' : 'translateX(-100vw)',
							transition: 'transform 1s ease',
							transitionDelay: '0.7s'
						}}
						src="src\assets\mongodb.png"
					/>
					<Avatar
						variant="square"
						sx={{
							width: '55px',
							height: '55px',
							transform: isVisible2 ? 'translateX(0)' : 'translateX(-100vw)',
							transition: 'transform 1s ease',
							transitionDelay: '0.8s'
						}}
						src="src\assets\react.png"
					/>
				</Box>
				<Divider sx={{ width: '70%', bgcolor: theme.primary }} />
			</Box>
		</Box>
	);
};

export default AboutPage;
