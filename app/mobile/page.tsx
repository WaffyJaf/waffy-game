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
  title: '7 เกมมือถือน่าเล่น',
  description: 'เกมมือถือที่สนุกไม่ควรพลาด',
  image: '',
  articleContent: `
      ในยุคที่เกมมือถือกลายเป็นสื่อบันเทิงหลักของหลายคน ไม่ว่าจะอยู่ที่ไหน เวลาใด แค่มีสมาร์ตโฟนก็สามารถเปิดโลกแห่งจินตนาการได้ทันที วันนี้ 
  เราขอแนะนำ 7 เกมมือถือน่าเล่นที่แต่ละเกมมี “เสน่ห์ไม่ซ้ำใคร”ครบทั้งแนวแอคชัน, MOBA, แฟนตาซี และเกมที่โดดเด่นด้านงานภาพหรือเนื้อเรื่อง พร้อมแล้วไปดูกันเลย!

## 1. PUBG MOBILE – แบทเทิลรอยัลสุดเรียล สมจริงทุกช็อต
เมื่อพูดถึงเกมแนว Battle Royale ไม่มีใครไม่รู้จัก PUBG MOBILE หากคุณเป็นสายเอาตัวรอดที่
ชอบความตื่นเต้น PUBG MOBILE คือคำตอบ ด้วยกราฟิกระดับคอนโซล ระบบปืนสมจริง และการ
เล่นเป็นทีมสุดมันส์ เกมที่เปลี่ยนวงการเกมมือถือไปตลอดกาล ด้วยระบบยิงปืนที่สมจริง การดีไซน์
แผนที่ หลากหลาย ไปจนถึงเสียงปืน-เสียงก้าวเดินที่ทำให้รู้สึกเหมือนอยู่กลางสนามรบจริงๆต่อสู้จน
เหลือรอดเป็นคนสุดท้าย เป็นเกมที่ท้าทายทักษะและการวางแผนแบบขั้นสุดกันเลยทีเดียว

![ PUBG MOBILE](/gamemobile/pubg.jpeg)

## 2. Free Fire – เกมเร็ว จบไว เอาใจคนรุ่นใหม่สายไฟท์
สำหรับใครที่อยากได้ความมันส์แบบกระชับ Free Fire คือเกมแบทเทิลรอยัลที่เล่นง่าย ใช้เวลาไม่นาน
ในแต่ละรอบ เหมาะกับคนที่มีเวลาน้อยแต่ยังอยากฟาดฟันความมันส์อย่างเต็มที่ จุดเด่นคือการ
ปรับแต่งตัวละครและสกิลที่หลากหลาย พร้อมแฟชั่นสุดเท่และยังมีกราฟฟิกที่น่าสนใจอีกมากมาย
โดยเมื่อเร็วๆนี้ที่ผ่านมาทาง Free Fireได้เปิดตัวของแผนที่ใหม่สุดมันส์ไป ทำเอาผลตอบรับดีเกินคาด
รวมถึงยังมีแฟชั่นและสิ่งน่าสนใจใหม่เข้ามาให้ติดตามกันบ่อยครั้งกันเลย สายแฟชั่นห้ามพลาดกัน
เด็ดขาดเอาเป็นว่าถ้าไม่อย่างพลาดอะไรใหม่ๆก็รีบโหลดมาเล่นด้วยกันเถอะ!!
![Free Fire](/gamemobile/ff.webp)

## 3. ROV – ศึก MOBA บนมือถือที่ครองใจคนไทยมานาน
ROV เป็นหนึ่งในเกม MOBA บนมือถือที่ได้รับความนิยมสูงสุดในไทย เพราะเล่นง่าย เข้าใจเร็ว แต่ก็มี
ความลึกเชิงกลยุทธ์สูงมาก ออกแบบมาอย่างลงตัวสำหรับมือถือ ด้วยการต่อสู้ 5v5 ที่รวดเร็ว เข้าใจ
ง่าย และมีฮีโร่ให้เลือกเล่นมากมายและใครที่สนใจในโหมดที่ยากขึ้นทางROVยังมีโหมดจัดอันดับ
และอีกหลายโหมดให้เลือกเล่นกันได้อย่างจุใจ อีกทั้งยังมีสกินของตัวละครที่สวยและเป็นเอกลักษณ์
ของแต่ละตัวละครให้สะสมและครอบครองกันมากมายเลยทีเดียว ใครชอบสะสมหรือวางกลยุทธ์ เล่น
เป็นทีม และแข่งขันแบบจริงจัง ห้ามพลาด!

![ROV](/gamemobile/rov.jpg)

## 4. Cookie Run: Kingdom – ผจญภัยในโลกขนมหวานสุดแฟนตาซี
เกมนี้คือส่วนผสมที่ลงตัวระหว่างเกม RPG และสร้างอาณาจักร! Cookie Run: Kingdom ให้คุณจัด
ทีมคุกกี้สุดน่ารัก ออกลุยด่านต่อสู้พร้อมวางแผนกลยุทธ์ อีกทั้งยังมีระบบสร้างเมืองที่ให้ความรู้สึก
เหมือนเป็นเจ้าของโลกแฟนตาซีขนมหวานอย่างแท้จริงอีกทั้งความน่ารักต้องยกให้ Cookie Run ที่
จัดสร้างออกมาได้ลงตัวกับเนื้อหาและตรีมของเกมได้เป็นอย่างดีและลงตัวสุดๆ สำหรับคนที่ชอบเกมที่
ทั้งสนุกและน่ารักแนะนำ Cookie Run เลย !!!
 

![Cookie Run](/gamemobile/cook.jpg)

## 5. AFK Journey – RPG ภาพสวย เล่นง่าย ไม่ต้องเก็บเวล
สายชิลต้องลอง AFK Journey! เกม RPG ภาพสวยแนวแฟนตาซี ที่ไม่ต้องเล่นทั้งวันก็เก่งได้ เพราะมีระบบเล่น
อัตโนมัติและสะสมรางวัลแบบออฟไลน์ เนื้อเรื่องชวนติดตาม แถมมีตัวละครให้สะสมมากมาย เหมาะทั้งผู้เล่น
ใหม่และสายวางแผน เป็นเกมที่ภาพสวยระดับอนิเมะยุโรป! จุดแข็งคือไม่ต้องเก็บเวลเองตลอดเวลา ตัวละคร
เก่งได้แม้ตอนคุณไม่เล่น แต่เมื่อเข้าต่อสู้ก็ยังต้องวางแผนตำแหน่งและเลือกตัวให้ดีตัวละครหลากหลาย ระบบ
ธาตุและคอมโบสนุกงานศิลป์ดีไซน์อย่างกับดูการ์ตูน ใครที่ชอบแนวนี้ ไม่ควรพลาดเด็ดขาด !!!

![AFK Journey](/gamemobile/afk.jpg)

## 6. Mobile Legends – MOBA อินเตอร์ สู้ได้ทุกภูมิภาค
หากคุณเคยเล่น ROV แล้วอยากลองอะไรใหม่ Mobile Legends คือทางเลือกที่ดี ด้วยเกมเพลย์ที่คล้ายกันแต่
มีความเร็วสูงกว่าเล็กน้อยทำให้การต่อสู้ดูดุดันและสนุกขึ้นมาก ใครชอบเล่นแบบฮาร์ดคอร์มีแรงค์ให้ไต่ และผู้
เล่นระดับโลกให้ฝึกฝีมือด้วย พร้อมระบบจับคู่ผู้เล่นทั่วโลก ทำให้คุณได้ฝึกฝีมือกับคู่แข่งระดับอินเตอร์อยู่เสมอ
แผนที่กะทัดรัด เกมจบไวฮีโร่มีลูกเล่นเยอะ ทั้งสกิลลวงตา วาร์ป ยิงทะลุระบบการแข่งขันระดับอินเตอร์เล่น
กับเพื่อนต่างชาติได้สบาย สนุกแบบไม่ต้องรอชาติหน้า ใครอยากพัฒนาเร็ว ๆ และได้ดวลกับมือเก๋าจากทุกมุม
โลก ต้องเล่น!

![Mobile Legends](/gamemobile/mbb.jpg)

## 7. Identity V – สยองขวัญสไตล์โกธิคสุดหลอน ที่ต้องรอดให้ได้!
เกมแนวเอาตัวรอดสไตล์สยองขวัญ ที่ให้คุณรับบทเป็นผู้รอดชีวิตหรือฆาตกร โดยมีบรรยากาศแบบโกธิคที่ชวน
หลอนสุด ๆ เกมสยองขวัญแนว “ผู้ล่า vs ผู้รอด” ที่ให้ผู้เล่น 4 คนรับบทนักเอาตัวรอด และอีก 1 คนเป็น “ฮัน
เตอร์” ที่ต้องล่าให้ครบภายในเวลาจำกัด เกมนี้ไม่ใช่แค่หลอน แต่ยังต้องวางแผน จับจังหวะ และทำงานเป็น
ทีม ดีไซน์ตัวละครและโลกโกธิคหลอนแบบ Tim Burton ระบบไล่ล่าท้าทาย สร้างความกดดันได้ดีมาก มีเนื้อ
เรื่องเบื้องหลังลึกลับ น่าติดตามเหมือนอ่านนิยายสืบสวน อยากลองเกมที่ทั้งลุ้น ทั้งหลอน ทั้งวางแผน มาท้า
ทายกันเลย


![Identity V ](/gamemobile/id.jpg)

 `,
};

