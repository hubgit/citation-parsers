// @ts-ignore
import { toJSON } from '@orcid/bibtex-parse-js'

export default {
  name: '@orcid/bibtex-parse-js',
  url: 'https://github.com/ORCID/bibtexParseJs',
  parse: async (input: string) => toJSON(input),
}
