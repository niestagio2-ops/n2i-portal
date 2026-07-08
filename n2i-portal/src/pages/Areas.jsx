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
    <circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
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
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
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
const IconLinha = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E87722" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>
  </svg>
)
const IconGrupo = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E87722" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)
const IconEixo = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E87722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
)
const IconProjetoBtn = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
)

const areas = [
  { nome: 'Ciencias da Saude e Tecnologias da Saude', icone: <IconSaude /> },
  { nome: 'Tecnologias de Informacao e Comunicacao',  icone: <IconTIC /> },
  { nome: 'Ciencias da Educacao e Formacao',          icone: <IconEducacao /> },
  { nome: 'Engenharia e Gestao Industrial',           icone: <IconEngenharia /> },
  { nome: 'Economia, Gestao e Turismo',               icone: <IconEconomia /> },
  { nome: 'Artes, Design e Multimedia',               icone: <IconArtes /> },
]

const apoios = [
  { titulo: 'Apoio a Candidatura',   desc: 'Assistencia na elaboracao de candidaturas a financiamento nacional e europeu.',                icone: <IconCandidatura /> },
  { titulo: 'Gestao de Projetos',    desc: 'Acompanhamento administrativo e financeiro de projetos de investigacao em curso.',             icone: <IconGestao /> },
  { titulo: 'Formacao e Workshops',  desc: 'Organizacao de acoes de formacao em metodologias de investigacao e escrita cientifica.',       icone: <IconFormacao /> },
  { titulo: 'Publicacao Cientifica', desc: 'Apoio na submissao e publicacao em revistas indexadas e conferencias internacionais.',         icone: <IconPublicacao /> },
]

const linhas = [
  {
    nome: 'EDIT — Laboratorio de Educacao Digital, Inclusiva e Transformadora',
    url: 'https://www.ipmaia.pt/pt/investigacao/areas-e-apoios',
    eixos: [
      'Eixo 1: Educacao Digital e Tecnologias Pedagogicas',
      'Eixo 2: Inclusao, Acessibilidade e Necessidades Educativas Especiais',
      'Eixo 3: Sustentabilidade Educativa e Inovacao Social',
      'Eixo 4: Transformacao Institucional e Formacao de Professores',
    ],
  },
  {
    nome: 'ETHOS 2030 — Education, Technology, Health and Organization Studies',
    url: 'https://www.ipmaia.pt/pt/investigacao/areas-e-apoios',
    eixos: [
      'LAB-SER — Social Engagement and Resilience Lab',
      'LAB-GOV — Governance, Wellbeing and Sustainable Societies Lab',
      'LAB-TECH — Technology, Innovation and Sustainable Futures Lab',
    ],
  },
]

const grupos = [
  'GI-DronesCloudAI',
  'GI-Jogos Serios, Gamificacao, Learning Analytics e Dashboards Educativos',
  'GI-Low-Cost 3D Scanner',
]

