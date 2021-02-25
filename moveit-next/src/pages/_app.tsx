//aqui ficam todas as funcionalidades que irão se repetir no desenvolvimento e é recalculado para o novo processamento

import '../styles/global.css'

import { ChallengesProvider } from '../contexts/ChallengesContext';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
