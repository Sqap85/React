import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { AccountCircle, Lock, Email, Phone, Visibility, VisibilityOff } from '@mui/icons-material';

function MUITextField() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: '0 auto' }}>
      {/* Basic TextField */}
      <TextField label="Outlined" variant="outlined" />

      {/* Filled variant */}
      <TextField label="Filled" variant="filled" />

      {/* Standard variant */}
      <TextField label="Standard" variant="standard" />

      {/* Disabled TextField */}
      <TextField label="Disabled" variant="outlined" disabled />

      {/* Read-only TextField */}
      <TextField
        label="Read Only"
        variant="outlined"
        InputProps={{ readOnly: true }}
        defaultValue="You can't edit this"
      />

      {/* Error state */}
      <TextField label="Error" variant="outlined" error helperText="Incorrect value" />

      {/* Password input */}
      <TextField 
        label="Password" 
        variant="outlined" 
        type={showPassword ? "text" : "password"} 
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Lock />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      {/* Multiline TextField */}
      <TextField
        label="Multiline"
        variant="outlined"
        multiline
        rows={4}
        placeholder="Type your text here..."
      />

      {/* Required TextField */}
      <TextField label="Required" variant="outlined" required />

      {/* Number input */}
      <TextField label="Number" variant="outlined" type="number" />

      {/* With placeholder */}
      <TextField label="Placeholder" placeholder="Enter some text" variant="outlined" />

      {/* Controlled TextField */}
      <TextField
        label="Controlled"
        variant="outlined"
        value="Controlled value"
        onChange={(e) => console.log(e.target.value)}
      />

      {/* With helper text */}
      <TextField
        label="Helper Text"
        variant="outlined"
        helperText="This is some helper text"
      />

      {/* Custom size */}
      <TextField label="Small" variant="outlined" size="small" />

      <TextField label="Medium" variant="outlined" size="medium" />

      {/* Full width */}
      <TextField label="Full Width" variant="outlined" fullWidth />

      {/* Color examples */}
      <TextField label="Primary Color" variant="outlined" color="primary" />

      <TextField label="Secondary Color" variant="outlined" color="secondary" />

      <TextField label="Error Color" variant="outlined" color="error" />

      <TextField label="Warning Color" variant="outlined" color="warning" />

      <TextField label="Info Color" variant="outlined" color="info" />

      <TextField label="Success Color" variant="outlined" color="success" />

      {/* Icon examples */}
      <TextField
        label="Username"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />

      <TextField
        label="Email"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Email />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <Visibility />
            </InputAdornment>
          ),
        }}
      />

      <TextField
        label="Phone"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Phone />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <VisibilityOff />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}

export default MUITextField;
