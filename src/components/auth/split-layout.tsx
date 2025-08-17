import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Logo } from '@/components/core/logo';
export interface SplitLayoutProps {
  children: React.ReactNode;
}

export function SplitLayout({ children }: SplitLayoutProps): React.JSX.Element {
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 800px' }, minHeight: '100vh' }}>
      <Box
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          // bgcolor: 'var(--mui-palette-background-level1)',
          bgcolor: 'error.main', // red from MUI theme
          color: 'common.white', // white text
          display: { xs: 'none', lg: 'flex' },
          flexDirection: 'column',
          p: 3,
        }}
      >
        <Stack spacing={4} sx={{ maxWidth: '700px' ,alignItems: 'left'}}>
        
          <Stack spacing={1}>
            <Typography variant="h2">GGC Admin Panel</Typography>
            <Typography color="white" variant="body2">
              Access analytics, manage subscriptions, and configure users.
            </Typography>
          </Stack>
          <Stack
            direction="row"
            spacing={3}
            sx={{ alignItems: 'center', color: 'var(--mui-palette-neutral-500)', flexWrap: 'wrap' }}
          >
            <Typography variant="body2" sx={{color: 'common.white'}}>Version: 1.0.0</Typography>
            <Typography variant="body2" sx={{color: 'common.white'}} component="a" href="https://app.gridirongc.com" target="_blank" rel="noopener noreferrer">
              Visit App
</Typography>
          </Stack>
        </Stack>
      </Box>
      <Box sx={{ boxShadow: 'var(--mui-shadows-8)', display: 'flex', flexDirection: 'column' }}>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            flex: '1 1 auto',
            justifyContent: 'center',
            p: 3,
          }}
        >
          <Box sx={{ maxWidth: '420px', width: '100%' }}>{children}</Box>
        </Box>
      </Box>
    </Box>
  );
}
