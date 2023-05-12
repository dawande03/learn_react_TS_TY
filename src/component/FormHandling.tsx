import React, { useState } from 'react'
import { ILogin } from '../modals/ILogin'
interface IState{
    user:ILogin
}

const FormHandling: React.FC = () => {

const [state,setState] = useState<IState>({
    user:{
        email:"",
        password:""
    }
})

const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void=>{
setState({user:{...state.user,[e.target.name]:e.target.value}})
}

const handleSublit = (e:React.FormEvent<HTMLFormElement>):void=>{
e.preventDefault()
console.log(state.user );


}

    return (
        <div>
            <form className='card p-4 w-50' onSubmit={handleSublit}>
                <div className="form-group">
                FormHandling
                    <input type="email" name='email' value={state.user.email} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">

                    <input type="password" name='password' value={state.user.password} onChange={handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div className='mt-4 bg-light p-2 w-50'>
                <p>input data</p>
            </div>
        </div>
    )
}

export default FormHandling