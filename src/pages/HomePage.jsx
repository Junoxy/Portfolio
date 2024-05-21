import { Avatar, Box, Divider, Typography, Button } from '@mui/material';
import './HomePage.css';
import { useState, useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../useIntersectionObserver';

const HomePage = ({ theme }) => {
	const homeRef = useRef(null);
	const techRef = useRef(null);
	const isVisible2 = useIntersectionObserver(techRef);
	const isVisible = useIntersectionObserver(homeRef);
	const handleContactClick = () => {
		window.open('mailto:junjun.privated@gmail.com', '_blank');
	};

	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};
	return (
		<Box
			id="home"
			ref={homeRef}
			sx={{
				height: {xs:'100%', md:'calc(100vh + 67px)'},
				width: '100%',
                paddingTop:{xs:'70px', md:'0px'},
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				gap: '30px',
				opacity: isVisible ? 1 : 0,
				transition: 'opacity 1.5s'
			}}
		>
			<Box sx={{
				
				width: '100%',
				display: 'flex',
				flexDirection: { xs: 'column', md: 'row' },
				justifyContent: 'center',
				alignItems: 'center',
				gap: '30px',
                
			}}>
				<Box className='home-img'>
					<Avatar
						variant="circle"
						src="/images/swaglordNoBG.png"
						sx={{ width: { xs: '333px', md: '500px' }, height: { xs: '333px', md: '500px' }}}
					></Avatar>
				</Box>

				<Box sx={{ width: '100%' }}>
					<Typography className='home-text1' sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, color: theme.text, my: '8px' }}>
						Adrian Ogay | Software Developer
					</Typography>
					<Divider className='home-divider' sx={{ bgcolor: theme.text }} />
					<Typography className='home-text2' sx={{ fontSize: '1.3rem', my: '16px', color: theme.text }}>
						Chef turned developer with a drive to create, whether its Art, Food, Applications or Systems! On
						a mission to continuously expand my skillset and learn, Join me on my journey into the world of
						Tech and lets see how we can help each other.
					</Typography>

					<Box sx={{ display: 'flex', gap: '16px' }}>
						<Button
                        className='home-button'
							onClick={() => scrollToSection('projects')}
							sx={{
								paddingLeft: '0px',
								width: '200px',
								height: '50px',
								bgcolor: theme.text,
								color: theme.text2,
								'&:hover': { border: `2px solid ${theme.text}`, color: theme.text }
							}}
						>
							Projects
						</Button>
						<Button
                            className='home-button2'
							variant="outlined"
							onClick={() => handleContactClick()}
							sx={{
								width: '200px',
								height: '50px',
								color: theme.text,
								borderColor: theme.text,
								'&:hover': { bgcolor: theme.accentO, borderColor: theme.text }
							}}
						>
							Get in touch
						</Button>
					</Box>
                    
				</Box>
                
			</Box>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', py: {xs:'50px', md:'0px'} }}>
				<Typography sx={{ fontSize: '26px', color: theme.text }}>My Stack</Typography>

				<Box
					ref={techRef}
					sx={{
						width: '70%',
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center',
						gap: '35px',
						flexWrap: 'wrap',
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
							transition: 'transform 2s ease',
							transitionDelay: '0.1s'
						}}
						src="/CSS3_logo.svg.png"
					/>
					<Avatar
						variant="square"
						sx={{
							width: '55px',
							height: '55px',
							transform: isVisible2 ? 'translateX(0)' : 'translateX(-100vw)',
							transition: 'transform 2s ease',
							transitionDelay: '0.2s'
						}}
						src="/HTML5_Badge.svg.png"
					/>
					<Avatar
						variant="square"
						sx={{
							width: '55px',
							height: '55px',
							transform: isVisible2 ? 'translateX(0)' : 'translateX(-100vw)',
							transition: 'transform 2s ease',
							transitionDelay: '0.3s'
						}}
						src="/Git_icon.svg.png"
					/>
					<Avatar
						variant="square"
						sx={{
							width: '55px',
							height: '55px',
							transform: isVisible2 ? 'translateX(0)' : 'translateX(-100vw)',
							transition: 'transform 2s ease',
							transitionDelay: '0.4s'
						}}
						src="/express.webp"
					/>
					<Avatar
						variant="square"
						sx={{
							width: '55px',
							height: '55px',
							transform: isVisible2 ? 'translateX(0)' : 'translateX(-100vw)',
							transition: 'transform 2s ease',
							transitionDelay: '0.5s'
						}}
						src="/js.png"
					/>
					<Avatar
						variant="square"
						sx={{
							width: '55px',
							height: '55px',
							transform: isVisible2 ? 'translateX(0)' : 'translateX(-100vw)',
							transition: 'transform 2s ease',
							transitionDelay: '0.6s'
						}}
						src="/node-js.svg"
					/>
					<Avatar
						variant="square"
						sx={{
							width: '55px',
							height: '55px',
							transform: isVisible2 ? 'translateX(0)' : 'translateX(-100vw)',
							transition: 'transform 2s ease',
							transitionDelay: '0.7s'
						}}
						src="/mongodb.png"
					/>
					<Avatar
						variant="square"
						sx={{
							width: '55px',
							height: '55px',
							transform: isVisible2 ? 'translateX(0)' : 'translateX(-100vw)',
							transition: 'transform 2s ease',
							transitionDelay: '0.8s'
						}}
						src="/react.png"
					/>
                    <Avatar
						variant="square"
						sx={{
							width: '55px',
							height: '55px',
							transform: isVisible2 ? 'translateX(0)' : 'translateX(-100vw)',
							transition: 'transform 2s ease',
							transitionDelay: '0.8s'
						}}
						src="/tsLogo.png"
					/>
				</Box>
				<Divider sx={{ width: '100%', bgcolor: theme.text }} />
			</Box>
            <Box sx={{}}></Box>
		</Box>
	);
};

export default HomePage;

{
	/*  */
}
