import { NavLink } from 'react-router-dom'
import { colors } from '../../theme.js'

const navItems = [
  { path: '/investigacao/n2i',          label: 'N2i' },
  { path: '/investigacao/membros',      label: 'Membros' },
  { path: '/investigacao/projetos',     label: 'Projetos' },
  { path: '/investigacao/publicacoes',  label: 'Publicacoes' },
  { path: '/investigacao/eventos',      label: 'Eventos' },
  { path: '/investigacao/noticias',     label: 'Noticias' },
  { path: '/investigacao/areas',        label: 'Areas e Apoios' },
  { path: '/investigacao/condicao',     label: 'Condicao de membro' },
  { path: '/investigacao/basedados',    label: 'Bases de Dados Cientificas' },
]

function Sidebar() {
  return (
    <aside style={styles.sidebar}>
      <p style={styles.label}>INVESTIGACAO</p>
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className="sidebar-link"
          style={({ isActive }) => ({
            ...styles.link,
            color: isActive ? colors.orange : '#222',
            fontWeight: isActive ? 700 : 400,
            borderLeft: isActive ? '3px solid ' + colors.orange : '3px solid transparent',
            background: isActive ? '#FEF3E7' : 'transparent',
          })}
        >
          {item.label}
        </NavLink>
      ))}
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
  link: {
    display: 'block',
    padding: '9px 20px',
    fontSize: 14,
    textDecoration: 'none',
    transition: 'all .1s',
  },
}

export default Sidebar