import { defineMermaidSetup } from '@slidev/types'
import mermaid from 'mermaid/dist/mermaid.esm.mjs'
import { icons as logos } from '@iconify-json/logos'
import { icons as lineMd } from '@iconify-json/line-md'
import { icons as catppuccin } from '@iconify-json/catppuccin'
import { icons as mdi } from '@iconify-json/mdi'
import { icons as carbon } from '@iconify-json/carbon'
import { icons as twemoji } from '@iconify-json/twemoji'
mermaid.registerIconPacks([twemoji, carbon, mdi, logos, lineMd, catppuccin].map(icons => {
  return {
    name: icons.prefix,
    icons
  }
}));

export default defineMermaidSetup(() => {
  return {
    theme: 'neutral',
  }
})