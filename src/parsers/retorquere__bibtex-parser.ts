import { parse } from '@retorquere/bibtex-parser'

export default {
  name: '@retorquere/bibtex-parser',
  url: 'https://github.com/retorquere/bibtex-parser',
  parse: async (input: string) => {
    const result = await parse(input, { async: true })

    return result.entries
  },
}
