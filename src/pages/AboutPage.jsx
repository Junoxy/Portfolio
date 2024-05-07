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
					From my early years, technology has always fascinated me. Alongside my brother, I delved into creating Minecraft servers and tinkering with computer hardware, even though it often left us scratching our heads! While my initial interest in technology simmered, I followed my passion for culinary arts, spending five years as a self-taught chef.

Now, with a rekindled enthusiasm to navigate my way through the world of programming, I'm fully committed to mastering JavaScript, React, HTML, and CSS for web development. Drawing from my culinary background, I bring a problem-solving mindset and adaptability to my coding journey. I firmly believe in the power of continuous effort and resilience, traits honed during my culinary career.

As I transition from the kitchen to coding, I'm eager to embrace each challenge as an opportunity for growth. I'm excited to leverage my diverse experiences and unwavering determination to contribute meaningfully to the world of technology. Let's explore how my unique blend of curiosity, creativity, and persistence can make a difference in your projects!
					</Typography>
				</Box>
				<Box sx={{ width: '90%', height: '100%' }}>
					<Typography sx={{ fontSize: '36px', color: theme.accent }}>My Goals</Typography>
					<Typography sx={{ color: theme.text, fontSize: '18px', fontWeight: '300' }}>
					As I journey through life, I often daydream about my ideal future. In my mind, I imagine living in a spacious greenhouse, where I can work remotely and care for my plants. I see myself enjoying the simple pleasures of cooking with fresh ingredients from my garden and taking things at a relaxed pace^^

					While this dream is still in the making, I'm determined to create a fulfilling and peaceful life. Until 						then, let's support each other as we work towards our goals and aspirations. Together, we can navigate 						life's journey and help each other reach our desired destinations!
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
						src="/CSS3_logo.svg.png"
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
						src="/HTML5_Badge.svg.png"
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
						src="/Git_icon.svg.png"
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
						src="/express.webp"
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
						src="/js.png"
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
						src="/node-js.svg"
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
						src="/mongodb.png"
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
						src="/react.png"
					/>
				</Box>
				<Divider sx={{ width: '70%', bgcolor: theme.primary }} />
			</Box>
		</Box>
	);
};

export default AboutPage;
