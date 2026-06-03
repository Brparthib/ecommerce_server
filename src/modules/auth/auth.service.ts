import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { RegisterUserDto } from './dto/registerUser.dto';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService){}
    
    async registerUser(registerUserDto: RegisterUserDto) {
        // Logic for user register
        /**
         * 1. check if user is already exists 
         * 2. validate user data
         * 3. hash the password 
         * 4. save the user in database
         * 5. generate access token
         * 6. generate refresh token
         */

        const hashPassword = await bcrypt.hash(registerUserDto.password, 10);
        const result = this.userService.createUser({
            ...registerUserDto, 
            password: hashPassword
        });
        
        return result;
    }
}
