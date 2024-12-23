import React, { useState, useEffect } from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

function MUISkeleton() {
  const [loading, setLoading] = useState(true);

  // Simülasyon için useEffect ile veri yükleme
  useEffect(() => {
    // API çağrısı simülasyonu
    setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 saniye sonra yüklemeyi bitir
  }, []);

  return (
    <Stack spacing={2}>
      {/* Metin için Skeleton */}
      {loading ? (
        <Skeleton variant="text" width={210} />
      ) : (
        <Box>Gerçek içerik buraya gelecek</Box>
      )}
      {loading ? (
        <Skeleton variant="text" width="80%" />
      ) : (
        <Box>Gerçek içerik buraya gelecek</Box>
      )}

      {/* Daire için Skeleton */}
      {loading ? (
        <Skeleton variant="circular" width={40} height={40} />
      ) : (
        <Box>Profil Resmi</Box>
      )}

      {/* Dikdörtgen için Skeleton */}
      {loading ? (
        <Skeleton variant="rectangular" width={210} height={118} />
      ) : (
        <Box>Gerçek içerik buraya gelecek</Box>
      )}

      {/* Animasyon türleri */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        {loading ? (
          <>
            <Skeleton variant="text" animation="wave" width={210} />
            <Skeleton variant="text" animation="pulse" width={210} />
            <Skeleton variant="text" animation={false} width={210} />
          </>
        ) : (
          <Box>Gerçek içerik buraya gelecek</Box>
        )}
      </Box>

      {/* Karmaşık içerik için Skeleton */}
      {loading ? (
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Skeleton variant="circular" width={40} height={40} /> {/* Profil resmi */}
          <Box>
            <Skeleton variant="text" width={100} /> {/* Kullanıcı adı */}
            <Skeleton variant="text" width={150} /> {/* Alt bilgi */}
          </Box>
        </Box>
      ) : (
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Box>Profil Resmi</Box>
          <Box>
            <Box>Kullanıcı Adı</Box>
            <Box>Alt Bilgi</Box>
          </Box>
        </Box>
      )}
    </Stack>
  );
}

export default MUISkeleton;
