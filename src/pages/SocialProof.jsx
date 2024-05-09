import { Box, Typography } from '@mui/material';
import SocialProofCard from '../components/SocialProofCard';
import { socialProofs } from '../socialProofData';

const SocialProof = ({ theme }) => {
	return (
		<Box sx={{display:'flex', gap:'100px', flexDirection:'column'}}>
            <Typography sx={{textAlign:'center', fontSize:'34px', fontWeight:'600', color: theme.accent,}}>See what others have said about me!</Typography>
            <Box sx={{display:'flex', gap:'30px', flexDirection:{xs:'column', md:'row'}}}>
            {socialProofs.map((info, i) => {
                return(
                    <SocialProofCard key={i} info={info} theme={theme}/>
                )
            })}
            </Box>
			
			
		</Box>
	);
};

export default SocialProof;