// Metadata
export const metadata: Metadata = {
  title: '7 เกมมือถือน่าเล่น - WaffyGame',
  description: articleData.description,
  keywords: [
    'เกมมือถือยอดนิยม',
    'เกมมือถือต้องเล่น',
    'PUBG MOBILE',
    'Free Fire',
    'ROV',
    'Cookie Run: Kingdom',
    'AFK Journey',
    'Mobile Legends',
    'Identity V',
  ],
  openGraph: {
    title: '7 เกมมือถือน่าเล่น  - WaffyGame',
    description: articleData.description,
    url: 'https://gamehub.com/all-time-popular',
    images: [
      { url: articleData.image, width: 1200, height: 630, alt: articleData.title },
      { url: '/gamepc/stray.webp', width: 800, height: 450, alt: 'Stray' },
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
  const components: Components = {
    img: ({ src, alt }: any) => (
      <div className="flex items-center justify-center my-4">
        <div className="relative w-full md:w-[1200px] h-[500px] mt-8">
          <Image
            src={src || '/banner/bannerpc.webp'}
            alt={alt || 'Game image'}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    ),

    h2: ({ children }: any) => (
      <h2 className="mt-10 mb-4 text-3xl font-bold text-gray-800">
        {children}
      </h2>
    ),
  };

  return (
    <div className="px-6 py-8 mx-auto bg-white max-w-7xl">
      <Breadcrumb />
      <h1 className="mt-10 mb-6 text-4xl font-bold text-gray-800 md:text-5xl">{articleData.title}</h1>
      <div className="relative w-full h-64 mb-6 md:h-0">
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