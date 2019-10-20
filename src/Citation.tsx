import React, { useEffect, useState } from 'react'
import { Cite } from '@citation-js/core'
import '@citation-js/plugin-bibtex'
import { Item } from './Item'

export const Citation: React.FC<{
  input: string
}> = React.memo(({ input }) => {
  const [items, setItems] = useState<CSL.Data[]>()
  const [error, setError] = useState<string>()

  useEffect(() => {
    if (input) {
      setError(undefined)

      try {
        const result = new Cite(input, {
          forceType: '@bibtex/text',
          generateGraph: false,
        })
        setItems(result.data)
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

  console.log(items)

  return (
    <section>
      <h2>Citation.js</h2>
      <ol>
        {items.map(item => (
          <li key={item.id}>
            <Item data={item} />
          </li>
        ))}
      </ol>
    </section>
  )
})
