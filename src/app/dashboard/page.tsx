'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

import { Users as UsersIcon } from '@phosphor-icons/react/dist/ssr/Users';
import { ListChecks as ListChecksIcon } from '@phosphor-icons/react/dist/ssr/ListChecks';
import { Warning as WarningIcon } from '@phosphor-icons/react/dist/ssr/Warning';
import { Briefcase as BriefcaseIcon } from '@phosphor-icons/react/dist/ssr/Briefcase';

import { Summary } from '@/components/dashboard/overview/summary';
import { getAnalytics } from '@/services/analytics';

export default function Page(): React.JSX.Element {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [analytics, setAnalytics] = React.useState<null | {
    message: string;
    totalUsers: number;
    subscribedUsers: number;
    notSubscribedUsers: number;
    totalSubscriptions: number;
  }>(null);

  React.useEffect(() => {
    (async () => {
      try {
        const data = await getAnalytics();
        setAnalytics(data);
      } catch (err: any) {
        setError(err.message ?? 'Failed to load analytics');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography>Fetching Hot Updates...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

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
            <Typography variant="h4">GGC Live Analytics</Typography>
          </Box>

        </Stack>

        {/* Summary Section */}
      {/* Summary Section */}
<Grid container spacing={4}>
  <Grid lg={3} sm={6} xs={12}>
    <Box sx={{ bgcolor: '#e8f5e9', borderRadius: 2, p: 2 }}> {/* light green */}
      <Summary
        amount={analytics?.totalUsers ?? 0}
        diff={30}
        icon={UsersIcon}
        title="Total Users"
        trend="up"
      />
    </Box>
  </Grid>
  <Grid lg={3} sm={6} xs={12}>
    <Box sx={{ bgcolor: '#e3f2fd', borderRadius: 2, p: 2 }}> {/* light blue */}
      <Summary
        amount={analytics?.subscribedUsers ?? 0}
        diff={0}
        icon={ListChecksIcon}
        title="Subscribed Users"
        trend="up"
      />
    </Box>
  </Grid>
  <Grid lg={3} sm={6} xs={12}>
    <Box sx={{ bgcolor: '#ffebee', borderRadius: 2, p: 2 }}> {/* light red */}
      <Summary
        amount={analytics?.notSubscribedUsers ?? 0}
        diff={0}
        icon={WarningIcon}
        title="Not Subscribed"
        trend="down"
      />
    </Box>
  </Grid>
  <Grid lg={3} sm={6} xs={12}>
    <Box sx={{ bgcolor: '#fff3e0', borderRadius: 2, p: 2 }}> {/* light orange */}
      <Summary
        amount={analytics?.totalSubscriptions ?? 0}
        diff={0}
        icon={BriefcaseIcon}
        title="Total Subscriptions"
        trend="up"
      />
    </Box>
  </Grid>
</Grid>

       
        {/* Chart Section */}
        <Grid container spacing={4}>
          <Grid lg={6} xs={12}>
            <Box sx={{ height: 360, p: 2, borderRadius: 2, bgcolor: 'background.paper', boxShadow: 1 }}>
              <Typography variant="h6" gutterBottom>
                Subscription Breakdown
              </Typography>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      { name: 'Subscribed', value: analytics?.subscribedUsers ?? 0 },
                      { name: 'Not Subscribed', value: analytics?.notSubscribedUsers ?? 0 },
                    ]}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={120}
                    label
                  >
                    <Cell key="subscribed" fill="#4caf50" />
                    <Cell key="not-subscribed" fill="#f44336" />
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </Grid>

          {/* Placeholder for future widgets (e.g. devices, regions, etc.) */}
          <Grid lg={6} xs={12}>
            <Box
              sx={{
                height: 360,
                p: 2,
                borderRadius: 2,
                bgcolor: 'background.paper',
                boxShadow: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'text.secondary',
              }}
            >
              <Typography variant="body1">[Future Widget Slot]</Typography>
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}
