import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

function About(){
    return (
        <>
          <Box id="About Me"
    border={1} borderColor="white" borderRadius="10px"
    display="flex" justifyContent="center" alignItems="center"
    fontSize={24}
      sx={{
        width: '100',
        marginTop: 1,
        // marginRight: 5,
        height: 300,
        backgroundColor: '#2E3B55',
        '&:hover': {
          backgroundColor: '#2E3B55',
          fontSize:26,
          boxShadow: 5,
        },
        
      }}
    >
<Typography  class= "neonText"
    color= "White"
    marginBottom={30}
    > 
    <h1>My name is Layne Nigro and I am a highly motivated fullstack web developer. I have a passion for functional design and I love working with computers.</h1>
</Typography>
</Box>
        </>
    )
}

export default About