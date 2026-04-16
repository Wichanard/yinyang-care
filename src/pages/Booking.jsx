import { useNavigate } from 'react-router-dom';
import { CreditCard, CheckCircle } from 'lucide-react';

export default function Booking() {
  const navigate = useNavigate();

  const handleConfirm = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="container" style={{ padding: '2rem 1.5rem', maxWidth: '800px' }}>
      <h1 className="outfit-font" style={{ fontSize: '2rem', marginBottom: '2rem' }}>Complete Your Booking</h1>
      
      <div style={{ display: 'grid', gap: '2rem' }}>
        <div className="card" style={{ padding: '2rem' }}>
          <h2 className="outfit-font" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Guest Information</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="input-group">
              <label className="input-label">First Name</label>
              <input type="text" className="input-field" />
            </div>
            <div className="input-group">
              <label className="input-label">Last Name</label>
              <input type="text" className="input-field" />
            </div>
            <div className="input-group">
              <label className="input-label">Age</label>
              <input type="number" className="input-field" />
            </div>
            <div className="input-group">
              <label className="input-label">Medical Conditions</label>
              <input type="text" className="input-field" placeholder="Optional" />
            </div>
          </div>
        </div>

        <div className="card" style={{ padding: '2rem' }}>
          <h2 className="outfit-font" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Payment</h2>
          <div className="input-group" style={{ marginBottom: '1rem' }}>
            <label className="input-label">Card Number</label>
            <div style={{ position: 'relative' }}>
              <input type="text" className="input-field" style={{ width: '100%', paddingLeft: '2.5rem' }} placeholder="0000 0000 0000 0000" />
              <CreditCard size={20} color="var(--text-muted)" style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)' }} />
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
            <div className="input-group">
              <label className="input-label">Expiry Date</label>
              <input type="text" className="input-field" placeholder="MM/YY" />
            </div>
            <div className="input-group">
              <label className="input-label">CVC</label>
              <input type="text" className="input-field" placeholder="123" />
            </div>
          </div>

          <div style={{ background: 'var(--background)', padding: '1.5rem', borderRadius: '0.5rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>Total Price (7 Days)</span>
              <span style={{ fontWeight: 600 }}>฿12,600</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Taxes & Fees</span>
              <span style={{ fontWeight: 600 }}>฿882</span>
            </div>
            <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '1rem 0' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.25rem', fontWeight: 700 }}>
              <span>Total Payment</span>
              <span style={{ color: 'var(--primary)' }}>฿13,482</span>
            </div>
          </div>

          <button className="btn btn-primary" style={{ width: '100%' }} onClick={handleConfirm}>
            <CheckCircle size={20} /> Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
}
