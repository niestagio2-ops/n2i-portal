import { colors } from '../theme.js'
import logoN2i from '../assets/logo-n2i.png'

function N2i() {
  return (
    <div>

      {/* Topo: logo + texto institucional */}
      <div style={styles.topo} className="topo-grid">

        <div style={styles.logoBox}>
            <img src={logoN2i} alt="Logo N2i" style={{ width: 140 }} />
        </div>

        <div style={styles.intro}>
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

      {/* Objetivos */}
      <div style={styles.card}>
        <h2 style={styles.cardTitulo}>Objetivos Fundamentais</h2>
        <p style={{ color: colors.textSec, fontSize: 14, marginBottom: 20 }}>
          O N2i desenvolve as suas atividades considerando quatro objetivos:
        </p>
        {[
          'Desenvolver uma cultura vibrante de investigacao.',
          'Promover a produtividade e a qualidade da investigacao.',
          'Aumentar o nivel de colaboracao e de interdisciplinaridade.',
          'Perspetivar a investigacao proxima as comunidades.',
        ].map((obj, i) => (
          <div key={i} style={styles.objItem}>
            <span style={styles.objNum}>{i + 1}</span>
            <span style={{ fontSize: 15, lineHeight: 1.6 }}>{obj}</span>
          </div>
        ))}
      </div>

      {/* Contactos */}
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

const styles = {
  topo: {
    display: 'grid',
    gridTemplateColumns: '200px 1fr',
    gap: 40,
    marginBottom: 32,
    alignItems: 'start',
  },
  logoBox: {
    textAlign: 'center',
    padding: '24px 16px',
    border: '1px solid #E5E5E5',
    borderRadius: 8,
  },
  logoNome: {
    fontWeight: 700,
    fontSize: 22,
    color: '#222',
    marginTop: 10,
  },
  logoSub: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
    lineHeight: 1.5,
  },
  intro: {
    paddingTop: 4,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 700,
    color: '#222',
    borderBottom: '3px solid #E87722',
    paddingBottom: 10,
    display: 'inline-block',
    marginBottom: 16,
  },
  texto: {
    fontSize: 15,
    lineHeight: 1.7,
    color: '#222',
    marginBottom: 12,
  },
  card: {
    background: '#F7F7F7',
    border: '1px solid #E5E5E5',
    borderRadius: 8,
    padding: '20px 24px',
    marginBottom: 16,
  },
  cardTitulo: {
    fontSize: 17,
    fontWeight: 700,
    color: '#222',
    marginBottom: 16,
  },
  objItem: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: 14,
    gap: 12,
  },
  objNum: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 28,
    height: 28,
    borderRadius: '50%',
    background: '#E87722',
    color: '#fff',
    fontWeight: 700,
    fontSize: 13,
    flexShrink: 0,
  },
  contactos: {
    background: '#FEF3E7',
    border: '1px solid #f0c080',
    borderRadius: 8,
    padding: '20px 24px',
    marginTop: 16,
  },
  contactosGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 12,
    fontSize: 14,
    color: '#222',
    marginTop: 12,
  },
}

export default N2i