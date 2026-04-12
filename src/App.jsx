import React from 'react';
import { AnimatedSection, TypewriterText } from './components/AnimatedSection';
import { LeadForm } from './components/LeadForm';
import { Droplets, Crosshair, Zap, Award } from 'lucide-react';

const PainCard = ({ text, emoji, reverse }) => (
  <div style={{ 
    display: 'flex', 
    alignItems: 'center', 
    gap: '1.2rem', 
    background: 'linear-gradient(145deg, rgba(30, 25, 20, 0.8) 0%, rgba(15, 10, 10, 0.9) 100%)', 
    padding: '1.2rem 1.5rem', 
    borderRadius: '12px', 
    border: '1px solid rgba(255,100,50,0.1)',
    flexDirection: reverse ? 'row-reverse' : 'row',
    textAlign: reverse ? 'right' : 'left',
    width: '100%',
    maxWidth: '350px',
    boxShadow: '0 8px 25px rgba(0,0,0,0.6)'
  }}>
    <span style={{ fontSize: '2.5rem', filter: 'drop-shadow(0 0 15px rgba(255,150,0,0.4))' }}>{emoji}</span>
    <p style={{ color: '#d1d5db', fontSize: '0.95rem', lineHeight: '1.5', margin: 0, fontWeight: '500' }}>{text}</p>
  </div>
);

