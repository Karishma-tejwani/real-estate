import React from 'react';
import { styled, Box, Typography, Container } from '@mui/material';
import CustomButton from './CustomButton';
import home from '../assets/home.png';

const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    padding: '5px',
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: '42px',
    color: '#1a237e',
    fontWeight: 'bold',
    margin: theme.spacing(2, 0, 2, 0),
    [theme.breakpoints.down('md')]: {
      fontSize: '32px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '28px',
    },
  }));

  const CustomText = styled(Typography)(({ theme }) => ({
    fontSize: '16px',
    color: 'gray',
    padding: '5px 5px',
    marginTop: theme.spacing(10),
  }));

  const Description = styled(Typography)(({ theme }) => ({
    fontSize: '18px',
    color: 'gray',
    margin: theme.spacing(0, 0, 4, 0),
  }));

  const Image = styled('img')(({ theme }) => ({
    maxWidth: '80%',
    height: 'auto',
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
      marginTop: theme.spacing(15),
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '70%',
      marginTop: theme.spacing(-5),
    },
  }));

  return (
    <Box
      sx={{
        backgroundColor: '#c5cae9',
        minHeight: '500px',
        overflow: 'hidden',
      }}
    >
      <Container>
        <CustomBox>
          <Box flex={1}>
            <CustomText variant="body2">
              Welcome to Elite Real Estate.
            </CustomText>
            <Title variant="h1">
              Discover a place where you'll love to live.
            </Title>
            <Description variant="body2">
              Reference site about Lorem Ipsum, giving information on its
              origins, as well as a random Lipsum generator. Lorem ipsum is
              placeholder text commonly used in the graphic print.
            </Description>
            <CustomButton
              backgroundColor="#1565c0"
              color="#fff"
              btnText="Show More"
              heroBtn={true}
            />
          </Box>
          <Box flex={1}>
            <Image src={home} alt="Home" />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Hero;
