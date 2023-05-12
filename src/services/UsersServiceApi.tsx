import axios from "axios"

export class UserServiceApi{
    private static URL:string = "https://jsonplaceholder.typicode.com"

    public static getAllUsers(){
        let UserUrl:string = `${this.URL}/users`
        return axios.get(UserUrl)
    }
}