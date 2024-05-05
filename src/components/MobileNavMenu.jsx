import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Avatar, Box, IconButton, Slide } from "@mui/material";
import './MobileNavMenu.css'

const MobileNavMenu = ({theme,open, setOpen}) => {
    const scrollToSection = (id) => {
		const element = document.getElementById(id)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
            setOpen(!open)
		}
	}
    const goToResume = () => {
		window.location.href = 'https://drive.google.com/file/d/1BhYRGV1rpZszuRzlCa3cfvs9OlhIpiJQ/view?usp=sharing';
	}
    return (
        <Slide  direction="left" in={open} mountOnEnter unmountOnExit>
            <Box sx={{ width: '100vw', height: '130vh', background: `linear-gradient(to bottom, ${theme.accent}, ${theme.secondary})`, position: 'absolute', top: '0', zIndex: 100 }}>
                <Box sx={{display:'flex', justifyContent:'flex-end'}}>
                <IconButton sx={{ color: '#ffffff', p:'20px' }} onClick={() => setOpen(!open)}>
                    <KeyboardArrowDownIcon sx={{ width: '46px', height: '46px' }} />
                </IconButton>
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                            gap: '40px',
                            borderColor: theme.text,
                            color: '#ffffff'
                        }}
                    >
                        <button style={{ fontSize: '36px' }} className='nav-button-mobile' onClick={() => { scrollToSection('home') }}>Home</button>
                        <button style={{ fontSize: '36px' }} className='nav-button-mobile' onClick={() => { scrollToSection('about') }}>About</button>
                        <button style={{ fontSize: '36px' }} className='nav-button-mobile' onClick={() => { scrollToSection('projects') }}>Projects</button>
                        <button style={{ fontSize: '36px' }} className='nav-button-mobile' onClick={() => { scrollToSection('contact') }}>Contact</button>
                        <button style={{ fontSize: '36px' }} className='nav-button-mobile' onClick={() => { goToResume() }}>Resume</button>
                        <Box>
					<Box sx={{ display: 'flex', gap: '20px', flexDirection: { xs: 'row', md: 'column' } }}>
						<a style={{ all: 'unset' }} href="https://github.com/Junoxy">
							<IconButton sx={{'&:hover':{transform:'scale(1.3)'}}}>
								<Avatar sx={{width:'40px', height:'40px'}} src="src/assets/github.png" />
							</IconButton>
						</a>
						<a
							style={{ all: 'unset' }}
							href="https://www.linkedin.com/in/juno-ogay-45a2512ba/?locale=en_US"
						>
							<IconButton sx={{'&:hover':{transform:'scale(1.3)'}}}>
								<Avatar sx={{width:'40px', height:'40px'}} src="src/assets/linkedin.png" />
							</IconButton>
						</a>
					</Box>
				</Box>
                    </Box>
                </Box>
                
            </Box>
        </Slide>
    )
}
export default MobileNavMenu;