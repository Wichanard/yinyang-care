import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, CheckCircle, XCircle, Clock, ShoppingBag } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import BottomNav from '../components/BottomNav';

export default function MyBookings() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  // Initialize as EMPTY arrays - only read from localStorage
  const [activeBookings, setActiveBookings] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Explicitly check for data, if not exist, stay empty
    const savedBookings = JSON.parse(localStorage.getItem('activeBookings') || '[]');
    const savedHistory = JSON.parse(localStorage.getItem('bookingHistory') || '[]');
    
    // Purge any unwanted old mock data if it somehow got into localStorage (like Baan Rak)
    const cleanBookings = savedBookings.filter(b => b.name !== "Baan Rak Care Center");
    
    setActiveBookings(cleanBookings);
    setHistory(savedHistory);
  }, []);

  const handleCancel = (id) => {
    if (window.confirm('คุณแน่ใจใช่ไหมว่าต้องการยกเลิกการจองนี้?')) {
      const bookingToCancel = activeBookings.find(b => b.id === id);
      const newActive = activeBookings.filter(b => b.id !== id);
      
      setActiveBookings(newActive);
      localStorage.setItem('activeBookings', JSON.stringify(newActive));

      if (bookingToCancel) {
        const newHistory = [{ ...bookingToCancel, status: 'Cancelled', cancelledAt: new Date().toLocaleDateString() }, ...history];
        setHistory(newHistory);
        localStorage.setItem('bookingHistory', JSON.stringify(newHistory));
      }
    }
  };

  return (
    <div style={{ paddingBottom: '80px', minHeight: '100vh', background: '#f8fafc' }}>
      <div className="container" style={{ padding: '2rem 1rem' }}>
        <h2 className="outfit-font" style={{ fontSize: '2rem', marginBottom: '2rem' }}>{t('My Bookings')}</h2>

        {/* Section 1: Active Bookings */}
        <section style={{ marginBottom: '3rem' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
            <Calendar size={22} /> การจองที่กำลังจะมาถึง
          </h3>
          
          {activeBookings.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {activeBookings.map(booking => (
                <div key={booking.id} className="card" style={{ display: 'flex', overflow: 'hidden', animation: 'fadeIn 0.5s ease' }}>
                  <img src={booking.image} style={{ width: '120px', objectFit: 'cover' }} />
                  <div style={{ padding: '1.2rem', flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <h4 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>{booking.name}</h4>
                      <span style={{ fontSize: '0.8rem', background: '#ecfdf5', color: '#059669', padding: '0.2rem 0.6rem', borderRadius: '10px', fontWeight: 600 }}>
                        ยืนยันการจองแล้ว
                      </span>
                    </div>
                    <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1rem' }}>
                      <MapPin size={14} /> {booking.location}
                    </p>
                    <div style={{ display: 'flex', gap: '2rem', marginBottom: '1rem', background: '#f1f5f9', padding: '0.75rem', borderRadius: '8px' }}>
                      <div>
                        <small style={{ color: '#64748b' }}>วันที่เช็คอิน</small>
                        <p style={{ fontWeight: 600 }}>{booking.startDate}</p>
                      </div>
                      <div>
                        <small style={{ color: '#64748b' }}>วันที่ออก</small>
                        <p style={{ fontWeight: 600 }}>{booking.endDate}</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                      <button 
                        onClick={() => handleCancel(booking.id)}
                        style={{ padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid #ef4444', color: '#ef4444', background: 'transparent', cursor: 'pointer' }}
                      >
                        ยกเลิกการจอง
                      </button>
                      <button style={{ padding: '0.5rem 1rem', borderRadius: '8px', background: 'var(--primary)', color: 'white', border: 'none', cursor: 'pointer' }}>
                        ติดต่อเรา
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ 
              textAlign: 'center', 
              padding: '4rem 2rem', 
              background: 'white', 
              borderRadius: '20px', 
              border: '2px dashed #e2e8f0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <div style={{ width: '80px', height: '80px', background: '#f1f5f9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <ShoppingBag size={40} color="#94a3b8" />
              </div>
              <h4 style={{ marginBottom: '0.5rem', color: '#1e293b' }}>ยังไม่มีการจองในขณะนี้</h4>
              <p style={{ color: '#64748b', marginBottom: '2rem', maxWidth: '250px' }}>เริ่มจองศูนย์ดูแลพรีเมียมตัวจริงได้ง่ายๆ เพียงค้นหาและกดจอง</p>
              <button 
                className="btn btn-primary" 
                onClick={() => navigate('/yinyang-care/search')}
                style={{ padding: '12px 30px', borderRadius: '30px' }}
              >
                เริ่มค้นหาเลย
              </button>
            </div>
          )}
        </section>

        {/* Section 2: History */}
        {history.length > 0 && (
          <section>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: '#64748b' }}>
              <Clock size={22} /> ประวัติการจองทั้งหมด
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {history.map((h, index) => (
                <div key={index} style={{ background: 'white', padding: '1.2rem', borderRadius: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: 0.8, border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                    <div style={{ width: '40px', height: '40px', background: h.status === 'Cancelled' ? '#fff1f2' : '#f0fdf4', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: h.status === 'Cancelled' ? '#ef4444' : '#059669' }}>
                      {h.status === 'Cancelled' ? <XCircle size={22} /> : <CheckCircle size={22} />}
                    </div>
                    <div>
                      <h5 style={{ margin: 0, fontSize: '1rem' }}>{h.name}</h5>
                      <small style={{ color: '#64748b' }}>{h.startDate} - {h.endDate}</small>
                    </div>
                  </div>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    padding: '0.3rem 0.7rem', 
                    borderRadius: '20px', 
                    background: h.status === 'Cancelled' ? '#fff1f2' : '#f0fdf4',
                    color: h.status === 'Cancelled' ? '#ef4444' : '#22c55e',
                    fontWeight: 700
                  }}>
                    {h.status === 'Cancelled' ? 'ยกเลิกแล้ว' : 'สำเร็จแล้ว'}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
      <BottomNav />
    </div>
  );
}
