import React from 'react';
import { styled, Button } from '@mui/material';

const CustomButton = ({
  backgroundColor,
  color,
  btnText,
  heroBtn,
  guideBtn,
  getStartedBtn,
}) => {
  const CustomBtn = styled(Button)(({ theme }) => ({
    backgroundColor: backgroundColor,
    color: color,
    fontWeight: 700,
    fontSize: '20px',
    cursor: 'pointer',
    padding: '0.25rem 1.5rem',
    borderRadius: '5px',
    textTransform: 'uppercase',
    display: 'flex',
    border: '2px solid transparent',
    '&:hover': {
      backgroundColor: color,
      color: backgroundColor,
      borderColor: backgroundColor,
    },
    [theme.breakpoints.down('md')]: {
      // margin: (heroBtn || getStartedBtn) && theme.spacing(0, 'auto', 0, 'auto'),
      padding: (heroBtn || getStartedBtn) && theme.spacing(1),
      width: (heroBtn || getStartedBtn) && '65%',
      alignItems: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      margin: (heroBtn || getStartedBtn) && theme.spacing(0, 'auto', 0, 'auto'),
      marginTop: guideBtn && theme.spacing(3),
      width: (heroBtn || guideBtn) && '50%',
      fontSize: '12px',
    },
  }));

  return <CustomBtn>{btnText}</CustomBtn>;
};

export default CustomButton;
