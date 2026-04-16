import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    const result = login(email, password);
    if (result.success) {
      navigate('/dashboard'); // go back to dashboard
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="container" style={{ maxWidth: '400px', margin: '4rem auto' }}>
      <div className="glass" style={{ padding: '2rem', borderRadius: '1rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#0F766E' }}>เข้าสู่ระบบ (Sign In)</h2>
        
        {error && (
          <div style={{ backgroundColor: '#FEE2E2', color: '#B91C1C', padding: '0.75rem', borderRadius: '0.5rem', marginBottom: '1rem', textAlign: 'center' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>อีเมล</label>
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#F3F4F6', borderRadius: '0.5rem', padding: '0.5rem' }}>
              <Mail size={18} color="#6B7280" style={{ marginRight: '0.5rem' }} />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%' }}
                placeholder="email@example.com"
                required
              />
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>รหัสผ่าน</label>
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#F3F4F6', borderRadius: '0.5rem', padding: '0.5rem' }}>
              <Lock size={18} color="#6B7280" style={{ marginRight: '0.5rem' }} />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%' }}
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            เข้าสู่ระบบ
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '1.5rem', color: '#4B5563' }}>
          ยังไม่มีบัญชีใช่หรือไม่? <Link to="/register" style={{ color: '#0D9488', fontWeight: 'bold' }}>สมัครสมาชิก</Link>
        </p>
      </div>
    </div>
  );
}
