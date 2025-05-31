import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
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
  title: '7 เกมแนวเนื้อเรื่องผจญภัย',
  description: 'เกม PC แนวเนื้อเรื่องลึกซึ้งและกราฟฟิกสุดอลังการ.',
  image: '',
  articleContent: `
      ต้องบอกว่าเทรดนี้ถูกใจสายเนื้อเรื่องแน่นอน วันนี้เราจะมาแนะนำเกมแนวเนื้อเรื่องผจญภัยที่ยอดนิยมและไม่ควรพลาด เนื้อเรื่องดี ภาพกราฟฟิกระดับเทพ 
  และบางเรื่องยังมีฉากต่อสู่ที่น่าตื่นเต้น คุณสามารถค้นหาเกมที่ชื่นชอบได้ที่นี่!

## 1. Grand Theft Auto V (GTA V)
เกมสุดคลาสสิกจาก Rockstar Games ที่ให้คุณสวมบทบาทในโลกอาชญากรรมของเมือง Los Santos แบบเสรีสุด ๆ ด้วยเนื้อเรื่องเข้มข้น ระบบออนไลน์ที่มีผู้เล่นนับล้านหนึ่งในจุดแข็งที่ทำให้ GTA V อยู่ยืนยาวคือ GTA Online โหมด Multiplayer ขนาดใหญ่ที่ให้ผู้เล่นทั่วโลกมาร่วมกันปล้น ทำธุรกิจ หรือสร้างสรรค์ความวุ่นวายร่วมกัน
สร้างตัวละครของคุณเอง ทำภารกิจกับเพื่อน สร้างแก๊ง ปล้นธนาคาร ลงแข่งรถ ปรับแต่งรถ บ้าน ธุรกิจ และเสื้อผ้า ไม่เพียงเท่านี้คุณยังสามารถเล่นแบบ offline ก็ยังได้

![Grand Theft Auto V](/gamepc/gta.jpg)

## 2. Minecraft
นาทีนี้ไม่มีใครไม่รู้จักเกมมายคราฟ เกมแนว Sandbox ที่เปิดให้ผู้เล่นสร้างสรรค์โลกได้ตามจินตนาการ ด้วยกราฟิกแบบบล็อกสุดคลาสสิก คุณสามารถเล่นโหมดได้อย่างหลากหลาย เช่น โหมดเอาชีวิตรอด (Survival) ในโหมดนี้จะมีหลอดระดับเลือด ความหิว แถบพลังอาวุธ ผู้เล่นจะต้องใช้ชีวิตและใช้สกิลการเอาตัวรอด 
Minecraft โหมดสร้างสรรค์ (Creative) สำหรับคนชอบสร้าง ในโหมดนี้ผู้เล่นจะมีไอเทมต่างๆ ใช้ได้ไม่มีวันหมด เป็นอมตะ เหมาะสำหรับสายชิว  ทำให้ Minecraft กลายเป็นหนึ่งในเกมขายดีที่สุดตลอดกาล และยังเป็นแหล่งเรียนรู้สำหรับเด็กและผู้ใหญ่ทั่วโลก
![Minecraft](/gamepc/minecraft.avif)

## 3. The Sims 4
เกมจำลองชีวิตที่ให้ผู้เล่นควบคุมทุกอย่างของตัวละคร ตั้งแต่ความรัก งาน ไปจนถึงการแต่งบ้าน ความยืดหยุ่นและความสนุกแบบไร้ขีดจำกัด ผู้เล่นสามารถสร้างบ้านด้วยอุปกรณ์ที่หลากหลาย ไม่เพียงเท่านี้ตัวเกมยังมีภาคเสริมอื่นๆให้ดาวน์โหลดมากมาย เพื่อเพิ่มความน่าตื่นเต้นให้กับผู้เล่น ทำให้ The Sims 4 เป็นเกมที่ครองใจแฟน ๆ ทั่วโลก

![The Sims 4](/gamepc/sim.jpg)

## 4. Valorant
เกม FPS แนว Tactical จาก Riot Games ที่ผสมผสานความแม่นยำแบบ CS:GO เข้ากับสกิลเฉพาะตัวของแต่ละเอเจนต์ที่หลากหลาย มีความสามารถแตกต่างกันทำให้ไม่น่าเบื่อ ตอนแรกคุณอาจยิงไม่โดนแต่รับรองได้ว่าหากเล่นไปนานๆ ติดใจแน่นอน และยังมีผู้เล่นจากทั่วโลก มีระบบแข่งขัน eSports และกราฟิกที่ลื่นไหลทำให้ผู้เล่นไทยจำนวนมากหลงรักเกมนี้

![Valorant](/gamepc/valo.jpg)

## 5. God of War (2018 / Ragnarok)
การกลับมาของ Kratos ในโลกเทพปกรณัมนอร์ส พร้อมลูกชาย Atreus กับเนื้อเรื่องเข้มข้นน่าตื่นเต้นอยากรู้ว่าเรื่องจะเป็นไงต่อทำให้ผู้เล่นไม่อยากวางมือ นอกจากนี้ยังมีฉากต่อสู้ที่ดุเดือดมันส์ถึงใจ ภาพสวยระดับ AAA กลายเป็นเกมแอ็กชันที่ได้รับรางวัลเกมแห่งปี 

![God of War](/gamepc/god.jpg)

## 6. Black Myth: Wukong
ต้องบอกเลยว่าเป็นเกมที่มีฉากต่อสู้เยอะมาก ถูกใจสายบู๊ นอกจากนี้ยังมีภาพที่สวยกราฟิกระดับเทพ ฉากคัดซีนที่เหมือนเราหลุดเข้าไปในเกมจริงๆ ผลงานเกมมาแรงจากประเทศจีน สวมบทเป็น “หงอคง” ในโลกที่ได้แรงบันดาลใจจากไซอิ๋ว  ระบบต่อสู้น่าตื่นเต้น และบอสสุดอลังการทำให้หลายคนรีบซื้อมาเล่นอย่างไม่รีรอ คะแนน 10/10

![Black Myth: Wukong](/gamepc/wokong.webp)

## 7. The Little Nightmares
เกมแนวผจญภัยสยองขวัญที่ผสมความน่ารักและน่าขนลุกได้อย่างลงตัว ผู้เล่นต้องเอาตัวรอดจากโลกที่แปลกประหลาดและสิ่งมีชีวิตประหลาดเรื่องราวไม่มีคำพูด ไม่มีคำอธิบายชัดเจน แต่ถูกเล่าอย่างลึกซึ้งผ่าน สภาพแวดล้อม และ การตีความจากผู้เล่น ซึ่งเป็นจุดเด่นของเกมนี้


![The Little Nightmares](/gamepc/six.avif)

## 8. Palworld
เกมที่ได้ฉายาว่า "โปเกมอนถือปืน" ผสมผสานโลกแฟนตาซีกับการเอาชีวิตรอด ผู้เล่นสามารถจับสัตว์ (Pals) มาใช้ในการต่อสู้ คราฟของ และทำฟาร์มได้ Palworld พัฒนาโดย Pocketpair ผู้สร้างเกม Craftopia ตัวเกมนำเสนอแนวทางที่ไม่เหมือนใคร โดยรวมเอาองค์ประกอบของ:
การจับสัตว์คล้าย Pokémon การเอาชีวิตรอดแบบ Rust หรือ Ark การก่อสร้างฐาน, ฟาร์ม, โรงงาน การยิงปืน และต่อสู้แบบ Action

![Palworld](/gamepc/palword.jpg)

## 9. The Witcher 3: Wild Hunt
เกม RPG ระดับตำนานจาก CD Projekt RED 🧙‍♂️ เรื่องราวของ Geralt แห่ง Rivia
ผู้เล่นจะได้สวมบทบาทเป็น Geralt of Rivia นักล่ามอนสเตอร์ในโลกที่เต็มไปด้วยเวทมนตร์ สงคราม และการเมือง Geralt ออกเดินทางเพื่อตามหา Ciri เด็กสาวที่มีชะตาเกี่ยวพันกับอนาคตของโลก และต้องเผชิญกับภัยจาก “Wild Hunt” กองทัพปีศาจจากอีกมิติ

![The Witcher 3: Wild Hunt](/gamepc/TheWitcher.jpg)

## 10. The Legend of Zelda: Breath of the Wild – ตำนานที่ปลุกชีพวงการเกมโลกเปิด
หนึ่งในเกมที่เปลี่ยนนิยามของเกมแนว Open World ไปตลอดกาล ผลงานมาสเตอร์พีซจาก Nintendo ที่ไม่เพียงครองใจแฟน Zelda เท่านั้น แต่ยังคว้ารางวัล Game of the Year และได้รับคำชื่นชมจากนักวิจารณ์ทั่วโลก
🌄 เรื่องราวแห่งฮีโร่และอิสรภาพ
ในโลก Hyrule อันกว้างใหญ่ ผู้เล่นจะได้สวมบทบาทเป็น Link ที่ตื่นขึ้นจากการหลับใหลยาวนานกว่า 100 ปี เพื่อหยุดยั้ง Calamity Ganon และช่วยเจ้าหญิง Zelda จากภัยพิบัติสิ่งที่ทำให้เกมนี้โดดเด่นคือการเล่าเรื่องที่ “ไม่บังคับ” ผู้เล่นสามารถเลือกเส้นทาง เดินเรื่อง และเล่นในแบบของตัวเองได้โดยไม่มีข้อจำกัด
![Zelda: Breath of the Wild](/gamepc/zala.jpg)
  `,
};