function App() {
  return (
    <>
      {/* Background Shapes */}
      <div className="shape-1"></div>
      <div className="shape-2"></div>

      <section className="hero">
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '2rem' }}>
          
          <AnimatedSection direction="right" className="hero-content" style={{ flex: '1 1 55%', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            
            <div className="hero-text" style={{ width: '100%' }}>
              <div style={{ display: 'inline-block', padding: '0.3rem 0.8rem', border: '1px solid #4ADE80', borderRadius: '20px', color: '#4ADE80', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '1rem', letterSpacing: '1px', textTransform: 'uppercase', boxShadow: '0 0 10px rgba(74, 222, 128, 0.4), inset 0 0 5px rgba(74, 222, 128, 0.2)', textShadow: '0 0 8px rgba(74, 222, 128, 0.5)' }}>
                WORKSHOP EXCLUSIVO
              </div>
              
              <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 3.8rem)', marginBottom: '0.5rem', lineHeight: '1.1', fontWeight: '800' }}>
                Técnica do Plastisol
              </h1>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)', marginBottom: '1rem', color: '#fff', fontWeight: 'bold', lineHeight: '1.2' }}>
                O método Profissional da Serigrafia.
              </h2>
              
              <p style={{ fontSize: '1.1rem', color: '#e2e8f0', marginBottom: '1.5rem', lineHeight: '1.6', maxWidth: '600px' }}>
                Domine as técnicas avançadas de impressão, alcance resultados impecáveis e eleve o nível das suas produções!
              </p>
            </div>
            
            <div style={{ width: '100%', maxWidth: '600px', borderRadius: '32px', overflow: 'hidden', border: '3px solid #4ADE80', boxShadow: '0 0 25px rgba(74, 222, 128, 0.6), 0 0 50px rgba(74, 222, 128, 0.2)' }}>
              <img src="/hero.png" alt="Workshop Técnica do Plastisol" style={{ width: '100%', display: 'block', objectFit: 'cover', transform: 'scale(1.04)' }} />
            </div>

          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.3} className="hero-form" style={{ flex: '0 1 400px', marginLeft: 'auto', width: '100%' }}>
            <LeadForm />
          </AnimatedSection>

        </div>
      </section>

      {/* Problem Section */}
      <section className="section" style={{ background: '#090a0f', padding: '5rem 0' }}>
        <div className="container">
          <AnimatedSection direction="up" style={{ textAlign: 'center', marginBottom: '2rem', display: 'flex', justifyContent: 'center', width: '100%' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)', color: '#f8f9fa', fontWeight: '500', lineHeight: '1.4', margin: '0', textAlign: 'center' }}>
              O problema <span style={{ color: '#eb5757', fontWeight: '600' }}>não é</span> falta de esforço... <strong style={{ color: '#ffffff', fontWeight: '800', fontSize: '1.1em' }}>É falta de direção.</strong>
            </h2>
          </AnimatedSection>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem', alignItems: 'center', marginTop: '6rem' }}>
            
            {/* Left Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', flex: '1 1 0', minWidth: 'min(100%, 300px)', alignItems: 'center' }}>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                <AnimatedSection direction="right" delay={0.1}><PainCard emoji="😞" text="Trabalhar demais." reverse={true} /></AnimatedSection>
              </div>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                <AnimatedSection direction="right" delay={0.2}><PainCard emoji="😞" text="Ter medo de perder o cliente para alguém que cobre mais barato." reverse={true} /></AnimatedSection>
              </div>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                <AnimatedSection direction="right" delay={0.3}><PainCard emoji="😞" text="Vê a concorrência crescer e eu não." reverse={true} /></AnimatedSection>
              </div>
            </div>

            {/* Center Image */}
            <AnimatedSection direction="up" delay={0.4} style={{ flex: '0 0 350px', display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: '350px', height: '350px', borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(255, 60, 0, 0.4)', boxShadow: '0 0 40px rgba(255, 60, 0, 0.2), inset 0 0 20px rgba(255, 60, 0, 0.5)' }}>
                <img src="/frustrated.png" alt="Profissional frustrada" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </AnimatedSection>

            {/* Right Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', flex: '1 1 0', minWidth: 'min(100%, 300px)', alignItems: 'center' }}>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
                <AnimatedSection direction="left" delay={0.1}><PainCard emoji="😞" text="Não provar impacto no faturamento." /></AnimatedSection>
              </div>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
                <AnimatedSection direction="left" delay={0.2}><PainCard emoji="😞" text="Cobrar pouco." /></AnimatedSection>
              </div>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
                <AnimatedSection direction="left" delay={0.3}><PainCard emoji="😞" text="Precisar de vários clientes para sobreviver." /></AnimatedSection>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="section" style={{ background: 'rgba(10, 12, 18, 0.7)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <AnimatedSection direction="up" style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>O que você vai <span className="text-gradient">aprender?</span></h2>
            <p style={{ color: 'var(--color-text-muted)', marginTop: '1rem', maxWidth: '600px', margin: '1rem auto 0' }}>
              Um conteúdo 100% focado na prática, desmistificando os segredos das grandes estamparias.
            </p>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <AnimatedSection direction="up" delay={0.1}>
              <div className="glass-card neon-border" style={{ height: '100%' }}>
                <Crosshair color="var(--color-turquoise)" size={40} style={{ marginBottom: '1.5rem' }} />
                <h3 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>Preparação Perfeita</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>Aprenda desde a emulsão ao ajuste das telas para garantir um encaixe milimétrico em qualquer estampa.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <div className="glass-card neon-border" style={{ height: '100%' }}>
                <Droplets color="var(--color-neon-green)" size={40} style={{ marginBottom: '1.5rem' }} />
                <h3 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>Manipulação de Tintas</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>Técnicas de diluição, pigmentação e uso de bases especiais para efeitos diferenciados com Plastisol.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <div className="glass-card neon-border" style={{ height: '100%' }}>
                <Award color="var(--color-turquoise)" size={40} style={{ marginBottom: '1.5rem' }} />
                <h3 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>Cura e Acabamento</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>O segredo final para garantir durabilidade extrema e aspecto super premium nas suas peças.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="section" style={{ background: '#090a0f', paddingBottom: '2rem' }}>
        <div className="container">
          <AnimatedSection direction="up" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Quem são seus <span className="text-gradient">Mentores?</span></h2>
            <p style={{ color: 'var(--color-text-muted)', marginTop: '1rem', maxWidth: '800px', margin: '1rem auto 0', fontSize: '1.2rem', lineHeight: '1.6' }}>
              Você não vai aprender com curiosos… vai aprender com quem vive a prática todos os dias.
            </p>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '1.5rem' }}>
            <AnimatedSection direction="right" delay={0.1}>
              <div className="glass-card" style={{ height: '100%', borderTop: '4px solid var(--color-neon-green)', background: 'linear-gradient(180deg, rgba(57, 255, 20, 0.05) 0%, rgba(22, 26, 37, 0.4) 100%)' }}>
                <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden', marginBottom: '1.5rem', border: '1px solid rgba(57, 255, 20, 0.2)', boxShadow: '0 4px 15px rgba(0,0,0,0.5)' }}>
                  <img src="/sabino_1.jpg" alt="Antônio Sabino" style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
                </div>
                <h3 style={{ marginBottom: '1.5rem', fontSize: '1.6rem', color: 'var(--color-text-main)' }}>Antônio Sabino</h3>
                <p style={{ color: '#cbd5e1', lineHeight: '1.7', fontSize: '1.05rem' }}>
                  É profissional de serigrafia há <strong>mais de 15 anos</strong>, com uma trajetória sólida dentro do mercado. Já atuou como serígrafo na empresa BlueShark, onde desenvolveu experiência em produção com padrão industrial e alta demanda. Hoje, é empresário no segmento de serigrafia terceirizada, atendendo grandes marcas e entregando qualidade em escala — dominando na prática aquilo que muitos ainda tentam aprender.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.2}>
              <div className="glass-card" style={{ height: '100%', borderTop: '4px solid var(--color-turquoise)', background: 'linear-gradient(180deg, rgba(0, 242, 254, 0.05) 0%, rgba(22, 26, 37, 0.4) 100%)' }}>
                <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden', marginBottom: '1.5rem', border: '1px solid rgba(0, 242, 254, 0.2)', boxShadow: '0 4px 15px rgba(0,0,0,0.5)' }}>
                  <img src="/delson_1.jpg" alt="Delson Sabino" style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
                </div>
                <h3 style={{ marginBottom: '1.5rem', fontSize: '1.6rem', color: 'var(--color-text-main)' }}>Delson Sabino</h3>
                <p style={{ color: '#cbd5e1', lineHeight: '1.7', fontSize: '1.05rem' }}>
                  Traz uma visão estratégica e completa do setor têxtil. Foram <strong>10 anos atuando diretamente na fabricação de uniformes personalizados</strong>, utilizando técnicas como serigrafia e sublimação no dia a dia da produção. Hoje, é CEO da Delson Bordado, uma fábrica especializada em prestação de serviços de bordado profissional, e também fundador do Instituto Profissional Criativo — uma escola voltada à formação de jovens e adultos para o mercado têxtil, gráfico e criativo.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection direction="up" delay={0.3} style={{ textAlign: 'center' }}>
            <div style={{ padding: '2.5rem 0' }}>
              <p style={{ color: '#fff', fontSize: '1.2rem', lineHeight: '1.6', maxWidth: '900px', margin: '0 auto' }}>
                Juntos, eles unem <strong style={{ color: 'var(--color-turquoise)' }}>experiência prática + visão de mercado</strong>, formando uma base sólida para quem quer não apenas aprender serigrafia, mas transformar essa habilidade em uma fonte real de renda.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <AnimatedSection direction="up">
            <div className="glass-card neon-border" style={{ textAlign: 'center', padding: '4rem 2rem', background: 'linear-gradient(135deg, rgba(22, 26, 37, 0.8) 0%, rgba(0, 242, 254, 0.1) 100%)' }}>
              <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Pronto para evoluir sua <br/><span className="text-gradient">técnica?</span></h2>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '3rem', fontSize: '1.2rem' }}>
                As vagas para o workshop são rigorosamente preenchidas por ordem de inscrição.
              </p>
              <button 
                className="btn-primary" 
                style={{ fontSize: '1.2rem', padding: '1.2rem 3rem' }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                QUERO ME INSCREVER AGORA
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Footer */}
      <footer style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Instituto Profissional Criativo. Todos os direitos reservados.
        </p>
      </footer>
    </>
  );
}

export default App;
