// ─── TOKENS DE DESIGN — PORTAL N2i / IPMAIA ──────────────
// Ficheiro central de cores e estilos.
// Edita aqui para alterar o design em todo o projeto.
// Importa com: import { colors } from '../theme.js'
// ─────────────────────────────────────────────────────────

export const colors = {
  orange:      '#E87722',  // cor principal IPMAIA — usada em botões, títulos, acentos
  orangeDark:  '#c96218',  // hover e estados activos
  orangeLight: '#FEF3E7',  // fundos suaves — cards activos, alertas

  bgWhite:     '#FFFFFF',  // fundo principal
  bgAlt:       '#F7F7F7',  // fundo alternativo de secções

  textMain:    '#222222',  // texto principal
  textSec:     '#666666',  // texto secundário e legendas

  border:      '#E5E5E5',  // bordas e divisores
}

// Tipografia institucional — apenas system fonts, sem Google Fonts
export const font = "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"