// Metadata
export const metadata: Metadata = {
  title: '10 เกมยอดนิยมตลอดกาล - WaffyGame',
  description: articleData.description,
  keywords: [
    'เกมยอดนิยมตลอดกาล',
    'gta v',
    'minecraft',
    'the sims 4',
    'valorant',
    'god of war',
    'black myth wukong',
    'the little nightmares',
    'palworld',
    'the witcher 3',
    'genshin impact',
    'honkai star rail',
  ],
  openGraph: {
    title: '10 เกมยอดนิยมตลอดกาล - WaffyGame',
    description: articleData.description,
    url: 'https://gamehub.com/all-time-popular',
    images: [
      { url: articleData.image, width: 1200, height: 630, alt: articleData.title },
      { url: '/gamepc/gta.jpg', width: 800, height: 450, alt: 'Grand Theft Auto V open world gameplay' },
      { url: '/gamepc/minecraft.avif', width: 800, height: 450, alt: 'Minecraft sandbox building' },
      { url: '/gamepc/sim.jpg', width: 800, height: 450, alt: 'The Sims 4 life simulation' },
      { url: '/gamepc/valo.jpg', width: 800, height: 450, alt: 'Valorant tactical FPS gameplay' },
      { url: '/gamepc/god.jpg', width: 800, height: 450, alt: 'God of War Norse mythology combat' },
      { url: '/gamepc/wokong.webp', width: 800, height: 450, alt: 'Black Myth: Wukong action adventure' },
      { url: '/gamepc/six.avif', width: 800, height: 450, alt: 'The Little Nightmares horror adventure' },
      { url: '/gamepc/palword.jpg', width: 800, height: 450, alt: 'Palworld creature-collecting survival' },
      { url: '/gamepc/TheWitcher.jpg', width: 800, height: 450, alt: 'The Witcher 3 RPG adventure' },
      { url: '/gamepc/zala.jpg', width: 800, height: 450, alt: 'Zelda: Breath of the Wild' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '10 เกมยอดนิยมตลอดกาล - GameHub',
    description: articleData.description,
    images: [articleData.image],
  },
};

export default function AllTimePopular() {
  // Custom renderer for images in ReactMarkdown
  const components = {
  img: ({ src, alt }: { src: string; alt: string }) => (
      <div className="flex items-center justify-center my-4 mt-10 mb-15">
      <div className="relative w-full md:w-300 h-120">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="mt-8 mb-4 text-3xl font-bold text-gray-800">{children}</h2>
  ),
};

  return (
    <div className="px-6 py-8 mx-auto bg-white max-w-7xl">
      <Breadcrumb />
      <h1 className="mt-10 mb-6 text-4xl font-bold text-gray-800 md:text-5xl">{articleData.title}</h1>
      <div className="relative w-full h-64 mb-6 md:h-120">
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