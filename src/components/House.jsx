import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from '@mui/material';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import CropFreeIcon from '@mui/icons-material/CropFree';
import MicrowaveIcon from '@mui/icons-material/Microwave';

const House = ({
  img,
  price,
  address,
  bedrooms,
  bathrooms,
  kitchen,
  space,
}) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Card sx={{ maxWidth: 350 }}>
        <CardMedia sx={{ height: 170 }} image={img} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ${price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {address}
          </Typography>
          <Box
            sx={{
              display: { md: 'flex' },
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box sx={{ flexDirection: 'column' }}>
              <IconButton
                aria-label="fingerprint"
                color="secondary"
                sx={{ gap: 1 }}
              >
                <BedIcon />
                <Typography variant="body2" color="text.secondary">
                  {bedrooms}
                </Typography>
              </IconButton>
              <IconButton
                aria-label="fingerprint"
                color="secondary"
                sx={{ gap: 1 }}
              >
                <BathtubIcon />
                <Typography variant="body2" color="text.secondary">
                  {bathrooms}
                </Typography>
              </IconButton>
            </Box>
            <Box sx={{ flexDirection: 'column' }}>
              <IconButton
                aria-label="fingerprint"
                color="secondary"
                sx={{ gap: 1 }}
              >
                <MicrowaveIcon />
                <Typography variant="body2" color="text.secondary">
                  {kitchen}
                </Typography>
              </IconButton>
              <IconButton
                aria-label="fingerprint"
                color="secondary"
                sx={{ gap: 1 }}
              >
                <CropFreeIcon />
                <Typography variant="body2" color="text.secondary">
                  {space}
                </Typography>
              </IconButton>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default House;
