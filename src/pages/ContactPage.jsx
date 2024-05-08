import { Box, Typography} from '@mui/material';
import './ContactPage.css'

const ContactPage = ({ theme }) => {
	const handleContactClick = () => {
		
		window.open('mailto:junjun.privated@gmail.com', '_blank');
	};

	return (
		<Box id='contact' sx={{width: '100%', height:'50vh', display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column', gap:'20px', my:'50px'}}>
			<Typography sx={{fontSize:'34px', fontWeight:'600', color: theme.accent, textAlign:'center'}}>For any questions you may have</Typography>
			<Typography sx={{fontSize:'54px', fontWeight:'600', color: theme.accent, textAlign:'center'}}> Lets have a talk!</Typography>
			<button className='contact-button' onClick={handleContactClick} style={{display:'flex', justifyContent:'center', alignItems:'center',width:'250px', height:'70px', borderRadius:'30px', backgroundColor:theme.accent, border:'none'}}>
				<Typography sx={{fontSize:'24px', fontWeight:'600', color: theme.text}}>Contact Me</Typography>
			</button>
		</Box>
	);
};

export default ContactPage;
