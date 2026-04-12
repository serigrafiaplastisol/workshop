import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

export const LeadForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    knowsInstitute: null
  });
  
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const { data, error } = await supabase
        .from('leads')
        .insert([
          {
            first_name: formData.firstName,
            email: formData.email,
            phone: formData.phone,
            knows_institute: formData.knowsInstitute || 'nao_respondeu',
          }
        ]);

      if (error) throw error;
      
      setStatus('success');
      // Limpa os dados
      setFormData({ firstName: '', email: '', phone: '', knowsInstitute: null });
      
    } catch (error) {
      console.error('Erro ao salvar lead:', error);
      setStatus('error');
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '1rem 0',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    color: '#fff',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s'
  };

  if (status === 'success') {
    return (
      <div style={{ background: '#2B2F36', borderRadius: '16px', padding: '3rem 2rem', width: '100%', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', textAlign: 'center' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
        <h3 style={{ fontSize: '1.6rem', color: '#00F2FE', fontWeight: 'bold', marginBottom: '1rem' }}>
          Vaga Reservada!
        </h3>
        <p style={{ color: '#9CA3AF', lineHeight: '1.6' }}>
          Você está a um passo de transformar sua carreira. Fique de olho no seu WhatsApp e E-mail, entraremos em contato em breve com os próximos passos.
        </p>
      </div>
    );
  }

  return (
    <div style={{ background: '#2B2F36', borderRadius: '16px', padding: '2.5rem 2rem', width: '100%', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
      <h3 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: '1.6rem', color: '#00F2FE', fontWeight: 'bold' }}>
        Garantir minha vaga agora
      </h3>
      
      {status === 'error' && (
        <div style={{ padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444', color: '#ef4444', borderRadius: '8px', marginBottom: '1rem', textAlign: 'center', fontSize: '0.9rem' }}>
          Ocorreu um erro ao reservar a vaga. Tente novamente.
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div>
          <input
            type="text"
            placeholder="Seu primeiro nome"
            style={inputStyle}
            value={formData.firstName}
            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
            required
            onFocus={(e) => e.target.style.borderBottom = '1px solid #00F2FE'}
            onBlur={(e) => e.target.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)'}
            disabled={status === 'loading'}
          />
        </div>
        
        <div>
          <input
            type="email"
            placeholder="Seu e-mail principal"
            style={inputStyle}
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
            onFocus={(e) => e.target.style.borderBottom = '1px solid #00F2FE'}
            onBlur={(e) => e.target.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)'}
            disabled={status === 'loading'}
          />
        </div>
        
        <div>
          <input
            type="tel"
            placeholder="Seu WhatsApp (com DDD)"
            style={inputStyle}
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            required
            onFocus={(e) => e.target.style.borderBottom = '1px solid #00F2FE'}
            onBlur={(e) => e.target.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)'}
            disabled={status === 'loading'}
          />
        </div>

        <div style={{ marginTop: '1rem' }}>
          <p style={{ marginBottom: '1rem', fontSize: '0.9rem', color: '#9CA3AF', textAlign: 'center' }}>
            Você já conhece o Instituto Profissional Criativo?
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button
              type="button"
              onClick={() => setFormData({...formData, knowsInstitute: 'sim'})}
              disabled={status === 'loading'}
              style={{
                flex: 1,
                maxWidth: '100px',
                padding: '0.6rem',
                background: 'transparent',
                border: 'none',
                color: formData.knowsInstitute === 'sim' ? '#fff' : '#9CA3AF',
                fontWeight: formData.knowsInstitute === 'sim' ? 'bold' : 'normal',
                cursor: status === 'loading' ? 'default' : 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Sim
            </button>
            <button
              type="button"
              onClick={() => setFormData({...formData, knowsInstitute: 'nao'})}
              disabled={status === 'loading'}
              style={{
                flex: 1,
                maxWidth: '100px',
                padding: '0.6rem',
                background: 'transparent',
                border: 'none',
                color: formData.knowsInstitute === 'nao' ? '#fff' : '#9CA3AF',
                fontWeight: formData.knowsInstitute === 'nao' ? 'bold' : 'normal',
                cursor: status === 'loading' ? 'default' : 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Não
            </button>
          </div>
        </div>

        <button type="submit" disabled={status === 'loading'} style={{ 
          marginTop: '1rem', 
          background: '#00E5FF', 
          color: '#111827', 
          padding: '1.2rem', 
          borderRadius: '8px', 
          border: 'none', 
          fontSize: '1rem', 
          fontWeight: 'bold', 
          cursor: status === 'loading' ? 'wait' : 'pointer',
          transition: 'background-color 0.3s',
          opacity: status === 'loading' ? 0.7 : 1
        }}
        onMouseOver={(e) => !status && (e.target.style.background = '#00C2D6')}
        onMouseOut={(e) => !status && (e.target.style.background = '#00E5FF')}
        >
          {status === 'loading' ? 'SALVANDO...' : 'QUERO PARTICIPAR DO WORKSHOP'}
        </button>
        
        <p style={{ textAlign: 'center', fontSize: '0.75rem', color: '#6B7280', marginTop: '0.5rem' }}>
          Seus dados estão seguros. Vagas extremamente limitadas.
        </p>
      </form>
    </div>
  );
};
