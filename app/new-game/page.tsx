import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown ,  { Components } from 'react-markdown';
import Breadcrumb from '../../components/Breadcrumb';


// Define interface for article data
interface ArticleData {
  title: string;
  description: string;
  image: string;
  articleContent: string;
}

// Article data
const articleData: ArticleData = {
  title: 'เกมมาใหม่ 2025',
  description: 'เกมมาใหม่น่าเล่นในปี 2025',
  image: '/banner/banner-3.jpg',
  articleContent: `
     ปี 2025 กลายเป็นอีกหนึ่งหมุดหมายสำคัญของวงการเกม เมื่อผู้พัฒนาแต่ละค่ายต่างเข็นโปรเจกต์ใหญ่แห่งปีออกมาอย่างไม่ขาดสายไม่ว่าจะเป็นโลกจำ
  ลองสุดสมจริงการผจญภัยในฝันร้าย ไปจนถึงสงครามในเงามืดของญี่ปุ่นยุคโบราณ มาดูกันว่าเกมใหม่ปีนี้มีอะไรให้เราคาดหวังบ้าง!

## 1. inZOI – เมืองจำลองที่ให้คุณเป็น “พระเจ้า”
ถ้า The Sims คือโลกจำลองชีวิต inZOI ก็คือโลกจำลองแห่งอนาคตที่พลิกเกมเพลย์ไปอีกขั้น เกมนี้ให้ผู้เล่นสร้างเมือง ควบคุมผู้คน ไลฟ์สไตล์ สภาพอากาศ 
แม้แต่เศรษฐกิจ และอารมณ์ของ NPC ได้อย่างอิสระ ตัวเกมใช้ Unreal Engine 5 ทำให้ภาพและฟิสิกส์เหมือนจริงอย่างเหลือเชื่อ เหมาะสำหรับสายครีเอทีฟที่อยากสร้างโลกในแบบของตัวเองแบบไร้ขีดจำกัด

![inZOI](/newgame/inzoi.jpg)

## 2. Little Nightmares III – ฝันร้ายยังไม่จบ
กลับมาอีกครั้งกับเกมสยองขวัญเชิงจิตวิทยาที่หลายคนรัก Little Nightmares III เปลี่ยนแนวไปใช้ระบบ Co-op ให้ผู้เล่นสองคนช่วยกันหลบหนีจาก
โลกบิดเบี้ยวที่เต็มไปด้วยเงามืดและปีศาจในคราบมนุษย์ ทุกฉากเต็มไปด้วยบรรยากาศกดดัน ลึกลับ และดนตรีประกอบที่ทำให้ขนลุกได้ง่ายๆ ใครชอบความหลอนแบบมีศิลปะ ห้ามพลาด
![Little Nightmares III](/newgame/little3.jpg)

## 3. Monster Hunter Wilds – ล่าในดินแดนที่ยังไม่มีชื่อ
ภาคใหม่ของซีรีส์ล่ามอนสเตอร์ชื่อดังจาก Capcom พาเราไปยังโลกกึ่งทะเลทราย-กึ่งป่าทึบที่มีภูมิประเทศแปรผันตามสภาพอากาศและช่วงเวลาในเกม
ไม่ใช่แค่การล่าอีกต่อไป แต่ยังต้องเอาตัวรอดจากพายุทรายและการเปลี่ยนแปลงของระบบนิเวศ ระบบ AI ของมอนสเตอร์ก็พัฒนาให้ฉลาดขึ้น สร้างความท้าทายที่ไม่ซ้ำเดิม

![Monster Hunter Wilds](/newgame/monter.jpg)

## 4. Assassin’s Creed Shadows – เงามัจจุราชแห่งญี่ปุ่นยุคซามูไร
หลังจากที่แฟนๆ รอคอยกันมานาน Ubisoft ก็พาผู้เล่นมาสัมผัสวิถีซามูไรใน Assassin’s Creed Shadows เป็นครั้งแรก เกมนี้ผสมผสานการต่อสู้แบบนินจาและการใช้ชีวิตแบบซามูไรในยุคเซ็นโกคุ 
ผู้เล่นสามารถเลือกได้ว่าจะเป็นนินจาแฝงเงา หรือเป็นนักรบผู้มีเกียรติ โลกเปิดขนาดใหญ่มีทั้งหมู่บ้าน ปราสาท และป่าไผ่ให้สำรวจ พร้อมภารกิจที่มีผลต่อเรื่องราว
 
![Assassin’s Creed Shadows](/newgame/ass.jpg)

## 5. Split Fiction – เมื่อโลกแตกออกเป็นสองมิติ
เกมอินดี้ที่น่าจับตาในปีนี้ Split Fiction นำเสนอแนวคิดสุดแหวก — โลกคู่ขนานที่ชนกันตรงกลาง ผู้เล่นจะได้รับบทเป็นตัวละครที่ต้องสลับไปมาระหว่างสองโลกที่มีฟิสิกส์ เวลา และกฎเกณฑ์ต่างกันโดยสิ้นเชิง 
เพื่อไขปริศนาและค้นหาความจริงของตัวเอง เกมมีศิลป์สไตล์ไซไฟ + ดิสโทเปียที่โดดเด่นและระบบเกมเพลย์ที่ต้องใช้ “สมองสองข้าง” เล่นพร้อมกันจริงๆ

![Split Fiction](/newgame/0702.jpg)

## 6. Wrekless – ความเร็วแบบไม่มีเบรก
สำหรับสายแอ็กชันระห่ำ Wrekless คือเกมแข่งรถที่ไม่ได้มีแค่ความเร็ว แต่คือสนามประลองแบบ Mad Max ผสมกับ Burnout ผู้เล่นจะได้สร้างรถด้วยอาวุธ เสริมเกราะ และพุ่งชนทุกอย่างที่ขวางหน้า 
โลกในเกมคือพื้นที่ไร้กฎหมาย มีทั้งเส้นทางทะเลทราย เมืองร้าง ไปจนถึงโซนอุตสาหกรรม ผู้ชนะไม่ใช่แค่คนเร็วที่สุด แต่คือคนที่ “อยู่รอด” ถึงเส้นชัย


![Wrekless](/newgame/wk.jpg)


 `,
};

