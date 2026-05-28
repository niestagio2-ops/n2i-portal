import { colors } from '../../theme.js'

const navItems = [
  { key: 'n2i',        label: 'N2i' },
  { key: 'membros',    label: 'Membros' },
  { key: 'projetos',   label: 'Projetos' },
  { key: 'publicacoes',label: 'Publicacoes' },
  { key: 'eventos',    label: 'Eventos' },
  { key: 'noticias',   label: 'Noticias' },
  { key: 'areas',      label: 'Areas e Apoios' },
  { key: 'condicao',   label: 'Condicao de membro' },
  { key: 'basesdados', label: 'Bases de Dados Cientificas' },
]

function Sidebar({ ativo, setAtivo }) {
  return (
    <aside style={styles.sidebar}>

      <p style={styles.label}>INVESTIGACAO</p>

      {navItems.map((item) => {
        const isAtivo = ativo === item.key
        return (
          <button
            key={item.key}
            onClick={() => setAtivo(item.key)}
            style={{
              ...styles.btn,
              color: isAtivo ? colors.orange : '#222222',
              fontWeight: isAtivo ? 700 : 400,
              borderLeft: isAtivo ? `3px solid ${colors.orange}` : '3px solid transparent',
              background: isAtivo ? '#FEF3E7' : 'transparent',
            }}
          >
            {item.label}
          </button>
        )
      })}

    </aside>
  )
}

const styles = {
  sidebar: {
    width: 220,
    flexShrink: 0,
    borderRight: '1px solid #E5E5E5',
    background: '#ffffff',
    paddingTop: 8,
  },
  label: {
    fontSize: 11,
    fontWeight: 700,
    color: '#666',
    letterSpacing: 1,
    padding: '12px 20px 8px',
    textTransform: 'uppercase',
  },
  btn: {
    display: 'block',
    width: '100%',
    textAlign: 'left',
    padding: '9px 20px',
    fontSize: 14,
    border: 'none',
    cursor: 'pointer',
    transition: 'all .1s',
  },
}

export default Sidebar