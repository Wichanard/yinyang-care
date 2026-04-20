import React from 'react';
import { 
  Heart, 
  Clock, 
  Star, 
  MapPin, 
  Award, 
  Users, 
  FileText, 
  MessageSquare, 
  Layout, 
  User, 
  Calendar,
  ChevronLeft,
  Share2,
  Bookmark
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

import { doctors } from '../data/doctors';

const ClinicProfile = () => {
  const navigate = useNavigate();

  // Filter real doctors for The Senizens (ID 1 and 2) + Add extra experts as consultants
  const clinicDoctors = doctors.slice(0, 3); // Showing Top 3 experts

  const handleBooking = () => {
    const newBooking = {
      id: Date.now(),
      name: clinicData.name,
      location: "ตลิ่งชัน, กรุงเทพฯ",
      startDate: "25 Apr 2026",
      endDate: "30 Apr 2026",
      image: clinicData.profileImage,
      status: 'Confirmed'
    };
    
    const currentBookings = JSON.parse(localStorage.getItem('activeBookings') || '[]');
    localStorage.setItem('activeBookings', JSON.stringify([newBooking, ...currentBookings]));
    
    // Smooth transition to Dashboard
    navigate('/dashboard');
  };

  const clinicData = {
    name: "The Senizens (เดอะ ซีนิเซ่นส์)",
    followers: "2.5 หมื่นผู้ติดตาม",
    posts: "450 โพสต์",
    specialties: ["เวชศาสตร์ฟื้นฟู", "ดูแลผู้สูงอายุระยะยาว", "Stroke Rehabilitation"],
    workingHours: "เปิดบริการ 24 ชั่วโมง (เยี่ยมได้ 8.00 - 20.00น.)",
    isOpen: true,
    rating: "4.8 ดาว (ดีเยี่ยม)",
    address: "อาคาร 1 เลขที่ 10 ถนนราชพฤกษ์ แขวงบางระมาด เขตตลิ่งชัน กรุงเทพมหานคร 10170",
    doctors: clinicDoctors.map(d => ({
      id: d.id,
      name: d.name,
      role: d.role,
      image: d.image
    })),
    coverImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=400&fit=crop",
    profileImage: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop"
  };

  return (
    <div className="profile-container" style={{ 
      maxWidth: '480px', 
      margin: '0 auto', 
      background: '#f5f5f5', 
      minHeight: '100vh',
      paddingBottom: '80px',
      position: 'relative'
    }}>
      {/* Header Tabs */}
      <div style={{ 
        display: 'flex', 
        padding: '10px 20px', 
        background: 'white', 
        gap: '20px',
        borderBottom: '1px solid #eee'
      }}>
        <button style={{ 
          background: 'linear-gradient(90deg, #ff4d4d, #ff9933)', 
          color: 'white', 
          border: 'none', 
          padding: '8px 25px', 
          borderRadius: '20px',
          fontWeight: 'bold',
          fontSize: '1.1rem'
        }}>หน้าร้าน</button>
        <button style={{ 
          background: 'none', 
          border: 'none', 
          color: '#ff4d4d', 
          fontWeight: 'bold',
          fontSize: '1.1rem'
        }}>แก้ไข</button>
      </div>

      {/* Hero Section */}
      <div style={{ position: 'relative', height: '200px' }}>
        <img 
          src={clinicData.coverImage} 
          alt="Cover" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        <div style={{
          position: 'absolute',
          bottom: '-40px',
          left: '20px',
          display: 'flex',
          alignItems: 'flex-end',
          gap: '15px'
        }}>
          <div style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            border: '4px solid white',
            overflow: 'hidden',
            background: 'white',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
          }}>
            <img src={clinicData.profileImage} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ paddingBottom: '10px' }}>
            <h2 style={{ margin: 0, color: '#ff4d4d', fontSize: '1.5rem', fontWeight: 'bold' }}>{clinicData.name}</h2>
            <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
              {clinicData.followers} &nbsp; {clinicData.posts}
            </p>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div style={{ padding: '60px 20px 20px', background: 'white', marginTop: '0' }}>
        <h3 style={{ margin: '0 0 15px 0' }}>รายละเอียด</h3>
        
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
          {clinicData.specialties.map((s, i) => (
            <span key={i} style={{ 
              background: '#eee', 
              padding: '5px 15px', 
              borderRadius: '15px', 
              fontSize: '0.85rem',
              color: '#ff4d4d'
            }}>
              {s}
            </span>
          ))}
        </div>

        <div style={{ display: 'grid', gap: '15px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <Clock size={20} color="#666" />
            <span>เปิด {clinicData.workingHours} <span style={{ color: '#00cc66' }}>เปิดอยู่</span></span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <Star size={20} color="#666" />
            <span>รีวิว {clinicData.rating}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
            <MapPin size={20} color="#666" style={{ marginTop: '4px' }} />
            <span style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.4' }}>
              {clinicData.address}
            </span>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <button 
            onClick={() => navigate('/clinic-certification')}
            style={{ 
              background: 'linear-gradient(90deg, #ff4d4d, #ff9933)', 
              color: 'white', 
              border: 'none', 
              padding: '12px 40px', 
              borderRadius: '30px',
              fontWeight: 'bold',
              fontSize: '1.2rem',
              boxShadow: '0 4px 15px rgba(255, 77, 77, 0.3)',
              cursor: 'pointer'
            }}
          >
            ใบรับรองคลินิก
          </button>
        </div>
      </div>

      {/* Doctors Section */}
      <div style={{ padding: '20px' }}>
        <h3 style={{ marginBottom: '15px' }}>แพทย์ประจำคลินิก</h3>
        <div style={{ display: 'flex', gap: '15px', overflowX: 'auto', paddingBottom: '10px' }}>
          {clinicData.doctors.map(dr => (
            <div 
              key={dr.id} 
              onClick={() => navigate(`/doctor-bio/${dr.id}`)}
              style={{ 
                minWidth: '160px', 
                background: '#ff4d4d', 
                borderRadius: '20px',
                padding: '15px',
                color: 'white',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
            >
              <div style={{ 
                position: 'absolute', 
                right: '-10px', 
                bottom: '0', 
                width: '100px', 
                height: '120px',
                opacity: 0.9 
              }}>
                <img src={dr.image} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
              </div>
              <h4 style={{ margin: 0, position: 'relative', zIndex: 1, fontSize: '1.4rem' }}>{dr.name}</h4>
              <div style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                right: 0, 
                bottom: 0, 
                background: 'linear-gradient(135deg, rgba(255,77,77,0.8) 0%, rgba(255,153,51,0.4) 100%)' 
              }}></div>
            </div>
          ))}
        </div>
        {/* Pagination Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '10px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff4d4d' }}></div>
          {[1, 2, 3, 4].map(i => (
            <div key={i} style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ccc' }}></div>
          ))}
        </div>
      </div>

      {/* Promotions Section */}
      <div style={{ padding: '0 20px 20px' }}>
        <h3 style={{ marginBottom: '15px' }}>โปรโมชั่น</h3>
        <div style={{ display: 'flex', gap: '15px', overflowX: 'auto', paddingBottom: '10px' }}>
          {/* Promo 1 */}
          <div style={{ 
            minWidth: '200px', 
            height: '140px',
            background: 'white', 
            borderRadius: '15px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
          }}>
            <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?w=400&h=300&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ 
              position: 'absolute', 
              top: 0, left: 0, right: 0, bottom: 0, 
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6))',
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              color: 'white'
            }}>
              <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>ฝังเข็ม</span>
              <div style={{ textAlign: 'right' }}>
                <div style={{ color: '#ff4d4d', fontSize: '1.3rem', fontWeight: 'bold' }}>3 ครั้ง</div>
                <div style={{ fontSize: '1.1rem' }}>2,000 บ.</div>
              </div>
            </div>
          </div>
          
          {/* Promo 2 */}
          <div style={{ 
            minWidth: '200px', 
            height: '140px',
            background: 'white', 
            borderRadius: '15px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
          }}>
            <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ 
              position: 'absolute', 
              top: 0, left: 0, right: 0, bottom: 0, 
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6))',
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              color: 'white'
            }}>
              <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>กัวซา</span>
              <div style={{ textAlign: 'right' }}>
                <div style={{ color: '#ff4d4d', fontSize: '1.3rem', fontWeight: 'bold' }}>มา 2</div>
                <div style={{ fontSize: '1.1rem' }}>จ่าย 1</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: 'fixed', bottom: '80px', left: 0, right: 0, padding: '15px', background: 'white', borderTop: '1px solid #eee', display: 'flex', gap: '15px', zIndex: 1000, maxWidth: '480px', margin: '0 auto' }}>
        <button 
          onClick={() => navigate('/chat-support')}
          style={{ flex: 1, padding: '15px', borderRadius: '12px', border: '1px solid #ccc', background: 'white', fontWeight: 'bold', cursor: 'pointer' }}
        >
          สอบถามเพิ่มเติม
        </button>
        <button 
          onClick={handleBooking}
          style={{ flex: 2, padding: '15px', borderRadius: '12px', border: 'none', background: 'var(--primary)', color: 'white', fontWeight: 'bold', fontSize: '1.1rem', boxShadow: '0 4px 15px rgba(255,77,77,0.3)', cursor: 'pointer' }}
        >
          จองตอนนี้ (Real Booking)
        </button>
      </div>

      <BottomNav />
    </div>
  );
};

export default ClinicProfile;
