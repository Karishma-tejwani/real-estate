import React from 'react';
import {
  styled,
  Box,
  Container,
  Typography,
} from '@mui/material';
import CustomButton from './CustomButton';
import home from '../assets/home.jpeg';

const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: '48px',
    color: '#1a237e',
    fontWeight: 'bold',
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down('sm')]: {
      fontSize: '32px',
    },
  }));

  return (
    <Box sx={{ backgroundColor: '#c5cae9', minHeight: '80vh' }}>
      <Container>
        <CustomBox>
          <Box flex="1">
            <Typography
              variant="body2"
              sx={{
                fontSize: '16px',
                fontWeight: 700,
                color: '#757575',
                mt: 10,
                mb: 4,
              }}
            >
              Welcome to Real Estate
            </Typography>
            <Title variant="h1">Discover More about Real Estate Agencies</Title>
            <Typography
              variant="body2"
              sx={{ fontSize: '18px', color: 'gray', my: 4 }}
            >
              Reference site about Lorem Ipsum, giving information on its
              origins, as well as a random Lipsum generator. Lorem ipsum is
              placeholder text commonly used in the graphic print.
            </Typography>
            <CustomButton
              backgroundColor="#1565c0"
              color="#fff"
              btnText="Show More"
              heroBtn={true}
            />
          </Box>
          <Box flex="2" marginTop="8%" marginBottom="2%">
            <img
              src={home}
              alt="home"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Hero;
