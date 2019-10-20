import React, { useEffect, useState } from 'react'
import { parse } from 'astrocite-bibtex'
import { Item } from './Item'

export const Astrocite: React.FC<{
  input: string
}> = React.memo(({ input }) => {
  const [items, setItems] = useState<CSL.Data[]>()
  const [error, setError] = useState<string>()

  useEffect(() => {
    if (input) {
      setError(undefined)

      try {
        const result = parse(input)
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
      <h2>
        <a href={'https://github.com/dsifford/astrocite'}>astrocite</a>
      </h2>
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
