import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Calendar, Activity } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { clinics } from '../data/clinics';

export default function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/search');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero" style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url("https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80") center/cover',
        position: 'relative'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', color: 'white' }}>
            <h1 className="outfit-font animate-fade-up" style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: 700, lineHeight: 1.2 }}>
              {t('Hero Title')}
            </h1>
            <p className="animate-fade-up" style={{ fontSize: '1.25rem', marginBottom: '3rem', opacity: 0.9, animationDelay: '0.1s' }}>
              {t('Hero Subtitle')}
            </p>
            
            {/* Search Box */}
            <div className="search-box animate-fade-up" style={{
              display: 'flex',
              gap: '1rem',
              padding: '1.5rem',
              borderRadius: '1rem',
              background: 'white',
              boxShadow: 'var(--shadow-lg)',
              animationDelay: '0.2s',
              textAlign: 'left'
            }}>
              <div className="input-group" style={{ flex: 1 }}>
                <label className="input-label" style={{ color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MapPin size={16} color="var(--primary)" /> {t('Location')}
                </label>
                <input type="text" className="input-field" placeholder="City or Zip Code" />
              </div>
              <div className="input-group" style={{ flex: 1 }}>
                <label className="input-label" style={{ color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Calendar size={16} color="var(--primary)" /> {t('Dates')}
                </label>
                <input type="date" className="input-field" />
              </div>
              <div className="input-group" style={{ flex: 1 }}>
                <label className="input-label" style={{ color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Activity size={16} color="var(--primary)" /> {t('Service Type')}
                </label>
                <select className="input-field" style={{ appearance: 'none' }}>
                  <option>{t('Nursing Home')}</option>
                  <option>{t('Home Care')}</option>
                  <option>{t('Physical Therapy')}</option>
                  <option>{t('Companion Care')}</option>
                </select>
              </div>
              <button className="btn btn-primary" onClick={handleSearch} style={{ alignSelf: 'flex-end', height: '46px', padding: '0 2rem' }}>
                <Search size={20} /> {t('Search')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="section container">
        <h2 className="outfit-font" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>
          {t('Recommended')}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {clinics.slice(0, 8).map(clinic => (
            <div 
              key={clinic.id} 
              className="card"
              onClick={() => navigate('/clinic-profile')}
              style={{ 
                cursor: 'pointer',
                transition: 'transform 0.3s, box-shadow 0.3s',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <img src={clinic.image} alt={clinic.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <h3 className="outfit-font" style={{ fontSize: '1.25rem', fontWeight: 600 }}>{clinic.name}</h3>
                  <div style={{ background: '#fef3c7', color: '#d97706', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.875rem', fontWeight: 600 }}>
                    ★ {clinic.rating}
                  </div>
                </div>
                <a 
                  href={clinic.mapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={{ 
                    color: 'var(--text-muted)', 
                    marginBottom: '1rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.25rem',
                    textDecoration: 'none'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'}
                  onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                >
                  <MapPin size={16} /> {clinic.location}
                </a>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                  <div>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{t('Starting from')}</p>
                    <p style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary)' }}>฿{clinic.price.toLocaleString()}<span style={{ fontSize: '0.875rem', fontWeight: 400, color: 'var(--text-muted)' }}>/{t('day')}</span></p>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>{t('View Details')}</button>
                    <button className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>Profile</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
