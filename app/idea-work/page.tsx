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
  title: '5 ไอเดีย จัดโต๊ะคอม จัดโต๊ะทำงาน',
  description: 'ไอเดียจัดโต๊ะคอมที่ติดแกรม มินิมอล ไม่ซ้ำใคร.',
  image: '/banner/waffy2.jpg',
  articleContent: `
  ## พื้นที่เล็ก ๆ ที่สะท้อนตัวตนของคุณ
โต๊ะคอมไม่ใช่แค่ที่วางจอ เมาส์ และคีย์บอร์ด แต่คือ “โลกส่วนตัว” ของเรา — พื้นที่เล็ก ๆ ที่สามารถ
เปลี่ยนเป็นคาเฟ่, สตูดิโอ, สนามรบ หรือแม้แต่ที่พักใจได้อย่างน่าอัศจรรยแต่ละคนมีสไตล์เฉพาะตัว และแต่
ละโต๊ะก็สะท้อนนิสัย วิธีคิด และอารมณ์ของเจ้าของมัน เราจะพาคุณไปรู้จัก5 สไตล์ยอดฮิต ของการจัดโต๊ะ
คอม ที่ไม่ใช่แค่สวย แต่ ใช้งานได้จริงและเติมพลังให้ทุกวันของคุณ

## 1.Minimalist Style เรียบง่าย แต่ทรงพลัง 
# โทนสี:ขาว / ดำ / เทา / น้ำตาลอ่อน
ไอเท็มสำคัญ

• โต๊ะไม้เรียบ ไม่มีลาย

• จอคอมจอเดียวหรือคู่ พร้อมขาตั้ง Monitor Arm

• คีย์บอร์ดและเมาส์ไร้สายดีไซน์เรียบ

• โคมไฟเล็กๆ แสงสีขาวหรือวอร์ม

• เก้าอี้ทำงานแบบ Ergonomic

เหมาะกับ: ฟรีแลนซ์, โปรแกรมเมอร์, คนชอบสมาธิและความเงียบ

![inZOI](/work/01.jpg)

## 2. Gaming / RGB Style – สนามรบเกมเมอร์
# โทนสี:ดำ, แดง, น้ำเงิน, ม่วง + ไฟ RGB ที่ปรับเปลี่ยนได
ไอเท็มสำคัญ

• จอคู่หรือ 3 จอ วางแนวนอนหรือโค้ง

• เคสคอมแบบโชว์ พร้อมไฟ RGB ภายใน

• คีย์บอร์ด Mechanical + เมาส์เกมมิ่ง

• แผ่นรองเมาส์ขนาดใหญ่ (แบบ RGB ก็มี)

• หูฟังแขวนข้างโต๊ะ / ไมค์สตรีม

• เก้าอี้เกมมิ่งเต็มรูปแบบ

เหมาะกับ: เกมเมอร์, สตรีมเมอร์, ผู้ผลิตคอนเทนต์วิดีโอ, คนที่ชอบพลังงานสูงๆ

![Little Nightmares III](/work/02.jpg)

## 3. Cozy Natural Style – โต๊ะอบอุ่นเหมือนคาเฟ่ในบ้าน
# โทนสี: น้ำตาลอ่อน, เขียว, ขาวครีม, เทาอ่อน
ไอเท็มสำคัญ

• โต๊ะไม้จริงหรือลายไม้

• แจกันดอกไม้แห้ง หรือไม้กระถางเล็ก (เช่น ไทรใบสัก / กระบองเพชร)

• โคมไฟตั้งโต๊ะไฟสีวอร์ม

• แผ่นรองเมาส์ผ้าหรือหนังสีน้ำตาล

• ชั้นไม้ติดผนังพร้อมของแต่งน้อยๆ เช่น หนังสือหรือรูปถ่าย

• พรมเล็กๆ ใต้เก้าอี้

เหมาะกับ: นักเรียน, ศิลปิน, คนชอบบรรยากาศผ่อนคลาย, ทำงานจากบ้าน
![Monster Hunter Wilds](/work/03.jpg)

## 4. White Aesthetic Style – คลีน เรียบ แต่ดูแพง
# โทนสี:ขาว, เงิน, เทาอ่อน, พาสเทลอ่อนๆ (บางกรณี)

ไอเท็มสำคัญ

• คอมสีขาวหรือเคสใส

• โต๊ะท็อปขาว หรือไม้สีอ่อน

• คีย์บอร์ด/เมาส์สีขาว

• เก้าอี้สีอ่อน ดีไซน์มินิมอล

• ไฟ LED ติดขอบโต๊ะ หรือไฟวงแหวน (สำหรับถ่ายวิดีโอ/สตรีม)

• อาจเพิ่มต้นไม้ฟอกอากาศใบเล็กหรือรูปแต่งโทนพาสเทล

เหมาะกับ:ครีเอเตอร์, สายแฟชั่น, ช่างภาพ, YouTuber ที่ต้องการโต๊ะที่ดูสะอาดอยู่เสมอ

![Assassin’s Creed Shadows](/work/04.jpg)

## 5. Productivity / Multi-Monitor Setup – โต๊ะเพื่อประสิทธิภาพสูงสุด
# โทนสี:ดำ, เทา, น้ำตาลเข้ม, อะลูมิเนียม

ไอเท็มสำคัญ

• 2-3 จอ, ใช้ Monitor Arm เพื่อเพิ่มพื้นที่

• Docking Station สำหรับโน้ตบุ๊ก

• คีย์บอร์ด Mechanical หรือ Split Keyboard

• ชั้นวางของแนวตั้ง, แฟ้ม, ปากกา, แท็บเล็ตวาดภาพ

• สายไฟจัดระเบียบอย่างมีระบบ

• จอเสริมแนวตั้งสำหรับโค้ดหรือการอ้างอิงเอกสาร

เหมาะกับ:วิศวกรซอฟต์แวร์, นักออกแบบ, ยูทูบเบอร์, คนที่ทำหลายหน้าที่ในหนึ่งวัน

![Split Fiction](/work/05.jpg)



 `,
};

