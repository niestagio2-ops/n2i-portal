import { useState } from 'react'
import { publicacoes } from '../data/publicacoes.js'

function Publicacoes() {
  const [filtro, setFiltro] = useState('Todos')

  const tipos = ['Todos', 'Artigo', 'Conferencia', 'Livro']

  const tipoCores = {
    Artigo:     { bg: '#FEF3E7', text: '#b85c10' },
    Conferencia:{ bg: '#EAF3DE', text: '#3B6D11' },
    Livro:      { bg: '#E6F1FB', text: '#185FA5' },
  }

  const lista = publicacoes.filter((p) => filtro === 'Todos' || p.tipo === filtro)

  return (
    <div>
      <h1 style={styles.titulo}>Publicacoes Cientificas</h1>
      <p style={styles.sub}>Producao cientifica dos membros do N2i. Integracao futura com PlumX para metricas de impacto.</p>

      <div style={styles.filtros}>
        {tipos.map((t) => (
          <button key={t} onClick={() => setFiltro(t)} style={{ ...styles.btn, background: filtro === t ? '#E87722' : '#fff', color: filtro === t ? '#fff' : '#666', border: filtro === t ? '1.5px solid #E87722' : '1.5px solid #E5E5E5' }}>{t}</button>
        ))}
      </div>

      <div style={styles.lista}>
        {lista.map((pub) => (
          <div key={pub.id} style={styles.card}>
            <div style={styles.cardTopo}>
              <h3 style={styles.cardTitulo}>{pub.titulo}</h3>
              <div style={styles.badges}>
                <span style={{ ...styles.badge, background: tipoCores[pub.tipo]?.bg || '#eee', color: tipoCores[pub.tipo]?.text || '#444' }}>{pub.tipo}</span>
                <span style={styles.ano}>{pub.ano}</span>
              </div>
            </div>
            <p style={styles.autores}>{pub.autores}</p>
            <p style={styles.journal}>{pub.journal}</p>
            <div style={styles.cardRodape}>
              <a href={'https://doi.org/' + pub.doi} target="_blank" rel="noreferrer" style={styles.doi}>DOI: {pub.doi}</a>
              <span style={styles.plumx}>PlumX (integracao futura)</span>
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
  filtros: { display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' },
  btn: { padding: '6px 14px', borderRadius: 20, fontSize: 13, cursor: 'pointer', fontWeight: 500 },
  lista: { display: 'flex', flexDirection: 'column', gap: 16 },
  card: { background: '#fff', border: '1px solid #E5E5E5', borderRadius: 8, padding: '20px 24px' },
  cardTopo: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 8 },
  cardTitulo: { fontWeight: 700, fontSize: 15, color: '#222', flex: 1, lineHeight: 1.5 },
  badges: { display: 'flex', gap: 8, flexShrink: 0, alignItems: 'center' },
  badge: { padding: '2px 10px', borderRadius: 20, fontSize: 12, fontWeight: 600 },
  ano: { padding: '2px 10px', borderRadius: 20, fontSize: 12, fontWeight: 600, background: '#F7F7F7', color: '#666' },
  autores: { fontSize: 13, color: '#666', fontStyle: 'italic', marginBottom: 4 },
  journal: { fontSize: 13, color: '#666', marginBottom: 12 },
  cardRodape: { display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' },
  doi: { fontSize: 13, color: '#E87722', fontFamily: 'monospace' },
  plumx: { fontSize: 12, color: '#666', background: '#F7F7F7', padding: '2px 10px', borderRadius: 20, border: '1px solid #E5E5E5' },
}

export default Publicacoes