import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: 'Gokul D | Embedded Systems Engineer | IoT & AI Developer',
    template: '%s | Gokul D',
  },
  description: 'Embedded Systems Engineer specializing in IoT, AI, Firmware Development, and Robotics. Building intelligent hardware systems at the intersection of software and electronics.',
  keywords: [
    'Embedded Systems Engineer',
    'IoT Developer',
    'AI Engineer',
    'Firmware Developer',
    'Robotics Engineer',
    'Flutter Developer',
    'Gokul D',
    'Electronics Engineer',
    'STM32',
    'ESP32',
    'ROS 2',
    'TensorFlow Lite',
    'FreeRTOS',
    'PCB Design',
  ],
  authors: [{ name: 'Gokul D', url: 'https://github.com/Gokuldevadasan' }],
  creator: 'Gokul D',
  publisher: 'Gokul D',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://gokuldevadasan.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gokuldevadasan.dev',
    title: 'Gokul D | Embedded Systems Engineer',
    description: 'Embedded Systems Engineer specializing in IoT, AI, Firmware Development, and Robotics.',
    siteName: 'Gokul D Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Gokul D - Embedded Systems Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gokul D | Embedded Systems Engineer',
    description: 'Embedded Systems Engineer specializing in IoT, AI, Firmware Development, and Robotics.',
    images: ['/og-image.png'],
    creator: '@gokuldevadasan',
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
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://linkedin.com" />
      </head>
      <body className="bg-deep-black text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
