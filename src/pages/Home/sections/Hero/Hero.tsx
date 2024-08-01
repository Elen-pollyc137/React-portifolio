import { Button, Container, Grid, Typography, styled } from "@mui/material"
import Avatar from '../../../../assets/images/avatar.jpg'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import EmailIcon from '@mui/icons-material/Email';


const Hero = () => {
  const StyleHero = styled('div')(() => ({
    background: '#000000',
    height: '100vh',
    paddingTop: '100px'
    
  }))
  const StyleImage = styled('img')(() => ({
    width: '100%',
    borderRadius: '50%'
  }))
  return (
    <>
    <StyleHero>
      <Container maxWidth='lg'>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
                <StyleImage src={Avatar} alt="" />
          </Grid>
          <Grid item xs={12} md={7}>
                <Typography color='primary' variant="h1" textAlign='center'>Elen Poliana</Typography>
                <Typography color='primary' variant="h2"  textAlign='center'>Developer</Typography>
                <Grid container display='flex' justifyContent='center'>
                <Grid item xs={12} md={4} display='flex' justifyContent='center'>
                   <Button> <ArrowDownwardIcon/> Dowload CV</Button>
                </Grid>
                <Grid item xs={12} md={4} display='flex' justifyContent='center'>
                  <Button> <EmailIcon/> Contact CV</Button>
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
