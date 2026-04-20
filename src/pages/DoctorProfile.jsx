import React from 'react';
import { 
  Users, 
  Calendar, 
  Layout, 
  MessageSquare, 
  User, 
  Star,
  ChevronRight,
  TrendingUp,
  UserPlus
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const DoctorProfile = () => {
  const navigate = useNavigate();

  const doctorData = {
    todayCases: 15,
    upcomingCases: [
      "นายแสน หัสสา",
      "นายมิตเลอร์ ชัมไช"
    ],
    newPatients: 2,
    todayIncome: "9,500 บ.",
    rating: 4.5,
    reviewCount: 200,
    topReview: {
      user: "นายแสน หัสสา",
      rating: 5,
      comment: "บริการดีมาก คุณหมอให้คำแนะนำดีมาก ใจเย็น และอธิบายทุกขั้นตอนได้อย่างชัดเจนครับ"
    }
  };

  return (
    <div className="doctor-profile" style={{ 
      maxWidth: '480px', 
      margin: '0 auto', 
      background: '#f8fafc', 
      minHeight: '100vh',
      paddingBottom: '100px',
      fontFamily: "'Inter', sans-serif"
    }}>
      {/* Top Banner - Case Count */}
      <div 
        style={{ padding: '20px', cursor: 'pointer' }} 
        onClick={() => navigate('/appointments')}
      >
        <div style={{ 
          background: 'linear-gradient(135deg, #ff4d4d, #ff9933)', 
          borderRadius: '20px', 
          padding: '20px', 
          color: 'white',
          boxShadow: '0 10px 20px rgba(255, 77, 77, 0.2)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2 style={{ margin: 0, fontSize: '1.6rem', fontWeight: 'bold' }}>นัดเคสวันนี้</h2>
            <span style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>{doctorData.todayCases} <span style={{ fontSize: '1.2rem' }}>เคส</span></span>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {doctorData.upcomingCases.map((name, i) => (
              <div key={i} style={{ 
                background: 'rgba(255,255,255,0.2)', 
                padding: '12px 15px', 
                borderRadius: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span>{name}</span>
                <ChevronRight size={18} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div style={{ padding: '0 20px', display: 'grid', gap: '15px' }}>
        {/* New Patients */}
        <div style={{ 
          background: 'white', 
          borderRadius: '15px', 
          overflow: 'hidden', 
          display: 'flex',
          boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
        }}>
          <div style={{ 
            width: '100px', 
            background: 'url("https://images.unsplash.com/photo-1516549655169-df83a0774514?w=200&h=200&fit=crop") center/cover' 
          }}></div>
          <div style={{ flex: 1, padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '1.1rem', color: '#666' }}>คนไข้ใหม่</span>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ff4d4d' }}>{doctorData.newPatients} <span style={{ fontSize: '1rem' }}>เคส</span></span>
          </div>
        </div>

        {/* Today's Income */}
        <div style={{ 
          background: 'white', 
          borderRadius: '15px', 
          overflow: 'hidden', 
          display: 'flex',
          boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
        }}>
          <div style={{ 
            width: '100px', 
            background: 'url("https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&h=200&fit=crop") center/cover' 
          }}></div>
          <div style={{ flex: 1, padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '1.1rem', color: '#666' }}>รายได้วันนี้</span>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ff4d4d' }}>{doctorData.todayIncome}</span>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div 
        style={{ padding: '20px', cursor: 'pointer' }} 
        onClick={() => navigate('/reviews')}
      >
        <div style={{ background: 'rgba(0,0,0,0.05)', borderRadius: '20px', padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ fontWeight: 'bold' }}>รีวิวคุณหมอ</span>
              <div style={{ display: 'flex' }}>
                {[1,2,3,4,5].map(s => <Star key={s} size={14} fill={s <= 4 ? "#ff9933" : "none"} color="#ff9933" />)}
              </div>
            </div>
            <span style={{ fontSize: '0.8rem', color: '#888' }}>({doctorData.reviewCount} reviews)</span>
          </div>

          <div style={{ background: 'white', borderRadius: '15px', padding: '15px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontWeight: 'bold', color: '#333' }}>{doctorData.topReview.user}</span>
              <div style={{ display: 'flex' }}>
                {[1,2,3,4,5].map(s => <Star key={s} size={12} fill="#ff9933" color="#ff9933" />)}
              </div>
            </div>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#666', lineHeight: '1.5' }}>
              "{doctorData.topReview.comment}"
            </p>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default DoctorProfile;
