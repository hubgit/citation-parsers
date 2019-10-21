// @ts-ignore
import { Cite } from '@citation-js/core'
import '@citation-js/plugin-bibtex'

export default {
  name: 'Citation.js',
  url: 'https://github.com/larsgw/citation.js',
  parse: async (input: string) => {
    const result = await Cite.async(input, {
      forceType: '@bibtex/text',
      generateGraph: false,
    })

    return result.data
  },
}
