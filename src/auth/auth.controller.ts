import { Controller,Get,Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    @Get()
    userInfo() {
        return "user infornation below"
    }
    @Post('register')
    register() {
        return "successfully registered"
    }

}
