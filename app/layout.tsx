import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import './globals.css';

export const metadata: Metadata = {
  title: 'WaffyGame - แนะนำเกม เกมมาใหม่ เกมยอดนิยม สเปคคอมเล่นเกม',
  description: 'เกมยอดนิยม สเปคคอมสำหรับเล่นเกม และข่าวสารวงการเกมล่าสุด อัปเดตทุกวัน!',
  icons: {
    icon: '/logo_waffy2.png', 
  },
  keywords: [
    'เกมมาใหม่ 2025',
    'เกมยอดนิยม 2025',
    'แนะนำเกม PC',
    'สเปคคอมสำหรับเล่นเกม',
    'ข่าวสารวงการเกม',
    'WaffyGame',
    'เกมมือถือ 2025',
    'เกมคอนโซล',
  ],
  verification: {
    google: 'oeexwDvHghAj0KHYllVqIFRmR_F_H5NuOTqYn807Y1I',
  },
  openGraph: {
    title: 'WaffyGame - ศูนย์รวมเกมและข่าวสาร สเปคคอมเล่นเกม',
    description:
      'ค้นพบเกมมาใหม่ เกมยอดนิยม สเปคคอมสำหรับเล่นเกม และข่าวสารวงการเกมที่ WaffyGame อัปเดตทุกวัน.',
    url: 'https://waffy-game.vercel.app', 
    siteName: 'WaffyGame',
    images: [
      {
        url: '/banner/banner-1.jpg',
        width: 1200,
        height: 630,
        alt: 'WaffyGame - เกมมาใหม่และข่าวสาร',
      },
    ],
    locale: 'th_TH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WaffyGame - แนะนำเกมและข่าวสาร',
    description: 'ติดตามเกมมาใหม่ เกมยอดนิยม สเปคคอม และข่าวสารวงการเกมที่ WaffyGame!',
    images: ['/og-image.jpg'],
    site: '@WaffyGame', 
  },
  alternates: {
    canonical: 'https://waffy-game.vercel.app',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className="flex flex-col min-h-screen bg-gray-100 mt-25">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <footer className="p-4 text-center text-white bg-gray-900">
          <p>© {new Date().getFullYear()} WaffyGame. สงวนลิขสิทธิ์.</p>
        </footer>
      </body>
    </html>
  );
}