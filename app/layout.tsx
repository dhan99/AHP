import type { Metadata } from 'next';
import { Inter, IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import { Auth0ProviderWithConfig } from '@/lib/auth0-provider';

// Define fonts
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const ibmPlex = IBM_Plex_Sans({ 
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-ibm-plex'
});

// We would typically use Gibson and Slate fonts, but those require licensing
// For this example, we'll use system fonts as fallbacks

export const metadata: Metadata = {
  title: 'Intact Insurance - Trucking Insurance',
  description: 'Intact Insurance A&H producers can secure occupational accident, non-trucking liability or vehicle physical liability policy online.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlex.variable} font-sans`}>
        <Auth0ProviderWithConfig>
          {children}
        </Auth0ProviderWithConfig>
      </body>
    </html>
  );
} 