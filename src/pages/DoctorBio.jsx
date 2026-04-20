import React from 'react';
import { 
  Users, 
  Calendar, 
  Layout, 
  MessageSquare, 
  User, 
  ChevronLeft,
  GraduationCap,
  PlusCircle,
  Plus
} from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

import { doctors } from '../data/doctors';

const DoctorBio = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Find real doctor by ID or default to first
  const doctor = doctors.find(d => d.id === parseInt(id)) || doctors[0];

  const doctorData = {
    name: doctor.name,
    specialty: doctor.role,
    education: doctor.education || "แพทยศาสตรบัณฑิต (MD)",
    experience: doctor.license + " ประจำที่ " + doctor.expertAt,
    profileImage: doctor.image,
    coverImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=400&fit=crop"
  };

  return (
    <div className="doctor-bio" style={{ 
      maxWidth: '480px', 
      margin: '0 auto', 
      background: 'white', 
      minHeight: '100vh',
      paddingBottom: '100px',
      position: 'relative'
    }}>
      {/* Header Tabs */}
      <div style={{ 
        display: 'flex', 
        padding: '10px 20px', 
        background: 'white', 
        gap: '20px',
        borderBottom: '1px solid #eee',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <button 
          onClick={() => navigate(-1)}
          style={{ 
            background: 'linear-gradient(90deg, #ff4d4d, #ff9933)', 
            color: 'white', 
            border: 'none', 
            padding: '8px 25px', 
            borderRadius: '20px',
            fontWeight: 'bold',
            fontSize: '1.1rem'
          }}
        >
          หน้าร้าน
        </button>
        <button style={{ 
          background: 'none', 
          border: 'none', 
          color: '#ff4d4d', 
          fontWeight: 'bold',
          fontSize: '1.1rem'
        }}>แก้ไข</button>
      </div>

      {/* Hero Section */}
      <div style={{ position: 'relative', height: '180px' }}>
        <img 
          src={doctorData.coverImage} 
          alt="Cover" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        <div style={{
          position: 'absolute',
          bottom: '-60px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          border: '5px solid white',
          overflow: 'hidden',
          background: 'white',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
        }}>
          <img src={doctorData.profileImage} alt="Doctor" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>

      {/* Content Section */}
      <div style={{ padding: '70px 20px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 'bold', marginBottom: '10px' }}>{doctorData.name}</h2>
        <div style={{ 
          display: 'inline-block',
          background: '#f8f4f4', 
          padding: '4px 20px', 
          borderRadius: '20px', 
          fontSize: '0.9rem',
          color: '#ff4d4d',
          marginBottom: '30px'
        }}>
          {doctorData.specialty}
        </div>

        <div style={{ textAlign: 'left', marginTop: '10px' }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '20px' }}>รายละเอียด</h3>
          
          {/* Education Row */}
          <div style={{ display: 'flex', gap: '20px', marginBottom: '25px', alignItems: 'flex-start' }}>
            <div style={{ minWidth: '40px' }}>
              <GraduationCap size={35} strokeWidth={1.5} />
            </div>
            <p style={{ margin: 0, fontSize: '1rem', lineHeight: '1.4', color: '#333' }}>
              {doctorData.education}
            </p>
          </div>

          {/* Work Row */}
          <div style={{ display: 'flex', gap: '20px', marginBottom: '25px', alignItems: 'flex-start' }}>
            <div style={{ 
              minWidth: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              border: '4px solid #333', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <Plus size={24} strokeWidth={3} />
            </div>
            <p style={{ margin: 0, fontSize: '1.1rem', lineHeight: '1.4', color: '#333' }}>
              {doctorData.experience}
            </p>
          </div>
        </div>

        {/* Certificate Button */}
        <button 
          onClick={() => navigate('/clinic-certification')}
          style={{ 
            marginTop: '40px',
            background: 'linear-gradient(90deg, #ff4d4d, #ffa07a)', 
            color: 'white', 
            border: 'none', 
            width: '100%',
            padding: '15px', 
            borderRadius: '35px',
            fontWeight: 'bold',
            fontSize: '1.4rem',
            boxShadow: '0 5px 15px rgba(255, 77, 77, 0.3)'
          }}
        >
          ใบประกอบวิชาชีพ
        </button>
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
          border: '5px solid white',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
        }}>
          <Layout size={30} />
        </div>
        <div style={{ textAlign: 'center', opacity: 0.7 }}>
          <MessageSquare size={24} />
          <div style={{ fontSize: '0.7rem' }}>CREATE CONTENT</div>
        </div>
        <div style={{ textAlign: 'center', opacity: 0.7 }}>
          <User size={24} />
          <div style={{ fontSize: '0.7rem' }}>Personal Info</div>
        </div>
      </div>
    </div>
  );
};

export default DoctorBio;
