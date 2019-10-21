// @ts-ignore
import BibtexParser from 'bib2json'

export default {
  name: 'bib2json',
  url: 'https://github.com/mayanklahiri/bib2json/',
  parse: async (input: string) => {
    const result = BibtexParser(input)

    return result.entries
  },
}
