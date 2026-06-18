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

// Métricas de produtividade — actualiza os valores reais quando disponíveis
const metricas = [
  { valor: 22,   label: 'Projetos',          sub: 'total',          icone: '📁' },
  { valor: 9,    label: 'Projetos Activos',  sub: 'em curso',       icone: '🔬' },
  { valor: 19,   label: 'Bases de Dados',    sub: 'científicas',    icone: '🗄️' },
  { valor: '–',  label: 'Publicações',       sub: 'indexadas',      icone: '📄' },
]

// Documentos disponíveis para download
const documentos = [
  { titulo: 'Regulamento N2i',    sub: 'Normas e estatutos',       icone: '📋', url: null },
  { titulo: 'Relatório 2024',     sub: 'Atividades e métricas',    icone: '📊', url: null },
  { titulo: 'Estatuto de Membro', sub: 'Condições de integração',  icone: '📄', url: null },
]

// Objetivos fundamentais do N2i
const objetivos = [
  'Desenvolver uma cultura vibrante de investigacao.',
  'Promover a produtividade e a qualidade da investigacao.',
  'Aumentar o nivel de colaboracao e de interdisciplinaridade.',
  'Perspetivar a investigacao proxima as comunidades.',
]

function N2i() {
  return (
    <div>

      {/* ── 1. Logo + texto institucional ── */}
      <div style={styles.topo} className="topo-grid">
        <div style={styles.logoBox}>
          <img src={logoN2i} alt="Logo N2i" style={{ width: 140 }} />
        </div>
        <div>
          <h1 style={styles.titulo}>Nucleo de Investigacao do IPMAIA</h1>
          <p style={styles.texto}>
            O Nucleo de Investigacao do Instituto Politecnico da Maia (N2i)
            e uma unidade organica de investigacao, com carater permanente,
            interescolas e interdisciplinar, que desenvolve atividades
            especificas nos dominios da investigacao e formacao cientificas,
            prestando servicos a comunidade academica e comunidade em geral.
          </p>
          <p style={styles.texto}>
            O N2i integra investigadores das diferentes escolas do IPMAIA,
            promovendo a transversalidade e interdisciplinaridade como
            motores de uma investigacao de qualidade e com impacto.
          </p>
        </div>
      </div>

      {/* ── 2. Nossa Visão ── */}
      <div style={styles.visao}>
        <div style={styles.visaoIcone}>💡</div>
        <div>
          <p style={styles.visaoLabel}>NOSSA VISÃO</p>
          <p style={styles.visaoTexto}>
            Ser reconhecido como um nucleo de investigacao de referencia nacional
            no ensino superior politecnico, contribuindo para o desenvolvimento
            cientifico, tecnologico e social da regiao e do pais.
          </p>
        </div>
      </div>

      {/* ── 3. Objetivos fundamentais ── */}
      <div style={styles.card}>
        <h2 style={styles.cardTitulo}>Objetivos Fundamentais</h2>
        <p style={{ color: colors.textSec, fontSize: 14, marginBottom: 20 }}>
          O N2i desenvolve as suas atividades considerando quatro objetivos:
        </p>
        {objetivos.map((obj, i) => (
          <div key={i} style={styles.objItem}>
            <span style={styles.objNum}>{i + 1}</span>
            <span style={{ fontSize: 15, lineHeight: 1.6 }}>{obj}</span>
          </div>
        ))}
      </div>

      {/* ── 4. Dashboard de produtividade científica ── */}
      <div style={styles.dashboard}>
        <h2 style={styles.cardTitulo}>Produtividade Cientifica</h2>
        <p style={{ color: colors.textSec, fontSize: 14, marginBottom: 20 }}>
          Numeros actualizados do nucleo. Valores marcados com — serao integrados via API.
        </p>
        <div style={styles.metricasGrid}>
          {metricas.map((m) => (
            <div key={m.label} style={styles.metricaCard}>
              <span style={styles.metricaIcone}>{m.icone}</span>
              <span style={styles.metricaValor}>{m.valor}</span>
              <span style={styles.metricaLabel}>{m.label}</span>
              <span style={styles.metricaSub}>{m.sub}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── 5. Documentos ── */}
      <div style={styles.card}>
        <h2 style={styles.cardTitulo}>Documentos</h2>
        <div style={styles.docsGrid}>
          {documentos.map((doc) => (
            <div key={doc.titulo} style={styles.docCard}>
              <span style={styles.docIcone}>{doc.icone}</span>
              <div>
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

      {/* ── 6. Contactos ── */}
      <div style={styles.contactos}>
        <h2 style={styles.cardTitulo}>Contactos N2i</h2>
        <div style={styles.contactosGrid}>
          <span>Email: <a href="mailto:n2i@ipmaia.pt" style={{ color: colors.orange }}>n2i@ipmaia.pt</a></span>
          <span>Telefone: +351 229 866 100</span>
          <span>Localizacao: Campus da Maia</span>
        </div>
      </div>

    </div>
  )
}

// ─── ESTILOS ──────────────────────────────────────────────
const styles = {
  topo:             { display: 'grid', gridTemplateColumns: '200px 1fr', gap: 40, marginBottom: 32, alignItems: 'start' },
  logoBox:          { textAlign: 'center', padding: '24px 16px', border: '1px solid #E5E5E5', borderRadius: 8 },
  titulo:           { fontSize: 22, fontWeight: 700, color: '#222', borderBottom: '3px solid #E87722', paddingBottom: 10, display: 'inline-block', marginBottom: 16 },
  texto:            { fontSize: 15, lineHeight: 1.7, color: '#222', marginBottom: 12 },

  // Visão — destaque visual próprio
  visao:            { display: 'flex', gap: 20, alignItems: 'flex-start', background: '#E87722', borderRadius: 8, padding: '24px 28px', marginBottom: 16, color: '#fff' },
  visaoIcone:       { fontSize: 32, flexShrink: 0 },
  visaoLabel:       { fontSize: 11, fontWeight: 700, letterSpacing: 2, opacity: 0.85, marginBottom: 8 },
  visaoTexto:       { fontSize: 15, lineHeight: 1.7, fontStyle: 'italic' },

  // Cards genéricos
  card:             { background: '#F7F7F7', border: '1px solid #E5E5E5', borderRadius: 8, padding: '20px 24px', marginBottom: 16 },
  cardTitulo:       { fontSize: 17, fontWeight: 700, color: '#222', marginBottom: 16 },

  // Objetivos
  objItem:          { display: 'flex', alignItems: 'flex-start', marginBottom: 14, gap: 12 },
  objNum:           { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, borderRadius: '50%', background: '#E87722', color: '#fff', fontWeight: 700, fontSize: 13, flexShrink: 0 },

  // Dashboard métricas
  dashboard:        { background: '#fff', border: '1px solid #E5E5E5', borderRadius: 8, padding: '20px 24px', marginBottom: 16 },
  metricasGrid:     { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 },
  metricaCard:      { background: '#F7F7F7', borderRadius: 8, padding: '20px 16px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, border: '1px solid #E5E5E5' },
  metricaIcone:     { fontSize: 24, marginBottom: 4 },
  metricaValor:     { fontSize: 36, fontWeight: 700, color: '#E87722', lineHeight: 1 },
  metricaLabel:     { fontSize: 13, fontWeight: 600, color: '#222', marginTop: 4 },
  metricaSub:       { fontSize: 11, color: '#666' },

  // Documentos
  docsGrid:         { display: 'flex', flexDirection: 'column', gap: 12 },
  docCard:          { display: 'flex', alignItems: 'center', gap: 16, background: '#fff', border: '1px solid #E5E5E5', borderRadius: 8, padding: '14px 18px' },
  docIcone:         { fontSize: 24, flexShrink: 0 },
  docTitulo:        { fontWeight: 600, fontSize: 14, color: '#222' },
  docSub:           { fontSize: 12, color: '#666', marginTop: 2 },
  docBtn:           { marginLeft: 'auto', padding: '6px 14px', background: '#E87722', color: '#fff', borderRadius: 6, fontSize: 12, fontWeight: 600, textDecoration: 'none', flexShrink: 0 },
  docBtnDisabled:   { marginLeft: 'auto', padding: '6px 14px', background: '#F7F7F7', color: '#aaa', borderRadius: 6, fontSize: 12, fontWeight: 600, border: '1px solid #E5E5E5', flexShrink: 0 },

  // Contactos
  contactos:        { background: '#FEF3E7', border: '1px solid #f0c080', borderRadius: 8, padding: '20px 24px', marginTop: 16 },
  contactosGrid:    { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, fontSize: 14, color: '#222', marginTop: 12 },
}

export default N2i