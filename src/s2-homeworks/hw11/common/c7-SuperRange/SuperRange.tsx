import React from 'react';
import { Slider, SliderProps } from '@mui/material';

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      size='medium'
      sx={{
        color: '#00CC22',
        width: 150,
        '& .MuiSlider-thumb': {
          backgroundColor: '#FFFFFF',
          border: '2px solid currentColor',
          width: 18,
          height: 18,

          '&:after': {
            content: '""',
            position: 'absolute',
            width: 6,
            height: 6,
            borderRadius: '50%',
            backgroundColor: 'currentColor',
          },
        },
      }}
      {...props}
    />
  );
};

export default SuperRange;
