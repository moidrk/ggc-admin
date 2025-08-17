'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

export interface UserFilters {
  email?: string;
  status?: string;
}

interface UsersFiltersProps {
  filters: UserFilters;
  sortDir?: 'asc' | 'desc';
}

export function UsersFilters({ filters }: UsersFiltersProps): React.JSX.Element {
  return (
    <Stack direction="row" spacing={2} sx={{ p: 2 }}>
      <TextField label="Search Users" size="small" defaultValue={filters.email} />
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      </Box>
    </Stack>
  );
}
