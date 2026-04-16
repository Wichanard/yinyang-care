import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Persist language
const savedLanguage = localStorage.getItem('yinyang_language') || 'th';

const resources = {
  th: {
    translation: {
      "Find Care": "ค้นหาบริการ",
      "My Bookings": "การจองของฉัน",
      "Sign In": "เข้าสู่ระบบ",
      "Sign Out": "ออกจากระบบ",
      "Welcome": "สวัสดี, {{name}}",
      "Share QR Code": "คิวอาร์โค้ดแชร์เว็บ",
      "Close": "ปิด",
      "Hero Title": "ค้นหาผู้ดูแลที่สมบูรณ์แบบสำหรับคนที่คุณรัก",
      "Hero Subtitle": "จองศูนย์ดูแลผู้สูงอายุและผู้ดูแลอิสระที่เชื่อถือได้ ง่ายเหมือนจองโรงแรม",
      "Location": "สถานที่",
      "Dates": "วันที่",
      "Service Type": "ประเภทบริการ",
      "Search": "ค้นหา",
      "Nursing Home": "ศูนย์ดูแลผู้สูงอายุ",
      "Home Care": "ดูแลผู้สูงอายุที่บ้าน",
      "Physical Therapy": "กายภาพบำบัด",
      "Companion Care": "เพื่อนเตือนความจำ",
      "Recommended": "ศูนย์ดูแลพรีเมียมแนะนำ",
      "Starting from": "เริ่มต้นที่",
      "View Details": "ดูรายละเอียด",
      "day": "วัน"
    }
  },
  en: {
    translation: {
      "Find Care": "Find Care",
      "My Bookings": "My Bookings",
      "Sign In": "Sign In",
      "Sign Out": "Sign Out",
      "Welcome": "Hello, {{name}}",
      "Share QR Code": "Share QR Code",
      "Close": "Close",
      "Hero Title": "Find Perfect Care for Your Loved Ones",
      "Hero Subtitle": "Book trusted nursing homes and independent caregivers with the ease of booking a hotel.",
      "Location": "Location",
      "Dates": "Dates",
      "Service Type": "Service Type",
      "Search": "Search",
      "Nursing Home": "Nursing Home",
      "Home Care": "Home Care",
      "Physical Therapy": "Physical Therapy",
      "Companion Care": "Companion Care",
      "Recommended": "Recommended Premium Centers",
      "Starting from": "Starting from",
      "View Details": "View Details",
      "day": "day"
    }
  },
  zh: {
    translation: {
      "Find Care": "寻找护理",
      "My Bookings": "我的预订",
      "Sign In": "登录",
      "Sign Out": "登出",
      "Welcome": "你好, {{name}}",
      "Share QR Code": "分享二维码",
      "Close": "关闭",
      "Hero Title": "为您的挚爱寻找完美的护理",
      "Hero Subtitle": "像预订酒店一样轻松预订值得信赖的养老院和独立护理人员。",
      "Location": "地点",
      "Dates": "日期",
      "Service Type": "服务类型",
      "Search": "搜索",
      "Nursing Home": "养老院",
      "Home Care": "家庭护理",
      "Physical Therapy": "物理治疗",
      "Companion Care": "陪伴护理",
      "Recommended": "推荐的高级护理中心",
      "Starting from": "起价",
      "View Details": "查看详情",
      "day": "天"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
