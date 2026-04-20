import React from 'react';
import { 
  Users, 
  FileText, 
  MessageSquare, 
  Layout, 
  User, 
  Calendar,
  CheckCircle,
  Clock as ClockIcon,
  Plus
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ClinicCertification = () => {
  const navigate = useNavigate();

  const certificationData = [
    {
      id: 1,
      title: "ใบรับรองคลินิก",
      status: "ผ่านการตรวจสอบ",
      statusColor: "#00cc66",
      isHeader: true
    },
    {
      id: 2,
      title: "บุคลากรทางการแพทย์",
      status: "กำลังตรวจสอบ",
      statusColor: "#ff9933",
      isHeader: true
    }
  ];

  const doctors = [
    {
      id: 1,
      name: "นพ. เก่งพงศ์ ตั้งอรุณสันติ",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop",
      docType: "ใบประกอบวิชาชีพเวชกรรม (อายุรศาสตร์)"
    },
    {
      id: 2,
      name: "นพ. ฆนัท ครุธกุล",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&h=100&fit=crop",
      docType: "ใบประกอบวิชาชีพเวชกรรม (อายุรศาสตร์)"
    }
  ];

  return (
    <div className="cert-container" style={{ 
      maxWidth: '480px', 
      margin: '0 auto', 
      background: '#f5f5f5', 
      minHeight: '100vh',
      paddingBottom: '80px',
      fontFamily: "'Inter', sans-serif"
    }}>
      {/* Header Tabs */}
      <div style={{ 
        display: 'flex', 
        padding: '10px 20px', 
        background: 'white', 
        gap: '20px',
        borderBottom: '1px solid #eee'
      }}>
        <button 
          onClick={() => navigate('/clinic-profile')}
          style={{ 
            background: 'none', 
            border: 'none', 
            color: '#ff4d4d', 
            fontWeight: 'bold',
            fontSize: '1.1rem',
            cursor: 'pointer'
          }}
        >
          หน้าร้าน
        </button>
        <button style={{ 
          background: 'linear-gradient(90deg, #ff4d4d, #ff9933)', 
          color: 'white', 
          border: 'none', 
          padding: '8px 25px', 
          borderRadius: '20px',
          fontWeight: 'bold',
          fontSize: '1.1rem'
        }}>
          แก้ไข
        </button>
      </div>

      <div style={{ padding: '20px' }}>
        <h2 style={{ color: '#ff4d4d', fontSize: '1.2rem', marginBottom: '10px' }}>ข้อมูลคลินิก</h2>
        <ul style={{ 
          listStyle: 'disc', 
          paddingLeft: '20px', 
          fontSize: '0.85rem', 
          color: '#666', 
          marginBottom: '20px',
          lineHeight: '1.6'
        }}>
          <li>ชื่อ</li>
          <li>ที่อยู่</li>
          <li>รูปคลินิก ภายใน/ภายนอก</li>
        </ul>

        {/* Section 1: Clinic Establishment Doc */}
        <div style={{ 
          background: 'white', 
          borderRadius: '10px', 
          padding: '15px', 
          marginBottom: '20px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <span style={{ fontWeight: 'bold', color: '#ff4d4d' }}>ใบจัดตั้งคลินิก</span>
            <span style={{ color: '#ff9933', fontSize: '0.9rem' }}>กำลังตรวจสอบ</span>
          </div>

          {/* Document Placeholder */}
          <div style={{ 
            border: '2px dashed #ccc', 
            borderRadius: '8px', 
            height: '180px', 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center', 
            justifyContent: 'center',
            color: '#999',
            position: 'relative',
            background: '#fcfcfc',
            marginBottom: '15px'
          }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(-45deg)', opacity: 0.1, fontSize: '2rem', whiteSpace: 'nowrap' }}>
               แนบเอกสาร แนบเอกสาร
            </div>
            <Plus size={40} strokeWidth={1.5} />
            <span style={{ fontSize: '0.9rem', marginTop: '8px' }}>แนบเอกสาร</span>
          </div>

          <ul style={{ 
            listStyle: 'disc', 
            paddingLeft: '20px', 
            fontSize: '0.8rem', 
            color: '#666',
            lineHeight: '1.6'
          }}>
            <li>สบส กทม. (กรมสนับสนุนบริการสุขภาพ)</li>
            <li>ต่างจังหวัด (สำนักงานสาธารณสุขจังหวัด)</li>
          </ul>
        </div>

        {/* Section 2: Medical Personnel */}
        <div style={{ 
          background: 'white', 
          borderRadius: '10px', 
          padding: '15px', 
          marginBottom: '10px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <span style={{ fontWeight: 'bold', color: '#ff4d4d' }}>บุคลากรทางการแพทย์</span>
            <span style={{ color: '#00cc66', fontSize: '0.9rem' }}>ผ่านการตรวจสอบ</span>
          </div>

          {/* Doctor List */}
          {doctors.map(dr => (
            <div 
              key={dr.id} 
              onClick={() => navigate(`/doctor-profile/${dr.id}`)}
              style={{ 
                background: '#fafafa', 
                borderRadius: '10px', 
                padding: '15px', 
                marginBottom: '15px',
                border: '1px solid #eee',
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <span style={{ fontSize: '0.95rem' }}>{dr.name}</span>
                <img src={dr.image} style={{ width: '50px', height: '50px', borderRadius: '8px', objectFit: 'cover' }} />
              </div>

              {/* Document Placeholder */}
              <div style={{ 
                border: '2px dashed #ccc', 
                borderRadius: '8px', 
                height: '150px', 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center', 
                justifyContent: 'center',
                color: '#999',
                position: 'relative',
                background: 'white',
                marginBottom: '10px'
              }}>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(-45deg)', opacity: 0.1, fontSize: '2rem', whiteSpace: 'nowrap' }}>
                   แนบเอกสาร แนบเอกสาร
                </div>
                <Plus size={30} />
                <span style={{ fontSize: '0.8rem', marginTop: '5px' }}>แนบเอกสาร</span>
              </div>
              <div style={{ fontSize: '0.8rem', color: '#666', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#666' }}></div>
                {dr.docType}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <div style={{ 
        position: 'fixed', 
        bottom: 0, 
        left: '50%', 
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: '480px',
        background: '#333',
        display: 'flex',
        justifyContent: 'space-around',
        padding: '10px 0',
        color: 'white',
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
        zIndex: 100
      }}>
        <div style={{ textAlign: 'center', opacity: 0.7 }}>
          <Users size={24} />
          <div style={{ fontSize: '0.7rem' }}>WORKS</div>
        </div>
        <div style={{ textAlign: 'center', opacity: 0.7 }}>
          <Calendar size={24} />
          <div style={{ fontSize: '0.7rem' }}>QUEUE</div>
        </div>
        <div style={{ 
          marginTop: '-30px', 
          background: '#ff4d4d', 
          width: '60px', 
          height: '60px', 
          borderRadius: '50%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          border: '5px solid #f5f5f5',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
        }}>
          <Layout size={30} />
        </div>
        <div style={{ textAlign: 'center', opacity: 0.7 }}>
          <MessageSquare size={24} />
          <div style={{ fontSize: '0.7rem' }}>CONTENT</div>
        </div>
        <div style={{ textAlign: 'center', opacity: 0.7 }}>
          <User size={24} />
          <div style={{ fontSize: '0.7rem' }}>INFO</div>
        </div>
      </div>
    </div>
  );
};

export default ClinicCertification;
