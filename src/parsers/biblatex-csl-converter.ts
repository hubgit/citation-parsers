import { BibLatexParser, CSLExporter } from 'biblatex-csl-converter'

export default {
  name: 'biblatex-csl-converter',
  url: 'https://github.com/fiduswriter/biblatex-csl-converter',
  key: 'citationKey',
  parse: async (input: string) => {
    const parser = new BibLatexParser(input, {
      processUnexpected: true,
      processUnknown: true,
    })
    parser.parse()

    const exporter = new CSLExporter(parser.bibDB)
    exporter.parse()

    return Object.values(exporter.cslDB)
  },
}
