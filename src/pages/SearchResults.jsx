import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Filter, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { clinics } from '../data/clinics';

export default function SearchResults() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  // 1. Setup states for filtering
  const [maxPrice, setMaxPrice] = useState(7000);
  const [selectedTypes, setSelectedTypes] = useState([
    t('Nursing Home'), 
    t('Home Care'), 
    t('Physical Therapy')
  ]);

  // 2. Filter logic using useMemo for performance
  const filteredClinics = useMemo(() => {
    return clinics.filter(clinic => {
      const matchesPrice = clinic.price <= maxPrice;
      // Map internal clinic type to translated UI labels
      const clinicTypeLabel = t(clinic.type);
      const matchesType = selectedTypes.includes(clinicTypeLabel);
      return matchesPrice && matchesType;
    });
  }, [maxPrice, selectedTypes, t]);

  const handleTypeChange = (type) => {
    setSelectedTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type) 
        : [...prev, type]
    );
  };

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
            <input 
              type="range" 
              min="500" 
              max="7000" 
              value={maxPrice} 
              onChange={(e) => setMaxPrice(parseInt(e.target.value))}
              style={{ width: '100%', cursor: 'pointer' }} 
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              <span>฿500</span>
              <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>฿{maxPrice.toLocaleString()}</span>
              <span>฿7,000+</span>
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ marginBottom: '0.75rem', fontWeight: 600 }}>{t('Service Type')}</h4>
            {[t('Nursing Home'), t('Home Care'), t('Physical Therapy')].map(type => (
              <label key={type} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', cursor: 'pointer' }}>
                <input 
                  type="checkbox" 
                  checked={selectedTypes.includes(type)}
                  onChange={() => handleTypeChange(type)}
                  style={{ width: '18px', height: '18px' }}
                /> 
                <span style={{ fontSize: '1rem' }}>{type}</span>
              </label>
            ))}
          </div>
        </div>
      </aside>

      {/* Results List */}
      <main style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 className="outfit-font" style={{ fontSize: '1.5rem' }}>{filteredClinics.length} {t('Providers found')}</h2>
          <select className="input-field" style={{ padding: '0.5rem 1rem' }}>
            <option>{t('Sort by')}: {t('Recommended')}</option>
            <option>Price: Low to High</option>
            <option>Rating: High to Low</option>
          </select>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {filteredClinics.length > 0 ? (
            filteredClinics.map(clinic => (
              <div 
                key={clinic.id} 
                className="card" 
                onClick={() => navigate('/clinic-profile')}
                style={{ 
                  display: 'flex', 
                  overflow: 'hidden', 
                  animation: 'scaleUp 0.3s ease-out',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <img src={clinic.image} alt={clinic.name} style={{ width: '250px', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <h3 className="outfit-font" style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.25rem' }}>{clinic.name}</h3>
                      {/* Note: Map links continue to work because we can use e.stopPropagation() if needed, 
                          but typically users expect map links to override internal navigation */}
                      <a 
                        href={clinic.mapUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '1rem', textDecoration: 'none' }}
                      >
                        <MapPin size={16} /> {clinic.location} ({clinic.distance})
                      </a>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', background: '#fef3c7', color: '#d97706', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', fontWeight: 600 }}>
                      <Star size={16} fill="currentColor" /> {clinic.rating}
                    </div>
                  </div>
                  
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.5rem', flex: 1 }}>
                    {clinic.description}
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                    <div>
                      <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>฿{clinic.price.toLocaleString()}</span>
                      <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>/{t('day')}</span>
                    </div>
                    <button className="btn btn-primary">{t('View Details')}</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem', background: 'var(--bg-card)', borderRadius: '1rem' }}>
              <h3 style={{ color: 'var(--text-muted)' }}>ไม่พบคลินิกที่ตรงตามเงื่อนไข ลองปรับตัวกรองดูนะครับ</h3>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
