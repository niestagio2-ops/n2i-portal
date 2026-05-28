import { colors } from '../../theme.js'

function Footer() {
  return (
    <footer style={{ marginTop: 60 }}>

      {/* Corpo do footer */}
      <div style={{ background: '#2C2C2C', color: '#ccc' }}>
        <div style={styles.container}>

          {/* Colunas */}
          <div style={styles.grid}>

            <div>
              <p style={styles.colTitle}>IPMAIA</p>
              <a href="#" style={styles.link}>O IPMAIA</a>
              <a href="#" style={styles.link}>Orgaos de Governo</a>
              <a href="#" style={styles.link}>Regulamentos</a>
              <a href="#" style={styles.link}>Relatorios e Contas</a>
            </div>

            <div>
              <p style={styles.colTitle}>Ensino</p>
              <a href="#" style={styles.link}>Licenciaturas</a>
              <a href="#" style={styles.link}>Mestrados</a>
              <a href="#" style={styles.link}>CTesSP</a>
              <a href="#" style={styles.link}>Pos-Graduacoes</a>
            </div>

            <div>
              <p style={styles.colTitle}>Investigacao</p>
              <a href="#" style={styles.link}>N2i</a>
              <a href="#" style={styles.link}>Projetos</a>
              <a href="#" style={styles.link}>Publicacoes</a>
              <a href="#" style={styles.link}>Membros</a>
            </div>

            <div>
              <p style={styles.colTitle}>Contactos</p>
              <p style={styles.info}>Campus da Maia</p>
              <p style={styles.info}>+351 229 866 100</p>
              <p style={styles.info}>geral@ipmaia.pt</p>
            </div>

          </div>

          {/* Redes sociais */}
          <div style={styles.social}>
            <span style={{ fontSize: 12, color: '#888' }}>Redes sociais:</span>
            {['Facebook', 'Instagram', 'LinkedIn', 'YouTube'].map((rede) => (
              <a key={rede} href="#" style={styles.socialLink}>{rede}</a>
            ))}
          </div>

        </div>

        {/* Barra final */}
        <div style={styles.bottom}>
          <span>© {new Date().getFullYear()} Instituto Politecnico da Maia — Todos os direitos reservados</span>
        </div>

      </div>

    </footer>
  )
}

const styles = {
  container: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '40px 24px 0',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 32,
    paddingBottom: 24,
    borderBottom: '1px solid #444',
  },
  colTitle: {
    color: colors.orange,
    fontWeight: 700,
    fontSize: 13,
    marginBottom: 14,
    letterSpacing: 0.5,
  },
  link: {
    display: 'block',
    color: '#aaa',
    fontSize: 13,
    textDecoration: 'none',
    marginBottom: 6,
    lineHeight: 1.5,
  },
  info: {
    fontSize: 13,
    color: '#aaa',
    marginBottom: 6,
    lineHeight: 1.5,
  },
  social: {
    display: 'flex',
    gap: 16,
    alignItems: 'center',
    padding: '20px 0',
  },
  socialLink: {
    fontSize: 12,
    color: '#aaa',
    textDecoration: 'none',
  },
  bottom: {
    background: '#1a1a1a',
    padding: '16px 24px',
    textAlign: 'center',
    fontSize: 12,
    color: '#666',
  },
}

export default Footer