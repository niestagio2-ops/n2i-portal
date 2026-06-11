// ─── HEADER INSTITUCIONAL ────────────────────────────────
// Replica o header do website oficial do IPMAIA.
// Duas barras:
//   1. Barra superior cinza — links utilitários
//   2. Navbar laranja — nome institucional + navegação principal
// ─────────────────────────────────────────────────────────

import { colors } from '../../theme.js'

// Links da barra superior
const TOP_LINKS = ['Instituicoes', 'e-Servicos', 'Area Privada', 'EN']

// Links da navbar principal — "Investigacao" é o activo
const NAV_LINKS = ['O IPMAIA', 'Ensino', 'Internacional', 'Investigacao', 'Unidades', 'Viver']

function Header() {
  return (
    <header>

      {/* ── Barra superior cinza ── */}
      <div style={{ background: '#F5F5F5', borderBottom: '1px solid #E5E5E5' }}>
        <div style={styles.container}>
          <div style={styles.topBar}>
            {TOP_LINKS.map((item) => (
              <a key={item} href="#" style={styles.topLink}>{item}</a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Navbar laranja ── */}
      <div style={{ background: colors.orange }}>
        <div style={styles.container}>
          <div style={styles.navbar}>

            {/* Nome institucional */}
            <div style={styles.brand}>
              <span style={styles.brandSub}>POLITECNICO DA MAIA</span>
              <span style={styles.brandName}>IPMAIA</span>
            </div>

            {/* Links de navegação — "Investigacao" tem destaque */}
            <nav style={styles.nav}>
              {NAV_LINKS.map((item) => (
                <a key={item} href="#" className="nav-link-header" style={{
                  ...styles.navLink,
                  fontWeight: item === 'Investigacao' ? 700 : 400,
                  borderBottom: item === 'Investigacao' ? '3px solid #fff' : '3px solid transparent',
                }}>
                  {item}
                </a>
              ))}
            </nav>

          </div>
        </div>
      </div>

    </header>
  )
}

// ─── ESTILOS DO HEADER ────────────────────────────────────
const styles = {
  container: { maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center' },
  topBar:    { display: 'flex', justifyContent: 'flex-end', gap: 24, fontSize: 12, color: '#666', padding: '6px 0', width: '100%' },
  topLink:   { color: '#666', textDecoration: 'none' },
  navbar:    { display: 'flex', alignItems: 'center', width: '100%' },
  brand:     { display: 'flex', flexDirection: 'column', paddingRight: 32, paddingTop: 10, paddingBottom: 10 },
  brandSub:  { fontSize: 11, color: 'rgba(255,255,255,0.85)', letterSpacing: 1 },
  brandName: { fontSize: 22, color: '#fff', fontWeight: 700 },
  nav:       { display: 'flex' },
  navLink:   { padding: '18px 16px', color: 'rgba(255,255,255,0.88)', fontSize: 14, textDecoration: 'none' },
}

export default Header