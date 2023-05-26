import { Controller, Post, Body } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginDto } from './login.dto';

@Controller('login')
export class LoginController {
    constructor(private readonly loginService: LoginService){}
    
    @Post()
    async login(@Body() login:LoginDto){
        return this.loginService.login(login);
    }
}
