// ─── COMPONENTE RAIZ DA APLICAÇÃO ────────────────────────
// Monta o layout principal: Header, Breadcrumb, Sidebar,
// conteúdo da página activa e Footer.
// O React Router decide qual página renderizar pelo URL.
// ─────────────────────────────────────────────────────────

import { Routes, Route, Navigate, useLocation } from 'react-router-dom'

// Componentes de layout — aparecem em todas as páginas
import Header     from './components/layout/Header.jsx'
import Footer     from './components/layout/Footer.jsx'
import Breadcrumb from './components/layout/Breadcrumb.jsx'
import Sidebar    from './components/layout/Sidebar.jsx'

// Páginas — cada secção do portal
import N2i        from './pages/N2i.jsx'
import Membros    from './pages/Membros.jsx'
import Projetos   from './pages/Projetos.jsx'
import Publicacoes from './pages/Publicacoes.jsx'
import Eventos    from './pages/Eventos.jsx'
import Noticias   from './pages/Noticias.jsx'
import Areas      from './pages/Areas.jsx'
import Condicao   from './pages/Condicao.jsx'
import BaseDados  from './pages/BaseDados.jsx'

function App() {
  // Lê o URL actual para passar à Sidebar e ao Breadcrumb
  const location = useLocation()
  const seccao = location.pathname.replace('/investigacao/', '') || 'n2i'

  return (
    <div>
      {/* Barra de topo e navegação institucional */}
      <Header />

      {/* Caminho de navegação: Início > Investigação > Secção */}
      <Breadcrumb pagina={seccao} />

      {/* Layout de duas colunas: Sidebar + Conteúdo */}
      <div style={styles.wrapper} className="layout-wrapper">

        {/* Navegação lateral esquerda */}
        <Sidebar ativo={seccao} />

        {/* Área de conteúdo — muda conforme o URL */}
        <main style={styles.main} className="main-content">
          <Routes>
            {/* Redireciona / para a página principal do N2i */}
            <Route path="/" element={<Navigate to="/investigacao/n2i" replace />} />

            {/* Rotas de cada secção */}
            <Route path="/investigacao/n2i"          element={<N2i />} />
            <Route path="/investigacao/membros"      element={<Membros />} />
            <Route path="/investigacao/projetos"     element={<Projetos />} />
            <Route path="/investigacao/publicacoes"  element={<Publicacoes />} />
            <Route path="/investigacao/eventos"      element={<Eventos />} />
            <Route path="/investigacao/noticias"     element={<Noticias />} />
            <Route path="/investigacao/areas"        element={<Areas />} />
            <Route path="/investigacao/condicao"     element={<Condicao />} />
            <Route path="/investigacao/basedados"    element={<BaseDados />} />
          </Routes>
        </main>

      </div>

      {/* Rodapé institucional */}
      <Footer />
    </div>
  )
}

// ─── ESTILOS DO LAYOUT PRINCIPAL ─────────────────────────
const styles = {
  // Contentor que limita a largura e coloca Sidebar + Main lado a lado
  wrapper: {
    maxWidth: 1200,
    margin: '0 auto',
    display: 'flex',
    minHeight: '70vh',
  },
  // Área de conteúdo ocupa o espaço restante após a Sidebar
  main: {
    flex: 1,
    padding: '32px 36px',
    background: '#ffffff',
  },
}

export default App