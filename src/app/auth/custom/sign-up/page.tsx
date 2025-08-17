import * as React from 'react';
import type { Metadata } from 'next';

import { config } from '@/config';

import { GuestGuard } from '@/components/auth/guest-guard';
import { SplitLayout } from '@/components/auth/split-layout';


export default function Page(): React.JSX.Element {
  return (
    <GuestGuard>
      <SplitLayout>
        <></>
      </SplitLayout>
    </GuestGuard>
  );
}
