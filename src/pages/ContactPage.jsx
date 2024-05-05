import { Box, Typography} from '@mui/material';
import './ContactPage.css'

const ContactPage = ({ theme }) => {
	const handleContactClick = () => {
		// Replace 'your.email@example.com' with your actual email address
		window.open('mailto:your.email@example.com', '_blank');
	};

	return (
		<Box id='contact' sx={{width: '100%', height:'50vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
			<button className='contact-button' onClick={handleContactClick} style={{display:'flex', justifyContent:'center', alignItems:'center',width:'250px', height:'70px', borderRadius:'30px', backgroundColor:theme.accent, border:'none'}}>
				<Typography sx={{fontSize:'24px', fontWeight:'600', color: theme.text}}>Contact Me</Typography>
			</button>
		</Box>
	);
};

export default ContactPage;
