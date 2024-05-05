import { useState } from 'react';
import NavBar from './components/NavBar';
import { Box, Container } from '@mui/material';
import { lightTheme,darkTheme } from './theme/theme';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';


function App() {
	const [theme, setTheme] = useState(lightTheme);

	return (
		<Box sx={{background: `linear-gradient(to bottom, ${theme.background}, ${theme.secondary})`}} width={'100%'} height={'100%'}>
			<NavBar theme={theme} setTheme={setTheme} />
			<Container sx={{height:'100%', display:'flex', flexDirection:'column', justifyContent:'center' }}>
        <HomePage theme={theme} />
        <AboutPage theme={theme}/>
        <ProjectsPage theme={theme} />
        <ContactPage theme={theme} />
      </Container>
      <Footer theme={theme}/>
		</Box>
	);
}

export default App;
