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

        const data = parser.parse()

        const exporter = new CSLExporter(data)
        exporter.parse()
        setItems(Object.values(exporter.bibDB.entries)) // TODO: CSL
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
      <h2>BibLatexCslConverter</h2>
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
