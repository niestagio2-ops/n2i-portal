import { useState } from 'react'
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
import BasesDados from './pages/BaseDados.jsx'

function App() {
  const [seccao, setSeccao] = useState('n2i')

  function renderSeccao() {
    if (seccao === 'n2i')         return <N2i />
    if (seccao === 'membros')     return <Membros />
    if (seccao === 'projetos')    return <Projetos />
    if (seccao === 'publicacoes') return <Publicacoes />
    if (seccao === 'eventos')     return <Eventos />
    if (seccao === 'noticias')    return <Noticias />
    if (seccao === 'areas')       return <Areas />
    if (seccao === 'condicao')    return <Condicao />
    if (seccao === 'basesdados')  return <BasesDados />
    return null
  }

  return (
    <div>
      <Header />
      <Breadcrumb pagina={seccao} />
      <div style={styles.wrapper}>
        <Sidebar ativo={seccao} setAtivo={setSeccao} />
        <main style={styles.main}>
          {renderSeccao()}
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