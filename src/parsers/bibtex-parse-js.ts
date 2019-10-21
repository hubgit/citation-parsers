// @ts-ignore
import { toJSON } from 'bibtex-parse-js'

export default {
  name: 'bibtexParseJs',
  url: 'https://github.com/ORCID/bibtexParseJs',
  parse: async (input: string) => toJSON(input),
}
