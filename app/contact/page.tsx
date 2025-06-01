'use client';

import { 
  EnvelopeIcon, 
  ClockIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

export default function ContactPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
     <div className="relative overflow-hidden bg-[url('/banner/banner-0.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
              ติดต่อเรา
            </h1>
            <i className=''></i>
            <p className="max-w-3xl mx-auto text-xl leading-relaxed text-blue-100">
              พร้อมให้บริการและตอบคำถามของคุณตลอด 24 ชั่วโมง
              <br />
              ส่งข้อความมาหาเราได้เลย เราจะตอบกลับอย่างรวดเร็ว
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute rounded-full -top-40 -right-40 w-80 h-80 bg-white/10 blur-3xl"></div>
          <div className="absolute rounded-full -bottom-40 -left-40 w-80 h-80 bg-white/10 blur-3xl"></div>
        </div>
      </div>

      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="sticky p-8 bg-white shadow-xl rounded-2xl top-8">
              <h2 className="mb-8 text-2xl font-bold text-gray-800">ข้อมูลติดต่อ</h2>
              
              {/* Contact Items */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg">
                    <EnvelopeIcon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-800">อีเมล</h3>
                    <p className="text-gray-600">waffyy2003@gmail.com</p>
                    
                  </div>
                </div>

                
              </div>

              {/* Social Media */}
              <div className="pt-8 mt-8 border-t border-gray-100">
                <h3 className="mb-4 font-semibold text-gray-800">ติดตามเราได้ที่</h3>
                <div className="flex space-x-4">
                  <a href="#" className="flex items-center justify-center w-10 h-10 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700">
                    <span className="text-sm font-bold">f</span>
                  </a>
                  <a href="#" className="flex items-center justify-center w-10 h-10 text-white transition-colors bg-green-500 rounded-lg hover:bg-green-600">
                    <span className="text-sm font-bold">L</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info Card */}
          <div className="lg:col-span-2">
            <div className="p-8 bg-white shadow-xl rounded-2xl">
              <h2 className="mb-6 text-2xl font-bold text-gray-800">เกี่ยวกับ WaffyGame</h2>
              
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p className="mb-6">
                  เรามุ่งมั่นในการให้บริการที่มีคุณภาพและสร้างความพึงพอใจสูงสุดให้กับลูกค้า 
                  ด้วยประสบการณ์ที่ดีที่สุด
                </p>
                
                <div className="grid grid-cols-1 gap-8 my-8 md:grid-cols-2">
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                    <h3 className="mb-3 text-lg font-semibold text-blue-800">วิสัยทัศน์</h3>
                    <p className="text-blue-700">
                      สร้างแพลตฟอร์มที่ผู้เล่นสามารถค้นหาเกมดี ๆ ได้ง่ายขึ้น พร้อมข้อมูลที่เชื่อถือได้
                      และนำเสนอประสบการณ์ที่สนุกและเป็นกันเอง
                    </p>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                    <h3 className="mb-3 text-lg font-semibold text-purple-800">สิ่งที่เราเชื่อ</h3>
                    <p className="text-purple-700">
                       เกมคือศิลปะและแรงบันดาลใจ เราเชื่อว่าทุกเกมมีเรื่องราวที่น่าค้นหา และทุกผู้เล่นควรได้สัมผัสสิ่งเหล่านั้น
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl">
                  <h3 className="mb-4 text-lg font-semibold text-gray-800">ทำไมต้อง WaffyGame</h3>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="text-center">
                      <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 bg-green-500 rounded-full">
                        <span className="font-bold text-white">🔥</span>
                      </div>
                      <h4 className="font-semibold text-gray-800">เกมมาแรง</h4>
                      <p className="mt-1 text-sm text-gray-600">อัปเดตเกมใหม่ๆ</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 bg-blue-500 rounded-full">
                        <ClockIcon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-800">รีวิวตรงเวลา</h4>
                      <p className="mt-1 text-sm text-gray-600">อัปเดตเนื้อหาทุกสัปดาห์</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 bg-purple-500 rounded-full">
                        <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-800">ชุมชนเกมเมอร์</h4>
                      <p className="mt-1 text-sm text-gray-600">พูดคุย แลกเปลี่ยนความคิดเห็นได้อย่างอิสระ</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

       
        
      </div>
    </div>
  );
}