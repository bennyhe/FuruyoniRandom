import {
  sakuraWithData,
  // sakuraStoryData,
  sakuraOtherData
} from './sub/sakura/sakura-with-card'

import sakuraCMData from './sub/sakura/sakura-cmdata.js'
import decks2022 from './sub/sakura/decks_2022.js'
import sakuraChangeCardsData from './sub/sakura/sakura-changedata.js'

window.sakuraOtherData = {
  sakuraWithData,
  sakuraStoryData: [],
  sakuraOtherData,
  sakuraPlayerDeckData: decks2022.reverse(),
  sakuraCMData,
  sakuraChangeCardsData
}