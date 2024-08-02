import { Box, Container, Grid, Typography, styled } from "@mui/material"
import Avatar from '../../../../assets/images/avatar.jpg'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";


const Hero = () => {
  const StyleHero = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up('xs')]: { // <= mobile
        paddingTop: "100px",

    },
    [theme.breakpoints.up('md')]: { // >=mobile
        paddingTop: "0",
    }
    
  }))
  const StyleImage = styled('img')(({theme}) => ({
    width: '75%',
    borderRadius: '50%',
    border: `1px solid ${theme.palette.primary.contrastText}`
  }))
  return (
    <>
    <StyleHero>
      <Container maxWidth='lg'>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
          <Box position="relative">
          <Box position="absolute" width={"150%"} top={-100} right={0}>
          <AnimatedBackground />
          </Box>
          <Box position="relative" textAlign="center">
                <StyleImage src={Avatar} alt="" />
                </Box>
                </Box>
          </Grid>
          <Grid item xs={12} md={7}>
                <Typography color='primary.contrastText' variant="h1" textAlign='center'>Elen Poliana</Typography>
                <Typography color='primary.contrastText' variant="h2"  textAlign='center'>Developer</Typography>
                <Grid container display='flex' justifyContent='center' spacing={3} pt={3}>
                <Grid item xs={12} md={4} display='flex' justifyContent='center'>
                  <StyledButton>  
                    <ArrowDownwardIcon/>
                    <Typography>
                    Download CV 
                     </Typography>
                  </StyledButton>
                  
                </Grid>
                <Grid item xs={12} md={4} display='flex' justifyContent='center'>
                  <StyledButton>
                  <EmailIcon/>  <Typography>
                  Contact CV
                     </Typography>
                  </StyledButton>
                </Grid>
                </Grid>
          </Grid>
        </Grid>    
      </Container>
    </StyleHero>
    </>
  )
}

export default Hero
