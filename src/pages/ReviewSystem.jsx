import { useState, useEffect, useRef } from 'react';
import { Star, Camera, Send, ArrowLeft, User, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

export default function ReviewSystem() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [reviews, setReviews] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  // Load reviews from localStorage on mount
  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem('userReviews') || '[]');
    const initialReviews = [
      {
        id: 1,
        user: "นายแสน หัสสา",
        date: "10 เม.ย. 2024",
        rating: 5,
        text: "บริการดีมาก คุณหมอให้คำแนะนำดีมาก ใจเย็น และอธิบายทุกขั้นตอนได้อย่างชัดเจนครับ",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=400&fit=crop",
        avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=100&h=100&fit=crop"
      }
    ];
    setReviews(savedReviews.length > 0 ? [...savedReviews, ...initialReviews] : initialReviews);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (!comment.trim()) {
      alert('กรุณาบอกเล่าประสบการณ์ของคุณก่อนส่งรีวิวนะครับ');
      return;
    }

    const newReview = {
      id: Date.now(),
      user: "คุณ (ผู้ใช้งานปัจจุบัน)",
      date: new Date().toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: 'numeric' }),
      rating: rating,
      text: comment,
      image: selectedImage, // REAL base64 image data
      avatar: null 
    };

    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    
    const userOnlyReviews = [newReview, ...JSON.parse(localStorage.getItem('userReviews') || '[]')];
    localStorage.setItem('userReviews', JSON.stringify(userOnlyReviews));

    setComment('');
    setRating(5);
    setSelectedImage(null);
    alert('ขอบคุณสำหรับรีวิวของคุณครับ!');
  };

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', paddingBottom: '100px' }}>
      {/* Header */}
      <div style={{ padding: '15px 20px', background: 'white', display: 'flex', alignItems: 'center', gap: '15px', position: 'sticky', top: 0, zIndex: 10 }}>
        <ArrowLeft onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
        <h2 style={{ margin: 0, fontSize: '1.25rem' }}>รีวิวและความเห็น</h2>
      </div>

      <div className="container" style={{ padding: '2rem 1rem' }}>
        {/* Write Review Section */}
        <div className="card" style={{ padding: '1.5rem', marginBottom: '2rem', animation: 'fadeIn 0.5s ease' }}>
          <h3 className="outfit-font" style={{ marginBottom: '1rem', textAlign: 'center' }}>เขียนรีวิวของคุณ</h3>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
                key={star} 
                size={34} 
                fill={star <= rating ? "#f59e0b" : "none"} 
                color={star <= rating ? "#f59e0b" : "#cbd5e1"} 
                onClick={() => setRating(star)}
                style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
              />
            ))}
          </div>

          <textarea 
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="เล่าประสบการณ์ของคุณที่นี่..."
            style={{ width: '100%', height: '120px', padding: '1rem', borderRadius: '12px', border: '1px solid #e2e8f0', marginBottom: '1rem', outline: 'none', resize: 'none', fontSize: '1rem' }}
          />

          {/* Image Preview */}
          {selectedImage && (
            <div style={{ position: 'relative', width: '100%', height: '150px', marginBottom: '1rem', borderRadius: '12px', overflow: 'hidden' }}>
              <img src={selectedImage} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <button 
                onClick={() => setSelectedImage(null)}
                style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
              >
                <X size={18} />
              </button>
            </div>
          )}

          <div style={{ display: 'flex', gap: '1rem' }}>
            <input 
              type="file" 
              accept="image/*" 
              ref={fileInputRef} 
              onChange={handleImageChange} 
              style={{ display: 'none' }} 
            />
            <button 
              onClick={() => fileInputRef.current.click()}
              style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '12px', borderRadius: '12px', border: '1px solid #e2e8f0', background: 'white', fontWeight: 600, cursor: 'pointer' }}
            >
              <Camera size={20} /> เพิ่มรูปภาพ
            </button>
            <button 
              onClick={handleSubmit}
              style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '12px', borderRadius: '12px', border: 'none', background: 'var(--primary)', color: 'white', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 10px rgba(255,77,77,0.3)' }}
            >
              <Send size={20} /> ส่งรีวิว
            </button>
          </div>
        </div>

        {/* Reviews List */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h3 className="outfit-font">รีวิวล่าสุด ({reviews.length})</h3>
          <div style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem' }}>เรียงตาม: ล่าสุด</div>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {reviews.map((rev) => (
            <div key={rev.id} className="card" style={{ padding: '1.5rem', animation: 'scaleUp 0.3s ease' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                    {rev.avatar ? <img src={rev.avatar} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <User color="#94a3b8" size={24} />}
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 600 }}>{rev.user}</h4>
                    <small style={{ color: '#64748b' }}>{rev.date}</small>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '2px' }}>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={15} fill={s <= rev.rating ? "#f59e0b" : "none"} color={s <= rev.rating ? "#f59e0b" : "#cbd5e1"} />
                  ))}
                </div>
              </div>
              
              <p style={{ color: '#1e293b', lineHeight: 1.7, marginBottom: rev.image ? '1.2rem' : 10, fontSize: '1rem' }}>{rev.text}</p>
              
              {rev.image && (
                <div style={{ width: '100%', maxHeight: '400px', overflow: 'hidden', borderRadius: '15px' }}>
                  <img src={rev.image} alt="Review" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
