import { Box, Container, Grid, Typography, styled } from '@mui/material';
import h1 from '../assets/h1.jpeg';
import h2 from '../assets/h2.jpeg';
import h3 from '../assets/h3.jpg';
import House from './House';

const data = [
  {
    id: 1,
    img: h1,
    price: '23,000',
    address: 'Mankhool apartment, near Sharaf DG',
    bedrooms: '2 bedrooms',
    bathrooms: '1 bathroom',
    kitchen: '1 kitchen',
    space: '1500 sqft',
  },
  {
    id: 2,
    img: h2,
    price: '45,000',
    address: 'Capitol Tower, Internet City',
    bedrooms: '3 bedrooms',
    bathrooms: '2 bathrooms',
    kitchen: '1 kitchen',
    space: '3000 sqft',
  },
  {
    id: 3,
    img: h3,
    price: '30,000',
    address: 'Spinneys, near Burjman',
    bedrooms: '2 bedrooms',
    bathrooms: '1 bathroom',
    kitchen: '1 kitchen',
    space: '2000 sqft',
  },
  {
    id: 4,
    img: h1,
    price: '23,000',
    address: 'Mankhool apartment, near Sharaf DG',
    bedrooms: '2 bedrooms',
    bathrooms: '1 bathroom',
    kitchen: '1 kitchen',
    space: '1500 sqft',
  },
  {
    id: 5,
    img: h2,
    price: '45,000',
    address: 'Capitol Tower, Internet City',
    bedrooms: '3 bedrooms',
    bathrooms: '2 bathrooms',
    kitchen: '1 kitchen',
    space: '3000 sqft',
  },
  {
    id: 6,
    img: h3,
    price: '30,000',
    address: 'Spinneys, near Burjman',
    bedrooms: '2 bedrooms',
    bathrooms: '1 bathroom',
    kitchen: '1 kitchen',
    space: '2000 sqft',
  },
];

const Properties = () => {
  const PropertyBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-around',
    gap: 10,
    marginTop: theme.spacing(5),
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  }));

  const PropertyTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
    },
  }));

  return (
    <Box sx={{ mt: 5, py: 10, backgroundColor: '#9fa8da' }}>
      <Container>
        <PropertyTextBox>
          <Typography
            variant="h4"
            sx={{ textAlign: 'center', color: '#1a237e', fontWeight: 500 }}
          >
            Featured Properties
          </Typography>
          <Typography
            variant="body2"
            sx={{ textAlign: 'center', color: '#424242', fontWeight: 500 }}
          >
            Everything you need to know when looking fora new home!
          </Typography>
        </PropertyTextBox>
        <PropertyBox>
          <Grid container>
            {data &&
              data.map((item) => (
                <Grid
                  item
                  xs={12}
                  sm={4}
                  sx={{ padding: 2, display: 'flex', justifyContent: 'center' }}
                  key={item.id}
                >
                  <House
                    img={item.img}
                    price={item.price}
                    address={item.address}
                    bedrooms={item.bedrooms}
                    bathrooms={item.bathrooms}
                    kitchen={item.kitchen}
                    space={item.space}
                  />
                </Grid>
              ))}
          </Grid>
        </PropertyBox>
      </Container>
    </Box>
  );
};

export default Properties;
