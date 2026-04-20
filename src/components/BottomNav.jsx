import React from 'react';
import { 
  Users, 
  Calendar, 
  Layout, 
  MessageSquare, 
  User 
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { 
      label: 'WORKS', 
      icon: Users, 
      path: '/clinic-certification',
      activePaths: ['/clinic-certification']
    },
    { 
      label: 'QUEUE', 
      icon: Calendar, 
      path: '/appointments',
      activePaths: ['/appointments', '/tracking']
    },
    { 
      label: 'HOME', 
      icon: Layout, 
      path: '/',
      isCenter: true,
      activePaths: ['/']
    },
    { 
      label: 'CONTENT', 
      icon: MessageSquare, 
      path: '/reviews',
      activePaths: ['/reviews']
    },
    { 
      label: 'INFO', 
      icon: User, 
      path: '/doctor-bio/1',
      activePaths: ['/doctor-bio/1']
    }
  ];

  return (
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
      borderTopLeftRadius: '25px',
      borderTopRightRadius: '25px',
      zIndex: 1000,
      boxShadow: '0 -5px 20px rgba(0,0,0,0.2)'
    }}>
      {navItems.map((item, index) => {
        const isActive = item.activePaths.includes(location.pathname);
        const Icon = item.icon;

        if (item.isCenter) {
          return (
            <div 
              key={index}
              onClick={() => navigate(item.path)}
              style={{ 
                marginTop: '-35px', 
                background: '#ff4d4d', 
                width: '65px', 
                height: '65px', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                border: '5px solid white',
                boxShadow: '0 4px 15px rgba(255, 77, 77, 0.4)',
                cursor: 'pointer',
                transition: 'transform 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Icon size={32} color="white" />
            </div>
          );
        }

        return (
          <div 
            key={index}
            onClick={() => navigate(item.path)}
            style={{ 
              textAlign: 'center', 
              opacity: isActive ? 1 : 0.6,
              color: isActive ? '#ff4d4d' : 'white',
              cursor: 'pointer',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
              transition: 'all 0.2s'
            }}
          >
            <Icon size={24} />
            <div style={{ fontSize: '0.65rem', fontWeight: isActive ? 'bold' : 'normal' }}>{item.label}</div>
          </div>
        );
      })}
    </div>
  );
};

export default BottomNav;