// Metadata
export const metadata: Metadata = {
  title: '5 ไอเดีย จัดโต๊ะคอม จัดโต๊ะทำงาน',
  description: articleData.description,
  keywords: [
    'จัดโต๊ะทำงาน',
    'จัดโต๊ะคอม',
    'ไอเดียแต่งโต๊ะทำงาน',
    'ตกแต่งโต๊ะทำงาน',
    'โต๊ะคอมเล่นเกม',
  
 
  ],
  openGraph: {
    title: '5 ไอเดีย จัดโต๊ะคอม จัดโต๊ะทำงาน',
    description: articleData.description,
    url: '',
    images: [
      { url: '/banner/waffy2.jpg', width: 800, height: 450, alt: 'Stray' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '5 ไอเดีย จัดโต๊ะคอม จัดโต๊ะทำงาน',
    description: articleData.description,
    images: [articleData.image],
  },
};

export default function AllTimePopular() {
  // Custom renderer for images in ReactMarkdown
  const components: Components = {
    img: (({ src, alt }) => (
      <div className="flex items-center justify-center my-4 mb-20">
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
     h1: (({ children }) => (
      <h1 className="mt-8 mb-4 text-2xl font-bold text-blue-800">
        {children}
      </h1>
    )) as Components['h2'],
  
    h2: (({ children }) => (
      <h2 className="mt-8 mb-4 text-3xl font-bold text-gray-800">
        {children}
      </h2>
    )) as Components['h2'],
  };

  return (
    <div className="px-6 py-8 mx-auto bg-white max-w-7xl">
      <Breadcrumb />
      <h1 className="mt-10 mb-10 text-4xl font-bold text-gray-800 md:text-5xl">{articleData.title}</h1>
      <div className="relative w-full h-64 mb-20 md:h-130 ">
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