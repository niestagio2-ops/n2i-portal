const bases = [
  { nome: 'Web of Science', url: 'https://www.webofscience.com', desc: 'Base de dados multidisciplinar com cobertura abrangente de revistas cientificas internacionais.' },
  { nome: 'Scopus', url: 'https://www.scopus.com', desc: 'Maior base de dados de resumos e citacoes da literatura academica revisada por pares.' },
  { nome: 'PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov', desc: 'Base de dados de ciencias biomedicas e da saude, mantida pela National Library of Medicine.' },
  { nome: 'b-on', url: 'https://www.b-on.pt', desc: 'Biblioteca do Conhecimento Online - acesso a publicacoes cientificas para instituicoes portuguesas.' },
  { nome: 'RCAAP', url: 'https://www.rcaap.pt', desc: 'Repositorio Cientifico de Acesso Aberto de Portugal - agrega repositorios institucionais portugueses.' },
  { nome: 'Google Scholar', url: 'https://scholar.google.com', desc: 'Motor de pesquisa academica gratuito com cobertura alargada de literatura cientifica.' },
]

function BaseDados() {
  return (
    <div>
      <h1 style={styles.titulo}>Bases de Dados Cientificas</h1>
      <p style={styles.sub}>Plataformas de acesso a literatura cientifica disponiveis para investigadores do IPMAIA.</p>

      <div style={styles.grid}>
        {bases.map((b) => (
          <div key={b.nome} style={styles.card}>
            <h3 style={styles.cardTitulo}>{b.nome}</h3>
            <p style={styles.desc}>{b.desc}</p>
            <a href={b.url} target="_blank" rel="noreferrer" style={styles.btn}>Aceder</a>
          </div>
        ))}
      </div>
    </div>
  )
}

const styles = {
  titulo: { fontSize: 22, fontWeight: 700, color: '#222', borderBottom: '3px solid #E87722', paddingBottom: 10, display: 'inline-block', marginBottom: 4 },
  sub: { fontSize: 14, color: '#666', marginTop: 10, marginBottom: 28 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 },
  card: { background: '#fff', border: '1px solid #E5E5E5', borderRadius: 8, padding: '20px 24px', display: 'flex', flexDirection: 'column' },
  cardTitulo: { fontWeight: 700, fontSize: 15, color: '#222', marginBottom: 8 },
  desc: { fontSize: 13, color: '#666', lineHeight: 1.6, marginBottom: 16, flex: 1 },
  btn: { display: 'inline-block', padding: '7px 18px', background: '#E87722', color: '#fff', borderRadius: 6, fontSize: 13, fontWeight: 600, textDecoration: 'none', alignSelf: 'flex-start' },
}

export default BaseDados