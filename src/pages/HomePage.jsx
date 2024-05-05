import { Avatar, Box, Divider, Typography } from "@mui/material";
import './HomePage.css'
import { useState, useEffect,useRef } from "react";
import { useIntersectionObserver } from '../useIntersectionObserver';

const HomePage = ({theme}) => {
    const homeRef = useRef(null);
	const isVisible = useIntersectionObserver(homeRef);
    return (
        <Box id='home' ref={homeRef} sx={{height:{xs:'100vh',md:'calc(100vh + 67px)'}, width: '100%', display: 'flex',flexDirection:{xs:'column', md:'row'}, justifyContent: 'center' , alignItems:'center', gap:'30px',opacity: isVisible ? 1 : 0,
        transition: 'opacity 1.5s' }}>
        <Box className='home-text-container'>
            <Typography className="home-text1" sx={{fontWeight:'300',fontSize:'66px',color:theme.text, marginBottom:'-45px', marginLeft: '15px'}} >Juno</Typography>
            <Typography className="home-text2" sx={{fontWeight:'400',fontSize:'90px',color:theme.accent, marginLeft: '70px'}} >Ogay</Typography>
            <Avatar className='home-img' src="./Images/swaglord.jpg" alt="Juno" sx={{width: '300px', height: '300px', display:{xs:'block', md:'none'}}}/>
            <Divider className='home-divider' sx={{width:'150%', marginLeft:'-65px',bgcolor: theme.primary,display:{xs:'none', md:'block'}}}/>
            <Typography className="home-text3" sx={{fontWeight:'300',fontSize:'66px',color:theme.text, marginBottom:'-30px', marginLeft: {xs:'60px',md:'-45px'}}} >Web</Typography>
            <Typography className="home-text4" sx={{fontWeight:'700',fontSize:'72px',color:theme.accent}} >Developer</Typography>
        </Box>
            <Avatar className='home-img' src="./Images/swaglord.jpg" alt="Juno" sx={{width: '400px', height: '400px', display:{xs:'none', md:'block'}}}/>
        </Box>
    )
} 

export default HomePage;