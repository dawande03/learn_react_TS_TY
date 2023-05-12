import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { UserServiceApi } from '../services/UsersServiceApi';

interface IState{
    loading:boolean;
    users:UserServiceApi[];
    errorMsg:string
}

const FetchDataApi:React.FC = () => {
    const [state,setState] = useState({ 
        loading:false,
        users:[] as UserServiceApi[],
        errorMsg:''
    })
   
    
    useEffect(()=>{
       UserServiceApi.getAllUsers().then(res=>console.log(res.data)
       ).catch()
    },[])
  return (
    <div>

    </div>
  )
}

export default FetchDataApi