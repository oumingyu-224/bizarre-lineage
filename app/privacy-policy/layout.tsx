import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - SoFlo Wheelie Life',
  description: 'Privacy Policy - Learn how we collect, use, and protect your information.',
  alternates: {
    canonical: '/privacy-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
