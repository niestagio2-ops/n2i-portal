const areas = [
  { nome: 'Ciencias da Saude e Tecnologias da Saude', icone: '🏥' },
  { nome: 'Tecnologias de Informacao e Comunicacao', icone: '💻' },
  { nome: 'Ciencias da Educacao e Formacao', icone: '📚' },
  { nome: 'Engenharia e Gestao Industrial', icone: '⚙️' },
  { nome: 'Economia, Gestao e Turismo', icone: '📊' },
  { nome: 'Artes, Design e Multimedia', icone: '🎨' },
]

const apoios = [
  { titulo: 'Apoio a Candidatura', desc: 'Assistencia na elaboracao de candidaturas a financiamento nacional e europeu.', icone: '📝' },
  { titulo: 'Gestao de Projetos', desc: 'Acompanhamento administrativo e financeiro de projetos de investigacao em curso.', icone: '📁' },
  { titulo: 'Formacao e Workshops', desc: 'Organizacao de acoes de formacao em metodologias de investigacao e escrita cientifica.', icone: '🎓' },
  { titulo: 'Publicacao Cientifica', desc: 'Apoio na submissao e publicacao em revistas indexadas e conferencias internacionais.', icone: '📖' },
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
            <span style={styles.icone}>{a.icone}</span>
            <span style={styles.areaLabel}>{a.nome}</span>
          </div>
        ))}
      </div>

      <h2 style={{ ...styles.secTitulo, marginTop: 36 }}>Apoios Disponiveis</h2>
      <div style={styles.apoiosGrid}>
        {apoios.map((a) => (
          <div key={a.titulo} style={styles.apoioCard}>
            <span style={styles.apoioIcone}>{a.icone}</span>
            <h3 style={styles.apoioTitulo}>{a.titulo}</h3>
            <p style={styles.apoioDesc}>{a.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const styles = {
  titulo: { fontSize: 22, fontWeight: 700, color: '#222', borderBottom: '3px solid #E87722', paddingBottom: 10, display: 'inline-block', marginBottom: 4 },
  sub: { fontSize: 14, color: '#666', marginTop: 10, marginBottom: 28 },
  secTitulo: { fontSize: 17, fontWeight: 700, color: '#222', marginBottom: 16 },
  areasGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 },
  areaCard: { background: '#fff', border: '1px solid #E5E5E5', borderRadius: 8, padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 14 },
  icone: { fontSize: 26, flexShrink: 0 },
  areaLabel: { fontWeight: 600, fontSize: 14, color: '#222', lineHeight: 1.4 },
  apoiosGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 },
  apoioCard: { background: '#fff', border: '1px solid #E5E5E5', borderRadius: 8, padding: '20px' },
  apoioIcone: { fontSize: 28, display: 'block', marginBottom: 10 },
  apoioTitulo: { fontWeight: 700, fontSize: 15, color: '#222', marginBottom: 8 },
  apoioDesc: { fontSize: 13, color: '#666', lineHeight: 1.6 },
}

export default Areas