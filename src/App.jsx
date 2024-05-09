import { useState } from 'react';
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

function App() {
	const [theme, setTheme] = useState(lightTheme);

	return (
		<Box
			className="App"
			sx={{
				background: `linear-gradient(to right, ${theme.accentO}, ${theme.secondary}, ${theme.background})`,
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
			<Footer theme={theme} />
		</Box>
	);
}

export default App;
