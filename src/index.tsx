import React, { useState } from 'react'

export function Component(props: any) {
  const [count, setCount] = useState(1)
  return (
    <div style={props.style}>
      <p>Hello from reusable component!</p>
      <p>{ count }</p>
      <button onClick={ () => setCount(count + 1) }>Count up!</button>
    </div>
  )
}
