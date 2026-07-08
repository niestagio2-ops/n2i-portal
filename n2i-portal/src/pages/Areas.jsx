// ─── PÁGINA ÁREAS E APOIOS ────────────────────────────────

const IconSaude = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
  </svg>
)

const IconTIC = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
  </svg>
)

const IconEducacao = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
)

const IconEngenharia = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93A10 10 0 0 0 4.93 19.07M19.07 19.07A10 10 0 0 0 4.93 4.93"/>
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2"/>
  </svg>
)

const IconEconomia = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
)

const IconArtes = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
  </svg>
)

const IconCandidatura = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
  </svg>
)

const IconGestao = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
  </svg>
)

const IconFormacao = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
)

const IconPublicacao = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
)

const areas = [
  { nome: 'Ciencias da Saude e Tecnologias da Saude',  icone: <IconSaude /> },
  { nome: 'Tecnologias de Informacao e Comunicacao',   icone: <IconTIC /> },
  { nome: 'Ciencias da Educacao e Formacao',           icone: <IconEducacao /> },
  { nome: 'Engenharia e Gestao Industrial',            icone: <IconEngenharia /> },
  { nome: 'Economia, Gestao e Turismo',                icone: <IconEconomia /> },
  { nome: 'Artes, Design e Multimedia',                icone: <IconArtes /> },
]

const apoios = [
  { titulo: 'Apoio a Candidatura',   desc: 'Assistencia na elaboracao de candidaturas a financiamento nacional e europeu.',                  icone: <IconCandidatura /> },
  { titulo: 'Gestao de Projetos',    desc: 'Acompanhamento administrativo e financeiro de projetos de investigacao em curso.',               icone: <IconGestao /> },
  { titulo: 'Formacao e Workshops',  desc: 'Organizacao de acoes de formacao em metodologias de investigacao e escrita cientifica.',         icone: <IconFormacao /> },
  { titulo: 'Publicacao Cientifica', desc: 'Apoio na submissao e publicacao em revistas indexadas e conferencias internacionais.',           icone: <IconPublicacao /> },
]

function Areas() {
  return (
    <div>
      <h1 style={styles.titulo}>Areas e Apoios</h1>
      <p style={styles.sub}>Areas cientificas do N2i e apoios disponiveis para investigadores.</p>

      <h2 style={styles.secTitulo}>Areas Cientificas</h2>
      <div style={styles.areasGrid}>
        {areas.map((a) => (
          <div key={a.nome} style={styles.areaCard}>
            <div style={styles.areaIcone}>{a.icone}</div>
            <span style={styles.areaLabel}>{a.nome}</span>
          </div>
        ))}
      </div>

      <h2 style={{ ...styles.secTitulo, marginTop: 36 }}>Apoios Disponiveis</h2>
      <div style={styles.apoiosGrid}>
        {apoios.map((a) => (
          <div key={a.titulo} style={styles.apoioCard}>
            <div style={styles.apoioIcone}>{a.icone}</div>
            <h3 style={styles.apoioTitulo}>{a.titulo}</h3>
            <p style={styles.apoioDesc}>{a.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const styles = {
  titulo:     { fontSize: 22, fontWeight: 700, color: '#222', borderBottom: '3px solid #E87722', paddingBottom: 10, display: 'inline-block', marginBottom: 4 },
  sub:        { fontSize: 14, color: '#666', marginTop: 10, marginBottom: 28 },
  secTitulo:  { fontSize: 17, fontWeight: 700, color: '#222', marginBottom: 16 },
  areasGrid:  { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 },
  areaCard:   { background: '#fff', border: '1px solid #E5E5E5', borderRadius: 8, padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 14, transition: 'all .15s' },
  areaIcone:  { flexShrink: 0 },
  areaLabel:  { fontWeight: 600, fontSize: 14, color: '#222', lineHeight: 1.4 },
  apoiosGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 },
  apoioCard:  { background: '#fff', border: '1px solid #E5E5E5', borderRadius: 8, padding: '20px' },
  apoioIcone: { marginBottom: 12 },
  apoioTitulo:{ fontWeight: 700, fontSize: 15, color: '#222', marginBottom: 8 },
  apoioDesc:  { fontSize: 13, color: '#666', lineHeight: 1.6 },
}

export default Areas