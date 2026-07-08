const IconGlobo = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
)

const IconChip = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="6" height="6"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M19 9h3M2 15h3M19 15h3"/><rect x="2" y="2" width="20" height="20" rx="2"/>
  </svg>
)

const IconSaude = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
  </svg>
)

const IconSocial = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)

const IconLink = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </svg>
)

const IconAceder = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

const categorias = [
  {
    nome: 'Multidisciplinares',
    icone: <IconGlobo />,
    cor: { bg: '#E6F1FB', text: '#185FA5', borda: '#b3d4f5' },
    bases: [
      { nome: 'Biblioteca B-ON',          url: 'https://www.b-on.pt' },
      { nome: 'DOAJ',                     url: 'https://doaj.org' },
      { nome: 'Academic Search Complete', url: 'https://www.ebsco.com/products/research-databases/academic-search-complete' },
      { nome: 'Springer Online',          url: 'https://link.springer.com' },
      { nome: 'Taylor and Francis Online',url: 'https://www.tandfonline.com' },
      { nome: 'Scopus',                   url: 'https://www.scopus.com' },
    ],
  },
  {
    nome: 'Ciencias Exatas e Tecnologicas',
    icone: <IconChip />,
    cor: { bg: '#FEF3E7', text: '#b85c10', borda: '#f5c98a' },
    bases: [
      { nome: 'IEEE Xplore',         url: 'https://ieeexplore.ieee.org' },
      { nome: 'ACM Digital Library', url: 'https://dl.acm.org' },
      { nome: 'ScienceDirect',       url: 'https://www.sciencedirect.com' },
    ],
  },
  {
    nome: 'Ciencias da Saude e Biologicas',
    icone: <IconSaude />,
    cor: { bg: '#EAF3DE', text: '#3B6D11', borda: '#a8d48a' },
    bases: [
      { nome: 'NCBI Resources', url: 'https://www.ncbi.nlm.nih.gov' },
      { nome: 'ACS',            url: 'https://pubs.acs.org' },
      { nome: 'AIP',            url: 'https://publishing.aip.org' },
    ],
  },
  {
    nome: 'Ciencias Sociais e Humanas',
    icone: <IconSocial />,
    cor: { bg: '#F0E8FF', text: '#534AB7', borda: '#c4b5f5' },
    bases: [
      { nome: 'APA PsycNET',              url: 'https://psycnet.apa.org' },
      { nome: 'Annual Reviews',           url: 'https://www.annualreviews.org' },
      { nome: 'Business Source Complete', url: 'https://www.ebsco.com/products/research-databases/business-source-complete' },
      { nome: 'SportDiscus',              url: 'https://www.ebsco.com/products/research-databases/sportdiscus' },
    ],
  },
  {
    nome: 'Outros Recursos',
    icone: <IconLink />,
    cor: { bg: '#F7F7F7', text: '#444', borda: '#E5E5E5' },
    bases: [
      { nome: 'Sabi', url: 'https://www.sabi.pt' },
    ],
  },
]

const totalBases = categorias.reduce((acc, cat) => acc + cat.bases.length, 0)

function BaseDados() {
  return (
    <div>
      <h1 style={styles.titulo}>Bases de Dados Cientificas</h1>
      <p style={styles.sub}>Plataformas de acesso a literatura cientifica disponiveis para investigadores do IPMAIA, organizadas por area cientifica.</p>

      <div style={styles.contadores}>
        <div style={styles.contador}>
          <span style={styles.contadorValor}>{totalBases}</span>
          <span style={styles.contadorLabel}>Bases de Dados</span>
        </div>
        <div style={styles.contadorDivisor} />
        <div style={styles.contador}>
          <span style={styles.contadorValor}>{categorias.length}</span>
          <span style={styles.contadorLabel}>Categorias</span>
        </div>
        <div style={styles.contadorDivisor} />
        <div style={styles.contador}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E87722" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
          <span style={styles.contadorLabel}>Acesso livre</span>
        </div>
      </div>

      <div style={styles.categorias}>
        {categorias.map((cat) => (
          <div key={cat.nome} style={styles.categoriaBloco}>
            <div style={{ ...styles.categoriaHeader, background: cat.cor.bg, border: '1px solid ' + cat.cor.borda }}>
              <div style={{ flexShrink: 0 }}>{cat.icone}</div>
              <div>
                <p style={{ ...styles.categoriaNome, color: cat.cor.text }}>{cat.nome}</p>
                <p style={styles.categoriaCount}>{cat.bases.length} {cat.bases.length === 1 ? 'base' : 'bases'}</p>
              </div>
            </div>
            <div style={styles.basesGrid}>
              {cat.bases.map((base) => (
                <a key={base.nome} href={base.url} target='_blank' rel='noreferrer' style={styles.baseCard}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#E87722'; e.currentTarget.style.color = '#E87722' }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E5E5E5'; e.currentTarget.style.color = '#222' }}>
                  <span style={styles.baseNome}>{base.nome}</span>
                  <span style={styles.baseAceder}><IconAceder /> Aceder</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const styles = {
  titulo:          { fontSize: 22, fontWeight: 700, color: '#222', borderBottom: '3px solid #E87722', paddingBottom: 10, display: 'inline-block', marginBottom: 4 },
  sub:             { fontSize: 14, color: '#666', marginTop: 10, marginBottom: 24 },
  contadores:      { display: 'flex', alignItems: 'center', background: '#F7F7F7', border: '1px solid #E5E5E5', borderRadius: 8, padding: '20px 32px', marginBottom: 32, width: 'fit-content', gap: 0 },
  contador:        { textAlign: 'center', padding: '0 32px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 },
  contadorValor:   { display: 'block', fontSize: 36, fontWeight: 700, color: '#E87722', lineHeight: 1 },
  contadorLabel:   { display: 'block', fontSize: 13, color: '#666', marginTop: 4 },
  contadorDivisor: { width: 1, height: 48, background: '#E5E5E5' },
  categorias:      { display: 'flex', flexDirection: 'column', gap: 24 },
  categoriaBloco:  { border: '1px solid #E5E5E5', borderRadius: 8, overflow: 'hidden' },
  categoriaHeader: { display: 'flex', alignItems: 'center', gap: 16, padding: '16px 20px' },
  categoriaNome:   { fontWeight: 700, fontSize: 15, margin: 0 },
  categoriaCount:  { fontSize: 12, color: '#888', marginTop: 2 },
  basesGrid:       { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 0 },
  baseCard:        { display: 'flex', flexDirection: 'column', gap: 4, padding: '14px 18px', textDecoration: 'none', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5', transition: 'all .15s', color: '#222' },
  baseNome:        { fontSize: 14, fontWeight: 600, lineHeight: 1.4 },
  baseAceder:      { fontSize: 12, color: '#E87722', display: 'flex', alignItems: 'center', gap: 4, marginTop: 2 },
}

export default BaseDados