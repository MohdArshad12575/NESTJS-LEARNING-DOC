import { Controller,Get,Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    // this = AuthController instance 
    // this.authService = AuthService instance 
    
    constructor(private readonly authService: AuthService) {}

    @Get()
    userInfo() {
        return this.authService.userInfo()
    }

    @Post('register')
    register() {
        return this.authService.register()
    }

}