function Areas() {
  return (
    <div>
      <h1 style={styles.titulo}>Areas e Apoios</h1>
      <p style={styles.sub}>Areas cientificas, linhas de investigacao e apoios disponiveis para investigadores do N2i.</p>

      {/* ── Áreas Científicas ── */}
      <h2 style={styles.secTitulo}>Areas Cientificas</h2>
      <div style={styles.areasGrid}>
        {areas.map((a) => (
          <div key={a.nome} style={styles.areaCard}>
            <div style={styles.areaIcone}>{a.icone}</div>
            <span style={styles.areaLabel}>{a.nome}</span>
          </div>
        ))}
      </div>

      {/* ── Linhas de Investigação ── */}
      <h2 style={{ ...styles.secTitulo, marginTop: 36 }}>
        <span style={styles.secIcon}><IconLinha /></span>
        Linhas de Investigacao
      </h2>
      <div style={styles.linhasGrid}>
        {linhas.map((l) => (
          <div key={l.nome} style={styles.linhaCard}>
            <a href={l.url} target="_blank" rel="noreferrer" style={styles.linhaNome}>{l.nome}</a>
            <div style={styles.eixosList}>
              {l.eixos.map((e) => (
                <div key={e} style={styles.eixoItem}>
                  <IconEixo />
                  <span style={styles.eixoTexto}>{e}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── Grupos de Interesse ── */}
      <h2 style={{ ...styles.secTitulo, marginTop: 36 }}>
        <span style={styles.secIcon}><IconGrupo /></span>
        Grupos de Interesse
      </h2>
      <div style={styles.gruposGrid}>
        {grupos.map((g) => (
          <div key={g} style={styles.grupoCard}>
            <div style={styles.grupoDot} />
            <span style={styles.grupoNome}>{g}</span>
          </div>
        ))}
      </div>

      {/* ── Apoios Disponíveis ── */}
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

      {/* ── CTA Propor Projeto ── */}
      <div style={styles.cta}>
        <div>
          <h2 style={styles.ctaTitulo}>Tem uma ideia de investigacao?</h2>
          <p style={styles.ctaDesc}>Proponha um projeto ao N2i e junte-se a uma rede de investigadores do IPMAIA comprometidos com a ciencia de impacto.</p>
        </div>
        <a href="mailto:n2i@ipmaia.pt?subject=Proposta de Projeto" style={styles.ctaBtn}>
          <IconProjetoBtn /> Propor um Projeto
        </a>
      </div>

    </div>
  )
}

const styles = {
  titulo:      { fontSize: 22, fontWeight: 700, color: '#222', borderBottom: '3px solid #E87722', paddingBottom: 10, display: 'inline-block', marginBottom: 4 },
  sub:         { fontSize: 14, color: '#666', marginTop: 10, marginBottom: 28 },
  secTitulo:   { fontSize: 17, fontWeight: 700, color: '#222', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 },
  secIcon:     { flexShrink: 0 },

  // Áreas
  areasGrid:   { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 },
  areaCard:    { background: '#fff', border: '1px solid #E5E5E5', borderRadius: 8, padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 14 },
  areaIcone:   { flexShrink: 0 },
  areaLabel:   { fontWeight: 600, fontSize: 14, color: '#222', lineHeight: 1.4 },

  // Linhas
  linhasGrid:  { display: 'flex', flexDirection: 'column', gap: 16 },
  linhaCard:   { background: '#fff', border: '1px solid #E5E5E5', borderRadius: 8, padding: '20px 24px', borderLeft: '3px solid #E87722' },
  linhaNome:   { fontWeight: 700, fontSize: 15, color: '#E87722', textDecoration: 'none', display: 'block', marginBottom: 14 },
  eixosList:   { display: 'flex', flexDirection: 'column', gap: 8 },
  eixoItem:    { display: 'flex', alignItems: 'flex-start', gap: 8 },
  eixoTexto:   { fontSize: 14, color: '#444', lineHeight: 1.5 },

  // Grupos
  gruposGrid:  { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12 },
  grupoCard:   { background: '#fff', border: '1px solid #E5E5E5', borderRadius: 8, padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 12 },
  grupoDot:    { width: 8, height: 8, borderRadius: '50%', background: '#E87722', flexShrink: 0 },
  grupoNome:   { fontSize: 14, fontWeight: 600, color: '#222', lineHeight: 1.4 },

  // Apoios
  apoiosGrid:  { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 },
  apoioCard:   { background: '#fff', border: '1px solid #E5E5E5', borderRadius: 8, padding: '20px' },
  apoioIcone:  { marginBottom: 12 },
  apoioTitulo: { fontWeight: 700, fontSize: 15, color: '#222', marginBottom: 8 },
  apoioDesc:   { fontSize: 13, color: '#666', lineHeight: 1.6 },

  // CTA
  cta:         { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, background: '#E87722', borderRadius: 8, padding: '28px 32px', marginTop: 36, flexWrap: 'wrap' },
  ctaTitulo:   { fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 8 },
  ctaDesc:     { fontSize: 14, color: 'rgba(255,255,255,0.88)', lineHeight: 1.6, maxWidth: 480 },
  ctaBtn:      { display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', background: '#fff', color: '#E87722', borderRadius: 6, fontSize: 14, fontWeight: 700, textDecoration: 'none', flexShrink: 0, whiteSpace: 'nowrap' },
}

export default Areas