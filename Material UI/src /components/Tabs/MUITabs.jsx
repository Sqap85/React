import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';

function MUITabs() {
  // Aktif sekme durumunu yönetmek için useState kullanıyoruz
  const [activeTab, setActiveTab] = useState(0);

  // Sekme değişikliklerini yönetmek için bir event handler
  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      {/* TABS Bileşeni */}
      {/* 'value' ile aktif olan sekme belirtilir. */}
      {/* 'onChange' ile sekme değişiklikleri yakalanır. */}
      <Tabs 
        value={activeTab} 
        onChange={handleChange} 
        centered 
        aria-label="basic tabs example"
        textColor="primary" // Aktif sekmenin metin rengi
        indicatorColor="primary" // Alt çizgi rengini belirler
      >
        {/* Her bir 'Tab' bileşeni bir sekmeyi temsil eder */}
        <Tab label="Tab 1" />
        <Tab label="Tab 2" />
        <Tab label="Tab 3" />
      </Tabs>

      {/* SEKME İÇERİKLERİ */}
      {/* Aktif sekmeye bağlı olarak içerik gösteriliyor */}
      <TabPanel value={activeTab} index={0}>
        Content of Tab 1 Burda component cagirabilirsin
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
        Content of Tab 2
      </TabPanel>
      <TabPanel value={activeTab} index={2}>
        Content of Tab 3
      </TabPanel>
    </Box>
  );
}

// SEKME İÇERİĞİ İÇİN PANEL
// TabPanel yalnızca aktif sekme ile eşleşen içerikleri gösterir
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default MUITabs;
