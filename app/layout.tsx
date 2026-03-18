import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { siteConfig } from "@/content/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - Complete Guide & Resources`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.metadata.keywords,
  openGraph: {
    title: `${siteConfig.name} - Complete Guide & Resources`,
    description: siteConfig.description,
    type: 'website',
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.images.og,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Logo`,
      }
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - Complete Guide & Resources`,
    description: siteConfig.description,
    images: [siteConfig.images.og],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = 'G-PQML37X16Q';

  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href={siteConfig.images.icon.apple} />
        <link rel="icon" type="image/png" sizes="32x32" href={siteConfig.images.icon.favicon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={siteConfig.images.icon.favicon16} />
        <link rel="manifest" href={siteConfig.metadata.manifestPath} />
        <link rel="shortcut icon" href={siteConfig.images.icon.favicon} />
        <meta name="theme-color" content={siteConfig.metadata.themeColor} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />

        <meta name="google-adsense-account" content="ca-pub-6760379174262614"></meta>
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

