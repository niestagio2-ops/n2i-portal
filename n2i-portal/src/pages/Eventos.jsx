// ─── PÁGINA EVENTOS ───────────────────────────────────────
// Eventos científicos e académicos do N2i.
// Card com bloco de data visual laranja + detalhes do evento.
// ─────────────────────────────────────────────────────────

const IconClock = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
)

const IconPin = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)

const eventos = [
  { id: 1, titulo: 'Semana da Investigacao IPMAIA 2025',                   data: '2025-03-10', hora: '09:00', local: 'Auditorio Principal - IPMAIA',    descricao: 'Evento anual de partilha de resultados de investigacao com sessoes plenarias e workshops.' },
  { id: 2, titulo: 'Workshop: Escrita Cientifica e Publicacao Internacional', data: '2025-02-20', hora: '14:00', local: 'Sala de Reunioes N2i',          descricao: 'Workshop pratico sobre boas praticas de escrita cientifica e submissao a revistas indexadas.' },
  { id: 3, titulo: 'Conferencia Internacional de Inovacao e Tecnologia',   data: '2025-04-05', hora: '10:00', local: 'Centro de Congressos da Maia',    descricao: 'Conferencia interdisciplinar com investigadores nacionais e internacionais.' },
  { id: 4, titulo: 'N2i Open Day - Visitas e Candidaturas',                data: '2025-05-15', hora: '10:00', local: 'IPMAIA, Campus da Maia',          descricao: 'Dia aberto para candidatos a bolsas de investigacao e novos membros colaboradores.' },
]

const meses = ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez']

function Eventos() {
  return (
    <div>
      <h1 style={styles.titulo}>Eventos</h1>
      <p style={styles.sub}>Eventos cientificos e academicos organizados ou com participacao do N2i.</p>
      <div style={styles.lista}>
        {eventos.map((ev) => {
          const partes = ev.data.split('-')
          return (
            <div key={ev.id} style={styles.card}>
              <div style={styles.dataBox}>
                <span style={styles.dia}>{partes[2]}</span>
                <span style={styles.mes}>{meses[parseInt(partes[1]) - 1]}</span>
                <span style={styles.anoData}>{partes[0]}</span>
              </div>
              <div style={styles.conteudo}>
                <h3 style={styles.cardTitulo}>{ev.titulo}</h3>
                <p style={styles.desc}>{ev.descricao}</p>
                <div style={styles.meta}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><IconClock /> {ev.hora}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><IconPin /> {ev.local}</span>
                </div>
                <button style={styles.btn}>Saber mais</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const styles = {
  titulo:     { fontSize: 22, fontWeight: 700, color: '#222', borderBottom: '3px solid #E87722', paddingBottom: 10, display: 'inline-block', marginBottom: 4 },
  sub:        { fontSize: 14, color: '#666', marginTop: 10, marginBottom: 24 },
  lista:      { display: 'flex', flexDirection: 'column', gap: 16 },
  card:       { background: '#fff', border: '1px solid #E5E5E5', borderRadius: 8, padding: '20px 24px', display: 'flex', gap: 20, alignItems: 'flex-start' },
  dataBox:    { minWidth: 64, textAlign: 'center', background: '#E87722', color: '#fff', borderRadius: 8, padding: '10px 8px', flexShrink: 0, display: 'flex', flexDirection: 'column' },
  dia:        { fontSize: 24, fontWeight: 700, lineHeight: 1 },
  mes:        { fontSize: 11, textTransform: 'uppercase', letterSpacing: 0.5, marginTop: 2 },
  anoData:    { fontSize: 11, opacity: 0.85, marginTop: 2 },
  conteudo:   { flex: 1 },
  cardTitulo: { fontWeight: 700, fontSize: 15, color: '#222', marginBottom: 8 },
  desc:       { fontSize: 14, color: '#666', lineHeight: 1.6, marginBottom: 10 },
  meta:       { display: 'flex', gap: 20, fontSize: 13, color: '#666', marginBottom: 12 },
  btn:        { padding: '7px 16px', background: 'transparent', color: '#E87722', border: '1.5px solid #E87722', borderRadius: 6, fontSize: 13, fontWeight: 600, cursor: 'pointer' },
}

export default Eventos