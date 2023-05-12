import React, { useState } from 'react'

interface IState{
    isLogin:boolean
}

const ConditinoalRenrAuth:React.FC = () => {

    const [state,setState] = useState<IState>({
        isLogin:false
    })

    const handleLogin = ()=>{
        setState({isLogin:true})
    }

    const handleLogout = ()=>{
        setState({isLogin:false})
    }
  return (
    <div className='container'>ConditinoalRenrAuth
    <div className='row'>
        <div className='col-md-4'>
            {state.isLogin && state.isLogin ? (<h1>Welcome User</h1>):(<h1>please login for dashboard</h1>)}
            
            {
                state.isLogin && state.isLogin ? (<button className='btn btn-danger' onClick={handleLogout}>Logout</button>):(<button className='btn btn-primary' onClick={handleLogin}>Login</button>)
            }
            
            
        </div>
    </div>
    </div>
  )
}

export default ConditinoalRenrAuth