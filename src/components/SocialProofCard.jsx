import { Avatar, Box, Typography } from "@mui/material"

const SocialProofCard = ({theme, info}) => {
    return (
        <Box sx={{width:{xs:'100%',md:'33%'}, height:'500px', background:`linear-gradient(to bottom, ${theme.accentO}, ${theme.secondary}, ${theme.background})`, borderRadius:'50px', display:'flex', flexDirection:'column', alignItems:'center', p:'25px', gap:'20px', transition:'0.3s ease' ,'&:hover':{transform:'scale(1.05)', boxShadow:'0px 0px 5px 5px #ffffff'}}}>
            
            <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', gap:'10px'}}>
            <Avatar variant="circle" sx={{width:'200px', height:'200px'}} src={info.img}></Avatar>
                <Typography textAlign={'center'} sx={{fontSize:'20px', fontWeight:'600', color:theme.text}}>{info.name} </Typography>
                <Typography textAlign={'center'} sx={{fontSize:'16px', fontWeight:'600', color:theme.text}}> {info.title}</Typography>
            
            </Box>
            <Typography  textAlign={'center'} sx={{overflowY:'auto', fontSize:'18px', color:theme.text}}>{info.quote}</Typography>
            
        </Box>
    )
}

export default SocialProofCard;