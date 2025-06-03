import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import './globals.css';

export const metadata: Metadata = {
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
  verification: {
    google: 'oeexwDvHghAj0KHYllVqIFRmR_F_H5NuOTqYn807Y1I',
  },
  openGraph: {
    title: 'WaffyGame - ศูนย์รวมเกมและข่าวสาร สเปคคอมเล่นเกม',
    description:
      'ค้นพบเกมมาใหม่ เกมยอดนิยม สเปคคอมสำหรับเล่นเกม และข่าวสารวงการเกมที่ WaffyGame อัปเดตทุกวัน.',
    url: 'https://WaffyGame.com',
    siteName: 'WaffyGame',
    images: [
      {
        url: '/banner/banner-1.jpg',
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
      <body className="flex flex-col bg-gray-100 min-h-100 mt-25">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <footer className="p-4 text-center text-white bg-gray-900">
          <p>© {new Date().getFullYear()} WaffyGame. สงวนลิขสิทธิ์.</p>
        </footer>
      </body>
    </html>
  );
}
