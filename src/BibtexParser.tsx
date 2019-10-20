import React, { useEffect, useState } from 'react'
import { parse } from '@retorquere/bibtex-parser'
import { Item } from './Item'

export const BibtexParser: React.FC<{
  input: string
}> = React.memo(({ input }) => {
  const [items, setItems] = useState<CSL.Data[]>()
  const [error, setError] = useState<string>()

  useEffect(() => {
    if (input) {
      setError(undefined)

      try {
        parse(input, { async: true }).then(result => {
          setItems(result.entries)
        })
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
        <a href={'https://github.com/retorquere/bibtex-parser'}>bibtex-parser</a>
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
