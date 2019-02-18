import React, { useState } from 'react'

export const Counter: React.StatelessComponent<any> = (props) => {
  const [count, setCount] = useState(props.count || 1)
  return (
    <div style={props.style}>
      <p>{ count }</p>
      <button onClick={ () => setCount(count + 1) }>Count up!</button>
    </div>
  )
}
