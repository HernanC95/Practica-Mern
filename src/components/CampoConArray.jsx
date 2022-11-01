import React from 'react'

export default function CampoConArray(props) {
  let {titulo }= props
  let {datos} = props
    return (
    <div className='datos white flex a-center' >
    <p>{titulo}: {datos}</p>
  </div>
  )
}
