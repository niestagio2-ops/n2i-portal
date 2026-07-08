// ─── PÁGINA N2i — versão renovada ────────────────────────
// Estrutura:
//   1. Logo + texto institucional
//   2. Nossa Visão — destaque visual
//   3. Objetivos fundamentais
//   4. Dashboard de produtividade científica
//   5. Documentos
//   6. Contactos
// ─────────────────────────────────────────────────────────

import { colors } from '../theme.js'
import logoN2i from '../assets/logo-n2i.png'

const IconEmail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E87722" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
)

const IconTelefone = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E87722" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6.17 6.17l.98-.98a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

const IconLocalizacao = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E87722" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)

const IconRegulamento = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
  </svg>
)

const IconRelatorio = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
)

const IconEstatuto = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)

const IconVisao = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
)

const metricas = [
  { valor: 22,  label: 'Projetos',         sub: 'total',        icone: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E87722" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
    </svg>
  )},
  { valor: 9,   label: 'Projetos Activos', sub: 'em curso',     icone: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E87722" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  )},
  { valor: 19,  label: 'Bases de Dados',   sub: 'cientificas',  icone: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E87722" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
    </svg>
  )},
  { valor: '—', label: 'Publicacoes',      sub: 'indexadas',    icone: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E87722" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
  )},
]

const documentos = [
  { titulo: 'Regulamento N2i',    sub: 'Normas e estatutos',      icone: <IconRegulamento />, url: null },
  { titulo: 'Relatorio 2024',     sub: 'Atividades e metricas',   icone: <IconRelatorio />,   url: null },
  { titulo: 'Estatuto de Membro', sub: 'Condicoes de integracao', icone: <IconEstatuto />,    url: null },
]

const objetivos = [
  'Desenvolver uma cultura vibrante de investigacao.',
  'Promover a produtividade e a qualidade da investigacao.',
  'Aumentar o nivel de colaboracao e de interdisciplinaridade.',
  'Perspetivar a investigacao proxima as comunidades.',
]

