import React from 'react';
import { Avatar } from '@mui/material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

function MUIAvatar() {
  return (
    <div style={{margin:'10px'}}>
      <h3>Default Avatar</h3>
      {/* Varsayılan avatar */}
      <Avatar alt="User Name" src="src/assets/images/a.png" sx={{ width: '100px', height: '100px' }} />

      <h3>Letter Avatar</h3>
      {/* Harfli avatar */}
      <Avatar sx={{ width: '100px', height: '100px' }}>85</Avatar>

      <h3>Icon Avatar</h3>
      {/* İkonlu avatar */}
      <Avatar sx={{ width: '100px', height: '100px' }}>
        <AlternateEmailIcon sx={{ fontSize: '40px' }} />
      </Avatar>

      <h3>Square Avatar</h3>
      {/* Kare avatar */}
      <Avatar sx={{ width: '100px', height: '100px', borderRadius: 0 }} alt="User Name" src="https://randomuser.me/api/portraits/men/85.jpg" />

      <h3>Small Avatar</h3>
      {/* Küçük avatar */}
      <Avatar sx={{ width: 24, height: 24 }}>AB</Avatar>

      <h3>Large Avatar</h3>
      {/* Büyük avatar */}
      <Avatar sx={{ width: 80, height: 80 }}>AB</Avatar>

      <h3>Custom Color Avatar</h3>
      {/* Renkli avatar */}
      <Avatar sx={{ backgroundColor: 'primary.main', width: 56, height: 56 }}>AB</Avatar>

      <h3>Avatar with Border</h3>
      {/* Çerçeveli avatar */}
      <Avatar sx={{ width: 56, height: 56, border: 2, borderColor: 'secondary.main' }}>AB</Avatar>

      <h3>Circle Avatar</h3>
      {/* Daire şeklinde avatar */}
      <Avatar sx={{ width: 56, height: 56, borderRadius: '50%' }} alt="User Name" src="https://randomuser.me/api/portraits/men/2.jpg" />

      <h3>Loading Placeholder Avatar</h3>
      {/* Yükleme placeholder avatar */}
      <Avatar sx={{ backgroundColor: 'pink' }}>LOADING</Avatar>
    </div>
  );
}

export default MUIAvatar;
