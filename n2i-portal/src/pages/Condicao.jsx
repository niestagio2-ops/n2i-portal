function Condicao() {
  return (
    <div>
      <h1 style={styles.titulo}>Condicao de Membro</h1>
      <p style={styles.sub}>Requisitos e procedimentos para integracao no N2i como investigador.</p>

      <div style={styles.grid}>
        <div style={styles.card}>
          <h2 style={styles.cardTitulo}>Investigador Integrado</h2>
          {[
            'Doutor integrado no corpo docente do IPMAIA',
            'Registo ativo no CIENCIAVITAE',
            'Submissao de candidatura ao N2i',
            'Aprovacao pela direcao do N2i',
          ].map((r, i) => (
            <div key={i} style={styles.reqItem}>
              <span style={styles.check}>✓</span>
              <span style={styles.reqTexto}>{r}</span>
            </div>
          ))}
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitulo}>Investigador Colaborador</h2>
          {[
            'Doutorado ou em fase final de doutoramento',
            'Ligacao a projeto de investigacao do N2i',
            'Registo ativo no CIENCIAVITAE',
            'Aprovacao pela direcao do N2i',
          ].map((r, i) => (
            <div key={i} style={styles.reqItem}>
              <span style={styles.check}>✓</span>
              <span style={styles.reqTexto}>{r}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.candidatura}>
        <h2 style={styles.secTitulo}>Como Candidatar-se</h2>
        <p style={styles.candidaturaTexto}>
          Para se candidatar a condicao de membro do N2i, preencha o formulario de candidatura
          e envie para o email do nucleo, acompanhado do curriculum vitae e comprovativo
          de registo no CIENCIAVITAE.
        </p>
        <div style={styles.btns}>
          <button style={styles.btnSolid}>Formulario de Candidatura</button>
          <a href="mailto:n2i@ipmaia.pt" style={styles.btnOutline}>n2i@ipmaia.pt</a>
        </div>
      </div>
    </div>
  )
}

const styles = {
  titulo: { fontSize: 22, fontWeight: 700, color: '#222', borderBottom: '3px solid #E87722', paddingBottom: 10, display: 'inline-block', marginBottom: 4 },
  sub: { fontSize: 14, color: '#666', marginTop: 10, marginBottom: 28 },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 24 },
  card: { background: '#fff', border: '1px solid #E5E5E5', borderRadius: 8, padding: '20px 24px' },
  cardTitulo: { fontSize: 16, fontWeight: 700, color: '#E87722', marginBottom: 16 },
  reqItem: { display: 'flex', gap: 10, marginBottom: 12, alignItems: 'flex-start' },
  check: { color: '#E87722', fontSize: 16, flexShrink: 0, marginTop: 1 },
  reqTexto: { fontSize: 14, color: '#222', lineHeight: 1.5 },
  candidatura: { background: '#FEF3E7', border: '1px solid #f0c080', borderRadius: 8, padding: '20px 24px' },
  secTitulo: { fontSize: 16, fontWeight: 700, color: '#222', marginBottom: 12 },
  candidaturaTexto: { fontSize: 14, color: '#666', lineHeight: 1.7, marginBottom: 16 },
  btns: { display: 'flex', gap: 12, flexWrap: 'wrap' },
  btnSolid: { padding: '8px 18px', background: '#E87722', color: '#fff', border: 'none', borderRadius: 6, fontSize: 13, fontWeight: 600, cursor: 'pointer' },
  btnOutline: { padding: '7px 16px', background: 'transparent', color: '#E87722', border: '1.5px solid #E87722', borderRadius: 6, fontSize: 13, fontWeight: 600, textDecoration: 'none' },
}

export default Condicao