import { redirect } from 'next/navigation';
import { paths } from '@/paths';
import { config } from '@/config';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: config.site.name,
  description: config.site.description,
  openGraph: {
    title: config.site.name,
    description: config.site.description,
    type: 'website',
    url: paths.home,
    siteName: config.site.name,
  },
};
export default function Home() {
  redirect(paths.auth.custom.signIn);
}