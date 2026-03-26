import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, Mail, Lock, ArrowRight } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import '../App.css';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setIsLoading(true);
      await login(email, password);
      // Login successful, navigate to dashboard
      navigate('/dashboard'); 
    } catch (err) {
      console.error(err);
      setError('Failed to log in. ' + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'var(--bg-dark)', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Background Blobs */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '20%',
        width: '400px',
        height: '400px',
        background: 'rgba(168, 85, 247, 0.2)',
        filter: 'blur(120px)',
        opacity: 0.2,
        zIndex: 0,
        borderRadius: '50%'
      }} />

      <div className="glass-panel" style={{ 
        width: '100%', 
        maxWidth: '450px', 
        padding: '3rem', 
        borderRadius: '24px', 
        background: 'rgba(20, 20, 30, 0.6)',
        backdropFilter: 'blur(20px)',
        border: '1px solid var(--panel-border)',
        boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
        zIndex: 1,
        animation: 'fadeIn 0.5s ease-out'
      }}>
        
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ 
            display: 'inline-flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            background: 'var(--accent-gradient)',
            padding: '12px',
            borderRadius: '16px',
            marginBottom: '1.5rem',
            boxShadow: '0 0 20px var(--accent-glow)'
          }}>
            <Activity size={32} color="#fff" />
          </div>
          <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Welcome Back</h1>
          <p style={{ color: 'var(--text-muted)' }}>Login to continue to Daily Loop</p>
        </div>

        {error && (
          <div style={{ 
            background: 'var(--badge-deadline-bg)', 
            border: '1px solid var(--badge-deadline-border)', 
            color: '#ef4444', 
            padding: '0.75rem', 
            borderRadius: '8px', 
            marginBottom: '1rem', 
            fontSize: '0.9rem',
            textAlign: 'center'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          <div className="input-group">
            <label style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Email Address</label>
            <div style={{ position: 'relative' }}>
              <Mail size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input 
                type="email" 
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '1rem 1rem 1rem 3rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--panel-border)',
                  borderRadius: '12px',
                  color: 'var(--text-main)',
                  outline: 'none',
                  fontSize: '1rem',
                  transition: 'border-color 0.3s'
                }}
                onFocus={(e) => e.target.style.borderColor = '#a855f7'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
              />
            </div>
          </div>

          <div className="input-group">
            <label style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Password</label>
            <div style={{ position: 'relative' }}>
              <Lock size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input 
                type="password" 
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '1rem 1rem 1rem 3rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--panel-border)',
                  borderRadius: '12px',
                  color: 'var(--text-main)',
                  outline: 'none',
                  fontSize: '1rem',
                  transition: 'border-color 0.3s'
                }}
                onFocus={(e) => e.target.style.borderColor = '#a855f7'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            style={{
              marginTop: '1rem',
              background: 'var(--accent-gradient)',
              color: '#fff',
              border: 'none',
              padding: '1rem',
              borderRadius: '12px',
              fontSize: '1.1rem',
              fontWeight: 600,
              cursor: isLoading ? 'not-allowed' : 'pointer',
              opacity: isLoading ? 0.7 : 1,
              transition: 'transform 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}
            onMouseOver={(e) => !isLoading && (e.target.style.transform = 'scale(1.02)')}
            onMouseOut={(e) => !isLoading && (e.target.style.transform = 'scale(1)')}
          >
            {isLoading ? 'Logging In...' : 'Sign In'} 
            {!isLoading && <ArrowRight size={20} />}
          </button>
        </form>

        <div style={{ marginTop: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
          Don't have an account?{' '}
          <span 
            onClick={() => navigate('/register')}
            style={{ 
              color: '#38bdf8', 
              cursor: 'pointer', 
              fontWeight: 500,
              textDecoration: 'underline',
              textUnderlineOffset: '4px'
            }}
          >
            Create Account
          </span>
        </div>
      </div>
    </div>
  );
}