function N2i() {
  return (
    <div>
      <div style={styles.topo} className="topo-grid">
        <div style={styles.logoBox}>
          <img src={logoN2i} alt="Logo N2i" style={{ width: 140 }} />
        </div>
        <div>
          <h1 style={styles.titulo}>Nucleo de Investigacao do IPMAIA</h1>
          <p style={styles.texto}>O Nucleo de Investigacao do Instituto Politecnico da Maia (N2i) e uma unidade organica de investigacao, com carater permanente, interescolas e interdisciplinar, que desenvolve atividades especificas nos dominios da investigacao e formacao cientificas, prestando servicos a comunidade academica e comunidade em geral.</p>
          <p style={styles.texto}>O N2i integra investigadores das diferentes escolas do IPMAIA, promovendo a transversalidade e interdisciplinaridade como motores de uma investigacao de qualidade e com impacto.</p>
        </div>
      </div>

      <div style={styles.visao}>
        <div style={{ flexShrink: 0 }}><IconVisao /></div>
        <div>
          <p style={styles.visaoLabel}>NOSSA VISAO</p>
          <p style={styles.visaoTexto}>Ser reconhecido como um nucleo de investigacao de referencia nacional no ensino superior politecnico, contribuindo para o desenvolvimento cientifico, tecnologico e social da regiao e do pais.</p>
        </div>
      </div>

      <div style={styles.card}>
        <h2 style={styles.cardTitulo}>Objetivos Fundamentais</h2>
        <p style={{ color: colors.textSec, fontSize: 14, marginBottom: 20 }}>O N2i desenvolve as suas atividades considerando quatro objetivos:</p>
        {objetivos.map((obj, i) => (
          <div key={i} style={styles.objItem}>
            <span style={styles.objNum}>{i + 1}</span>
            <span style={{ fontSize: 15, lineHeight: 1.6 }}>{obj}</span>
          </div>
        ))}
      </div>

      <div style={styles.dashboard}>
        <h2 style={styles.cardTitulo}>Produtividade Cientifica</h2>
        <p style={{ color: colors.textSec, fontSize: 14, marginBottom: 20 }}>Numeros actualizados do nucleo. Valores marcados com — serao integrados via API.</p>
        <div style={styles.metricasGrid}>
          {metricas.map((m) => (
            <div key={m.label} style={styles.metricaCard}>
              <div style={{ marginBottom: 8 }}>{m.icone}</div>
              <span style={styles.metricaValor}>{m.valor}</span>
              <span style={styles.metricaLabel}>{m.label}</span>
              <span style={styles.metricaSub}>{m.sub}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.card}>
        <h2 style={styles.cardTitulo}>Documentos</h2>
        <div style={styles.docsGrid}>
          {documentos.map((doc) => (
            <div key={doc.titulo} style={styles.docCard}>
              <div style={{ flexShrink: 0 }}>{doc.icone}</div>
              <div style={{ flex: 1 }}>
                <p style={styles.docTitulo}>{doc.titulo}</p>
                <p style={styles.docSub}>{doc.sub}</p>
              </div>
              {doc.url ? (
                <a href={doc.url} target="_blank" rel="noreferrer" style={styles.docBtn}>Download</a>
              ) : (
                <span style={styles.docBtnDisabled}>Em breve</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div style={styles.contactos}>
        <h2 style={styles.cardTitulo}>Contactos N2i</h2>
        <div style={styles.contactosGrid}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><IconEmail /> <a href="mailto:n2i@ipmaia.pt" style={{ color: colors.orange }}>n2i@ipmaia.pt</a></span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><IconTelefone /> +351 229 866 100</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><IconLocalizacao /> Campus da Maia</span>
        </div>
      </div>
    </div>
  )
}

const styles = {
  topo:            { display: 'grid', gridTemplateColumns: '200px 1fr', gap: 40, marginBottom: 32, alignItems: 'start' },
  logoBox:         { textAlign: 'center', padding: '24px 16px', border: '1px solid #E5E5E5', borderRadius: 8 },
  titulo:          { fontSize: 22, fontWeight: 700, color: '#222', borderBottom: '3px solid #E87722', paddingBottom: 10, display: 'inline-block', marginBottom: 16 },
  texto:           { fontSize: 15, lineHeight: 1.7, color: '#222', marginBottom: 12 },
  visao:           { display: 'flex', gap: 20, alignItems: 'flex-start', background: '#E87722', borderRadius: 8, padding: '24px 28px', marginBottom: 16, color: '#fff' },
  visaoLabel:      { fontSize: 11, fontWeight: 700, letterSpacing: 2, opacity: 0.85, marginBottom: 8 },
  visaoTexto:      { fontSize: 15, lineHeight: 1.7, fontStyle: 'italic' },
  card:            { background: '#F7F7F7', border: '1px solid #E5E5E5', borderRadius: 8, padding: '20px 24px', marginBottom: 16 },
  cardTitulo:      { fontSize: 17, fontWeight: 700, color: '#222', marginBottom: 16 },
  objItem:         { display: 'flex', alignItems: 'flex-start', marginBottom: 14, gap: 12 },
  objNum:          { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, borderRadius: '50%', background: '#E87722', color: '#fff', fontWeight: 700, fontSize: 13, flexShrink: 0 },
  dashboard:       { background: '#fff', border: '1px solid #E5E5E5', borderRadius: 8, padding: '20px 24px', marginBottom: 16 },
  metricasGrid:    { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 },
  metricaCard:     { background: '#F7F7F7', borderRadius: 8, padding: '20px 16px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, border: '1px solid #E5E5E5' },
  metricaValor:    { fontSize: 36, fontWeight: 700, color: '#E87722', lineHeight: 1 },
  metricaLabel:    { fontSize: 13, fontWeight: 600, color: '#222', marginTop: 4 },
  metricaSub:      { fontSize: 11, color: '#666' },
  docsGrid:        { display: 'flex', flexDirection: 'column', gap: 12 },
  docCard:         { display: 'flex', alignItems: 'center', gap: 16, background: '#fff', border: '1px solid #E5E5E5', borderRadius: 8, padding: '14px 18px' },
  docTitulo:       { fontWeight: 600, fontSize: 14, color: '#222' },
  docSub:          { fontSize: 12, color: '#666', marginTop: 2 },
  docBtn:          { marginLeft: 'auto', padding: '6px 14px', background: '#E87722', color: '#fff', borderRadius: 6, fontSize: 12, fontWeight: 600, textDecoration: 'none', flexShrink: 0 },
  docBtnDisabled:  { marginLeft: 'auto', padding: '6px 14px', background: '#F7F7F7', color: '#aaa', borderRadius: 6, fontSize: 12, fontWeight: 600, border: '1px solid #E5E5E5', flexShrink: 0 },
  contactos:       { background: '#FEF3E7', border: '1px solid #f0c080', borderRadius: 8, padding: '20px 24px', marginTop: 16 },
  contactosGrid:   { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, fontSize: 14, color: '#222', marginTop: 12 },
}

export default N2i