import { parseBibFile } from 'bibtex'

export default {
  name: 'bibtex',
  url: 'https://github.com/digitalheir/bibtex-js',
  parse: async (input: string) => parseBibFile(input),
}
