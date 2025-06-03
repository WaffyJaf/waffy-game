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
  title: 'แนะนำคีย์บอร์ด Blue Switch และ Red Switch ราคาสบายกระเป๋า',
  description: 'แนะนำคัย์บอร์ดและความแตกต่างของ Blue Switch vs Red Switch',
  image: '/banner/key-banner.jpg',
  articleContent: `
  ## เลือกไม่ถูก? มาทำความรู้จักคีย์บอร์ด Blue Switch vs Red Switch กันดีกว่า!
สำหรับใครที่กำลังมองหาคีย์บอร์ดใหม่ โดยเฉพาะ Mechanical Keyboard แล้วเจอกับคำว่า “Blue Switch” และ “Red Switch” แล้วงงว่าสองอันนี้ต่างกันยังไง… บทความนี้จะช่วยให้คุณเลือกได้ง่ายขึ้น!
# 🔵 Blue Switch – เสียงคลิกสนั่น ถูกใจสายพิมพ์
หากคุณคือสายที่ชอบฟีลลิ่งการพิมพ์แบบ "มีจังหวะ" คล้ายเครื่องพิมพ์ดีด หรือชอบเสียง "คลิกแคล็ก" เวลาใช้งาน... Blue Switch คือคำตอบ!

ข้อดี: สัมผัสเด้ง มั่นใจว่าพิมพ์ติดแน่ ดีสำหรับคนพิมพ์สัมผัส (Touch Typist) เหมาะสำหรับงานเขียน โค้ด หรือทำงานเป็นหลัก                   
ข้อเสีย: เสียงดัง อาจรบกวนคนรอบข้าง ไม่เหมาะใช้ในห้องประชุมหรือออฟฟิศเงียบ

# 🔴 Red Switch – นุ่ม ลื่น เงียบ ตอบสนองไว
ถ้าคุณคือ สายเล่นเกม หรือชอบความลื่นไหล ไม่ต้องมีเสียงรบกวนมาก Red Switch คือพระเอกของคุณ

ข้อดี: ตอบสนองไว เหมาะกับเกมแนว FPS, MOBA พิมพ์ได้เร็ว ไม่เมื่อยมือ เสียงเงียบกว่า blue switch              
ข้อเสีย: ไม่มีจังหวะคลิก อาจพิมพ์ผิดได้ถ้าไม่เคยชิน ไม่เหมาะกับคนที่ชอบ feedback ชัดๆ

## แนะนำคีย์บอร์ดยอดนิมยม
## 1. AJAZZ AK680 LETS PLAY (RED-WHITE , BLUE SWITCH RAINBOW LED EN/TH) 
ถ้าคุณกำลังตามหาคีย์บอร์ดงบน้อยแต่คุณภาพ 100% รองรับทั้ง Blue Switch และ Red Blue Switch  ดีไซน์สวยงามน่ารักติดแกรม สีสวยสด วัสดุทนทาน ผิวสัมผัสดี คุ้มค่ากับราคามาก ไฟปรับแต่งได้ตามความชอบ เสียงค่อนข้างดังนิดหน่อย ถ้าต้องใช้ในสภาพแวดล้อมที่ต้องเงียบสงบ 
# ราคา 590-690 THB
![inZOI](/keboard/ak680.jpg)

## 2. Attack Shark K86 Mechanical Keyboard
สีสวยโดนใจ สเปคคิดว่า 3 ถึง 5 พัน เชื่อมต่อได้ถึง 3 Mode ได้แก่ Bluetooth Wireless USB type C ไม่เพียงเท่านี้ยังมีหน้าจอ TFP Screen ที่สามารถนำรูปหรือวิดีโอน่ารักๆมาใส่ได้ มีซอฟแวร์ที่เราสามารถตั้งค่าสีได้ มี KNOB Controls 
ประทับใจทุกอย่างตั้งแต่วัสดุยอดเยี่ยม โครงสร้างที่แข็งแรง ถ้าเคยใช้ตัวละหลักร้อยจนถึงพันต้นๆ เทียบราคาตัวนี้กินขาด
# ราคา 1400-1500 THB 
![Little Nightmares III](/keboard/k86.webp)

## 3. LINKY 87 TKL Mechanical Keyboard
เราขอแนะนำ LINKY 87 TKL ที่มีปุ่ม 87 ปุ่ม พร้อมไฟ LED แบบมีสายและไร้สายผ่านบลูทูธ คีย์บอร์ดเสียงนุ่มฟิน ครีมมี่ สัมผัสดี ที่ราคาถูกและมีคุณภาพ ไม่เพียงเท่านี้มาพร้อมดีไซน์สวยที่มีความมินิมอลสุดๆ รองรับการเปลี่ยนสวิตช์ได้ง่ายและคีย์แคปได้ตามต้องการ
# ราคา 900-1200 THB 
![Monster Hunter Wilds](/keboard/ky87.jpg)

## 4. Ajazz AK820 MAX Plus Tri-mode Hot Swap Mechanical Keyboard
คีย์บอร์ด 82 คีย์ เหมาะสำหรับจัดโต๊ะคอมสายติดแกรม ไม่ว่าจะเป็น ทำงาน เล่นเกม รองรับการเชื่อมต่อ 3 โหมด Type-C/Wireless/Bluetooth แบตเตอรี่ที่ให้มาถึง 8000mAh แสงไฟ RGB (Preset 20 Modes) รองรับแสงไฟ RGB พร้อมโหมดแสงถึง 20 โหมด เหมาะสำหรับการใช้งานที่สะดวกและไม่เกะกะ
ด้วยโครงสร้าง Gasket ที่ช่วยให้มีความนุ่มนวลในการพิมพ์ และลดเสียงจากการกดปุ่ม
# ราคา 1420-1890 THB 
![Assassin’s Creed Shadows](/keboard/ak820.jpg)

## 5. NUBWO NK50 PURPLE CAT (BLUE SWITCH) (EN/TH)
 เอาใจสายงบน้อยด้วยคีย์บอร์ด ดีไซน์สวย สีสันโดดเด่น เป็นคีย์บอร์ดสวิตซ์แบบ Dust-Proof Mechanical การันตีการกดปุ่มใช้งานถึง 10 ล้านครั้ง เชื่อมต่อใช้งานแบบสาย USB Type-C ด้วยความยาวสาย 150 เซนติเมตร เป็นคีย์บอร์ดขนาด 65% ที่มีสีสันสดใส มาพร้อมฟังก์ชั่นการใช้งานหลากหลาย ทั้งไฟ Mini RGB / Full Anti-Ghosting สามารถ Hot Swab ได้ รองรับคีย์ภาษาไทย

![Split Fiction](/keboard/nk.png)

## 6. Royal Kludge RK100 White Wireless Mechanical Keyboard
วัสดุคีย์แคป ABS ไฟ RGB ที่สวยงาม ปรับได้ 18 โหมด คีย์บอร์ดปรับตั้งได้ 2 ระดับ ตัวค่อนข้างหนัก ใครสายพกต้องลองตัดสินใจดูอีกที คีย์บอร์ดรุ่นนี้ยังมาพร้อมกับฟังก์ชัน USB Passthrough ที่สามารถโอนถ่ายข้อมูลผ่านคีย์บอร์ดได้ การพิมพ์ไหลลื่น ปลี่ยน Switch ได้ตามต้องการ

![Wrekless](/keboard/k100.jpg)


 `,
};

// Metadata
export const metadata: Metadata = {
  title: 'แนะนำคีย์บอร์ด Blue Switch และ Red Switch ราคาสบายกระเป๋า',
  description: articleData.description,
  keywords: [
    'แนะนำคีย์บอร์ด',
    'คีย์บอร์ด blue switch',
    'คีย์บอร์ด red switch',
    'คีย์บอร์ดไร้สาย',
    'แนะนําคีย์บอร์ด gaming',
    'คีย์บอร์ดราคาถูก',
    'keyboard mechanical',
    'keyboard',
 
  ],
  openGraph: {
    title: 'แนะนำคีย์บอร์ด Blue Switch และ Red Switch ราคาสบายกระเป๋า',
    description: articleData.description,
    url: '',
    images: [
      { url: '/banner/key-banner.jpg', width: 800, height: 450, alt: 'Stray' },
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
          alt={`ภาพเกม ${alt} 2025 - WaffyGame`}
          width={800}
          height={333}
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy" // เปลี่ยนจาก priority เป็น lazy
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