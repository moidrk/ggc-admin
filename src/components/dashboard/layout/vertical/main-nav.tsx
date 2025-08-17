'use client';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import { Bell as BellIcon } from '@phosphor-icons/react/dist/ssr/Bell';
import { List as ListIcon } from '@phosphor-icons/react/dist/ssr/List';
import { MagnifyingGlass as MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr/MagnifyingGlass';
import { Users as UsersIcon } from '@phosphor-icons/react/dist/ssr/Users';
import { useTranslation } from 'next-i18next';

import type { NavItemConfig } from '@/types/nav';
import type { User } from '@/types/user';
import { useDialog } from '@/hooks/use-dialog';
import { usePopover } from '@/hooks/use-popover';

import { ContactsPopover } from '../contacts-popover';
import { languageFlags, LanguagePopover } from '../language-popover';
import type { Language } from '../language-popover';
import { MobileNav } from '../mobile-nav';
import { NotificationsPopover } from '../notifications-popover';
import { SearchDialog } from '../search-dialog';
import { UserPopover } from '../user-popover/user-popover';
import { authClient } from '@/lib/auth/custom/client';

export interface MainNavProps {
  items: NavItemConfig[];
}

export function MainNav({ items }: MainNavProps): React.JSX.Element {
  const [openNav, setOpenNav] = React.useState<boolean>(false);

  return (
    <React.Fragment>
      <Box
        component="header"
        sx={{
          '--MainNav-background': 'var(--mui-palette-background-default)',
          '--MainNav-divider': 'var(--mui-palette-divider)',
          bgcolor: 'var(--MainNav-background)',
          left: 0,
          position: 'sticky',
          pt: { lg: 'var(--Layout-gap)' },
          top: 0,
          width: '100%',
          zIndex: 'var(--MainNav-zIndex)',
        }}
      >
        <Box
          sx={{
            borderBottom: '1px solid var(--MainNav-divider)',
            display: 'flex',
            flex: '1 1 auto',
            minHeight: 'var(--MainNav-height)',
            px: { xs: 2, lg: 3 },
            py: 1,
          }}
        >
          <Stack direction="row" spacing={2} sx={{ alignItems: 'center', flex: '1 1 auto' }}>
            <IconButton
              onClick={(): void => {
                setOpenNav(true);
              }}
              sx={{ display: { lg: 'none' } }}
            >
              <ListIcon />
            </IconButton>
              
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            sx={{ alignItems: 'center', flex: '1 1 auto', justifyContent: 'flex-end' }}
          >

            <Divider
              flexItem
              orientation="vertical"
              sx={{ borderColor: 'var(--MainNav-divider)', display: { xs: 'none', lg: 'block' } }}
            />
            <UserButton />
          </Stack>
        </Box>
      </Box>
      <MobileNav
        items={items}
        onClose={() => {
          setOpenNav(false);
        }}
        open={openNav}
      />
    </React.Fragment>
  );
}



function UserButton(): React.JSX.Element {
  const popover = usePopover<HTMLButtonElement>();
  const [user, setUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    async function fetchUser() {
      const { data } = await authClient.getUser();
      if (data) setUser(data);
    }
    fetchUser();
  }, []);

  if (!user) return <Avatar src={'/assets/avatar-placeholder.png'} />; // or a placeholder avatar

  return (
    <React.Fragment>
      <Box
  component="button"
  onClick={popover.handleOpen}
  ref={popover.anchorRef}
  sx={{ border: 'none', background: 'transparent', cursor: 'pointer', p: 0 }}
>
  <Badge
    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    color="success"
    sx={{
      '& .MuiBadge-dot': {
        border: '2px solid var(--MainNav-background)',
        borderRadius: '50%',
        bottom: '6px',
        height: '12px',
        right: '6px',
        width: '12px',
      },
    }}
    variant="dot"
  >
    <Avatar src={user?.avatar || '/assets/avatar-placeholder.png'} />
  </Badge>
</Box>
      <UserPopover
        anchorEl={popover.anchorRef.current}
        onClose={popover.handleClose}
        open={popover.open}
        user={user} // pass user to popover if it supports it
      />
    </React.Fragment>
  );
}