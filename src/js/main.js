import { mySwiper } from './components/slider'
import { navigation } from './components/navigation'
import popup from './components/popup'

document.addEventListener(`DOMContentLoaded`, function () {
  mySwiper.init(true)
  popup()
  navigation()
})
