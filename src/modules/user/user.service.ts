import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from '../auth/dto/registerUser.dto';

@Injectable()
export class UserService {
    createUser(registerUserDto: RegisterUserDto){
        return { 
            message: "User created successfully!",
            data: registerUserDto,
         };
    }
}
