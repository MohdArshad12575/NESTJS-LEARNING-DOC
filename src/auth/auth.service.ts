import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    userInfo() {
        return "user information below"
    }

    register() {
        return {message : "User Registered Successfully"}
    }
}
