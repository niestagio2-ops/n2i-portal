// ─── FOOTER INSTITUCIONAL ────────────────────────────────
// Replica o footer do website oficial do IPMAIA.
// Estrutura em duas partes:
//   1. Corpo escuro com colunas de links institucionais
//   2. Barra final com copyright
// ─────────────────────────────────────────────────────────

import { colors } from '../../theme.js'

// Colunas de links do footer
const colunas = [
  {
    titulo: 'IPMAIA',
    links: ['O IPMAIA', 'Orgaos de Governo', 'Regulamentos', 'Relatorios e Contas'],
  },
  {
    titulo: 'Ensino',
    links: ['Licenciaturas', 'Mestrados', 'CTesSP', 'Pos-Graduacoes'],
  },
  {
    titulo: 'Investigacao',
    links: ['N2i', 'Projetos', 'Publicacoes', 'Membros'],
  },
  {
    titulo: 'Contactos',
    links: ['Campus da Maia', '+351 229 866 100', 'geral@ipmaia.pt'],
  },
]

// Redes sociais
const redes = ['Facebook', 'Instagram', 'LinkedIn', 'YouTube']

function Footer() {
  return (
    <footer style={{ marginTop: 60 }}>

      {/* ── Corpo do footer ── */}
      <div style={{ background: '#2C2C2C', color: '#ccc' }}>
        <div style={styles.container}>

          {/* Grelha de colunas institucionais */}
          <div style={styles.grid}>
            {colunas.map((col) => (
              <div key={col.titulo}>
                <p style={styles.colTitulo}>{col.titulo}</p>
                {col.links.map((link) => (
                  <a key={link} href="#" className="footer-link" style={styles.link}>
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>

          {/* Redes sociais */}
          <div style={styles.social}>
            <span style={{ fontSize: 12, color: '#888' }}>Redes sociais:</span>
            {redes.map((rede) => (
              <a key={rede} href="#" className="footer-link" style={styles.socialLink}>
                {rede}
              </a>
            ))}
          </div>

        </div>

        {/* ── Barra final com copyright ── */}
        <div style={styles.bottom}>
          <span>© {new Date().getFullYear()} Instituto Politecnico da Maia — Todos os direitos reservados</span>
        </div>

      </div>

    </footer>
  )
}

// ─── ESTILOS DO FOOTER ────────────────────────────────────
const styles = {
  container:  { maxWidth: 1200, margin: '0 auto', padding: '40px 24px 0' },
  grid:       { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, paddingBottom: 24, borderBottom: '1px solid #444' },
  colTitulo:  { color: colors.orange, fontWeight: 700, fontSize: 13, marginBottom: 14, letterSpacing: 0.5 },
  link:       { display: 'block', color: '#aaa', fontSize: 13, textDecoration: 'none', marginBottom: 6, lineHeight: 1.5 },
  social:     { display: 'flex', gap: 16, alignItems: 'center', padding: '20px 0' },
  socialLink: { fontSize: 12, color: '#aaa', textDecoration: 'none' },
  bottom:     { background: '#1a1a1a', padding: '16px 24px', textAlign: 'center', fontSize: 12, color: '#666' },
}

export default Footer