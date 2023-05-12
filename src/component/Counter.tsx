import React, { useState } from 'react'

interface IState{
count:number
}

interface IProps{

}
const Counter:React.FC= () => {
    const [state,setState] = useState<IState>({count:0})

const handleIncriment = ()=>{
setState({count:state.count+1});
}

const handleDecriment = ()=>{
    setState({count:state.count-1})
}

  return (
    <div>
        <div className='row'>
            <div className='col-md4'>
                <div className='card'>
                    <div className='card-body'>
                        <h2>{state.count}</h2>
                        <button className='btn btn-success ms-3' onClick={handleIncriment}>INCRI</button>
                        <button className='btn btn-info ms-3' onClick={handleDecriment}>DECRI</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Counter