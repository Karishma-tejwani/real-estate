import { Box, Typography, styled } from '@mui/material';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import { ArrowRightAlt } from '@mui/icons-material';

const Guide = () => {
  const MainBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-around',
    width: '50%',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      marginBottom: 0,
    },
  }));

  const InnerBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      marginBottom: 0,
    },
  }));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
      }}
    >
      <div
        style={{
          width: '10%',
          height: '5px',
          backgroundColor: '#212121',
          margin: '0 auto',
        }}
      ></div>
      <Typography variant="h3" sx={{ my: 3 }}>
        How it works?
      </Typography>
      <Typography variant="body2" sx={{ textAlign: 'center', color: 'gray' }}>
        Everything you need to know when you want to buy, rent or sell - All in
        one place
      </Typography>
      <MainBox>
        <InnerBox sx={{ mt: 3 }}>
          <ShoppingCartCheckoutOutlinedIcon style={{ fontSize: '40px' }} />
          <Typography
            variant="body2"
            sx={{
              color: '#3B3c45',
              my: 1,
              fontSize: '16px',
            }}
          >
            Buying Guides
          </Typography>
          <Box
            sx={{
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Typography variant="body2" sx={{ color: '#0689FF' }}>
              How to Buy
            </Typography>
            <ArrowRightAlt style={{ color: '#0689FF' }} />
          </Box>
        </InnerBox>
        <InnerBox sx={{ mt: 3 }}>
          <HomeWorkOutlinedIcon style={{ fontSize: '40px' }} />
          <Typography
            variant="body2"
            sx={{
              color: '#3B3c45',
              my: 1,
              fontSize: '16px',
            }}
          >
            Renting Guides
          </Typography>
          <Box
            sx={{
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Typography variant="body2" sx={{ color: '#0689FF' }}>
              How to Rent
            </Typography>
            <ArrowRightAlt style={{ color: '#0689FF' }} />
          </Box>
        </InnerBox>
        <InnerBox sx={{ mt: 3 }}>
          <PaidOutlinedIcon style={{ fontSize: '40px' }} />
          <Typography
            variant="body2"
            sx={{
              color: '#3B3c45',
              my: 1,
              fontSize: '16px',
            }}
          >
            Selling Guide
          </Typography>
          <Box
            sx={{
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Typography variant="body2" sx={{ color: '#0689FF' }}>
              How to Sell
            </Typography>
            <ArrowRightAlt style={{ color: '#0689FF' }} />
          </Box>
        </InnerBox>
      </MainBox>
    </Box>
  );
};

export default Guide;
