import { IUser } from "../modals/IUser";

export class UserService{
    private static users:IUser[]=[{ sno: 1, name: "shubham", age: 27 },
    { sno: 2, name: "amit", age: 25 },
    { sno: 3, name: "kumar", age: 22 }]

    public static getAllUsers(){
        return this.users
    }
}