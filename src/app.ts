import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './app.scss'
import 'uno.css'

const App = createApp({
  onShow(options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(createPinia())

export default App
