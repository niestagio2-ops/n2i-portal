// ─── PÁGINA PROJETOS ──────────────────────────────────────
// Lista todos os projetos do N2i organizados por:
//   - Estado: Em curso (por área) / Terminados (por ano)
//   - Link directo para página de cada projeto
// ─────────────────────────────────────────────────────────

// Dados reais dos projetos com links directos
const projetosEmCurso = [
  {
    area: 'Ciencias Empresariais',
    projetos: [
      { nome: 'Pedagogia XXI',      url: 'https://www.ipmaia.pt/pt/investigacao/projetos/2024/pedagogia-xxi' },
    ],
  },
  {
    area: 'Ciencias da Educacao Fisica e Desporto',
    projetos: [
      { nome: 'Senate',             url: 'https://www.ipmaia.pt/pt/investigacao/projetos/senate' },
      { nome: 'RePlay 2.0',         url: 'https://www.umaia.pt/pt/investigacao/projetos/2021/RePlay2-0' },
      { nome: 'GAP WOMEN',          url: 'https://www.umaia.pt/pt/investigacao/projetos/2022/gapwomen' },
      { nome: 'Fit4Alz',            url: 'https://www.umaia.pt/pt/investigacao/projetos/2022/fit4alz' },
      { nome: 'Green Team',         url: 'https://www.umaia.pt/pt/investigacao/projetos/2022/green-team' },
      { nome: 'Cyclo Educate',      url: 'https://www.ipmaia.pt/pt/investigacao/projetos/2026/cyclo-educate' },
      { nome: 'ScienceForACTIVAR',  url: 'https://www.ipmaia.pt/pt/investigacao/projetos/2023/science-for-activar' },
    ],
  },
  {
    area: 'Ciencias da Comunicacao e Tecnologias da Informacao',
    projetos: [
      { nome: 'CREATIVEinGREEN',    url: 'https://www.umaia.pt/pt/investigacao/projetos/2024/creativeingreen' },
    ],
  },
]

const projetosTerminados = [
  {
    ano: '2024',
    projetos: [
      { nome: 'OutSpo',     url: 'https://www.ipmaia.pt/pt/investigacao/projetos/outspo' },
      { nome: 'Ecofitness', url: 'https://www.ipmaia.pt/pt/investigacao/projetos/ecofitness' },
    ],
  },
  {
    ano: '2023',
    projetos: [
      { nome: 'City Go',   url: 'https://www.umaia.pt/pt/investigacao/projetos/2022/city-go' },
      { nome: 'C-TRENDS',  url: 'https://www.ipmaia.pt/pt/investigacao/projetos/c-trends' },
      { nome: 'Maximus',   url: 'https://www.ipmaia.pt/pt/investigacao/projetos/maximus' },
    ],
  },
  {
    ano: '2022',
    projetos: [
      { nome: 'Guidance',  url: 'https://www.umaia.pt/pt/investigacao/projetos/2019/guidance' },
      { nome: 'ActivU',    url: 'https://www.ipmaia.pt/pt/investigacao/projetos/activu' },
      { nome: 'BLA',       url: 'https://www.umaia.pt/pt/investigacao/projetos/2019/be-like-an-athlete' },
    ],
  },
  {
    ano: 'Até 2021',
    projetos: [
      { nome: 'EMCWUB',    url: 'https://www.umaia.pt/pt/investigacao/projetos/2019/emcwub' },
      { nome: 'EU-CAB',    url: 'https://www.umaia.pt/pt/investigacao/projetos/2019/eucab' },
      { nome: 'Entrance',  url: 'https://www.umaia.pt/pt/investigacao/projetos/2019/entrance' },
      { nome: 'PLAY',      url: 'https://www.umaia.pt/pt/investigacao/projetos/2019/play' },
    ],
  },
]

