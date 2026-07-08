// ─── PÁGINA CONDIÇÃO DE MEMBRO ────────────────────────────
// Requisitos para integração no N2i.
// Duas categorias: Investigador Integrado / Colaborador.
// Botão de candidatura e contacto por email.
// ─────────────────────────────────────────────────────────

const IconCheck = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E87722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const IconEmail = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
)

const IconDownload = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
)

const categorias = [
  {
    tipo: 'Investigador Integrado',
    requisitos: [
      'Doutor integrado no corpo docente do IPMAIA',
      'Registo ativo no CIENCIAVITAE',
      'Submissao de candidatura ao N2i',
      'Aprovacao pela direcao do N2i',
    ],
  },
  {
    tipo: 'Investigador Colaborador',
    requisitos: [
      'Doutorado ou em fase final de doutoramento',
      'Ligacao a projeto de investigacao do N2i',
      'Registo ativo no CIENCIAVITAE',
      'Aprovacao pela direcao do N2i',
    ],
  },
]

function Condicao() {
  return (
    <div>
      <h1 style={styles.titulo}>Condicao de Membro</h1>
      <p style={styles.sub}>Requisitos e procedimentos para integracao no N2i como investigador.</p>
      <div style={styles.grid} className="grid-2col">
        {categorias.map((cat) => (
          <div key={cat.tipo} style={styles.card}>
            <h2 style={styles.cardTitulo}>{cat.tipo}</h2>
            {cat.requisitos.map((r, i) => (
              <div key={i} style={styles.reqItem}>
                <IconCheck />
                <span style={styles.reqTexto}>{r}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div style={styles.candidatura}>
        <h2 style={styles.secTitulo}>Como Candidatar-se</h2>
        <p style={styles.candidaturaTexto}>Para se candidatar a condicao de membro do N2i, preencha o formulario de candidatura e envie para o email do nucleo, acompanhado do curriculum vitae e comprovativo de registo no CIENCIAVITAE.</p>
        <div style={styles.btns}>
          <button style={styles.btnSolid}><IconDownload /> Formulario de Candidatura</button>
          <a href="mailto:n2i@ipmaia.pt" style={styles.btnOutline}><IconEmail /> n2i@ipmaia.pt</a>
        </div>
      </div>
    </div>
  )
}

const styles = {
  titulo:           { fontSize: 22, fontWeight: 700, color: '#222', borderBottom: '3px solid #E87722', paddingBottom: 10, display: 'inline-block', marginBottom: 4 },
  sub:              { fontSize: 14, color: '#666', marginTop: 10, marginBottom: 28 },
  grid:             { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 24 },
  card:             { background: '#fff', border: '1px solid #E5E5E5', borderRadius: 8, padding: '20px 24px' },
  cardTitulo:       { fontSize: 16, fontWeight: 700, color: '#E87722', marginBottom: 16 },
  reqItem:          { display: 'flex', gap: 10, marginBottom: 12, alignItems: 'flex-start' },
  reqTexto:         { fontSize: 14, color: '#222', lineHeight: 1.5 },
  candidatura:      { background: '#FEF3E7', border: '1px solid #f0c080', borderRadius: 8, padding: '20px 24px' },
  secTitulo:        { fontSize: 16, fontWeight: 700, color: '#222', marginBottom: 12 },
  candidaturaTexto: { fontSize: 14, color: '#666', lineHeight: 1.7, marginBottom: 16 },
  btns:             { display: 'flex', gap: 12, flexWrap: 'wrap' },
  btnSolid:         { display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 18px', background: '#E87722', color: '#fff', border: 'none', borderRadius: 6, fontSize: 13, fontWeight: 600, cursor: 'pointer' },
  btnOutline:       { display: 'inline-flex', alignItems: 'center', gap: 6, padding: '7px 16px', background: 'transparent', color: '#E87722', border: '1.5px solid #E87722', borderRadius: 6, fontSize: 13, fontWeight: 600, textDecoration: 'none' },
}

export default Condicao