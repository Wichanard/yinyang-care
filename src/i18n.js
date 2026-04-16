import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

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
      "day": "วัน",
      "Filters": "ตัวกรอง",
      "Price Range": "ช่วงราคา",
      "Sort by": "เรียงตาม",
      "Providers found": "ผู้ให้บริการในพื้นที่ของคุณ",
      "Email": "อีเมล",
      "Password": "รหัสผ่าน",
      "Full Name": "ชื่อ-นามสกุล",
      "Sign Up": "สมัครสมาชิก",
      "Don't have an account?": "ยังไม่มีบัญชีใช่หรือไม่?",
      "Already have an account?": "มีบัญชีอยู่แล้วใช่หรือไม่?",
      "Check In": "วันที่เข้า",
      "Check Out": "วันที่ออก",
      "Cancel Booking": "ยกเลิกการจอง",
      "Contact Provider": "ติดต่อศูนย์ดูแล"
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
      "day": "day",
      "Filters": "Filters",
      "Price Range": "Price Range",
      "Sort by": "Sort by",
      "Providers found": "Providers found near you",
      "Email": "Email",
      "Password": "Password",
      "Full Name": "Full Name",
      "Sign Up": "Sign Up",
      "Don't have an account?": "Don't have an account?",
      "Already have an account?": "Already have an account?",
      "Check In": "Check In",
      "Check Out": "Check Out",
      "Cancel Booking": "Cancel Booking",
      "Contact Provider": "Contact Provider"
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
      "day": "天",
      "Filters": "过滤器",
      "Price Range": "价格范围",
      "Sort by": "排序方式",
      "Providers found": "附近找到的服务提供商",
      "Email": "电子邮件",
      "Password": "密码",
      "Full Name": "全名",
      "Sign Up": "注册",
      "Don't have an account?": "没有帐户？",
      "Already have an account?": "已经有帐户？",
      "Check In": "入住日期",
      "Check Out": "退房日期",
      "Cancel Booking": "取消预订",
      "Contact Provider": "联系服务提供商"
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
