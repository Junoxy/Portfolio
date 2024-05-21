import { BottomNavigation, BottomNavigationAction, Box, Divider, IconButton, Stack, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { lightTheme, darkTheme } from '../theme/theme';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import MenuIcon from '@mui/icons-material/Menu';
import './NavBar.css';
import MobileNavMenu from './MobileNavMenu';

const NavBar = ({ theme, setTheme }) => {
	const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
	const [visible, setVisible] = useState(true);
	const [menuOpen, setMenuOpen] = useState(false);
	const openMenu = () => {
		setMenuOpen(!menuOpen);
		console.log(menuOpen);
	};

	const switchTheme = () => {
		setTheme(theme === lightTheme ? darkTheme : lightTheme);
	};

	const goToResume = () => {
		window.location.href = 'https://drive.google.com/file/d/1BhYRGV1rpZszuRzlCa3cfvs9OlhIpiJQ/view?usp=sharing';
	};
	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};
	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;
			setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, [prevScrollPos]);

	return (
		<Box
			sx={{
				position: 'fixed',
				width: '100%',
				height: '70px',
				zIndex: 100,
				top: 0,
				transition: 'top 0.3s',
				...(visible ? { top: 0 } : { top: -100 }),
				zIndex: '2000',

				display: 'flex',
				alignItems: 'center',

				justifyContent: 'center'
			}}
		>
			<Stack
				direction={'row'}
				sx={{
					display: 'flex',
					alignItems: 'center',
					gap: '20px',
					justifyContent: 'center'
				}}
			>
				<Box
					sx={{
						display: { xs: 'none', md: 'flex' },
						alignItems: 'center',
						gap: '40px',
						borderColor: theme.text,
						color: theme.text
					}}
				>
					<button
						className="nav-button"
						onClick={() => {
							scrollToSection('home');
						}}
					>
						{' '}
						<span>Home</span>{' '}
					</button>
					<button
						className="nav-button"
						onClick={() => {
							scrollToSection('about');
						}}
					>
						{' '}
						<span>About</span>{' '}
					</button>
					<button
						className="nav-button"
						onClick={() => {
							scrollToSection('projects');
						}}
					>
						{' '}
						<span>Projects</span>{' '}
					</button>
					<button
						className="nav-button"
						onClick={() => {
							scrollToSection('contact');
						}}
					>
						{' '}
						<span>Contact</span>{' '}
					</button>
					<button
						className="nav-button"
						onClick={() => {
							goToResume();
						}}
					>
						{' '}
						<span>Resume</span>{' '}
					</button>
				</Box>

				<Box
					sx={{
						width: '100vw',
						display: { xs: 'flex', md: 'none' },
						justifyContent: 'space-between',
						px: '15px',
						alignItems: 'center'
					}}
				>
					<IconButton
						onClick={() => openMenu()}
						sx={{
							display: { xs: 'flex', md: 'none' },
							color: theme.text,
							transition: '0.3s ease',
							'&:hover': { transform: 'scale(1.1)' }
						}}
					>
						<MenuIcon sx={{ width: '40px', height: '40px' }} aria-label="menu" />
					</IconButton>
					<IconButton
						sx={{ color: theme.text, transition: '0.3s ease', '&:hover': { transform: 'scale(1.1)' } }}
						size="large"
						aria-label="Theme"
						onClick={() => switchTheme()}
					>
						<Brightness4Icon sx={{ width: '30px', height: '30px' }} />
					</IconButton>
				</Box>
				<IconButton
					sx={{
						display: { xs: 'none', md: 'flex' },
						color: theme.text,
						transition: '0.3s ease',
						'&:hover': { transform: 'scale(1.1)' }
					}}
					size="large"
					aria-label="Theme"
					onClick={() => switchTheme()}
				>
					<Brightness4Icon sx={{ width: '30px', height: '30px' }} />
				</IconButton>
			</Stack>
			{menuOpen && (
				<MobileNavMenu
					sx={{ display: { xs: 'flex', md: 'none' } }}
					open={menuOpen}
					setOpen={setMenuOpen}
					theme={theme}
				/>
			)}
			{/* <Divider sx={{width: 'calc(100% - 48px)', margin: 'auto', bgcolor: theme.primary, marginTop: '8px'}}/> */}
		</Box>
	);
};

export default NavBar;
