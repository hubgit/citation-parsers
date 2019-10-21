import { parse } from 'astrocite-bibtex'

export default {
  name: 'Astrocite',
  url: 'https://github.com/dsifford/astrocite',
  parse: async (input: string) => parse(input),
}
