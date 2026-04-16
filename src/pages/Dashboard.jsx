import { Calendar, MapPin, CheckCircle } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="container" style={{ padding: '2rem 1.5rem' }}>
      <h1 className="outfit-font" style={{ fontSize: '2rem', marginBottom: '2rem' }}>My Bookings</h1>
      
      <div className="card" style={{ display: 'flex', overflow: 'hidden', maxWidth: '900px' }}>
        <img src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Center" style={{ width: '200px', objectFit: 'cover' }} />
        <div style={{ padding: '1.5rem', flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <div>
              <h2 className="outfit-font" style={{ fontSize: '1.5rem', fontWeight: 600 }}>Baan Rak Care Center</h2>
              <p style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <MapPin size={16} /> Sukhumvit, Bangkok
              </p>
            </div>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', background: '#dcfce7', color: '#166534', padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.875rem', fontWeight: 600 }}>
              <CheckCircle size={16} /> Confirmed
            </span>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', background: 'var(--background)', padding: '1rem', borderRadius: '0.5rem' }}>
            <div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Check In</p>
              <p style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Calendar size={16} /> 20 Apr 2026</p>
            </div>
            <div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Check Out</p>
              <p style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Calendar size={16} /> 27 Apr 2026</p>
            </div>
          </div>
          
          <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
            <button className="btn btn-outline">Cancel Booking</button>
            <button className="btn btn-primary">Contact Provider</button>
          </div>
        </div>
      </div>
    </div>
  );
}
