import {
  sakuraWithData,
  // sakuraStoryData,
  sakuraOtherData
} from './sakura-with-card'

import sakuraCMData from './sakura-cmdata.js'
// import decks2022 from './decks/2022.js'
// import decks2024 from './decks/2024.js'
import decks2026 from './decks/2026_re.js'
import sakuraChangeCardsData from './sakura-changedata.js'

window.sakuraOtherData = {
  sakuraWithData,
  sakuraStoryData: [],
  sakuraOtherData,
  sakuraPlayerDeckData: [...decks2026].reverse(),
  sakuraPlayerDeckDataAnySeason: '再演S1',
  sakuraCMData,
  sakuraChangeCardsData
}