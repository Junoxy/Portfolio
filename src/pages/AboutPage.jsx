import { Avatar, Box, Divider, Typography } from '@mui/material';
import { useIntersectionObserver } from '../useIntersectionObserver';
import { useRef } from 'react';
import React from 'react';
import Lottie from 'lottie-react';
import animationPlants from '../assets/plants.json';
import animationWater from '../assets/watering.json';

const AboutPage = ({ theme }) => {
	const aboutTextRef = useRef(null);
	const isVisible = useIntersectionObserver(aboutTextRef);

	return (
		<Box
			id="about"
			ref={aboutTextRef}
			sx={{
				width: '100%',
				height: { xs: '100%', md: '100vh' },
				display: 'flex',
				justifyContent: { xs: 'center', md: 'flex-start' },
				alignItems: { xs: 'flex-start', md: 'center' },
				flexDirection: 'column',
				gap: { xs: '30px', md: '0px' },
				opacity: isVisible ? 1 : 0,
				transition: 'opacity 1.5s',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					width: '100%',
					flexDirection: { xs: 'column', md: 'row', alignItems: 'center' },
					
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						width: { xs: '100%', md: '100%' },
						textAlign: { xs: 'center', md: 'left' },
						
					}}
				>
					<Typography sx={{ fontSize: '2rem', color: theme.text }}>Who am i?</Typography>
					<Divider sx={{ bgcolor: theme.text }} />
					<Typography sx={{ fontSize: '1rem', color: theme.text, my: '16px' }}>
						With a Step back from my career as a chef i have redirected my focus to the world of tech! From
						the choppingboard to the keyboard im now honing my skills, ready to create lasting solutions to
						the problems that come my way, beside coding i also enjoy..
					</Typography>
					<Box sx={{ display: 'flex', gap: '30px', textAlign: 'center' }}>
						<Typography sx={{ fontWeight: '600', fontSize: '1.3rem', color: theme.text, my: '16px' }}>
							Cooking, Drawing, Music, Gardening and more!
						</Typography>
					</Box>
				</Box>
				<Box sx={{width:'50%', height:'auto'}}>
					<Lottie animationData={animationPlants} />
				</Box>
			</Box>

			<Box
				sx={{
					display: 'flex',
					width: '100%',
					flexDirection: { xs: 'column', md: 'row', alignItems: 'center' }
				}}
			>
				<Box sx={{width:'50%', height:'auto'}}>
					<Lottie animationData={animationWater} />
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						width: { xs: '100%', md: '100%' },
						textAlign: { xs: 'center', md: 'left' }
					}}
				>
					<Typography sx={{ fontSize: '2rem', color: theme.text }}>My Goal</Typography>
					<Divider sx={{ bgcolor: theme.text }} />
					<Typography sx={{ fontSize: '1rem', color: theme.text, my: '16px' }}>
						As I journey through life, I daydream about living in a spacious greenhouse, working remotely,
						and caring for my plants. I imagine cooking with fresh produce and enjoying a relaxed way of
						being. While this dream is in the making, I'm determined to create a fulfilling life. Let's
						support each other as we work towards our goals and aspirations, navigating life's journey
						together!
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default AboutPage;
