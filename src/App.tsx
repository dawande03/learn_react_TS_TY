import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './component/Customer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassCompo from './component/ClassCompo'
import Counter from './component/Counter';
import ParameterFun from './component/ParameterFun';
import FormHandling from './component/FormHandling';
import ConditinoalRenrAuth from './component/ConditinoalRenrAuth';
import UserList from './component/UserList';
import FetchDataApi from './component/FetchDataApi';

function App() {
 
  return (
    <div className="container">
      {/* <div className='row'>
        <div className='col-md-6'>
        <h1>React typescrpt</h1>
    <Customer name={"shubham"} title='software engineer'/>
        </div> */}
        {/* <div className='col-md-6'>
          <ClassCompo userID={1} username={"dawande.shubham"}/>
        </div> */}
      {/* </div> */}
   {/* <Counter/> */}
   {/* <ParameterFun/> */}
   {/* <FormHandling/> */}
   {/* <ConditinoalRenrAuth/> */}
   {/* <UserList/> */}
   <FetchDataApi/>
    </div>
  );
}

export default App;
