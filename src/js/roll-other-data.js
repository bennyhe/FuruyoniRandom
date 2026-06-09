import {
  sakuraWithData,
  // sakuraStoryData,
  sakuraOtherData
} from './sub/sakura/sakura-with-card'

import sakuraCMData from './sub/sakura/sakura-cmdata.js'
import decks2022 from './sub/sakura/decks/2022.js'
import decks2024 from './sub/sakura/decks/2024.js'
import decks2026 from './sub/sakura/decks/2026.js'
import sakuraChangeCardsData from './sub/sakura/sakura-changedata.js'

window.sakuraOtherData = {
  sakuraWithData,
  sakuraStoryData: [],
  sakuraOtherData,
  sakuraPlayerDeckData: [...decks2022, ...decks2024, ...decks2026].reverse(),
  sakuraPlayerDeckDataAnySeason: '再演S1',
  sakuraCMData,
  sakuraChangeCardsData
}