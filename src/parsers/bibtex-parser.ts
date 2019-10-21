// eslint-disable-next-line @typescript-eslint/no-var-requires
const parse = require('bibtex-parser')

export default {
  name: 'bibtex-parser',
  url: 'https://github.com/mikolalysenko/bibtex-parser',
  parse: async (input: string) => parse(input),
}
