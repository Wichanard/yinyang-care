import { useNavigate } from 'react-router-dom';
import { MapPin, Filter, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function SearchResults() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="container" style={{ padding: '2rem 1.5rem', display: 'flex', gap: '2rem' }}>
      {/* Sidebar Filters */}
      <aside style={{ width: '300px', flexShrink: 0 }}>
        <div className="card" style={{ padding: '1.5rem', position: 'sticky', top: '100px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Filter size={20} color="var(--primary)" />
            <h3 className="outfit-font" style={{ fontSize: '1.25rem' }}>{t('Filters')}</h3>
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ marginBottom: '0.75rem', fontWeight: 600 }}>{t('Price Range')}</h4>
            <input type="range" style={{ width: '100%' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              <span>฿500</span>
              <span>฿5000+</span>
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ marginBottom: '0.75rem', fontWeight: 600 }}>{t('Service Type')}</h4>
            {[t('Nursing Home'), t('Home Care'), t('Physical Therapy')].map(type => (
              <label key={type} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <input type="checkbox" /> {type}
              </label>
            ))}
          </div>
        </div>
      </aside>

      {/* Results List */}
      <main style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 className="outfit-font" style={{ fontSize: '1.5rem' }}>14 {t('Providers found')}</h2>
          <select className="input-field" style={{ padding: '0.5rem 1rem' }}>
            <option>{t('Sort by')}: {t('Recommended')}</option>
            <option>Price: Low to High</option>
            <option>Rating: High to Low</option>
          </select>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {[1, 2, 3, 4].map(item => (
            <div key={item} className="card" style={{ display: 'flex', overflow: 'hidden' }}>
              <img src={`https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`} alt="Service" style={{ width: '250px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h3 className="outfit-font" style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.25rem' }}>Baan Rak Care Center</h3>
                    <p style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '1rem' }}>
                      <MapPin size={16} /> 2.5 km
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', background: '#fef3c7', color: '#d97706', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', fontWeight: 600 }}>
                    <Star size={16} fill="currentColor" /> 4.8
                  </div>
                </div>
                
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.5rem', flex: 1 }}>
                  Professional nursing home providing 24/7 care, daily activities, and specialized medical support for Alzheimer's patients.
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                  <div>
                    <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>฿1,800</span>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>/{t('day')}</span>
                  </div>
                  <button className="btn btn-primary" onClick={() => navigate('/provider/1')}>{t('View Details')}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
