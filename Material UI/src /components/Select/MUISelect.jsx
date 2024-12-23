import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel, FormHelperText, Checkbox, ListItemText, TextField } from '@mui/material';

function MUISelect() {
  const [basicValue, setBasicValue] = useState('');
  const [helperValue, setHelperValue] = useState('');
  const [errorValue, setErrorValue] = useState('');
  const [multiValue, setMultiValue] = useState([]);
  const [textValue, setTextValue] = useState('');
  const [disabledValue, setDisabledValue] = useState('');
  const [sizeSmallValue, setSizeSmallValue] = useState('');
  const [sizeMediumValue, setSizeMediumValue] = useState('');
  const [fullWidthValue, setFullWidthValue] = useState('');

  const handleBasicChange = (event) => setBasicValue(event.target.value);
  const handleHelperChange = (event) => setHelperValue(event.target.value);
  const handleErrorChange = (event) => setErrorValue(event.target.value);
  const handleMultiChange = (event) => {
    const { target: { value } } = event;
    setMultiValue(typeof value === 'string' ? value.split(',') : value);
  };
  const handleTextChange = (event) => setTextValue(event.target.value);
  const handleDisabledChange = (event) => setDisabledValue(event.target.value);
  const handleSizeSmallChange = (event) => setSizeSmallValue(event.target.value);
  const handleSizeMediumChange = (event) => setSizeMediumValue(event.target.value);
  const handleFullWidthChange = (event) => setFullWidthValue(event.target.value);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: '0 auto' }}>
      
      {/* Basic Select */}
      <FormControl sx={{marginTop:'10px'}} fullWidth>
        <InputLabel>Basic</InputLabel>
        <Select
          value={basicValue}
          onChange={handleBasicChange}
          sx={{marginTop:'6px' , backgroundColor: 'white' }}
        >
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </Select>
      </FormControl>

      {/* Select with Helper Text */}
      <FormControl fullWidth>
        <InputLabel>With Helper Text</InputLabel>
        <Select
          value={helperValue}
          onChange={handleHelperChange}
          sx={{ backgroundColor: 'white' }}
        >
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </Select>
        <FormHelperText sx={{ color: 'text.secondary' }}>Choose wisely</FormHelperText>
      </FormControl>

      {/* Disabled Select */}
      <FormControl fullWidth disabled>
        <InputLabel>Disabled</InputLabel>
        <Select
          value={disabledValue}
          onChange={handleDisabledChange}
          sx={{ backgroundColor: 'grey.200' }}
        >
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </Select>
      </FormControl>

      {/* Error State */}
      <FormControl fullWidth error>
        <InputLabel>Error</InputLabel>
        <Select
          value={errorValue}
          onChange={handleErrorChange}
          sx={{ backgroundColor: 'white' }}
        >
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </Select>
        <FormHelperText sx={{ color: 'error.main' }}>Error message here</FormHelperText>
      </FormControl>

      {/* Multiple Select */}
      <FormControl fullWidth>
        <InputLabel>Multiple</InputLabel>
        <Select
          multiple
          value={multiValue}
          onChange={handleMultiChange}
          renderValue={(selected) => selected.join(', ')}
          sx={{ backgroundColor: 'white' }}
        >
          {['option1', 'option2', 'option3'].map((option) => (
            <MenuItem key={option} value={option}>
              <Checkbox checked={multiValue.indexOf(option) > -1} />
              <ListItemText primary={option} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Small Size Select */}
      <FormControl fullWidth size="small">
        <InputLabel>Small</InputLabel>
        <Select
          value={sizeSmallValue}
          onChange={handleSizeSmallChange}
          sx={{ backgroundColor: 'white' }}
        >
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </Select>
      </FormControl>

      {/* Medium Size Select */}
      <FormControl fullWidth size="medium">
        <InputLabel>Medium</InputLabel>
        <Select
          value={sizeMediumValue}
          onChange={handleSizeMediumChange}
          sx={{ backgroundColor: 'white' }}
        >
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </Select>
      </FormControl>

      {/* Full Width Select */}
      <FormControl fullWidth>
        <InputLabel>Full Width</InputLabel>
        <Select
          value={fullWidthValue}
          onChange={handleFullWidthChange}
          sx={{ backgroundColor: 'white' }}
        >
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default MUISelect;