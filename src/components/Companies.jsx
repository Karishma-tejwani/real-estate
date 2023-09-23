import { Box, Container, Stack, Typography, styled } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import amazon from '../assets/amazon.png';
import meta from '../assets/meta.png';
import google from '../assets/google.png';
import microsoft from '../assets/micorsoft.png';
import slack from '../assets/slack.png';
import cisco from '../assets/cisco.png';
import Marquee from 'react-fast-marquee';

const companyLogos = [
  {
    id: 1,
    image: amazon,
  },
  {
    id: 2,
    image: google,
  },
  {
    id: 3,
    image: meta,
  },
  {
    id: 4,
    image: microsoft,
  },
  {
    id: 5,
    image: slack,
  },
  {
    id: 6,
    image: cisco,
  },
];

const Companies = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(5),
    },
  }));

  const CustomStack = styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  }));

  const InnerContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '200px',
      flexDirection: 'column',
    },
  }));

  return (
    <Box>
      <CustomContainer>
        <CustomBox>
          <Typography variant="h4" style={{ color: '#1a237e' }}>
            Elite.
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: 'gray', fontWeight: 'bold' }}
          >
            More than 20k trust Elite Real Estate.
          </Typography>
        </CustomBox>
        <Box sx={{ mb: 5 }}>
          <CustomStack>
            <StarIcon style={{ color: '#ffee33' }} />
            <StarIcon style={{ color: '#ffee33' }} />
            <StarIcon style={{ color: '#ffee33' }} />
            <StarIcon style={{ color: '#ffee33' }} />
            <StarIcon style={{ color: '#ffee33' }} />
          </CustomStack>
          <Typography
            variant="body2"
            sx={{ color: 'gray', fontWeight: 'bold', mt: 1 }}
          >
            5-star Rating (1k+ Reviews)
          </Typography>
        </Box>
      </CustomContainer>
      <Marquee>
        <Box>
          <InnerContainer>
            {companyLogos.map((item) => (
              <Container key={item.id}>
                <img
                  src={item.image}
                  alt="Company Logos"
                  style={{ width: '100%' }}
                />
              </Container>
            ))}
          </InnerContainer>
        </Box>
      </Marquee>
    </Box>
  );
};

export default Companies;
