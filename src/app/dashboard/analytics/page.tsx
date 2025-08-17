import * as React from 'react';
import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { config } from '@/config';
import { dayjs } from '@/lib/dayjs';
import { UsersFilters } from './components/users-filters';
import { UsersPagination } from './components/users-pagination';
import { UsersTable, type User } from './components/users-table';

export const metadata = { title: `User Analytics | Dashboard | ${config.site.name}` } satisfies Metadata;

const users: User[] = [
  {
    id: 'USR-101',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    avatar: '/assets/avatar-1.png',
    convertedPlayers: 12,
    registeredOn: dayjs().subtract(7, 'day').toDate(),
    subscriptionStatus: 'subscribed',
    lastLogin: dayjs().subtract(1, 'hour').toDate(),
    activeSessions: 2,
  },
  {
    id: 'USR-102',
    name: 'Bob Smith',
    email: 'bob@example.com',
    avatar: '/assets/avatar-2.png',
    convertedPlayers: 4,
    registeredOn: dayjs().subtract(14, 'day').toDate(),
    subscriptionStatus: 'not_subscribed',
    lastLogin: dayjs().subtract(3, 'day').toDate(),
    activeSessions: 0,
  },
  {
    id: 'USR-103',
    name: 'Charlie Brown',
    email: 'charlie@example.com',
    avatar: '/assets/avatar-3.png',
    convertedPlayers: 9,
    registeredOn: dayjs().subtract(30, 'day').toDate(),
    subscriptionStatus: 'subscribed',
    lastLogin: dayjs().subtract(2, 'day').toDate(),
    activeSessions: 1,
  },
];

export default function Page(): React.JSX.Element {
  return (
    <Box
      sx={{
        maxWidth: 'var(--Content-maxWidth)',
        m: 'var(--Content-margin)',
        p: 'var(--Content-padding)',
        width: 'var(--Content-width)',
      }}
    >
      <Stack spacing={4}>
        {/* Header */}
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ alignItems: 'flex-start' }}>
          <Box sx={{ flex: '1 1 auto' }}>
            <Typography variant="h4">User Analytics</Typography>
          </Box>
        </Stack>

        {/* Table */}
        <Card>
          <UsersFilters filters={{ email: '', status: '' }} />
          <Divider />
          <Box sx={{ overflowX: 'auto' }}>
            <UsersTable rows={users} selectable />
          </Box>
          <Divider />
          <UsersPagination count={users.length + 100} page={0} />
        </Card>
      </Stack>
    </Box>
  );
}
  