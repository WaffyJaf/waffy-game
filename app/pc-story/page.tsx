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
  title: '7 เกมแนวเนื้อเรื่องผจญภัย',
  description: 'เกม PC แนวเนื้อเรื่องลึกซึ้งและกราฟฟิกสุดอลังการ.',
  image: '/gamepc/kena2.jpg',
  articleContent: `
      ต้องบอกว่าเทรดนี้ถูกใจสายเนื้อเรื่องแน่นอน วันนี้เราจะมาแนะนำเกมแนวเนื้อเรื่องผจญภัยที่ยอดนิยมและไม่ควรพลาด เนื้อเรื่องดี ภาพกราฟฟิกระดับเทพ 
  และบางเรื่องยังมีฉากต่อสู่ที่น่าตื่นเต้น คุณสามารถค้นหาเกมที่ชื่นชอบได้ที่นี่!

## 1. Bramble: The Mountain King (2023)
เกมที่ได้รับแรงบันดาลใจจากเทพนิยายยุโรปเหนือ ผู้เล่นจะสวมบทเป็นเด็กชายที่ออกเดินทางตามหาพี่สาวที่ถูกลักพาตัวไปเมื่อเด็กชายตื่นมาพบว่าพี่สาวหายไปจากห้องนอน เด็กชายที่รักพี่สาวมากจึงเดินทางเข้าป่าเพื่อไปตามหาพี่สาว โดยต้องเผชิญหน้ากับสิ่งมีชีวิตประหลาดเหนือธรรมชาติ เช่น ภูติผี ปีศาจ 
ที่น่ากลัวซึ่งมันอาจทำให้คุณกรี๊ดลั่นบ้าน บรรยากาศของเกมเต็มไปด้วยความสวยงามปนสยองและดนตรีอันไพเราะที่ตัดกับฉากอันมืดหม่น ทำให้ประสบการณ์การเล่นทั้งสะเทือนอารมณ์และน่าติดตาม

![Bramble: The Mountain King](/gamepc/bb.jpg)

## 2. Little Nightmares II
หากคุณกำลังตามหาเกมสยองขวัญที่น่ารัก ซึ่งภาคนี้จะพาคุณดิ่งลึกสู่โลกอันบิดเบี้ยวและหลอนกว่าเดิม คุณจะได้ควบคุมตัวละครใหม่ "Mono" เด็กชายที่ติดอยู่ในโลกที่บิดเบือนสวมถุงคลุมหัว โดยเกมจะเริ่มการผจญภัยของเขาด้วยการเดินทางผ่านป่าที่เต็มไปด้วยกับดัก พร้อมร่วมมือกับ "Six" 
ด็กสาวที่สวมเสื้อกันฝนสีเหลืองเป็นผู้นำทางเพื่อเอาชีวิตรอดจากโลกที่เต็มไปด้วยผู้ใหญ่สุดประหลาดและบรรยากาศหลอนสไตล์ Stop-motion ที่ไม่เหมือนใครคุณจะกล้าเผชิญกับฝันร้าย เหล่านี้หรือไม่?  เกมไม่มีคำพูด ไม่มีคำอธิบาย แต่กลับเล่าเรื่องผ่านสิ่งแวดล้อมอย่างลึกซึ้ง
![The Little Nightmares](/gamepc/six.avif)

## 3. KENA: Bridge of Spirits (2022)
ต้องบอกเลยว่าหลังจากที่เล่นเกมนี้จบ คุณจะประทับใจกับความงามของภาพและธรรมชาติของตัวเรื่อง เกมแอคชันผจญภัยที่ผสมผสานการต่อสู้อันน่าตื่นเต้นเข้ากับกราฟิกสุดตระการตาในสไตล์แอนิเมชันระดับ Pixar คุณจะได้สวมบทเป็น Kena หญิงสาวผู้เป็น “Spirit Guide” ที่มีหน้าที่นำวิญญาณที่หลงทางไปสู่ความสงบ เธอออกเดินทางผ่านดินแดนที่ถูกทำลายจากความเสื่อมโทรม โดยเธอใช้พลังของเธอเพื่อส่งวิญญาณที่หลงเหลืออยู่ของเกาะที่ถูกทำลายจนหมดหวังแห่งนี้ให้ออกไป พร้อมกับเหล่าเพื่อนตัวจิ๋วที่ชื่อว่า Rot ซึ่งช่วยในการต่อสู้และไขปริศนา ตัวเกมโดดเด่นด้านการออกแบบโลกแฟนตาซีและการเล่าเรื่องผ่านความรู้สึกมากกว่าคำพูด

![KENA: Bridge of Spirits](/gamepc/kena.jpg)

## 4. Stray (2022)
ใครจะไปคิดว่าเกมที่คุณเล่นเป็น "แมวจรจัด" จะสามารถเล่าเรื่องได้กินใจขนาดนี้? คุณจะได้รับบทเป็นแมวไร้ชื่อที่พบว่าตัวเองถูกแยกจากแม่และเพื่อนแมวตั้งแต่เริ่มเกม คุณถูกผลักไสไปสู่โลกใต้ดินที่เต็มไปด้วยหุ่นยนต์แทนที่จะเป็นมนุษย์ Stray มีหลายสิ่งที่เหมือนกันกับเกมผจญภัยอื่นๆ คุณต้องไขปริศนา เดินทางในสภาพแวดล้อมเมืองที่หนาแน่น  พาคุณสำรวจเมืองไซเบอร์พังๆ ที่เต็มไปด้วยหุ่นยนต์และความลับ ผ่านสายตาแมวที่ต้องเอาตัวรอดและช่วยเหลือหุ่นยนต์น้อยชื่อ B-12 
การเดินทางไม่ได้มีแค่การวางแผนเส้นทางที่ถูกต้องเท่านั้น แต่ยังต้องแก้ปริศนาสิ่งแวดล้อมที่เข้าใจง่ายอีกด้วย ความแตกต่างของมุมมอง การออกแบบเมือง และบรรยากาศเหงาๆ ชวนให้ผู้เล่นตกหลุมรักในทันที 

![Stray](/gamepc/stray.webp)

## 5.The Legend of Zelda: Echoes of Wisdom (2024)
เกมที่ให้คุณสวมบทเป็น “เจ้าหญิง Zelda” ด้วยความช่วยเหลือของไม้เท้า Tri Rod ของเธอ Zelda สามารถสร้างวัตถุจำลองหรือศัตรูได้ ซึ่งเป็นการพลิกบทบาทที่ไม่เคยมีมาก่อน พร้อมระบบ "echo" ที่ให้คุณคัดลอกและใช้สิ่งของหรือศัตรูเพื่อไขปริศนาในรูปแบบใหม่ เกมเน้นการสำรวจและปริศนาแบบแหวกแนวจากเดิม พร้อมทั้งยังคงกลิ่นอายของ Zelda ที่แฟนๆ คุ้นเคย

![The Legend of Zelda](/gamepc/zala2.avif)

## 6. Black Myth: Wukong
เกมแอคชัน RPG ที่ได้รับแรงบันดาลใจจากนิยายจีน “ไซอิ๋ว” มุมมองใหม่ที่จริงจังและลึกซึ้งกว่าเดิม โดยที่คุณจะต้องเผชิญหน้ากับศัตรูที่แข็งแกร่งและคู่ต่อสู้ที่คู่ควรตลอดการเดินทางของคุณ เข้าสู่ดินแดนอันน่าตื่นตาตื่นใจที่เต็มไปด้วยความมหัศจรรย์ ด้วยระบบต่อสู้ที่รวดเร็ว คุณยังสามารถผสมผสานคาถา ความสามารถ อาวุธ และอุปกรณ์ต่างๆ ได้อย่างอิสระ เอฟเฟกต์ตระการตา และบรรยากาศแฟนตาซีจีนที่แทบจะหายใจได้ เกมนี้ไม่เพียงแต่โดดเด่นด้านกราฟิกระดับ AAA เท่านั้น แต่ยังใส่ใจในรายละเอียดทางวัฒนธรรมอย่างลึกซึ้ง

![Black Myth: Wukong](/gamepc/wokong.webp)

## 7. Detroit: Become Human
เกมแนวอินเทอร์แอกทีฟที่ให้คุณตัดสินใจในทุกช่วงเวลา ซึ่งจะส่งผลต่อเส้นทางของเรื่องราวในแบบที่แตกต่างกันโดยสิ้นเชิง Detroit พาผู้เล่นสวมบทบาทเป็นแอนดรอยด์ที่เริ่มมีความรู้สึกนึกคิดในโลกที่มนุษย์ยังมองว่าพวกเขาเป็นเพียง "เครื่องจักร" เรื่องราวสุดเข้มข้นที่สะท้อนปัญหาสังคม ความเหลื่อมล้ำ และศีลธรรม ได้อย่างทรงพลัง

![Detroit: Become Human](/gamepc/it.jpg)
 `,
};

// Metadata
export const metadata: Metadata = {
  title: '7 เกมแนวเนื้อเรื่องผจญภัย - WaffyGame',
  description: articleData.description,
  keywords: [
    'เกมแนวเนื้อเรื่อง',
    'เกมผจญภัย',
    'เกมภาพสวย',
    'Bramble',
    'Little Nightmares ',
    'KENA Bridge of Spirits',
    'black myth wukong',
    'Stray',
    'Detroit',
    'The Legend of Zelda',
  ],
  openGraph: {
    title: '7 เกมแนวเนื้อเรื่องผจญภัย - WaffyGame',
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
      <div className="relative w-full h-64 mb-6 md:h-140">
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