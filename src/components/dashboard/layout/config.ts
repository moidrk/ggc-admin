import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

// NOTE: We did not use React Components for Icons, because
//  you may one to get the config from the server.

// NOTE: First level elements are groups.

export interface LayoutConfig {
  navItems: NavItemConfig[];
}

export const layoutConfig = {
  navItems: [
    {
      key: 'dashboards',
      title: 'Dashboards',
      items: [
        { key: 'overview', title: 'Overview', href: paths.dashboard.overview, icon: 'house' },
        { key: 'analytics', title: 'User Analytics', href: paths.dashboard.analytics, icon: 'users' },
        { key: 'offers', title: 'Offers', href: paths.dashboard.offers, icon: 'receipt' },
      ],
      
    }
  ],
} satisfies LayoutConfig;
