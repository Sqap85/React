import React, { useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormControl,
  FormLabel,
} from "@mui/material";

function MUIChackbox() {
  const [checked, setChecked] = useState({
    primary: false,
    secondary: false,
    disabled: false,
    indeterminate: false,
    warning: false,
    small: false,
    large: false,
  });

  const handleChange = (event) => {
    setChecked({
      ...checked,
      [event.target.name]: event.target.checked,
    });
  };

  const handleIndeterminateChange = (event) => {
    setChecked({
      ...checked,
      [event.target.name]: !checked.indeterminate, // Toggle indeterminate
    });
  };

  return (
    <div style={{ margin: "50px" }}>
      <FormControl component="fieldset">
        <FormLabel component="legend">MUI Checkbox Features</FormLabel>
        <FormGroup>
          {/* Primary Checkbox */}
          <FormControlLabel
            control={
              <Checkbox
                name="primary"
                checked={checked.primary}
                onChange={handleChange}
                color="primary"
              />
            }
            label="Primary Checkbox"
          />

          {/* Secondary Checkbox */}
          <FormControlLabel
            control={
              <Checkbox
                name="secondary"
                checked={checked.secondary}
                onChange={handleChange}
                color="secondary"
              />
            }
            label="Secondary Checkbox"
          />

          {/* Warning Checkbox */}
          <FormControlLabel
            control={
              <Checkbox
                name="warning"
                checked={checked.warning}
                onChange={handleChange}
                color="warning"
              />
            }
            label="Warning Checkbox"
          />

          {/* Disabled Checkbox */}
          <FormControlLabel
            control={
              <Checkbox
                name="disabled"
                checked={checked.disabled}
                disabled
                onChange={handleChange} // The disabled checkbox will not change state
              />
            }
            label="Disabled Checkbox"
          />

          {/* Indeterminate Checkbox */}
          <FormControlLabel
            control={
              <Checkbox
                name="indeterminate"
                checked={checked.indeterminate}
                indeterminate={checked.indeterminate}
                onChange={handleIndeterminateChange}
              />
            }
            label="Indeterminate Checkbox"
          />

          {/* Small Sized Checkbox */}
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  // "& .MuiSvgIcon-root": {
                  //   color: "pink", // Set the checked color to pink
                  // },
                  "&.Mui-checked .MuiSvgIcon-root": {
                    color: "pink", // Ensure the checked state is also pink
                  },
                }}
                name="small"
                checked={checked.small}
                onChange={handleChange}
                size="small"
                color="primary"
              />
            }
            label="Small Checkbox (Pink)"
          />

          {/* Large Sized Checkbox */}
          <FormControlLabel
            control={
              <Checkbox
                name="large"
                checked={checked.large}
                onChange={handleChange}
                size="medium"
                color="success"
              />
            }
            label="Large Checkbox (Success Color)"
          />
        </FormGroup>
        <FormHelperText>
          {`Primary: ${checked.primary ? "Checked" : "Unchecked"}, 
          Secondary: ${checked.secondary ? "Checked" : "Unchecked"}, 
          Indeterminate: ${checked.indeterminate ? "Checked" : "Unchecked"},
          Warning: ${checked.warning ? "Checked" : "Unchecked"}, 
          Small: ${checked.small ? "Checked" : "Unchecked"},
          Large: ${checked.large ? "Checked" : "Unchecked"}`}
        </FormHelperText>
      </FormControl>
    </div>
  );
}

export default MUIChackbox;
