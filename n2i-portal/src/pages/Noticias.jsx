// ─── PÁGINA NOTÍCIAS ──────────────────────────────────────
// Notícias sobre investigação, projetos e actividades do N2i.
// Grid de cards com imagem placeholder, categoria e excerto.
//
// INTEGRAÇÃO FUTURA: substituir imagem null por URL real
// ─────────────────────────────────────────────────────────

// Dados mock das notícias — mover para src/data/noticias.js futuramente
const noticias = [
  { id: 1, categoria: 'Financiamento', data: '2025-01-15', titulo: 'N2i obtem financiamento FCT para projeto DigiHealth',          excerto: 'O nucleo de investigacao do IPMAIA foi aprovado com financiamento da FCT para o desenvolvimento do projeto DigiHealth.' },
  { id: 2, categoria: 'Publicacao',    data: '2025-01-08', titulo: 'Investigadores do N2i publicam artigo no JMIR',                excerto: 'Um artigo de revisao sistematica sobre intervencoes de saude digital foi aceite no Journal of Medical Internet Research.' },
  { id: 3, categoria: 'Parceria',      data: '2024-12-20', titulo: 'Protocolo de cooperacao com Universidade do Porto',           excerto: 'O N2i assinou um protocolo de cooperacao cientifica com a Universidade do Porto.' },
  { id: 4, categoria: 'Premio',        data: '2024-12-05', titulo: 'Projeto SmartMaia distinguido no Portugal Smart Cities Summit', excerto: 'O projeto SmartMaia foi distinguido com o premio de Melhor Projeto de Inovacao Urbana.' },
]

// Cores por categoria de notícia
const catCores = {
  Financiamento: { bg: '#EAF3DE', text: '#3B6D11' },
  Publicacao:    { bg: '#E6F1FB', text: '#185FA5' },
  Parceria:      { bg: '#F0E8FF', text: '#534AB7' },
  Premio:        { bg: '#FEF3E7', text: '#b85c10' },
}

// Formata data de YYYY-MM-DD para DD/MM/YYYY
const fmtData = (iso) => { const [y,m,d] = iso.split('-'); return d+'/'+m+'/'+y }

function Noticias() {
  return (
    <div>
      <h1 style={styles.titulo}>Noticias</h1>
      <p style={styles.sub}>Ultimas noticias sobre investigacao, projetos e atividades do N2i.</p>

      {/* ── Grid de cards de notícias ── */}
      <div style={styles.grid}>
        {noticias.map((n) => (
          <div key={n.id} style={styles.card}>
            {/* Imagem placeholder — substituir por <img> quando houver imagens reais */}
            <div style={styles.img}>Imagem (placeholder)</div>
            <div style={styles.cardBody}>
              <div style={styles.cardTopo}>
                {/* Badge de categoria com cor */}
                <span style={{ ...styles.badge, background: catCores[n.categoria]?.bg || '#eee', color: catCores[n.categoria]?.text || '#444' }}>{n.categoria}</span>
                <span style={styles.data}>{fmtData(n.data)}</span>
              </div>
              <h3 style={styles.cardTitulo}>{n.titulo}</h3>
              <p style={styles.excerto}>{n.excerto}</p>
              <a href="#" style={styles.lerMais}>Ler mais →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── ESTILOS DA PÁGINA NOTÍCIAS ───────────────────────────
const styles = {
  titulo:     { fontSize: 22, fontWeight: 700, color: '#222', borderBottom: '3px solid #E87722', paddingBottom: 10, display: 'inline-block', marginBottom: 4 },
  sub:        { fontSize: 14, color: '#666', marginTop: 10, marginBottom: 24 },
  grid:       { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20 },
  card:       { background: '#fff', border: '1px solid #E5E5E5', borderRadius: 8, overflow: 'hidden', display: 'flex', flexDirection: 'column' },
  img:        { background: '#F7F7F7', height: 140, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, color: '#aaa', borderBottom: '1px solid #E5E5E5' },
  cardBody:   { padding: '16px', display: 'flex', flexDirection: 'column', flex: 1 },
  cardTopo:   { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  badge:      { padding: '2px 10px', borderRadius: 20, fontSize: 12, fontWeight: 600 },
  data:       { fontSize: 12, color: '#666' },
  cardTitulo: { fontWeight: 700, fontSize: 14, color: '#222', marginBottom: 8, lineHeight: 1.5, flex: 1 },
  excerto:    { fontSize: 13, color: '#666', lineHeight: 1.6, marginBottom: 14 },
  lerMais:    { fontSize: 13, color: '#E87722', fontWeight: 600, textDecoration: 'none', marginTop: 'auto' },
}

export default Noticias