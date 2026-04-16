import { useNavigate } from 'react-router-dom';
import { MapPin, Star, CheckCircle, Clock } from 'lucide-react';

export default function ProviderDetail() {
  const navigate = useNavigate();

  return (
    <div className="container" style={{ padding: '2rem 1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
        <div>
          <h1 className="outfit-font" style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Baan Rak Care Center</h1>
          <p style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <MapPin size={18} /> 123 Sukhumvit Road, Watthana, Bangkok
          </p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#fef3c7', color: '#d97706', padding: '0.5rem 1rem', borderRadius: '0.5rem', fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>
            <Star size={20} fill="currentColor" /> 4.8 (124 Reviews)
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem', marginBottom: '3rem', height: '400px' }}>
        <img src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Main" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem 0 0 1rem' }} />
        <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '1rem' }}>
          <img src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Room" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0 1rem 0 0' }} />
          <img src="https://images.unsplash.com/photo-1527613426400-9ce9c506cb84?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Garden" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0 0 1rem 0' }} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
        {/* Main Content */}
        <div>
          <section style={{ marginBottom: '3rem' }}>
            <h2 className="outfit-font" style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>About This Center</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
              Baan Rak Care Center is a premium nursing facility focused on providing the highest quality of life for seniors. With over 15 years of experience, our professional medical staff and caregivers ensure certified, compassionate care 24/7. We offer beautiful gardens, daily physical therapies, and engaging social activities to keep our residents active and joyful.
            </p>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 className="outfit-font" style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Amenities & Services</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {['24/7 Nursing Staff', 'Physical Therapy Room', 'Daily Activities', 'Dietitian-Planned Meals', 'Emergency Call System', 'Private Garden'].map(amenity => (
                <div key={amenity} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)' }}>
                  <CheckCircle size={20} color="var(--primary)" /> {amenity}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Booking Sidebar */}
        <div>
          <div className="card" style={{ padding: '2rem', position: 'sticky', top: '100px' }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Price starts from</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--primary)' }}>฿1,800</span>
              <span style={{ color: 'var(--text-muted)' }}>/day</span>
            </div>

            <div className="input-group" style={{ marginBottom: '1rem' }}>
              <label className="input-label">Check In</label>
              <input type="date" className="input-field" />
            </div>
            <div className="input-group" style={{ marginBottom: '1.5rem' }}>
              <label className="input-label">Check Out</label>
              <input type="date" className="input-field" />
            </div>

            <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => navigate('/book/1')}>
              Reserve Now
            </button>
            <p style={{ textAlign: 'center', fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem' }}>
              <Clock size={14} /> Instant Confirmation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
