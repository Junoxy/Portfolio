import { Avatar, Box, Divider, Typography } from "@mui/material";
import './HomePage.css'
import { useState, useEffect,useRef } from "react";
import { useIntersectionObserver } from '../useIntersectionObserver';

const HomePage = ({theme}) => {
    const homeRef = useRef(null);
	const isVisible = useIntersectionObserver(homeRef);
    const handleContactClick = () => {
		
		window.open('mailto:junjun.privated@gmail.com', '_blank');
	};

    const scrollToSection = (id) => {
		const element = document.getElementById(id)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}
    return (
        <Box id='home' ref={homeRef} sx={{height:{xs:'100vh',md:'calc(100vh + 67px)'}, width: '100%', display: 'flex',flexDirection:{xs:'column', md:'row'}, justifyContent: 'center' , alignItems:'center', gap:'30px',opacity: isVisible ? 1 : 0,
        transition: 'opacity 1.5s' }}>
        <Box className='home-text-container'>
            <Typography className="home-text1" sx={{fontWeight:'300',fontSize:'66px',color:theme.text, marginBottom:'-45px', marginLeft: '15px'}} >Juno</Typography>
            <Typography className="home-text2" sx={{fontWeight:'400',fontSize:'90px',color:theme.accent, marginLeft: '70px'}} >Ogay</Typography>
            <Avatar className='home-img' src="/images/swaglord.jpg" alt="Juno" sx={{width: '300px', height: '300px', display:{xs:'block', md:'none'}}}/>
            <Divider className='home-divider' sx={{width:'150%', marginLeft:'-65px',bgcolor: theme.primary,display:{xs:'none', md:'block'}}}/>
            <Typography className="home-text3" sx={{fontWeight:'300',fontSize:'66px',color:theme.text, marginBottom:'-30px', marginLeft: {xs:'60px',md:'-45px'}}} >React</Typography>
            <Typography className="home-text4" sx={{fontWeight:'700',fontSize:'72px',color:theme.accent}} >Developer</Typography>
            <Box sx={{display:'flex', gap:'20px'}}>
            <button className='contact-button-home' onClick={() => scrollToSection('projects')} style={{display:'flex', justifyContent:'center', alignItems:'center',width:'150px', height:'50px', borderRadius:'30px', backgroundColor:theme.accent, border:'none'}}>
				<Typography sx={{fontSize:'20px', fontWeight:'600', color: theme.text}}>Projects</Typography>
			</button>
            <button className='contact-button-home' onClick={handleContactClick} style={{display:'flex', justifyContent:'center', alignItems:'center',width:'150px', height:'50px', borderRadius:'30px', backgroundColor:theme.accent, border:'none'}}>
				<Typography sx={{fontSize:'20px', fontWeight:'600', color: theme.text}}>Contact</Typography>
			</button>
            </Box>
            
        </Box>
            <Avatar className='home-img' src="/images/swaglord.jpg" alt="Juno" sx={{width: '500px', height: '500px', display:{xs:'none', md:'block'}}}/>
        </Box>
    )
} 

export default HomePage;