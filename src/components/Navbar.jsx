import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, LogOut, QrCode, Globe, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTranslation } from 'react-i18next';
import { QRCodeSVG } from 'qrcode.react';
import logoUrl from '../assets/logo.png';

export default function Navbar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [showQR, setShowQR] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const changeLanguage = (e) => {
    const lang = e.target.value;
    localStorage.setItem('yinyang_language', lang);
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <nav className="navbar glass">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img src={logoUrl} alt="YinYang Care Logo" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
            <span>YinYang Care</span>
          </Link>
          <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <Link to="/chat-support" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#4285f4', fontWeight: '600' }}>
              <Sparkles size={18} /> ปรึกษา AI
            </Link>
            <Link to="/search">{t('Find Care')}</Link>
            
            {currentUser ? (
               <>
                 <Link to="/dashboard">{t('My Bookings')}</Link>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginLeft: '1rem', paddingLeft: '1rem', borderLeft: '1px solid #E5E7EB' }}>
                   <span style={{ color: '#0F766E', fontWeight: '500' }}>{t('Welcome', { name: currentUser.name })}</span>
                   <button onClick={handleLogout} className="btn" style={{ background: 'transparent', color: '#EF4444', border: '1px solid #EF4444', display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem' }}>
                     <LogOut size={16} /> {t('Sign Out')}
                   </button>
                 </div>
               </>
            ) : (
               <Link to="/login" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                 <User size={18} /> {t('Sign In')}
               </Link>
            )}

            {/* Language Switcher */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', marginLeft: '0.5rem' }}>
              <Globe size={18} color="#4B5563" />
              <select onChange={changeLanguage} value={i18n.language} style={{ border: 'none', background: 'transparent', color: '#4B5563', cursor: 'pointer', outline: 'none' }}>
                <option value="th">ไทย</option>
                <option value="en">English</option>
                <option value="zh">中文</option>
              </select>
            </div>

            {/* QR Code Button */}
            <button onClick={() => setShowQR(true)} className="btn" style={{ background: '#F3F4F6', color: '#1F2937', display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem' }}>
              <QrCode size={18} />
            </button>
          </div>
        </div>
      </nav>

      {/* QR Code Modal */}
      {showQR && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <div style={{ background: 'white', padding: '2rem', borderRadius: '1rem', textAlign: 'center', width: '300px' }}>
            <h3 style={{ marginBottom: '1.5rem', color: '#0F766E' }}>{t('Share QR Code')}</h3>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <QRCodeSVG 
                value={window.location.href} 
                size={200}
                imageSettings={{
                  src: logoUrl,
                  x: undefined,
                  y: undefined,
                  height: 40,
                  width: 40,
                  excavate: true,
                }} 
              />
            </div>
            <p style={{ fontSize: '0.875rem', color: '#6B7280', marginBottom: '1.5rem', wordBreak: 'break-all' }}>
              {window.location.href}
            </p>
            <button onClick={() => setShowQR(false)} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              {t('Close')}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
