'use client';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  convertedPlayers: number;
  registeredOn: Date;
  subscriptionStatus: 'subscribed' | 'not_subscribed';
  lastLogin: Date;
  activeSessions?: number;
}

interface UsersTableProps {
  rows: User[];
  selectable?: boolean;
}

export function UsersTable({ rows, selectable }: UsersTableProps): React.JSX.Element {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {selectable && (
            <TableCell padding="checkbox">
              <Checkbox />
            </TableCell>
          )}
          <TableCell>User Name</TableCell>
          <TableCell align="center">Converted Players</TableCell>
          <TableCell>Registered On</TableCell>
          <TableCell>Subscription Status</TableCell>
          
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((user) => (
          <TableRow key={user.id} hover>
            {selectable && (
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
            )}
            {/* User Info */}
            <TableCell>
              <Stack direction="row" spacing={1} alignItems="center">
                <Avatar src={user.avatar} />
                <Stack spacing={0}>
                  <Typography variant="body2" fontWeight={600}>
                    {user.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {user.email}
                  </Typography>
                </Stack>
              </Stack>
            </TableCell>

            {/* Converted Players */}
            <TableCell align="center">{user.convertedPlayers}</TableCell>

            {/* Registered On */}
            <TableCell>{user.registeredOn.toLocaleDateString()}</TableCell>

            {/* Subscription Status with Chip */}
            <TableCell>
              {user.subscriptionStatus === 'subscribed' ? (
                <Chip label="Subscribed" color="success" variant="outlined" size="small" />
              ) : (
                <Chip label="Not Subscribed" color="default" variant="outlined" size="small" />
              )}
            </TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
