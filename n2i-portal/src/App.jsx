import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import Breadcrumb from './components/layout/Breadcrumb.jsx'
import Sidebar from './components/layout/Sidebar.jsx'
import N2i from './pages/N2i.jsx'
import Membros from './pages/Membros.jsx'
import Projetos from './pages/Projetos.jsx'
import Publicacoes from './pages/Publicacoes.jsx'
import Eventos from './pages/Eventos.jsx'
import Noticias from './pages/Noticias.jsx'
import Areas from './pages/Areas.jsx'
import Condicao from './pages/Condicao.jsx'
import BaseDados from './pages/BaseDados.jsx'

function App() {
  const location = useLocation()
  const seccao = location.pathname.replace('/investigacao/', '') || 'n2i'

  return (
    <div>
      <Header />
      <Breadcrumb pagina={seccao} />

      <div style={styles.wrapper} className="layout-wrapper">
        <Sidebar ativo={seccao} />
        <main style={styles.main} className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/investigacao/n2i" replace />} />
            <Route path="/investigacao/n2i" element={<N2i />} />
            <Route path="/investigacao/membros" element={<Membros />} />
            <Route path="/investigacao/projetos" element={<Projetos />} />
            <Route path="/investigacao/publicacoes" element={<Publicacoes />} />
            <Route path="/investigacao/eventos" element={<Eventos />} />
            <Route path="/investigacao/noticias" element={<Noticias />} />
            <Route path="/investigacao/areas" element={<Areas />} />
            <Route path="/investigacao/condicao" element={<Condicao />} />
            <Route path="/investigacao/basedados" element={<BaseDados />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </div>
  )
}

const styles = {
  wrapper: { maxWidth: 1200, margin: '0 auto', display: 'flex', minHeight: '70vh' },
  main: { flex: 1, padding: '32px 36px', background: '#ffffff' },
}

export default App