import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import './style.scss'
function AtribuNivel({name,value}) {
  return (
    <div className="AtribuNivel">
        <p className="TitleContent">{name}</p>
        <ProgressBar variant='success' now={value} label={value} animated={false} />
    </div>
  )
}

export default AtribuNivel