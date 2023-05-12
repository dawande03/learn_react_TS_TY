import React, { useState } from 'react'

interface IProps{
  name:string;
  title:string;
  age?:number;
}

interface IState{
name:string;
title:string;
}

const Customer:React.FC <IProps> = ({name,title}) => {

  const [state,setState] = useState({name:"shubham",title:"software engineer"})
  return (
    <div>Customer
      <h2>Name:{name}</h2>
      <h3>Title : {title}</h3>
      <h4>age</h4>
      <div className='col-md-4'>
        <h2>Value from state</h2>
        <h4>{state.name}</h4>
        <h5>{state.title}</h5>
      </div>
    </div>
  )
}

export default Customer

