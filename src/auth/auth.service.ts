import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    userInfo() {
        return "user infornation below"
    }

    register() {
        return "successfully registered"
    }
}
