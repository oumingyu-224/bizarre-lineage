import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - SoFlo Wheelie Life',
  description: 'Terms of Service - Please read these terms carefully before using our service.',
  alternates: {
    canonical: '/terms-of-service',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
