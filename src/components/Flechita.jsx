import React from 'react'

export default function Flechita(props) {
  let {verbo}=props
  let {estilo}=props
    return (
    <>
    <div className={`gray flecha ${estilo} flex j-center a-center`}>{verbo}</div>
    </>
  )
}
