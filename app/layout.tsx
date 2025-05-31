import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import './globals.css';

export const metadata: Metadata  = {
  title: 'WaffyGame - แนะนำเกม เกมมาใหม่ เกมยอดนิยม  เสปคคอมเล่นเกม ',
  description: 'เกมยอดนิยม สเปคคอมสำหรับเล่นเกม และข่าวสารวงการเกมล่าสุด อัปเดตทุกวัน!',
  keywords: [
    'เกมมาใหม่',
    'เกมยอดนิยม',
    'แนะนำเกม',
    'สเปคคอม',
    'ข่าวสารเกม',
    'GameHub',
    'เกม PC',
    'เกมคอนโซล',
  ],
  openGraph: {
    title: 'WaffyGame - ศูนย์รวมเกมและข่าวสาร สเปคคอมเล่นเกม',
    description: 'ค้นพบเกมมาใหม่ เกมยอดนิยม สเปคคอมสำหรับเล่นเกม และข่าวสารวงการเกมที่ WaffyGame อัปเดตทุกวัน.',
    url: 'https://gamehub.com',
    siteName: 'WaffyGame',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GameHub - เกมมาใหม่และข่าวสาร',
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
    site: '@GameHubTH',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className="flex flex-col min-h-100 bg-gray-100">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <footer className="bg-gray-900 text-white text-center p-4">
          <p>© {new Date().getFullYear()} WaffyGame. สงวนลิขสิทธิ์.</p>
        </footer>
      </body>
    </html>
  );
}


