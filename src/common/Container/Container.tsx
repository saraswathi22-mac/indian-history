import React from 'react'
import "./Container.css"

type ContainerProps = {
    children: React.ReactNode;
}

const Container = ({children}: ContainerProps) => {
  return (
    <div className='container'>{children}</div>
  )
}

export default Container