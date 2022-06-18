import { promises } from '@retorquere/bibtex-parser'

export default {
  name: '@retorquere/bibtex-parser',
  url: 'https://github.com/retorquere/bibtex-parser',
  parse: async (input: string) => {
    const result = await promises.parse(input)

    return result.entries
  },
}
