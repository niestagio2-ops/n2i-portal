// ─── PÁGINA MEMBROS ───────────────────────────────────────
// Lista os investigadores do N2i em cards.
// Funcionalidades:
//   - Filtro por escola (ESTGM, ESEA, ESSJD)
//   - Pesquisa por nome em tempo real
//   - Link para perfil CIÊNCIAVITAE de cada membro
//
// INTEGRAÇÃO FUTURA: substituir dados mock por API CIÊNCIAVITAE
// ─────────────────────────────────────────────────────────

import { useState } from 'react'
import { membros } from '../data/membros.js'

// Opções de filtro por escola
const escolas = ['Todos', 'ESTGM', 'ESEA', 'ESSJD']

function Membros() {
  // Estado do filtro por escola
  const [filtroEscola, setFiltroEscola] = useState('Todos')
  // Estado da pesquisa por nome
  const [pesquisa, setPesquisa] = useState('')

  // Filtra membros por escola E por nome em simultâneo
  const membrosFiltrados = membros.filter((m) => {
    const escolaOk   = filtroEscola === 'Todos' || m.escola === filtroEscola
    const pesquisaOk = pesquisa === '' || m.nome.toLowerCase().includes(pesquisa.toLowerCase())
    return escolaOk && pesquisaOk
  })

  return (
    <div>
      <h1 style={styles.titulo}>Membros</h1>
      <p style={styles.subtitulo}>Investigadores integrados e colaboradores do N2i.</p>

      {/* ── Barra de filtros ── */}
      <div style={styles.filtros}>
        {/* Campo de pesquisa por nome */}
        <input
          type="text"
          placeholder="Pesquisar por nome..."
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
          style={styles.input}
        />
        {/* Botões de filtro por escola */}
        <div style={styles.botoesFiltro}>
          {escolas.map((escola) => (
            <button key={escola} onClick={() => setFiltroEscola(escola)} style={{ ...styles.filtroBotao, background: filtroEscola === escola ? '#E87722' : '#fff', color: filtroEscola === escola ? '#fff' : '#666', border: filtroEscola === escola ? '1.5px solid #E87722' : '1.5px solid #E5E5E5' }}>
              {escola}
            </button>
          ))}
        </div>
      </div>

      {/* ── Grid de cards dos membros ── */}
      <div style={styles.grid}>
        {membrosFiltrados.map((membro) => (
          <div key={membro.id} style={styles.card}>
            {/* Avatar com iniciais do nome */}
            <div style={styles.avatar}>
              {membro.nome.split(' ').slice(0, 2).map((p) => p[0]).join('')}
            </div>
            <p style={styles.nome}>{membro.nome}</p>
            <p style={styles.funcao}>{membro.funcao}</p>
            <p style={styles.escola}>{membro.escola}</p>
            <div style={styles.cardDivisor} />
            {/* Link para perfil CIÊNCIAVITAE */}
            <a href={'https://www.cienciavitae.pt/portal/' + membro.cienciavitae} target="_blank" rel="noreferrer" style={styles.cvBtn}>
              Ver perfil CIENCIAVITAE
            </a>
          </div>
        ))}
        {/* Mensagem quando nenhum membro corresponde aos filtros */}
        {membrosFiltrados.length === 0 && (
          <p style={{ color: '#666', fontSize: 14 }}>Nenhum membro encontrado.</p>
        )}
      </div>
    </div>
  )
}

// ─── ESTILOS DA PÁGINA MEMBROS ────────────────────────────
const styles = {
  titulo:       { fontSize: 22, fontWeight: 700, color: '#222', borderBottom: '3px solid #E87722', paddingBottom: 10, display: 'inline-block', marginBottom: 4 },
  subtitulo:    { fontSize: 14, color: '#666', marginTop: 10, marginBottom: 24 },
  filtros:      { display: 'flex', gap: 12, marginBottom: 24, flexWrap: 'wrap', alignItems: 'center' },
  input:        { padding: '8px 12px', border: '1px solid #E5E5E5', borderRadius: 6, fontSize: 14, color: '#222', width: 220, outline: 'none' },
  botoesFiltro: { display: 'flex', gap: 8 },
  filtroBotao:  { padding: '6px 14px', borderRadius: 20, fontSize: 13, cursor: 'pointer', fontWeight: 500 },
  grid:         { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 },
  card:         { background: '#fff', border: '1px solid #E5E5E5', borderRadius: 8, padding: '20px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 6 },
  avatar:       { width: 56, height: 56, borderRadius: '50%', background: '#FEF3E7', color: '#E87722', fontWeight: 700, fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 4 },
  nome:         { fontWeight: 700, fontSize: 14, color: '#222', lineHeight: 1.4 },
  funcao:       { fontSize: 12, color: '#666' },
  escola:       { fontSize: 12, color: '#666' },
  cardDivisor:  { width: '100%', height: 1, background: '#E5E5E5', margin: '8px 0' },
  cvBtn:        { fontSize: 12, color: '#E87722', fontWeight: 600, textDecoration: 'none', border: '1.5px solid #E87722', borderRadius: 6, padding: '6px 12px' },
}

export default Membros