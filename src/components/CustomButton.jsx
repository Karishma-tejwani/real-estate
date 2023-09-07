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
    display: 'block',
    border: '2px solid transparent',
    '&:hover': {
      backgroundColor: color,
      color: backgroundColor,
      borderColor: backgroundColor,
    },
    [theme.breakpoints.down('md')]: {
      margin: (heroBtn || getStartedBtn) && theme.spacing(0, 'auto', 0, 'auto'),
      padding: (heroBtn || getStartedBtn) && theme.spacing(1),
      width: (heroBtn || getStartedBtn) && '30%',
      alignItems: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: guideBtn && theme.spacing(3),
      width: guideBtn && '90%',
    },
  }));

  return <CustomBtn>{btnText}</CustomBtn>;
};

export default CustomButton;