// Metadata
export const metadata: Metadata = {
  title: 'เกมมาใหม่ 2025 - WaffyGame',
  description: articleData.description,
  keywords: [
    'เกมมาใหม่น่าเล่น',
    'เกมใหม่ล่าสุด',
    'เกมใหม่ 2025',
    'เกมภาพสวย',
    'inZOI',
    'Monster Hunter Wilds',
    'Little Nightmares III',
    'Wrekless',
    'Split Fiction',
  ],
  openGraph: {
    title: 'เกมมาใหม่ 2025 - WaffyGame',
    description: articleData.description,
    url: '',
    images: [
      { url: '/banner/banner-3.jpg', width: 800, height: 450, alt: 'Stray' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'เกมมาใหม่ 2025 - WaffyGame',
    description: articleData.description,
    images: [articleData.image],
  },
};

export default function AllTimePopular() {
  // Custom renderer for images in ReactMarkdown
  const components: Components = {
    img: (({ src, alt }) => (
      <div className="flex items-center justify-center my-4">
        <Image
          src={src as string || '/gamepc/placeholder.jpg'}
          alt={alt as string || 'Game image'}
          width={800} // ขนาดที่เหมาะสมและคงที่
          height={333} // สัดส่วน 1200x500 ลดขนาดลง
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority // preload ช่วยให้โหลดเร็วขึ้นถ้าอยู่บนสุด
        />
      </div>
    )) as Components['img'],
  
    h2: (({ children }) => (
      <h2 className="mt-8 mb-4 text-3xl font-bold text-gray-800">
        {children}
      </h2>
    )) as Components['h2'],
  };

  return (
    <div className="px-6 py-8 mx-auto bg-white max-w-7xl">
      <Breadcrumb />
      <h1 className="mt-10 mb-6 text-4xl font-bold text-gray-800 md:text-5xl">{articleData.title}</h1>
      <div className="relative w-full h-64 mb-6 md:h-100">
        <Image
          src={articleData.image}
          alt={articleData.title}
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>
     <article className="text-xl prose prose-lg text-gray-700 max-w-none">
          <ReactMarkdown components={components}>{articleData.articleContent}</ReactMarkdown>
      </article>

      {/* Internal Linking Section */}
      <section className="mt-8 text-center">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">สำรวจหมวดหมู่เพิ่มเติม</h2>
        <div className="flex flex-wrap justify-center space-x-4">
          <Link href="/popular-games/pc" className="text-blue-600 hover:underline">
            เกม PC เนื้อหาดี
          </Link>
          <Link href="/popular-games/mobile" className="text-blue-600 hover:underline">
            เกมมือถือน่าเล่น
          Parnassus Media
          </Link>
          <Link href="/new-games" className="text-blue-600 hover:underline">
            เกมมาใหม่
          </Link>
          <Link href="/pc-specs" className="text-blue-600 hover:underline">
            สเปคคอม
          </Link>
          <Link href="/news" className="text-blue-600 hover:underline">
            ข่าวสารเกม
          </Link>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: articleData.title,
            description: articleData.description,
            image: [
              `https://gamehub.com${articleData.image}`,
              `https://gamehub.com/games/gta5.jpg`,
              `https://gamehub.com/games/minecraft.jpg`,
              `https://gamehub.com/games/thesims4.jpg`,
              `https://gamehub.com/games/valorant.jpg`,
              `https://gamehub.com/games/godofwar.jpg`,
              `https://gamehub.com/games/blackmythwukong.jpg`,
              `https://gamehub.com/games/littlenightmares.jpg`,
              `https://gamehub.com/games/palworld.jpg`,
              `https://gamehub.com/games/witcher3.jpg`,
              `https://gamehub.com/games/genshinimpact.jpg`,
            ],
            url: 'https://gamehub.com/all-time-popular',
            publisher: {
              '@type': 'Organization',
              name: 'GameHub',
              logo: { '@type': 'ImageObject', url: 'https://gamehub.com/og-image.jpg' },
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://gamehub.com/all-time-popular',
            },
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'หน้าแรก', item: 'https://gamehub.com' },
                { '@type': 'ListItem', position: 2, name: 'เกมยอดนิยม', item: 'https://gamehub.com/popular-games' },
                { '@type': 'ListItem', position: 3, name: articleData.title, item: 'https://gamehub.com/all-time-popular' },
              ],
            },
          }),
        }}
      />
    </div>
  );
}