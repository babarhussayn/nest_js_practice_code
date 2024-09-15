import { Injectable, Param } from "@nestjs/common"
import { User } from "./user.dto"
import {v4 as uuidv4} from 'uuid'

Injectable()
export class UserService{
public user :User[]=[]
    addUserService(user:User):string{
         user.id=uuidv4()
             this.user.push(user)
        return "user add sucessfully hello"
    }
    updateUser(){
 

        return "user update sucessfully"
    }

    deleteUserServiceById(userId:string):string{
        this.user= this.user.filter((users)=>{
            if(!userId){
                return 'please perovide user id'
            }
            return users.id !== userId
        })
        return `${userId} deleted sucessfully`
    }
    getAllUserService():User[]{
       return this.user

    }
    updateUserServiceById(@Param('/:id') user:User){
        
        return `get user by Id` 
    }

}