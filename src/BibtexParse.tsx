import React, { useEffect, useState } from 'react'
import { toJSON } from 'bibtex-parse-js'
import { Item } from './Item'

export const BibtexParse: React.FC<{
  input: string
}> = React.memo(({ input }) => {
  const [items, setItems] = useState<CSL.Data[]>()
  const [error, setError] = useState<string>()

  useEffect(() => {
    if (input) {
      setError(undefined)

      try {
        const result = toJSON(input)
        setItems(result)
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
      <h2>bibtexParse</h2>
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
