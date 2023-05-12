import React from "react";

interface IProps {
    userID: number;
    username:string
}

interface IState{
    name:string;
    title:string
}
export default class User extends React.Component<IProps,IState>{
    constructor(props: IProps) {
        super(props)
        this.state={
            name:"shuham",
            title:"SE"
        }
    }
    render() {
        let {username,userID} = this.props
        let {name,title} = this.state
        return (
            <div>
                <h1>Welcome to class component</h1>
                <h5>username: {this.props.username}</h5>
                <h6>UserID: {this.props.userID}</h6>
            </div>
        )
    }
}