import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { MoviesOption } from './moviesOption/MoviesOption.jsx';
import { SeriesOption } from './seriesOption/SeriesOption.jsx';

export const CategorySelect = () => {
  const [category, setCategory] = useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Box sx={{ maxWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={handleChange}
        > 

        {
          window.location.pathname.split('/')[1] === 'movies' ?
          <MoviesOption/>
          : <SeriesOption/>
        }
        </Select>
      </FormControl>
    </Box>
  );
}