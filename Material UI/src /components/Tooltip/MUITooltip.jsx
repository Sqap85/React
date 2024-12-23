import React from 'react';
import { Tooltip, IconButton } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';

/*Tooltip, kullanıcı arayüzlerinde (UI) kullanılan ve bir öğenin üzerine fare ile gelindiğinde küçük bir bilgi balonu olarak görünen bir açıklama veya ipucudur.*/
function MUITooltip() {
  return (
    <div style={{margin:'10px'}}>
      <h3>Basic Tooltip</h3>
      {/* Basit Tooltip */}
       <Tooltip title="Delete" arrow> {/*arrow özelliği, MUI Tooltip bileşeninde, tooltip'in ok şeklinde bir işaretçi eklemesini sağlar. */}
        <IconButton>Delete</IconButton>
      </Tooltip>

      <h3>Tooltip with Delay</h3>
      {/* Gecikmeli Tooltip */}
      <Tooltip title="Info" enterDelay={500} leaveDelay={200}>
        <IconButton>
          <HelpIcon />
        </IconButton>
      </Tooltip>

      <h3>Tooltip with Placement</h3>
      {/* Tooltip konumuyla */}
      <Tooltip title="Top Tooltip" placement="right">
        <IconButton>
          <HelpIcon />
        </IconButton>
      </Tooltip>

      <h3>Interactive Tooltip</h3>
      {/* Etkileşimli Tooltip */}
      <Tooltip title="Interactive Tooltip" disableInteractive>
        <IconButton>
          <HelpIcon />
        </IconButton>
      </Tooltip>

      <h3>Custom Tooltip Style</h3>
      {/* Özelleştirilmiş stil ile Tooltip */}
      <Tooltip title="Custom Styled Tooltip" sx={{ backgroundColor: 'purple', color: 'pink' }}>
        <IconButton>
          <HelpIcon/>
        </IconButton>
      </Tooltip>
    </div>
  );
}

export default MUITooltip;
