import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import { Box, Container } from '@mui/material';
import { lightTheme, darkTheme } from './theme/theme';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import './App.css';
import SocialProof from './pages/SocialProof';
import Links from './components/Links';


function App() {
	const [theme, setTheme] = useState(lightTheme);
	const [screen, setScreen] = useState(null)
	const checkScreen = () => {
		if (window.innerWidth < 768) {
			setScreen('mobile')
		} else {
			setScreen('desktop')
		}
	}
	useEffect(() => {
        checkScreen(); 
        window.addEventListener('resize', checkScreen); 
        return () => {
            window.removeEventListener('resize', checkScreen); 
        };
    }, []);
	return (
		<Box
			className="App"
			sx={{
				zIndex:'-10',
				background: `linear-gradient(to right, ${theme.background}, ${theme.secondary}, ${theme.background2})`,
				backgroundSize: '300% 300%' ,
				animation: 'pingpong 15s ease-in-out infinite alternate' ,
				'@keyframes pingpong': {
					
					'0%': {
						backgroundPosition: '0% 50%'
					},
					'50%': {
						backgroundPosition: '30% 50%'
					},
					'100%': {
						backgroundPosition: '100% 50%'
					}
				
				}
			}}
			width={'100%'}
			height={'100%'}
		>
			<NavBar theme={theme} setTheme={setTheme} />
			<Container sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
				<HomePage theme={theme} />
				<AboutPage theme={theme} />
				<ProjectsPage theme={theme} />
				{/* <SocialProof theme={theme}/> */}
				<ContactPage theme={theme} />
			</Container>
			{screen === 'desktop' && <Links theme={theme}/>}
			<Footer theme={theme} />
			
		</Box>
	);
}

export default App;
