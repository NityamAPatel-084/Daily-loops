import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Activity, 
  Trophy, 
  BookOpen, 
  Calendar, 
  ArrowRight, 
  Layout
} from 'lucide-react';
import '../App.css'; 

export default function Landing() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Trophy size={32} color="#10b981" />,
      bg: 'rgba(16, 185, 129, 0.1)',
      title: "Hackathon Tracking",
      desc: "Never miss a deadline. Track registration dates, team formations, and submission deadlines for all your hackathons."
    },
    {
      icon: <BookOpen size={32} color="#38bdf8" />,
      bg: 'rgba(56, 189, 248, 0.1)',
      title: "Course Progress",
      desc: "Visualize your learning journey. Keep detailed logs of your SAP and programming courses with progress bars."
    },
    {
      icon: <Calendar size={32} color="#a855f7" />,
      bg: 'rgba(168, 85, 247, 0.1)',
      title: "Smart Calendar",
      desc: "Sync your life. An integrated calendar view that combines your deadlines, exams, and project milestones."
    }
  ];

  return (
    <div className="landing-container" style={{ 
      minHeight: '100vh', 
      background: 'var(--bg-dark)', 
      color: 'var(--text-main)', 
      fontFamily: '"Outfit", sans-serif',
      overflowX: 'hidden'
    }}>
      
      {/* --- Header --- */}
      <header style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        padding: '1.5rem 4rem', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--panel-border)',
        background: 'rgba(9, 9, 11, 0.6)',
        zIndex: 100
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }} onClick={() => navigate('/')}>
          <div style={{ 
            background: 'var(--accent-gradient)', 
            padding: '8px', 
            borderRadius: '12px',
            boxShadow: '0 0 20px var(--accent-glow)'
          }}>
            <Activity size={24} color="#fff" />
          </div>
          <h1 style={{ 
            fontSize: '1.5rem', 
            margin: 0, 
            background: 'var(--accent-gradient)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent',
            fontWeight: 700 
          }}>Daily Loop</h1>
        </div>
        
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <button 
            onClick={() => navigate('/login')}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-muted)',
              fontSize: '1rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'color 0.3s'
            }}
            onMouseOver={(e) => e.target.style.color = 'var(--text-main)'}
            onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}
          >
            Login
          </button>
          
          <button 
            onClick={() => navigate('/register')}
            style={{
              background: 'var(--text-main)',
              color: 'var(--bg-dark)',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 4px 15px rgba(255, 255, 255, 0.1)'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(255, 255, 255, 0.2)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(255, 255, 255, 0.1)';
            }}
          >
            Get Started Free
          </button>
        </div>
      </header>

      {/* --- Hero Section --- */}
      <section style={{ 
        padding: '10rem 2rem 6rem', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        textAlign: 'center',
        background: 'var(--bg-radial)',
        position: 'relative'
      }}>
        {/* Abstract Background Elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '300px',
          height: '300px',
          background: 'var(--accent-glow)',
          filter: 'blur(100px)',
          opacity: 0.3,
          borderRadius: '50%',
          zIndex: 0
        }} />
        
        <div style={{ zIndex: 1, maxWidth: '800px' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            background: 'var(--hover-bg)', 
            border: '1px solid var(--panel-border)', 
            padding: '0.5rem 1rem', 
            borderRadius: '50px', 
            marginBottom: '2rem',
            fontSize: '0.9rem',
            color: 'var(--text-muted)'
          }}>
            <span style={{ 
              width: '8px', 
              height: '8px', 
              background: '#10b981', 
              borderRadius: '50%', 
              display: 'inline-block' 
            }} />
            v1.0 Now Live for Public Beta
          </div>

          <h1 style={{ 
            fontSize: '4rem', 
            lineHeight: 1.1, 
            marginBottom: '1.5rem', 
            fontWeight: 800 
          }}>
            Organize Your <br />
            <span style={{ 
              background: 'var(--accent-gradient)', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent' 
            }}>Digital Growth</span>
          </h1>
          
          <p style={{ 
            fontSize: '1.25rem', 
            color: 'var(--text-muted)', 
            marginBottom: '3rem', 
            lineHeight: 1.6 
          }}>
            Your daily companion for managing projects, courses, and hackathons. 
            Designed for high-performance students and developers.
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <button 
              onClick={() => navigate('/register')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'var(--accent-gradient)',
                color: '#fff',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '12px',
                fontSize: '1.1rem',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 4px 20px var(--accent-glow)',
                transition: 'transform 0.2s'
              }}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            >
              Start for Free <ArrowRight size={20} />
            </button>
            
            <button 
              onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                color: 'var(--text-main)',
                border: '1px solid var(--panel-border)',
                padding: '1rem 2rem',
                borderRadius: '12px',
                fontSize: '1.1rem',
                fontWeight: 500,
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                transition: 'background 0.3s'
              }}
              onMouseOver={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
              onMouseOut={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.05)'}
            >
              Explore Features
            </button>
          </div>
        </div>

        {/* Dashboard Preview (Mockup) */}
        <div style={{ 
          marginTop: '6rem', 
          width: '90%', 
          maxWidth: '1200px', 
          aspectRatio: '16/9', 
          background: 'rgba(20, 20, 30, 0.8)', 
          borderRadius: '24px', 
          border: '1px solid var(--panel-border)', 
          boxShadow: '0 0 100px -20px var(--accent-glow)',
          backdropFilter: 'blur(10px)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2
        }}>
          <div style={{ textAlign: 'center' }}>
            <Layout size={64} style={{ opacity: 0.5, marginBottom: '1rem' }} />
            <h3 style={{ color: 'var(--text-muted)' }}>Interactive Dashboard Preview</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Mockup of the main interface</p>
          </div>
          
          {/* Decorative code/ui lines */}
          <div style={{ position: 'absolute', top: '20px', left: '250px', right: '20px', height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}></div>
          <div style={{ position: 'absolute', top: '20px', left: '20px', width: '200px', bottom: '20px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}></div>
          <div style={{ position: 'absolute', top: '80px', left: '250px', width: '30%', height: '200px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '16px', border: '1px solid rgba(16, 185, 129, 0.2)' }}></div>
          <div style={{ position: 'absolute', top: '80px', right: '20px', width: '40%', height: '300px', background: 'rgba(14, 165, 233, 0.1)', borderRadius: '16px', border: '1px solid rgba(14, 165, 233, 0.2)' }}></div>
        </div>
      </section>

      {/* --- Features Section --- */}
      <section id="features" style={{ padding: '6rem 4rem', background: 'var(--bg-dark)' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Built for Achievers</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Everything you need to stay on top of your goals.</p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem', 
          maxWidth: '1200px', 
          margin: '0 auto' 
        }}>
          {features.map((feature, idx) => (
            <div key={idx} style={{ 
              padding: '2rem', 
              background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)', 
              border: '1px solid var(--panel-border)', 
              borderRadius: '20px',
              transition: 'transform 0.3s',
              cursor: 'default'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ 
                width: '60px', 
                height: '60px', 
                background: feature.bg, 
                borderRadius: '16px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{feature.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section style={{ 
        padding: '6rem 2rem', 
        textAlign: 'center', 
        background: 'linear-gradient(180deg, var(--bg-dark) 0%, rgba(30, 27, 75, 0.3) 100%)',
        borderTop: '1px solid var(--panel-border)'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem' }}>
            Ready to Boost Your <br />
            <span style={{ color: '#a855f7' }}>Productivity?</span>
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '3rem' }}>
            Join hundreds of students and developers who are already organizing their life with Daily Loop.
          </p>
          <button 
            onClick={() => navigate('/register')}
            style={{
              background: '#fff',
              color: '#000',
              border: 'none',
              padding: '1.25rem 3rem',
              borderRadius: '50px',
              fontSize: '1.2rem',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 4px 25px rgba(255, 255, 255, 0.3)',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            Get Started Now
          </button>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer style={{ 
        padding: '3rem 4rem', 
        borderTop: '1px solid var(--panel-border)', 
        background: '#050507',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '2rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Activity size={24} style={{ color: 'var(--text-muted)' }} />
          <span style={{ fontWeight: 600, color: 'var(--text-muted)' }}>Daily Loop</span>
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <span style={{ color: 'var(--text-muted)', cursor: 'pointer' }}>Privacy</span>
          <span style={{ color: 'var(--text-muted)', cursor: 'pointer' }}>Terms</span>
          <span style={{ color: 'var(--text-muted)', cursor: 'pointer' }}>Twitter</span>
          <span style={{ color: 'var(--text-muted)', cursor: 'pointer' }}>GitHub</span>
        </div>
        <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          © 2026 Daily Loop Inc.
        </div>
      </footer>
    </div>
  );
}
