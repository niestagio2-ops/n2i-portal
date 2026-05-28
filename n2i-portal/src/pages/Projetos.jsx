import { useState } from 'react'
import { projetos } from '../data/projetos.js'

function Projetos() {
  const [filtro, setFiltro] = useState('Todos')

  const lista = projetos.filter((p) => filtro === 'Todos' || p.estado === filtro)

  return (
    <div>
      <h1 style={styles.titulo}>Projetos</h1>
      <p style={styles.sub}>Projetos de investigacao desenvolvidos pelos membros do N2i.</p>

      <div style={styles.filtros}>
        {['Todos', 'Em curso', 'Concluido'].map((op) => (
          <button key={op} onClick={() => setFiltro(op)} style={{ ...styles.btn, background: filtro === op ? '#E87722' : '#fff', color: filtro === op ? '#fff' : '#666', border: filtro === op ? '1.5px solid #E87722' : '1.5px solid #E5E5E5' }}>{op}</button>
        ))}
      </div>

      <div style={styles.lista}>
        {lista.map((p) => (
          <div key={p.id} style={styles.card}>
            <div style={styles.cardTopo}>
              <h3 style={styles.cardTitulo}>{p.titulo}</h3>
              <span style={{ ...styles.badge, background: p.estado === 'Em curso' ? '#EAF3DE' : '#F1EFE8', color: p.estado === 'Em curso' ? '#3B6D11' : '#5F5E5A' }}>{p.estado}</span>
            </div>
            <p style={styles.desc}>{p.descricao}</p>
            <div style={styles.meta}>
              <span><strong>Financiamento:</strong> {p.financiamento}</span>
              <span><strong>Periodo:</strong> {p.inicio} — {p.fim}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const styles = {
  titulo: { fontSize: 22, fontWeight: 700, color: '#222', borderBottom: '3px solid #E87722', paddingBottom: 10, display: 'inline-block', marginBottom: 4 },
  sub: { fontSize: 14, color: '#666', marginTop: 10, marginBottom: 24 },
  filtros: { display: 'flex', gap: 8, marginBottom: 24 },
  btn: { padding: '6px 14px', borderRadius: 20, fontSize: 13, cursor: 'pointer', fontWeight: 500 },
  lista: { display: 'flex', flexDirection: 'column', gap: 16 },
  card: { background: '#fff', border: '1px solid #E5E5E5', borderRadius: 8, padding: '20px 24px' },
  cardTopo: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 10 },
  cardTitulo: { fontWeight: 700, fontSize: 15, color: '#222', flex: 1 },
  badge: { padding: '2px 10px', borderRadius: 20, fontSize: 12, fontWeight: 600, flexShrink: 0 },
  desc: { fontSize: 14, color: '#666', lineHeight: 1.6, marginBottom: 12 },
  meta: { display: 'flex', gap: 24, fontSize: 13, color: '#444' },
}

export default Projetos