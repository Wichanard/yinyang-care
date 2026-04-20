import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, CheckCircle, XCircle, Clock, ShoppingBag, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Dashboard() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const [activeBookings, setActiveBookings] = useState([]);
  const [history, setHistory] = useState([]);
  
  // Custom Confirmation Modal state
  const [showConfirm, setShowConfirm] = useState(false);
  const [targetBookingId, setTargetBookingId] = useState(null);

  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem('activeBookings') || '[]');
    const savedHistory = JSON.parse(localStorage.getItem('bookingHistory') || '[]');
    const cleanBookings = savedBookings.filter(b => b.name !== "Baan Rak Care Center");
    
    setActiveBookings(cleanBookings);
    setHistory(savedHistory);
  }, []);

  const openConfirmModal = (id) => {
    setTargetBookingId(id);
    setShowConfirm(true);
  };

  const closeConfirmModal = () => {
    setShowConfirm(false);
    setTargetBookingId(null);
  };

  const handleCancel = () => {
    const id = targetBookingId;
    const bookingToCancel = activeBookings.find(b => b.id === id);
    const newActive = activeBookings.filter(b => b.id !== id);
    
    setActiveBookings(newActive);
    localStorage.setItem('activeBookings', JSON.stringify(newActive));

    if (bookingToCancel) {
      const newHistory = [{ ...bookingToCancel, status: 'Cancelled', cancelledAt: new Date().toLocaleDateString() }, ...history];
      setHistory(newHistory);
      localStorage.setItem('bookingHistory', JSON.stringify(newHistory));
    }
    
    closeConfirmModal();
  };

  return (
    <div className="container" style={{ padding: '2rem 1.5rem', minHeight: '80vh', position: 'relative' }}>
      <h1 className="outfit-font" style={{ fontSize: '2rem', marginBottom: '2rem' }}>{t('My Bookings')}</h1>
      
      {/* Section 1: Active Bookings */}
      <section style={{ marginBottom: '3rem' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
          <Calendar size={22} /> {t('Active Bookings')}
        </h3>
        
        {activeBookings.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {activeBookings.map(booking => (
              <div key={booking.id} className="card" style={{ display: 'flex', overflow: 'hidden', maxWidth: '800px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                <img src={booking.image} style={{ width: '150px', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem', flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <div>
                      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-main)' }}>{booking.name}</h2>
                      <p style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.9rem' }}>
                        <MapPin size={16} /> {booking.location}
                      </p>
                    </div>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', background: '#dcfce7', color: '#166534', padding: '0.4rem 0.8rem', borderRadius: '2rem', fontSize: '0.75rem', fontWeight: 600 }}>
                      <CheckCircle size={14} /> Confirmed
                    </span>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', background: '#f8fafc', padding: '1rem', borderRadius: '0.75rem', marginBottom: '1.5rem' }}>
                    <div>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>เช็คอิน</p>
                      <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>{booking.startDate}</p>
                    </div>
                    <div>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>วันที่ออก</p>
                      <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>{booking.endDate}</p>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                    <button 
                      onClick={() => openConfirmModal(booking.id)}
                      style={{ padding: '0.6rem 1.2rem', borderRadius: '8px', border: '1px solid #ef4444', color: '#ef4444', background: 'white', fontWeight: 600, cursor: 'pointer' }}
                    >
                      ยกเลิกการจอง
                    </button>
                    <button className="btn btn-primary" style={{ padding: '0.6rem 1.5rem' }}>ติดต่อเรา</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '4rem 2rem', background: 'white', borderRadius: '20px', border: '2px dashed #e2e8f0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ShoppingBag size={50} color="#cbd5e1" style={{ marginBottom: '1rem' }} />
            <h4 style={{ color: '#1e293b', marginBottom: '0.5rem' }}>ยังไม่มีรายการจอง</h4>
            <p style={{ color: '#64748b', marginBottom: '2rem' }}>คุณสามารถเริ่มจองศูนย์ดูแลได้จากการค้นหา</p>
            <button className="btn btn-primary" onClick={() => navigate('/search')}>ค้นหาเลย</button>
          </div>
        )}
      </section>

      {/* Custom Confirmation Modal */}
      {showConfirm && (
        <div style={{ 
          position: 'fixed', 
          top: 0, left: 0, right: 0, bottom: 0, 
          background: 'rgba(0,0,0,0.6)', 
          zIndex: 9999, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          backdropFilter: 'blur(4px)',
          animation: 'fadeIn 0.2s ease-out'
        }}>
          <div style={{ 
            background: 'white', 
            width: '90%', 
            maxWidth: '400px', 
            borderRadius: '24px', 
            padding: '2rem', 
            textAlign: 'center',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
            animation: 'scaleUp 0.3s ease-out'
          }}>
            <div style={{ width: '60px', height: '60px', background: '#fee2e2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
              <AlertCircle size={32} color="#ef4444" />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', fontWeight: 700 }}>ยกเลิกการจอง?</h3>
            <p style={{ color: '#64748b', marginBottom: '2rem', lineHeight: 1.5 }}>
              คุณแน่ใจใช่ไหมว่าต้องการยกเลิกการจองนี้? การกระทำนี้ไม่สามารถย้อนกลับได้ แต่รายการจะยังคงอยู่ในประวัติ
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button 
                onClick={closeConfirmModal}
                style={{ flex: 1, padding: '12px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontWeight: 600, cursor: 'pointer' }}
              >
                ไม่ยกเลิก
              </button>
              <button 
                onClick={handleCancel}
                style={{ flex: 1, padding: '12px', borderRadius: '12px', border: 'none', background: '#ef4444', color: 'white', fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 10px rgba(239,68,68,0.3)' }}
              >
                ยกเลิกการจอง
              </button>
            </div>
          </div>
        </div>
      )}

      {/* History Section ... (remains same) */}
      {history.length > 0 && (
        <section>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: '#64748b' }}>
            <Clock size={22} /> {t('Booking History')}
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {history.map((h, i) => (
              <div key={i} style={{ background: 'white', padding: '1.2rem', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #f1f5f9' }}>
                <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: h.status === 'Cancelled' ? '#fff1f2' : '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', color: h.status === 'Cancelled' ? '#ef4444' : '#22c55e' }}>
                    {h.status === 'Cancelled' ? <XCircle size={20} /> : <CheckCircle size={20} />}
                  </div>
                  <div>
                    <h5 style={{ margin: 0, fontSize: '1rem' }}>{h.name}</h5>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748b' }}>{h.startDate} - {h.endDate}</p>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: h.status === 'Cancelled' ? '#ef4444' : '#22c55e' }}>
                    {h.status === 'Cancelled' ? 'ยกเลิกแล้ว' : 'สำเร็จแล้ว'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
