import './globals.css';
import { GoogleAnalytics, Analytics } from './components/Analytics';
import { Suspense } from 'react';
import Logo from '@/components/Logo';

export const metadata = {
  title: 'BuildAfricaAI — Powering Africa\'s Future with AI',
  description: 'BuildAfricaAI helps African governments, enterprises, and innovators harness AI—strategy, policy, talent, datasets, and deployment.',
  keywords: 'AI, Africa, artificial intelligence, machine learning, technology, innovation',
  authors: [{ name: 'BuildAfricaAI' }],
  openGraph: {
    title: 'BuildAfricaAI — Powering Africa\'s Future with AI',
    description: 'BuildAfricaAI helps African governments, enterprises, and innovators harness AI—strategy, policy, talent, datasets, and deployment.',
    type: 'website',
    locale: 'en_US',
    siteName: 'BuildAfricaAI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BuildAfricaAI — Powering Africa\'s Future with AI',
    description: 'BuildAfricaAI helps African governments, enterprises, and innovators harness AI—strategy, policy, talent, datasets, and deployment.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
      </head>
      <body>
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
