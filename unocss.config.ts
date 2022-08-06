import {
  defineConfig,
  presetIcons,
} from 'unocss'
import presetWeapp from 'unocss-preset-weapp'

export default defineConfig({
  presets: [
    presetWeapp(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
})
