import { Body, Controller,Delete,Get,Param,Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.dto';

@Controller('users')
export class UsersController {

constructor(private userService:UserService){}
    @Post('/adduser')
 
    addUser(@Body() users:User):string{
    return this.userService.addUserService(users) 
    } 
    @Get('/alluser')
    getAllUser():User[]{
        return this.userService.getAllUserService()
    }
//     @Put('/user/:id')
//     updateUserById(@Param('id')usersId:string):string{
//   return this.userService.updateUserServiceById(usersId)
//     }

@Delete('userdelete/:id')
deleteUserById(@Param('id') usersId:string):string{
    return this.userService.deleteUserServiceById(usersId)
}
}
