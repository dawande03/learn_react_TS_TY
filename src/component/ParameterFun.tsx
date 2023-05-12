import React, { useState } from 'react'

interface IState {
    message: string
}

const ParameterFun: React.FC = () => {
const [state,setState] = useState<IState>({message:"welcome"})

const handlegreet = (msg:string)=>{
setState({message:msg})
localStorage.setItem('state', JSON.stringify({ message: msg }));
}

const handlegreets = (msg:string)=>{
    setState({message:msg})
}

    return (
        <div>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='col-md-4'>
                        <div className='card-body'>
                            <h1>{state.message}</h1>
                            <button className='btn btn-success ms-3' onClick={()=>handlegreet("Like")}>Like</button>
                            <button className='btn btn-info ms-3' onClick={()=>handlegreet("Comment")}>Comment</button>
                            <button className='btn btn-danger ms-3' onClick={()=>handlegreet("Subscribe")}>Subscribe</button>
                            <button className='btn btn-danger ms-3' onClick={()=>handlegreets("welcome")}>Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ParameterFun