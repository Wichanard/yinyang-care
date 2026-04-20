import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Send, 
  ArrowLeft, 
  Sparkles, 
  MessageSquare, 
  Activity, 
  Clock, 
  ShieldCheck, 
  FileText, 
  ChevronRight,
  TrendingUp
} from 'lucide-react';
import BottomNav from '../components/BottomNav';

export default function ChatSupport() {
  const navigate = useNavigate();
  const [view, setView] = useState('chat'); // 'chat' or 'dashboard'
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "สวัสดีครับ ผม Senior Care AI ยินดีที่ได้พบอีกครั้งครับ วันนี้มีข้อมูลอัปเดตใหม่เกี่ยวกับคนไข้คุณ 'รัศมี กองดี' ผมได้รวบรวมข้อมูลสัญญาณชีพและบันทึกการรักษาล่าสุดไว้ที่หน้า 'Health Dashboard' เรียบร้อยแล้วครับ คุณต้องการให้ผมสรุปข้อมูลส่วนไหนให้ไหมครับ?", 
      sender: 'ai',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping, view]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { id: Date.now(), text: input, sender: 'user', time: 'Just now' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let response = "ผมกำลังรวบรวมข้อมูลโภชนาการและการกายภาพบำบัดที่เหมาะสมให้ครับ... คุณสามารถตรวจสอบค่าแนวโน้มสุขภาพได้ที่หน้า Dashboard นะครับ";
      if (input.includes('สรุป')) response = "สรุปผลวันนี้: สัญญาณชีพคงที่ ความดัน 120/80 mmHg เพิ่มความเข้มข้นการทำ Rehab ได้ครับ";
      
      setMessages(prev => [...prev, { id: Date.now()+1, text: response, sender: 'ai', time: 'Just now' }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: "'Outfit', sans-serif" }}>
      {/* Dynamic Header */}
      <header style={{ 
        padding: '15px 20px', 
        display: 'flex', 
        alignItems: 'center', 
        gap: '15px',
        borderBottom: '1px solid #f1f5f9',
        background: 'white',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div onClick={() => navigate(-1)} style={{ cursor: 'pointer', padding: '8px', color: '#64748b' }}>
          <ArrowLeft size={22} />
        </div>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, #4285f4, #9b72cb)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Sparkles size={18} color="white" />
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: '1rem' }}>Senior Care AI Assistant</div>
            <div style={{ fontSize: '0.7rem', color: '#22c55e' }}>Clinical Professional Mode</div>
          </div>
        </div>
      </header>

      {/* View Switcher Tabs */}
      <div style={{ display: 'flex', borderBottom: '1px solid #f1f5f9' }}>
        <button 
          onClick={() => setView('chat')}
          style={{ flex: 1, padding: '12px', border: 'none', background: 'none', borderBottom: view === 'chat' ? '3px solid #4285f4' : 'none', color: view === 'chat' ? '#4285f4' : '#64748b', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer' }}
        >
          <MessageSquare size={16} style={{ marginBottom: '-3px', marginRight: '5px' }} /> Chat
        </button>
        <button 
          onClick={() => setView('dashboard')}
          style={{ flex: 1, padding: '12px', border: 'none', background: 'none', borderBottom: view === 'dashboard' ? '3px solid #4285f4' : 'none', color: view === 'dashboard' ? '#4285f4' : '#64748b', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer' }}
        >
          <Activity size={16} style={{ marginBottom: '-3px', marginRight: '5px' }} /> Health Dashboard
        </button>
      </div>

      {view === 'chat' ? (
        <>
          {/* Chat Area */}
          <div ref={scrollRef} style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {messages.map(msg => (
              <div key={msg.id} style={{ display: 'flex', flexDirection: msg.sender === 'user' ? 'row-reverse' : 'row', gap: '12px', alignItems: 'flex-start' }}>
                {msg.sender === 'ai' ? <Sparkles size={20} color="#4285f4" style={{ marginTop: '5px' }} /> : <div style={{ width: '28px', height: '28px', background: '#f1f5f9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '5px' }}><MessageSquare size={12} color="#64748b" /></div>}
                <div style={{ maxWidth: '85%', fontSize: '0.95rem', lineHeight: 1.6, color: '#1e293b' }}>{msg.text}</div>
              </div>
            ))}
            {isTyping && <div style={{ color: '#94a3b8', fontSize: '0.8rem' }} className="animate-pulse">AI กำลังประมวลผลข้อมูลการรักษา...</div>}
          </div>

          {/* Input Bar */}
          <div style={{ padding: '20px', borderTop: '1px solid #f1f5f9' }}>
            <div style={{ display: 'flex', background: '#f0f4f9', borderRadius: '30px', padding: '5px 20px', alignItems: 'center' }}>
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="สอบถามข้อมูลสุขภาพเพิ่มเติม..."
                style={{ flex: 1, background: 'transparent', border: 'none', padding: '12px', outline: 'none' }}
              />
              <Send size={20} color={input? '#4285f4':'#cbd5e1'} onClick={handleSend} style={{ cursor: 'pointer' }} />
            </div>
          </div>
        </>
      ) : (
        /* AI Medical Dashboard View */
        <div style={{ flex: 1, padding: '25px', overflowY: 'auto', background: '#f8fafc' }}>
          <div style={{ display: 'grid', gap: '15px' }}>
            {/* Quick Stats Card */}
            <div style={{ background: 'white', padding: '20px', borderRadius: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
              <h4 style={{ margin: '0 0 15px 0', color: '#1e293b' }}>สถิติคนไข้ล่าสุด (รัศมี กองดี)</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div style={{ background: '#f0fdf4', padding: '15px', borderRadius: '15px' }}>
                  <TrendingUp size={20} color="#22c55e" style={{ marginBottom: '5px' }} />
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Rehab Progress</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#166534' }}>+12%</div>
                </div>
                <div style={{ background: '#eff6ff', padding: '15px', borderRadius: '15px' }}>
                  <Activity size={20} color="#3b82f6" style={{ marginBottom: '5px' }} />
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Vital Stability</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1d4ed8' }}>Normal</div>
                </div>
              </div>
            </div>

            {/* AI Diagnosis Insights */}
            <div style={{ background: 'linear-gradient(135deg, #4285f4, #9b72cb)', padding: '20px', borderRadius: '20px', color: 'white' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <Sparkles size={20} />
                <span style={{ fontWeight: 600 }}>AI Strategic Recommendation</span>
              </div>
              <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.6, opacity: 0.9 }}>
                "คนไข้มีการตอบสนองต่อการนวดกระตุ้นกล้ามเนื้อได้ดีมาก แนะนำให้เพิ่มช่วงเวลาเดินในราวน้ำ (Hydrotherapy) 20 นาทีต่อวัน เพื่อลดแรงกดที่ข้อเข่าครับ"
              </p>
            </div>

            {/* Recent Medical Files */}
            <div style={{ background: 'white', padding: '20px', borderRadius: '20px' }}>
              <h4 style={{ margin: '0 0 15px 0', color: '#1e293b' }}>บันทึกทางการแพทย์ย้อนหลัง</h4>
              {[1, 2].map(i => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 0', borderBottom: i===1 ? '1px solid #f1f5f9' : 'none' }}>
                  <div style={{ width: '40px', height: '40px', background: '#f8fafc', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <FileText size={20} color="#64748b" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>บันทึกอาการรายสัปดาห์ (W{i})</div>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>20 เม.ย. 2024 / โดย AI Analysis</div>
                  </div>
                  <ChevronRight size={18} color="#cbd5e1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <BottomNav />
      <style>{`
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }
      `}</style>
    </div>
  );
}