function Projetos() {
  return (
    <div>
      <h1 style={styles.titulo}>Projetos</h1>
      <p style={styles.sub}>
        Projetos de investigacao do N2i organizados por area e estado.
        Clica em cada projeto para aceder a pagina oficial.
      </p>

      {/* ── Contador de projetos ── */}
      <div style={styles.contadores}>
        <div style={styles.contador}>
          <span style={styles.contadorValor}>9</span>
          <span style={styles.contadorLabel}>Em curso</span>
        </div>
        <div style={styles.contadorDivisor} />
        <div style={styles.contador}>
          <span style={styles.contadorValor}>13</span>
          <span style={styles.contadorLabel}>Terminados</span>
        </div>
        <div style={styles.contadorDivisor} />
        <div style={styles.contador}>
          <span style={styles.contadorValor}>22</span>
          <span style={styles.contadorLabel}>Total</span>
        </div>
      </div>

      {/* ── Projetos em curso ── */}
      <h2 style={styles.secTitulo}>
        <span style={styles.secDot} />
        Projetos em Curso
      </h2>

      {projetosEmCurso.map((grupo) => (
        <div key={grupo.area} style={styles.grupo}>
          <p style={styles.grupoArea}>{grupo.area}</p>
          <div style={styles.projetosGrid}>
            {grupo.projetos.map((p) => (
              <a key={p.nome} href={p.url} target="_blank" rel="noreferrer" style={styles.projetoCard}>
                <span style={styles.projetoNome}>{p.nome}</span>
                <span style={styles.projetoLink}>Ver projeto →</span>
              </a>
            ))}
          </div>
        </div>
      ))}

      {/* ── Projetos terminados ── */}
      <h2 style={{ ...styles.secTitulo, marginTop: 36 }}>
        <span style={{ ...styles.secDot, background: '#aaa' }} />
        Projetos Terminados
      </h2>

      {projetosTerminados.map((grupo) => (
        <div key={grupo.ano} style={styles.grupo}>
          <p style={styles.grupoAno}>{grupo.ano}</p>
          <div style={styles.projetosGrid}>
            {grupo.projetos.map((p) => (
              <a key={p.nome} href={p.url} target="_blank" rel="noreferrer" style={styles.projetoCardTerminado}>
                <span style={styles.projetoNome}>{p.nome}</span>
                <span style={styles.projetoLink}>Ver projeto →</span>
              </a>
            ))}
          </div>
        </div>
      ))}

    </div>
  )
}

// ─── ESTILOS ──────────────────────────────────────────────
const styles = {
  titulo:               { fontSize: 22, fontWeight: 700, color: '#222', borderBottom: '3px solid #E87722', paddingBottom: 10, display: 'inline-block', marginBottom: 4 },
  sub:                  { fontSize: 14, color: '#666', marginTop: 10, marginBottom: 24 },

  // Contadores
  contadores:           { display: 'flex', alignItems: 'center', gap: 0, background: '#F7F7F7', border: '1px solid #E5E5E5', borderRadius: 8, padding: '20px 32px', marginBottom: 32, width: 'fit-content' },
  contador:             { textAlign: 'center', padding: '0 32px' },
  contadorValor:        { display: 'block', fontSize: 36, fontWeight: 700, color: '#E87722', lineHeight: 1 },
  contadorLabel:        { display: 'block', fontSize: 13, color: '#666', marginTop: 4 },
  contadorDivisor:      { width: 1, height: 48, background: '#E5E5E5' },

  // Secções
  secTitulo:            { fontSize: 17, fontWeight: 700, color: '#222', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 },
  secDot:               { width: 10, height: 10, borderRadius: '50%', background: '#E87722', flexShrink: 0 },

  // Grupos por área / ano
  grupo:                { marginBottom: 24 },
  grupoArea:            { fontSize: 13, fontWeight: 700, color: '#E87722', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 10 },
  grupoAno:             { fontSize: 13, fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 10 },

  // Cards de projeto — em curso
  projetosGrid:         { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 10 },
  projetoCard:          { display: 'flex', flexDirection: 'column', gap: 6, padding: '14px 16px', background: '#fff', border: '1px solid #E5E5E5', borderRadius: 8, textDecoration: 'none', transition: 'all .15s', borderLeft: '3px solid #E87722' },
  projetoCardTerminado: { display: 'flex', flexDirection: 'column', gap: 6, padding: '14px 16px', background: '#fff', border: '1px solid #E5E5E5', borderRadius: 8, textDecoration: 'none', transition: 'all .15s', borderLeft: '3px solid #ddd' },
  projetoNome:          { fontSize: 14, fontWeight: 600, color: '#222' },
  projetoLink:          { fontSize: 12, color: '#E87722' },
}

export default Projetos