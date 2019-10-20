import React, { useEffect, useState } from 'react'
import { BibLatexParser, CSLExporter } from 'biblatex-csl-converter'
import { Item } from './Item'

export const BibLatexCslConverter: React.FC<{
  input: string
}> = React.memo(({ input }) => {
  const [items, setItems] = useState<CSL.Data[]>()
  const [error, setError] = useState<string>()

  useEffect(() => {
    if (input) {
      setError(undefined)

      try {
        const parser = new BibLatexParser(input, {
          processUnexpected: true,
          processUnknown: true,
        })

        parser.parse()

        const exporter = new CSLExporter(parser.bibDB)
        exporter.parse()

        setItems(Object.values(exporter.cslDB))
      } catch (error) {
        setError(error.message)
      }
    }
  }, [input])

  if (!items) {
    return null
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <section>
      <h2>
        <a href={'https://github.com/fiduswriter/biblatex-csl-converter'}>
          biblatex-csl-converter
        </a>
      </h2>
      <ol>
        {items.map(item => (
          <li key={item.citationKey}>
            <Item data={item} />
          </li>
        ))}
      </ol>
    </section>
  )
})
