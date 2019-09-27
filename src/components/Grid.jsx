import React from 'react'
import './Grid.scss'

export const Container = props => {
  return <div className="container">{props.children}</div>
}

export const Row = ({ header, children }) => {
  return (
    <div className="row">
      {header && <h2 className="row__header">{header}</h2>}
      {children}
    </div>
  )
}

export const Column = ({ classes, children }) => {
  return <div className={`column ${classes}`}>{children}</div>
}
