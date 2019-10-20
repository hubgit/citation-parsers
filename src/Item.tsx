import React from 'react'
import stringify from 'json-stable-stringify'

export const Item: React.FC<{ data: CSL.Data }> = React.memo(({ data }) => {
  console.log(data)
  return (
    <pre>
      {stringify(data, {
        cmp: (a, b) => (a.key < b.key ? -1 : 1),
        space: 2,
      })}
    </pre>
  )
})
