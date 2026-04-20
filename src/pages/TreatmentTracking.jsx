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
  Activity,
  ChevronLeft
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const TreatmentTracking = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('tracking');
  const [expandedId, setExpandedId] = useState(4);
  const [expandedSubId, setExpandedSubId] = useState(null);

  const treatments = [
    { 
      id: 1, 
      name: "นายรุ่งโรจน์ แสนสุข", 
      date: "18/03/2026",
      details: {
        lastTreatment: 3,
        lastTreatmentTime: "09:00:15",
        nextTreatment: 4,
        nextTreatmentTime: "10:30:00",
        currentDate: "22/04/2024"
      }
    },
    { 
      id: 2, 
      name: "นายวิลเลี่ยม ศิลป์", 
      date: "19/03/2026",
      details: {
        lastTreatment: 1,
        lastTreatmentTime: "14:20:10",
        nextTreatment: 2,
        nextTreatmentTime: "15:45:00",
        currentDate: "23/04/2024"
      }
    },
    { 
      id: 3, 
      name: "นาย สม งานเอก", 
      date: "20/03/2026",
      details: {
        lastTreatment: 5,
        lastTreatmentTime: "11:00:00",
        nextTreatment: 6,
        nextTreatmentTime: "13:15:20",
        currentDate: "24/04/2024"
      }
    },
    { 
      id: 4, 
      name: "นายรัศมี กองดี", 
      date: "20/03/2026",
      details: {
        lastTreatment: 1,
        lastTreatmentTime: "10:30:52",
        nextTreatment: 2,
        nextTreatmentTime: "11:45:30",
        currentDate: "21/04/2024"
      }
    }
  ];

  return (
    <div className="treatment-tracking" style={{ 
      maxWidth: '480px', 
      margin: '0 auto', 
      background: 'white', 
      minHeight: '100vh',
      paddingTop: '80px', // Correct spacing for top navbar
      paddingBottom: '100px',
      fontFamily: "'Inter', sans-serif"
    }}>
      {/* Header Tabs */}
      <div style={{ 
        display: 'flex', 
        padding: '0', 
        background: 'white', 
        borderBottom: '2px solid #ff4d4d',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <button 
          onClick={() => navigate('/appointments')}
          style={{ 
            flex: 1,
            background: 'none', 
            color: '#ff4d4d', 
            border: 'none', 
            padding: '15px 0', 
            fontWeight: 'bold',
            fontSize: '1.1rem',
            cursor: 'pointer'
          }}
        >
          รายการนัด
        </button>
        <button style={{ 
          flex: 1,
          background: 'linear-gradient(90deg, #ff4d4d, #ff9933)', 
          color: 'white', 
          border: 'none', 
          padding: '15px 0', 
          fontWeight: 'bold',
          fontSize: '1.1rem'
        }}>ติดตามอาการ</button>
      </div>

      {/* Hero Section */}
      <div style={{ padding: '20px' }}>
        <h2 style={{ color: '#ff4d4d', fontSize: '1.3rem', marginBottom: '5px' }}>ติดตามสถานะการรักษา</h2>
        <p style={{ fontSize: '0.85rem', color: '#888' }}>ตรวจสอบความคืบหน้าของคนไข้แบบเรียลไทม์</p>
      </div>

      {/* Treatment List */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {treatments.map(item => (
          <div key={item.id} style={{ borderBottom: '1px solid #eee' }}>
            <div 
              onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
              style={{ 
                padding: '20px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ fontSize: '1.2rem', color: '#ff4d4d', fontWeight: 'bold', width: '25px' }}>{item.id}</span>
                <div>
                  <div style={{ fontWeight: 'bold', fontSize: '1rem', color: '#333' }}>{item.name}</div>
                  <div style={{ fontSize: '0.85rem', color: '#888' }}>วันที่ {item.date}</div>
                </div>
              </div>
              {expandedId === item.id ? <ChevronUp size={20} color="#ccc" /> : <ChevronDown size={20} color="#ccc" />}
            </div>

            {/* Expanded Content - Tracking Details */}
            {expandedId === item.id && item.details && (
              <div style={{ 
                background: '#fafafa', 
                padding: '5px 20px 25px 60px',
                animation: 'fadeIn 0.3s ease-in'
              }}>
                <div style={{ display: 'grid', gap: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.9rem', color: '#666' }}>บันทึกอาการรักษาครั้งที่ :</span>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <span style={{ fontWeight: 'bold' }}>{item.details.lastTreatment}</span>
                      <div style={{ border: '1px solid #ddd', padding: '4px 10px', borderRadius: '5px', fontSize: '0.8rem', background: 'white' }}>
                        {item.details.lastTreatmentTime}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.9rem', color: '#666' }}>บันทึกอาการรักษาครั้งถัดไป :</span>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <span style={{ fontWeight: 'bold' }}>{item.details.nextTreatment}</span>
                      <div style={{ border: '1px solid #ddd', padding: '4px 10px', borderRadius: '5px', fontSize: '0.8rem', background: 'white' }}>
                        {item.details.nextTreatmentTime}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px dashed #eee', paddingTop: '15px' }}>
                    <span style={{ fontSize: '0.9rem', color: '#666' }}>นัดวันที่ :</span>
                    <span style={{ fontWeight: 'bold', color: '#333' }}>{item.details.currentDate}</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => setExpandedSubId(expandedSubId === item.id ? null : item.id)}
                  style={{ 
                    marginTop: '20px', 
                    width: '100%', 
                    padding: '12px', 
                    borderRadius: '10px', 
                    border: '1px solid #ff4d4d', 
                    background: expandedSubId === item.id ? '#fff5f5' : 'none', 
                    color: '#ff4d4d', 
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    cursor: 'pointer'
                  }}
                >
                  <Activity size={18} />
                  {expandedSubId === item.id ? 'ซ่อนข้อมูลบันทึก' : 'บันทึกข้อมูลอาการเพิ่มเติม'}
                </button>

                {/* Clinical Observation Form Content */}
                {expandedSubId === item.id && (
                  <div style={{ 
                    marginTop: '15px', 
                    padding: '15px', 
                    background: 'white', 
                    borderRadius: '12px', 
                    border: '1px solid #ffebeb',
                    animation: 'slideDown 0.3s ease-out'
                  }}>
                    <div style={{ marginBottom: '10px', borderBottom: '1px solid #f5f5f5', paddingBottom: '8px' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#ff4d4d' }}>Clinical Observation</span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
                      <div style={{ background: '#f8fafc', padding: '8px', borderRadius: '8px' }}>
                        <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Blood Pressure</div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>120/80 mmHg</div>
                      </div>
                      <div style={{ background: '#f8fafc', padding: '8px', borderRadius: '8px' }}>
                        <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Heart Rate</div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>72 bpm</div>
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.7rem', color: '#64748b', marginBottom: '4px' }}>Nurse/Physician Note:</div>
                      <p style={{ margin: 0, fontSize: '0.85rem', color: '#334155', fontStyle: 'italic' }}>
                        \"คนไข้มีอาการดีขึ้นตามลำดับ การเคลื่อนไหวช่วงไหล่เริ่มทำได้กว้างขึ้น แนะนำให้ทำกายภาพต่อเนื่อง 3 ครั้ง/สัปดาห์\"
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
};

export default TreatmentTracking;
