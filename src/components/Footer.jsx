import { Avatar, Box, Button, IconButton, Typography } from '@mui/material';
import './Footer.css'

const Footer = ({ theme }) => {
	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};
    const goToResume = () => {
		window.location.href = 'https://drive.google.com/file/d/1BhYRGV1rpZszuRzlCa3cfvs9OlhIpiJQ/view?usp=sharing';
	}
	return (
		<Box
			sx={{
				width: '100%',
				bgcolor: theme.accentO,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				paddingTop: '25px'
			}}
		>
			<Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: '30px', md: '60px' } }}>
				<Box>
					<Box sx={{ display: 'flex', gap: '5px', flexDirection: { xs: 'row', md: 'column' } }}>
						<a style={{ all: 'unset' }} href="https://github.com/Junoxy">
							<IconButton>
								<Avatar src="src/assets/github.png" />
							</IconButton>
						</a>
						<a
							style={{ all: 'unset' }}
							href="https://www.linkedin.com/in/juno-ogay-45a2512ba/?locale=en_US"
						>
							<IconButton>
								<Avatar src="src/assets/linkedin.png" />
							</IconButton>
						</a>
					</Box>
				</Box>
				<Box>
					<Typography sx={{ fontSize: '18px', color: theme.accent, fontWeight: '400', paddingBottom: '5px' }}>
						Navigate
					</Typography>
					<Box sx={{ display: 'flex', gap: '3px', flexDirection: 'column' }}>
                    <button className='nav-button-footer' style={{color:theme.text}} onClick={()=>{scrollToSection('home')}}>Home</button>
					<button className='nav-button-footer' style={{color:theme.text}} onClick={()=>{scrollToSection('about')}}>About</button>
					<button className='nav-button-footer' style={{color:theme.text}} onClick={()=>{scrollToSection('projects')}}>Projects</button>
					<button className='nav-button-footer' style={{color:theme.text}} onClick={()=>{goToResume()}}>Resume</button>
					<button className='nav-button-footer' style={{color:theme.text}} onClick={()=>{scrollToSection('contact')}}>Contact</button>
					</Box>
				</Box>
				<Box>
					<Typography sx={{ fontSize: '18px', color: theme.accent, fontWeight: '400', paddingBottom: '5px' }}>
						Contact
					</Typography>
					<Box sx={{ display: 'flex', gap: '3px', flexDirection: 'column' }}>
						<Typography sx={{ fontSize: '14px', color: theme.text }}>
							Email: junjun.privated@gmail.com{' '}
						</Typography>
						<Typography sx={{ fontSize: '14px', color: theme.text }}>Phone: +46 72 704 72 00 </Typography>
						<Typography sx={{ fontSize: '14px', color: theme.text }}>Sweden </Typography>
					</Box>
				</Box>
			</Box>

			<Typography sx={{ fontSize: '12px', paddingTop: '25px', color: theme.text }}>© 2024 - Juno Ogay</Typography>
		</Box>
	);
};

export default Footer;
