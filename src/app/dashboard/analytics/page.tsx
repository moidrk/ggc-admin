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
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import { Button } from '@mui/material';
export const metadata = { title: `User Analytics | ${config.site.name}` } satisfies Metadata;

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
  { id: 'USR-104', name: 'David Lee', email: 'david@example.com', avatar: '/assets/avatar-4.png', convertedPlayers: 5, registeredOn: dayjs().subtract(12, 'day').toDate(), subscriptionStatus: 'subscribed', lastLogin: dayjs().subtract(5, 'hour').toDate(), activeSessions: 1 },
  { id: 'USR-105', name: 'Emma Wilson', email: 'emma@example.com', avatar: '/assets/avatar-5.png', convertedPlayers: 15, registeredOn: dayjs().subtract(20, 'day').toDate(), subscriptionStatus: 'subscribed', lastLogin: dayjs().subtract(1, 'day').toDate(), activeSessions: 3 },
  { id: 'USR-106', name: 'Frank Thomas', email: 'frank@example.com', avatar: '/assets/avatar-6.png', convertedPlayers: 3, registeredOn: dayjs().subtract(25, 'day').toDate(), subscriptionStatus: 'not_subscribed', lastLogin: dayjs().subtract(7, 'day').toDate(), activeSessions: 0 },
  { id: 'USR-107', name: 'Grace Martin', email: 'grace@example.com', avatar: '/assets/avatar-7.png', convertedPlayers: 8, registeredOn: dayjs().subtract(18, 'day').toDate(), subscriptionStatus: 'subscribed', lastLogin: dayjs().subtract(10, 'hour').toDate(), activeSessions: 2 },
  { id: 'USR-108', name: 'Henry Scott', email: 'henry@example.com', avatar: '/assets/avatar-8.png', convertedPlayers: 6, registeredOn: dayjs().subtract(22, 'day').toDate(), subscriptionStatus: 'not_subscribed', lastLogin: dayjs().subtract(3, 'day').toDate(), activeSessions: 0 },
  { id: 'USR-109', name: 'Isla Adams', email: 'isla@example.com', avatar: '/assets/avatar-9.png', convertedPlayers: 11, registeredOn: dayjs().subtract(16, 'day').toDate(), subscriptionStatus: 'subscribed', lastLogin: dayjs().subtract(2, 'hour').toDate(), activeSessions: 2 },
  { id: 'USR-110', name: 'Jack Turner', email: 'jack@example.com', avatar: '/assets/avatar-10.png', convertedPlayers: 7, registeredOn: dayjs().subtract(9, 'day').toDate(), subscriptionStatus: 'subscribed', lastLogin: dayjs().subtract(1, 'day').toDate(), activeSessions: 1 },
  { id: 'USR-111', name: 'Kara White', email: 'kara@example.com', avatar: '/assets/avatar-11.png', convertedPlayers: 2, registeredOn: dayjs().subtract(14, 'day').toDate(), subscriptionStatus: 'not_subscribed', lastLogin: dayjs().subtract(4, 'day').toDate(), activeSessions: 0 },
  { id: 'USR-112', name: 'Liam Hall', email: 'liam@example.com', avatar: '/assets/avatar-12.png', convertedPlayers: 9, registeredOn: dayjs().subtract(6, 'day').toDate(), subscriptionStatus: 'subscribed', lastLogin: dayjs().subtract(3, 'hour').toDate(), activeSessions: 1 },
  { id: 'USR-113', name: 'Mia Allen', email: 'mia@example.com', avatar: '/assets/avatar-13.png', convertedPlayers: 13, registeredOn: dayjs().subtract(21, 'day').toDate(), subscriptionStatus: 'subscribed', lastLogin: dayjs().subtract(12, 'hour').toDate(), activeSessions: 3 },
  { id: 'USR-114', name: 'Noah Young', email: 'noah@example.com', avatar: '/assets/avatar-14.png', convertedPlayers: 5, registeredOn: dayjs().subtract(11, 'day').toDate(), subscriptionStatus: 'not_subscribed', lastLogin: dayjs().subtract(2, 'day').toDate(), activeSessions: 0 },
  { id: 'USR-115', name: 'Olivia King', email: 'olivia@example.com', avatar: '/assets/avatar-15.png', convertedPlayers: 8, registeredOn: dayjs().subtract(19, 'day').toDate(), subscriptionStatus: 'subscribed', lastLogin: dayjs().subtract(5, 'hour').toDate(), activeSessions: 2 },
  { id: 'USR-116', name: 'Peter Wright', email: 'peter@example.com', avatar: '/assets/avatar-16.png', convertedPlayers: 6, registeredOn: dayjs().subtract(8, 'day').toDate(), subscriptionStatus: 'subscribed', lastLogin: dayjs().subtract(1, 'hour').toDate(), activeSessions: 1 },
  { id: 'USR-117', name: 'Quinn Baker', email: 'quinn@example.com', avatar: '/assets/avatar-17.png', convertedPlayers: 3, registeredOn: dayjs().subtract(23, 'day').toDate(), subscriptionStatus: 'not_subscribed', lastLogin: dayjs().subtract(6, 'day').toDate(), activeSessions: 0 },
  { id: 'USR-118', name: 'Ryan Green', email: 'ryan@example.com', avatar: '/assets/avatar-18.png', convertedPlayers: 10, registeredOn: dayjs().subtract(5, 'day').toDate(), subscriptionStatus: 'subscribed', lastLogin: dayjs().subtract(2, 'hour').toDate(), activeSessions: 2 },
  { id: 'USR-119', name: 'Sophia Hall', email: 'sophia@example.com', avatar: '/assets/avatar-19.png', convertedPlayers: 12, registeredOn: dayjs().subtract(15, 'day').toDate(), subscriptionStatus: 'subscribed', lastLogin: dayjs().subtract(3, 'hour').toDate(), activeSessions: 2 },
  { id: 'USR-120', name: 'Thomas Allen', email: 'thomas@example.com', avatar: '/assets/avatar-20.png', convertedPlayers: 4, registeredOn: dayjs().subtract(13, 'day').toDate(), subscriptionStatus: 'not_subscribed', lastLogin: dayjs().subtract(1, 'day').toDate(), activeSessions: 0 },
  { id: 'USR-121', name: 'Uma Cox', email: 'uma@example.com', avatar: '/assets/avatar-21.png', convertedPlayers: 7, registeredOn: dayjs().subtract(17, 'day').toDate(), subscriptionStatus: 'subscribed', lastLogin: dayjs().subtract(8, 'hour').toDate(), activeSessions: 1 },
  { id: 'USR-122', name: 'Victor Bell', email: 'victor@example.com', avatar: '/assets/avatar-22.png', convertedPlayers: 9, registeredOn: dayjs().subtract(10, 'day').toDate(), subscriptionStatus: 'subscribed', lastLogin: dayjs().subtract(4, 'hour').toDate(), activeSessions: 2 },
  { id: 'USR-123', name: 'Wendy Fox', email: 'wendy@example.com', avatar: '/assets/avatar-23.png', convertedPlayers: 5, registeredOn: dayjs().subtract(6, 'day').toDate(), subscriptionStatus: 'not_subscribed', lastLogin: dayjs().subtract(2, 'day').toDate(), activeSessions: 0 },
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
            <Typography variant="body2">Using Dummy Data For Now!</Typography>
          </Box>
            <Button startIcon={<PlusIcon />} variant="contained">
              Export
            </Button>
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
  