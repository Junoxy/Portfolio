import { Avatar, Box, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Links = ({theme}) => {
    const goToGitHub = () => {
		window.location.href = 'https://github.com/Junoxy';
	};
    const goToLinkedIn = () => {
		window.location.href = 'https://www.linkedin.com/in/juno-ogay-45a2512ba/';
	};
    const handleContactClick = () => {
		window.open('mailto:junjun.privated@gmail.com', '_blank');
	};
	return (
		<Box sx={{ position: 'fixed', bottom: '50px', right: '50px', zIndex: 1000 }}>
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				<IconButton onClick={() => goToGitHub()}>
                     <GitHubIcon sx={{width:'50px', height:'50px', color:theme.text}}/> 
				</IconButton>
                <IconButton onClick={() => goToLinkedIn()}>
                    <LinkedInIcon sx={{width:'50px', height:'50px', color:theme.text}}/>   
				</IconButton>
                <IconButton onClick={() => handleContactClick()}>
					<EmailIcon sx={{width:'50px', height:'50px', color:theme.text}}/>
				</IconButton>
				
			</Box>
		</Box>
	);
};

export default Links;
