import { Box, Container, Typography, styled } from '@mui/material';
import house from '../assets/house.png';
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from 'react';
import CountUp from 'react-countup';

const Details = () => {
  const [count, setCount] = useState(false);

  const CustomBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(10),
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      textAlign: 'center',
    },
  }));

  const ImgContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  }));

  const LargeText = styled(Typography)(({ theme }) => ({
    fontSize: '32px',
    color: '#000',
    fontWeight: '700',
    [theme.breakpoints.down('md')]: {
      fontSize: '32px',
    },
  }));

  const SmallText = styled(Typography)(({ theme }) => ({
    fontSize: '14px',
    color: '#7B8087',
    fontWeight: '500',
    [theme.breakpoints.down('md')]: {
      fontSize: '12px',
    },
  }));

  const TextFlexbox = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(7),
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: theme.spacing(0, 5, 0, 5),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: theme.spacing(5),
    },
  }));

  const Divider = styled('div')(({ theme }) => ({
    width: '13%',
    height: '5px',
    backgroundColor: '#000339',
    [theme.breakpoints.down('md')]: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  }));
  return (
    <Box sx={{ py: 10 }}>
      <Container>
        <CustomBox>
          <ImgContainer>
            <img src={house} alt="house" style={{ maxWidth: '100%' }} />
          </ImgContainer>

          <Box>
            <Divider />
            <Typography
              sx={{
                fontSize: '35px',
                color: '#000339',
                fontWeight: '700',
                my: 3,
              }}
            >
              You’ve found a neighborhood you love.
            </Typography>

            <Typography
              sx={{
                fontSize: '16px',
                color: '#5A6473',
                lineHeight: '27px',
              }}
            >
              When you own a home, you commit to living in one location for a
              period of time. We are here to ensure that this will be a
              memorable experience for you.
            </Typography>
          </Box>
        </CustomBox>
        <ScrollTrigger
          onEnter={() => setCount(true)}
          onExit={() => setCount(false)}
        >
          <TextFlexbox>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <LargeText>
                {count && (
                  <CountUp start={0} end={1000} duration={0.5} delay={0} />
                )}
                +
              </LargeText>
              <SmallText>Happy Clients</SmallText>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <LargeText>
                {count && (
                  <CountUp start={0} end={1500} duration={0.5} delay={0} />
                )}
                +
              </LargeText>
              <SmallText>Properties Rented</SmallText>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <LargeText>
                {count && (
                  <CountUp start={0} end={3000} duration={0.5} delay={0} />
                )}
                +
              </LargeText>
              <SmallText>Homes Sold</SmallText>
            </Box>
          </TextFlexbox>
        </ScrollTrigger>
      </Container>
    </Box>
  );
};

export default Details;
