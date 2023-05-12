import React, { useState } from 'react'
import { IUser } from '../modals/IUser'
import { UserService } from '../services/UserService'

interface IState {
    user: IUser[]
}

const UserList: React.FC = () => {
    const [state, setState] = useState<IState>({
        user:UserService.getAllUsers()
    })
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <h3>Looping/Itration</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">S No.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Age</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                            state.user.length > 0 && state.user.map((item)=>{
                                return(
                                    <tr key={item.sno}>
                                    <td>{item.sno}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                </tr>
                                )
                            })
                           }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UserList