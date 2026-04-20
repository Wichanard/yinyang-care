import React, { useState } from 'react';
import { 
  Users, 
  Calendar, 
  Layout, 
  MessageSquare, 
  User, 
  ChevronDown,
  ChevronUp,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Info
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const AppointmentSystem = () => {
  const navigate = useNavigate();
  const [expandedId, setExpandedId] = useState(5);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', message: '' });

  const appointments = [
    {
      id: 1,
      name: "นายรุ่งโรจน์ แสนสุข",
      date: "18/03/2026",
      status: "รับ",
      statusColor: "#00cc66"
    },
    {
      id: 2,
      name: "นายวิลเลี่ยม ศิลป์",
      date: "19/03/2026",
      status: "เลื่อน",
      statusColor: "#ff9933"
    },
    {
      id: 3,
      name: "นาย สม งานเอก",
      date: "20/03/2026",
      status: "ยกเลิก",
      statusColor: "#ff3333"
    },
    {
      id: 4,
      name: "นายรัศมี กองดี",
      date: "20/03/2026",
      status: "ตรวจสอบ",
      statusColor: "#ff4d4d",
      isOutline: true
    },
    {
      id: 5,
      name: "นายรุ่งโรจน์ แสนสุข",
      date: "20/03/2026",
      status: "สถานะการจอง",
      statusColor: "#ff4d4d",
      isOutline: true,
      details: {
        weight: "68 กก.",
        height: "172 ซม.",
        symptoms: "ปวดกล้ามเนื้อเรื้อรัง",
        service: "ครอบแก้ว",
        promotion: "ลด 15%",
        price: "900 บาท"
      }
    },
    {
      id: 6,
      name: "นายสนั่น แดนไกล",
      date: "20/03/2026",
      status: "รับ",
      statusColor: "#00cc66"
    }
  ];

  const handleStatusAction = (appt) => {
    setModalContent({
      title: `ดำเนินการสถานะ: ${appt.status}`,
      message: `คุณได้ยืนยันการดำเนินการสำหรับคนไข้คุณ ${appt.name} เรียบร้อยแล้ว ระบบกำลังบันทึกข้อมูลเข้าสู่ฐานข้อมูลกลาง`
    });
    setShowModal(true);
  };

  return (
    <div className="appointment-system" style={{ 
      maxWidth: '480px', 
      margin: '0 auto', 
      background: 'white', 
      minHeight: '100vh',
      paddingTop: '80px',
      paddingBottom: '100px',
      fontFamily: "'Inter', sans-serif",
      position: 'relative'
    }}>
      {/* Header Tabs */}
      <div style={{ 
        display: 'flex', 
        padding: '0', 
        background: 'white', 
        borderBottom: '2px solid #ff4d4d' 
      }}>
        <button style={{ 
          flex: 1,
          background: '#ff4d4d', 
          color: 'white', 
          border: 'none', 
          padding: '12px 0', 
          fontWeight: 'bold',
          fontSize: '1.1rem'
        }}>รายการนัด</button>
        <button style={{ 
          flex: 1,
          background: 'none', 
          border: 'none', 
          color: '#ff4d4d', 
          padding: '12px 0', 
          fontWeight: 'bold',
          fontSize: '1.1rem',
          cursor: 'pointer'
        }}
        onClick={() => navigate('/tracking')}
        >ติดตามอาการ</button>
      </div>

      {/* Appointment List */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {appointments.map(appt => (
          <div key={appt.id} style={{ borderBottom: '1px solid #eee' }}>
            <div 
              onClick={() => setExpandedId(expandedId === appt.id ? null : appt.id)}
              style={{ 
                padding: '15px 20px', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '15px',
                cursor: 'pointer'
              }}
            >
              <span style={{ fontSize: '1.3rem', color: '#ff4d4d', fontWeight: 'bold', minWidth: '25px' }}>{appt.id}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 'bold', fontSize: '1rem', color: '#333' }}>{appt.name}</div>
                <div style={{ fontSize: '0.85rem', color: '#888' }}>วันที่ {appt.date}</div>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleStatusAction(appt);
                }}
                style={{
                  padding: '5px 15px',
                  borderRadius: '8px',
                  border: appt.isOutline ? `1px solid ${appt.statusColor}` : 'none',
                  background: appt.isOutline ? 'transparent' : appt.statusColor,
                  color: appt.isOutline ? appt.statusColor : 'white',
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                  minWidth: '80px',
                  textAlign: 'center',
                  cursor: 'pointer'
                }}
              >
                {appt.status}
              </button>
            </div>

            {/* Expanded Details */}
            {expandedId === appt.id && appt.details && (
              <div style={{ 
                background: '#fcfcfc', 
                padding: '10px 20px 20px 60px', 
                borderTop: '1px dashed #eee',
                animation: 'slideDown 0.3s ease-out'
              }}>
                <h4 style={{ margin: '0 0 10px 0', color: '#333', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Info size={16} color="#ff4d4d" /> ข้อมูล
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '10px', fontSize: '0.9rem', color: '#666' }}>
                  <span>น้ำหนัก:</span> <span style={{ color: '#333' }}>{appt.details.weight}</span>
                  <span>สูง:</span> <span style={{ color: '#333' }}>{appt.details.height}</span>
                  <span>อาการเบื้องต้น:</span> <span style={{ color: '#333' }}>{appt.details.symptoms}</span>
                  <span>บริการ:</span> <span style={{ color: '#333' }}>{appt.details.service}</span>
                  <span>โปรโมชั่น:</span> <span style={{ color: '#ff4d4d' }}>{appt.details.promotion}</span>
                  <span>ราคา:</span> <span style={{ color: '#333', fontWeight: 'bold' }}>{appt.details.price}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Custom Confirmation Modal */}
      {showModal && (
        <div style={{ 
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
          background: 'rgba(51, 51, 51, 0.4)', 
          zIndex: 10000, 
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backdropFilter: 'blur(3px)'
        }}>
          <div style={{ 
            background: 'white', 
            width: '85%', 
            maxWidth: '380px', 
            borderRadius: '20px', 
            padding: '25px', 
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            animation: 'scaleUp 0.3s ease-out'
          }}>
            <div style={{ width: '50px', height: '50px', background: '#f0fdf4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px' }}>
              <CheckCircle size={30} color="#22c55e" />
            </div>
            <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>{modalContent.title}</h3>
            <p style={{ margin: '0 0 20px 0', color: '#666', fontSize: '0.9rem', lineHeight: '1.5' }}>{modalContent.message}</p>
            <button 
              onClick={() => setShowModal(false)}
              style={{ 
                width: '100%', 
                padding: '12px', 
                borderRadius: '12px', 
                border: 'none', 
                background: '#ff4d4d', 
                color: 'white', 
                fontWeight: 'bold', 
                cursor: 'pointer' 
              }}
            >
              ตกลง
            </button>
          </div>
        </div>
      )}

      <BottomNav />
      
      <style>{`
        @keyframes scaleUp {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default AppointmentSystem;
