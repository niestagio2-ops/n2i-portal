// ─── BREADCRUMB — CAMINHO DE NAVEGAÇÃO ───────────────────
// Mostra onde o utilizador está: Início > Investigação > Secção
// A secção activa recebe a cor laranja.
// Recebe a prop "pagina" do App.jsx com o nome da secção actual.
// ─────────────────────────────────────────────────────────

import { colors } from '../../theme.js'

function Breadcrumb({ pagina }) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <a href="#" style={styles.link}>Inicio</a>
        <span style={styles.sep}>›</span>
        <a href="#" style={styles.link}>Investigacao</a>
        <span style={styles.sep}>›</span>
        {/* Secção activa — destaque laranja */}
        <span style={styles.active}>{pagina}</span>
      </div>
    </div>
  )
}

// ─── ESTILOS DO BREADCRUMB ────────────────────────────────
const styles = {
  wrapper:   { background: '#F7F7F7', borderBottom: '1px solid #E5E5E5' },
  container: { maxWidth: 1200, margin: '0 auto', padding: '8px 24px', fontSize: 13, color: '#666', display: 'flex', alignItems: 'center', gap: 6 },
  link:      { color: '#666', textDecoration: 'none' },
  sep:       { color: '#aaa' },
  active:    { color: colors.orange, fontWeight: 600 },
}

export default Breadcrumb